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
    >
      <article className="prose prose-neutral prose-lg m-2 max-w-none">
        <h1>About Me:</h1>
      </article>
    </Window>
  );
}
