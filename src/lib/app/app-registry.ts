import { AppDefinition } from "@/lib/app/types";
import AboutMeApp from "@/components/app/about-me";

export const APP_REGISTRY: AppDefinition[] = [
  {
    id: "about-me",
    title: "About Me",
    iconUrl: "/about-me.png",
    component: AboutMeApp,
  },
];
