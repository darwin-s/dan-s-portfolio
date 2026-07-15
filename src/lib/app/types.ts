import { ComponentType } from "react";

export type AppProps = {
  title: string;
  iconUrl: string;
  isFocused: boolean;
  onCloseRequest: () => void;
  onFocusRequest: () => void;
};

export type AppDefinition = {
  id: string;
  title: string;
  iconUrl: string;
  component: ComponentType<AppProps>;
};
