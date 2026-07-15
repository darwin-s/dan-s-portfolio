type TitlebarProps = {
  title: string;
  onStartDrag?: (e: React.PointerEvent<HTMLDivElement>) => void;
  onDrag?: (e: React.PointerEvent<HTMLDivElement>) => void;
  onEndDrag?: (e: React.PointerEvent<HTMLDivElement>) => void;
};

export default function Titlebar({
  title,
  onStartDrag,
  onDrag,
  onEndDrag,
}: TitlebarProps) {
  return (
    <div
      onPointerDown={onStartDrag}
      onPointerMove={onDrag}
      onPointerUp={onEndDrag}
      className="flex flex-row gap-1 mr-1 ml-1 mt-0 mb-2 justify-between items-center h-10 md:h-5 min-w-24"
    >
      <p className="h-full flex items-center leading-none flex-1 truncate text-xl md:text-sm">{title}</p>
      <div
        onPointerDown={(e) => e.stopPropagation()}
        className="flex flex-row w-24 shrink-0 h-full items-center border-l border-r border-b divide-x rounded-bl-sm rounded-br-sm"
      >
        <button className="hidden md:flex justify-center items-center flex-1 h-full bg-linear-to-b from-neutral-100/50 via-neutral-300/50 to-neutral-100/50 hover:from-neutral-100/70 hover:via-neutral-400/90 hover:to-neutral-100/70 active:from-neutral-300/90 active:via-neutral-500 active:to-neutral-300/90 rounded-bl-sm">
          <p className="leading-none text-xs">_</p>
        </button>
        <button className="hidden md:flex justify-center items-center flex-1 h-full bg-linear-to-b from-neutral-100/50 via-neutral-300/50 to-neutral-100/50 hover:from-neutral-100/70 hover:via-neutral-400/90 hover:to-neutral-100/70 active:from-neutral-300/90 active:via-neutral-500 active:to-neutral-300/90">
          <p className="leading-none text-xs">[]</p>
        </button>
        <button className="flex justify-center items-center flex-2 h-full bg-linear-to-b from-red-200/50 via-red-500/50 to-red-200/50 hover:from-red-200/70 hover:via-red-700/90 hover:to-red-200/70 active:from-red-400/90 active:via-red-800 active:to-red-400/90 rounded-br-sm rounded-bl-sm md:rounded-bl-none">
          <p className="leading-none text-xs">X</p>
        </button>
      </div>
    </div>
  );
}
