"use client";

import Desktop from "@/components/desktop/desktop";
import Taskbar from "@/components/taskbar/taskbar";
import { useAppManager } from "@/lib/hook/use-app-manager";
import { AppRegistry } from "@/lib/app/app-registry";

export default function Os() {
  const { apps, open, close, isFocused, focus, getZ } = useAppManager();

  const onOpenRequest = (id: string): void => {
    open(id);
  };

  const onCloseRequest = (id: string): void => {
    close(id);
  };

  const onFocusRequest = (id: string): void => {
    focus(id);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden select-none">
      <Desktop onOpenRequest={onOpenRequest} />

      {apps.map((id) => {
        const APP = AppRegistry.find((entry) => entry.id === id);

        if (!APP) return null;

        const AppComponent = APP.component;

        return (
          <AppComponent
            key={id}
            title={APP.title}
            iconUrl={APP.iconUrl}
            isFocused={isFocused(id)}
            zIndex={getZ(id)}
            onCloseRequest={() => onCloseRequest(id)}
            onFocusRequest={() => onFocusRequest(id)}
          />
        );
      })}

      <Taskbar />
    </div>
  );
}
