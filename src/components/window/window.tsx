import { useWindow } from "@/lib/hook/use-window";
import Titlebar from "@/components/window/titlebar";
import ResizeHandles from "@/components/window/resize-handles";

type WindowProps = {
  children?: React.ReactNode;
  title: string;
  iconUrl: string;
  isFocused: boolean;
  zIndex: number;
  onCloseRequest: () => void;
  onFocusRequest: () => void;
};

export default function Window(props: WindowProps) {
  const {
    pos,
    size,
    onStartDrag,
    onDrag,
    onEndDrag,
    onStartResize,
    onResize,
    onEndResize,
  } = useWindow({ x: 25, y: 25 }, { w: 30, h: 35 });

  const BG_COLOR = props.isFocused ? `bg-neutral-600/50` : `bg-neutral-400/15`;
  const SHADOW = props.isFocused
    ? `md:shadow-lg md:shadow-neutral-800`
    : `md:shadow-sm md:shadow-neutral-800`;
  const DISPLAY = props.isFocused ? `flex` : `hidden md:flex`;

  return (
    <div
      style={
        {
          "--win-transform": `translate(${pos.x}vw, ${pos.y}vh)`,
          "--win-w": `${size.w}vw`,
          "--win-h": `${size.h}vh`,
          "--z-index": `${props.zIndex}`,
        } as React.CSSProperties
      }
      className={`z-(--z-index) ${DISPLAY} h-full min-h-32 w-screen min-w-64 flex-col rounded-lg border border-neutral-700/60 ${SHADOW} ${BG_COLOR} backdrop-blur-lg md:absolute md:h-(--win-h) md:w-(--win-w) md:transform-(--win-transform)`}
      onPointerDown={props.onFocusRequest}
    >
      <Titlebar
        title={props.title}
        iconUrl={props.iconUrl}
        isFocused={props.isFocused}
        onCloseRequest={props.onCloseRequest}
        onStartDrag={onStartDrag}
        onDrag={onDrag}
        onEndDrag={onEndDrag}
      />
      <ResizeHandles
        onStartResize={onStartResize}
        onResize={onResize}
        onEndResize={onEndResize}
      />
      <div className="mt-0 mr-2 mb-2 ml-2 flex-1 overflow-auto bg-neutral-200">
        {props.children}
      </div>
    </div>
  );
}
