import Image from "next/image";

type DesktopIconProps = {
  iconUrl: string;
  name: string;
  size: number;
};

export default function DesktopIcon(props: DesktopIconProps) {
  return (
    <button
      style={{ width: `${props.size}px`, height: `${props.size}px` }}
      className="flex flex-col items-center justify-center gap-1 rounded-sm hover:bg-neutral-400/30 active:bg-neutral-600/45"
    >
      <Image src={props.iconUrl} width={32} height={32} quality={100} alt="" />
      <span className="line-clamp-2 w-full text-center text-sm wrap-break-word">
        {props.name}
      </span>
    </button>
  );
}
