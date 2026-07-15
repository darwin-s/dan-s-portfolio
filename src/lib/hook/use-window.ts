import { useRef, useState } from "react";
import { Pos, Size, Side } from "@/lib/util/types";

type MoveState = {
  isMoving: boolean;
  clientPos: Pos;
  startPos: Pos;
};

type ResizeState = {
  isResizing: boolean;
  clientPos: Pos;
  startSize: Size;
  startX: number;
  side: Side;
};

const DEFAULT_MOVE_STATE: MoveState = {
  isMoving: false,
  clientPos: {
    x: 0,
    y: 0,
  },
  startPos: {
    x: 0,
    y: 0,
  },
};

const DEFAULT_RESIZE_STATE: ResizeState = {
  isResizing: false,
  clientPos: {
    x: 0,
    y: 0,
  },
  startSize: {
    w: 0,
    h: 0,
  },
  startX: 0,
  side: "r",
};

const toViewportDelta = (
  client: number,
  base: number,
  window: number,
): number => {
  return ((client - base) / window) * 100;
};

export function useWindow(initialPos: Pos, initialSize: Size) {
  const [pos, setPos] = useState<Pos>(initialPos);
  const [size, setSize] = useState<Size>(initialSize);
  const moveState = useRef<MoveState>(DEFAULT_MOVE_STATE);
  const resizeState = useRef<ResizeState>(DEFAULT_RESIZE_STATE);

  const onStartResize = (
    e: React.PointerEvent<HTMLDivElement>,
    side: "l" | "r" | "b" | "bl" | "br",
  ): void => {
    resizeState.current = {
      isResizing: true,
      clientPos: {
        x: e.clientX,
        y: e.clientY,
      },
      startSize: {
        w: size.w,
        h: size.h,
      },
      startX: pos.x,
      side: side,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onResize = (e: React.PointerEvent<HTMLDivElement>): void => {
    const state = resizeState.current;
    if (!state.isResizing) return;

    const deltaX = toViewportDelta(
      e.clientX,
      state.clientPos.x,
      window.innerWidth,
    );
    const deltaY = toViewportDelta(
      e.clientY,
      state.clientPos.y,
      window.innerHeight,
    );

    let newW = state.startSize.w;
    let newH = state.startSize.h;
    let newX = state.startX;

    if (state.side.includes("r")) {
      newW = Math.min(100, Math.max(1, state.startSize.w + deltaX));
    }
    if (state.side.includes("l")) {
      newW = Math.min(100, Math.max(1, state.startSize.w - deltaX));
      newX = Math.min(99, Math.max(-size.w + 1, state.startX + deltaX));
    }
    if (state.side.includes("b")) {
      newH = Math.min(100, Math.max(1, state.startSize.h + deltaY));
    }

    setSize({ w: newW, h: newH });
    setPos({ x: newX, y: pos.y });
  };

  const onEndResize = (e: React.PointerEvent<HTMLDivElement>): void => {
    resizeState.current = DEFAULT_RESIZE_STATE;

    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const onStartDrag = (e: React.PointerEvent<HTMLDivElement>): void => {
    moveState.current = {
      isMoving: true,
      clientPos: {
        x: e.clientX,
        y: e.clientY,
      },
      startPos: {
        x: pos.x,
        y: pos.y,
      },
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onDrag = (e: React.PointerEvent<HTMLDivElement>): void => {
    const state = moveState.current;
    if (!state.isMoving) return;

    const deltaX = toViewportDelta(
      e.clientX,
      state.clientPos.x,
      window.innerWidth,
    );
    const deltaY = toViewportDelta(
      e.clientY,
      state.clientPos.y,
      window.innerHeight,
    );

    const newX = Math.min(99, Math.max(-size.w + 1, state.startPos.x + deltaX));
    const newY = Math.min(99, Math.max(-size.h + 1, state.startPos.y + deltaY));

    setPos({ x: newX, y: newY });
  };

  const onEndDrag = (e: React.PointerEvent<HTMLDivElement>): void => {
    moveState.current = DEFAULT_MOVE_STATE;

    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return {
    pos,
    size,
    onStartDrag,
    onDrag,
    onEndDrag,
    onStartResize,
    onResize,
    onEndResize,
  };
}
