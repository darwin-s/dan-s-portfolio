"use client";

import { useWindow } from "@/lib/hook/use-window";
import Titlebar from "@/components/window/titlebar";
import ResizeHandles from "@/components/window/resize-handles";

type WindowProps = {
  children?: React.ReactNode;
  title: string;
  iconUrl: string;
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

  return (
    <div
      style={
        {
          "--win-transform": `translate(${pos.x}vw, ${pos.y}vh)`,
          "--win-w": `${size.w}vw`,
          "--win-h": `${size.h}vh`,
        } as React.CSSProperties
      }
      className="flex h-screen min-h-32 w-screen min-w-64 flex-col rounded-lg border border-neutral-700/60 bg-neutral-400/15 backdrop-blur-lg md:absolute md:h-(--win-h) md:w-(--win-w) md:transform-(--win-transform)"
    >
      <Titlebar
        title={props.title}
        iconUrl={props.iconUrl}
        onStartDrag={onStartDrag}
        onDrag={onDrag}
        onEndDrag={onEndDrag}
      />
      <ResizeHandles
        onStartResize={onStartResize}
        onResize={onResize}
        onEndResize={onEndResize}
      />
      <div className="mt-0 mr-2 mb-2 ml-2 flex-1 bg-neutral-200">
        {props.children}
      </div>
    </div>
  );
}
