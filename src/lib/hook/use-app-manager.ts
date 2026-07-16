import { useState } from "react";
import { AppRegistry } from "@/lib/app/app-registry";

export function useAppManager() {
  const appIds = AppRegistry.map((entry) => entry.id);
  const [apps, setApps] = useState<string[]>([]);
  const [focusStack, setFocusStack] = useState<string[]>([]);

  const open = (id: string): void => {
    if (!appIds.includes(id)) return;

    setApps((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
    setFocusStack((prev) => {
      const filtered = prev.filter((prevId) => prevId !== id);
      return [...filtered, id];
    });
  };

  const close = (id: string): void => {
    setApps((prev) => {
      return prev.filter((prevId) => prevId !== id);
    });
    setFocusStack((prev) => {
      return prev.filter((prevId) => prevId !== id);
    });
  };

  const isFocused = (id: string): boolean => {
    return focusStack.at(-1) === id;
  };

  const focus = (id: string): void => {
    if (!apps.includes(id)) return;

    setFocusStack((prev) => {
      const filtered = prev.filter((prevId) => prevId !== id);
      return [...filtered, id];
    });
  };

  const getZ = (id: string): number => {
    const idx = focusStack.indexOf(id);
    return idx >= 0 ? 10 + idx : 0;
  };

  return { apps, open, close, isFocused, focus, getZ };
}
