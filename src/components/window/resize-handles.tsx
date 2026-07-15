import { Side } from "@/lib/util/types";

type ResizeHandlesProps = {
  onStartResize?: (e: React.PointerEvent<HTMLDivElement>, side: Side) => void;
  onResize?: (e: React.PointerEvent<HTMLDivElement>) => void;
  onEndResize?: (e: React.PointerEvent<HTMLDivElement>) => void;
};

export default function ResizeHandles(props: ResizeHandlesProps) {
  return (
    <div className="hidden md:block">
      <div
        onPointerDown={(e) => props.onStartResize?.(e, "l")}
        onPointerMove={props.onResize}
        onPointerUp={props.onEndResize}
        className="absolute top-0 bottom-0 left-0 z-30 w-2 cursor-w-resize"
      />
      <div
        onPointerDown={(e) => props.onStartResize?.(e, "r")}
        onPointerMove={props.onResize}
        onPointerUp={props.onEndResize}
        className="absolute top-0 right-0 bottom-0 z-30 w-2 cursor-e-resize"
      />
      <div
        onPointerDown={(e) => props.onStartResize?.(e, "b")}
        onPointerMove={props.onResize}
        onPointerUp={props.onEndResize}
        className="absolute right-0 bottom-0 left-0 z-30 h-2 cursor-s-resize"
      />
      <div
        onPointerDown={(e) => props.onStartResize?.(e, "bl")}
        onPointerMove={props.onResize}
        onPointerUp={props.onEndResize}
        className="absolute bottom-0 left-0 z-40 h-4 w-4 cursor-sw-resize"
      />
      <div
        onPointerDown={(e) => props.onStartResize?.(e, "br")}
        onPointerMove={props.onResize}
        onPointerUp={props.onEndResize}
        className="absolute right-0 bottom-0 z-40 h-4 w-4 cursor-se-resize"
      />
    </div>
  );
}
