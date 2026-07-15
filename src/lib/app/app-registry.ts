import { AppDefinition } from "@/lib/app/types";
import AboutMeApp from "@/components/app/about-me";

export const APP_REGISTRY: AppDefinition[] = [
  {
    id: "about-me",
    title: "About Me",
    iconUrl: "/about-me.png",
    component: AboutMeApp,
  },
  {
    id: "test-app-1",
    title: "Test App 1",
    iconUrl: "/about-me.png",
    component: AboutMeApp,
  },
  {
    id: "test-app-2",
    title: "Test App 2",
    iconUrl: "/about-me.png",
    component: AboutMeApp,
  },
];
