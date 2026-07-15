import { AppProps } from "@/lib/app/types";
import Window from "@/components/window/window";

export default function AboutMe(props: AppProps) {
  return (
    <Window
      title={props.title}
      iconUrl={props.iconUrl}
      isFocused={props.isFocused}
      onCloseRequest={props.onCloseRequest}
      onFocusRequest={props.onFocusRequest}
    ></Window>
  );
}
