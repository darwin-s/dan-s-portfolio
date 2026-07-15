import { ComponentType } from "react";

export type AppProps = {
  title: string;
  iconUrl: string;
  isFocused: boolean;
  onClose: () => void;
  onFocus: () => void;
};

export type AppDefinition = {
  id: string;
  title: string;
  iconUrl: string;
  component: ComponentType<AppProps>;
};
