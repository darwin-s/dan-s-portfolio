import { AppDefinition } from "./types";
import AboutMeApp from "@/components/app/about-me";

export const APP_REGISTRY: Record<string, AppDefinition> = {
  "about-me": {
    id: "about-me",
    title: "About Me",
    iconUrl: "",
    component: AboutMeApp,
  },
};
