"use client";

import { useState, useRef } from "react";
import { Pos } from "@/lib/util/pos";
import { Size } from "@/lib/util/size";
import Titlebar from "@/components/window/titlebar";
import ResizeHandles from "@/components/window/resize-handles";

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
  side: "l" | "r" | "b" | "bl" | "br";
};

type WindowProps = {
  children?: React.ReactNode;
  title?: string;
};

export default function Window({ children, title = "" }: WindowProps) {
  const [pos, setPos] = useState<Pos>({ x: 30, y: 30 });
  const [size, setSize] = useState<Size>({ w: 25, h: 20 });
  const moveState = useRef<MoveState>({
    isMoving: false,
    clientPos: {
      x: 0,
      y: 0,
    },
    startPos: {
      x: 0,
      y: 0,
    },
  });
  const resizeState = useRef<ResizeState>({
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
  });

  const toViewportDelta = (
    client: number,
    base: number,
    window: number,
  ): number => {
    return ((client - base) / window) * 100;
  };

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
    resizeState.current = {
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
    moveState.current = {
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

    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      style={
        {
          "--win-transform": `translate(${pos.x}vw, ${pos.y}vh)`,
          "--win-w": `${size.w}vw`,
          "--win-h": `${size.h}vh`,
        } as React.CSSProperties
      }
      className="flex h-screen min-h-32 w-screen min-w-32 flex-col rounded-lg border border-neutral-700/60 bg-neutral-400/15 backdrop-blur-lg md:absolute md:h-(--win-h) md:w-(--win-w) md:transform-(--win-transform)"
    >
      <Titlebar
        title={title}
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
        {children}
      </div>
    </div>
  );
}
