import { useState } from "react";
import { APP_REGISTRY } from "@/lib/app/app-registry";

export function useAppManager() {
  const APP_IDS = APP_REGISTRY.map((entry) => entry.id);
  const [apps, setApps] = useState<string[]>([]);

  const open = (id: string): void => {
    if (!APP_IDS.includes(id)) return;

    setApps((prev) => {
      const filtered = prev.filter((prevId) => prevId !== id);
      return [...filtered, id];
    });
  };

  const close = (id: string): void => {
    setApps((prev) => {
      return prev.filter((prevId) => prevId !== id);
    });
  };

  const isFocused = (id: string): boolean => {
    return apps.at(apps.length - 1) === id;
  };

  const focus = (id: string): void => {
    if (!apps.includes(id)) return;

    setApps((prev) => {
      const filtered = prev.filter((prevId) => prevId !== id);
      return [...filtered, id];
    });
  };

  return { apps, open, close, isFocused, focus };
}
