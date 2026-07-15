type ResizeHandlesProps = {
  onStartResize?: (
    e: React.PointerEvent<HTMLDivElement>,
    side: "l" | "r" | "b" | "bl" | "br",
  ) => void;
  onResize?: (e: React.PointerEvent<HTMLDivElement>) => void;
  onEndResize?: (e: React.PointerEvent<HTMLDivElement>) => void;
};

export default function ResizeHandles({
  onStartResize,
  onResize,
  onEndResize,
}: ResizeHandlesProps) {
  return (
    <div className="hidden md:block">
      <div
        onPointerDown={
          onStartResize != undefined ? (e) => onStartResize(e, "l") : () => {}
        }
        onPointerMove={onResize}
        onPointerUp={onEndResize}
        className="absolute top-0 bottom-0 left-0 z-30 w-2 cursor-w-resize"
      />
      <div
        onPointerDown={
          onStartResize != undefined ? (e) => onStartResize(e, "r") : () => {}
        }
        onPointerMove={onResize}
        onPointerUp={onEndResize}
        className="absolute top-0 right-0 bottom-0 z-30 w-2 cursor-e-resize"
      />
      <div
        onPointerDown={
          onStartResize != undefined ? (e) => onStartResize(e, "b") : () => {}
        }
        onPointerMove={onResize}
        onPointerUp={onEndResize}
        className="absolute right-0 bottom-0 left-0 z-30 h-2 cursor-s-resize"
      />
      <div
        onPointerDown={
          onStartResize != undefined ? (e) => onStartResize(e, "bl") : () => {}
        }
        onPointerMove={onResize}
        onPointerUp={onEndResize}
        className="absolute bottom-0 left-0 z-40 h-4 w-4 cursor-sw-resize"
      />
      <div
        onPointerDown={
          onStartResize != undefined ? (e) => onStartResize(e, "br") : () => {}
        }
        onPointerMove={onResize}
        onPointerUp={onEndResize}
        className="absolute right-0 bottom-0 z-40 h-4 w-4 cursor-se-resize"
      />
    </div>
  );
}
