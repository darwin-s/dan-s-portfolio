import Image from "next/image";

type TitlebarProps = {
  title: string;
  iconUrl: string;
  onStartDrag?: (e: React.PointerEvent<HTMLDivElement>) => void;
  onDrag?: (e: React.PointerEvent<HTMLDivElement>) => void;
  onEndDrag?: (e: React.PointerEvent<HTMLDivElement>) => void;
};

export default function Titlebar(props: TitlebarProps) {
  return (
    <div
      onPointerDown={props.onStartDrag}
      onPointerMove={props.onDrag}
      onPointerUp={props.onEndDrag}
      className="mt-0 mr-2 ml-2 flex h-10 min-w-24 flex-row justify-between gap-1 md:h-7"
    >
      <div className="flex h-full flex-1 items-center justify-center gap-1">
        <Image
          src={props.iconUrl}
          width={32}
          height={32}
          alt=""
          className="h-8 w-8 md:h-5 md:w-5"
        />
        <p className="flex-1 truncate text-xl md:text-sm">{props.title}</p>
      </div>
      <div
        onPointerDown={(e) => e.stopPropagation()}
        className="flex h-9 w-24 shrink-0 flex-row items-center divide-x rounded-br-sm rounded-bl-sm border-r border-b border-l md:h-5"
      >
        <button className="hidden h-full flex-1 items-center justify-center rounded-bl-sm bg-linear-to-b from-neutral-100/50 via-neutral-300/50 to-neutral-100/50 hover:from-neutral-100/70 hover:via-neutral-400/90 hover:to-neutral-100/70 active:from-neutral-300/90 active:via-neutral-500 active:to-neutral-300/90 md:flex">
          <p className="text-xs leading-none">_</p>
        </button>
        <button className="hidden h-full flex-1 items-center justify-center bg-linear-to-b from-neutral-100/50 via-neutral-300/50 to-neutral-100/50 hover:from-neutral-100/70 hover:via-neutral-400/90 hover:to-neutral-100/70 active:from-neutral-300/90 active:via-neutral-500 active:to-neutral-300/90 md:flex">
          <p className="text-xs leading-none">[]</p>
        </button>
        <button className="flex h-full flex-2 items-center justify-center rounded-br-sm rounded-bl-sm bg-linear-to-b from-red-200/50 via-red-500/50 to-red-200/50 hover:from-red-200/70 hover:via-red-700/90 hover:to-red-200/70 active:from-red-400/90 active:via-red-800 active:to-red-400/90 md:rounded-bl-none">
          <p className="text-xs leading-none">X</p>
        </button>
      </div>
    </div>
  );
}
