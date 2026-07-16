import Image from "next/image";
import DesktopIcon from "@/components/desktop/desktop-icon";
import { APP_REGISTRY } from "@/lib/app/app-registry";

type DesktopProps = {
  onOpenRequest: (id: string) => void;
};

export default function Desktop(props: DesktopProps) {
  const ICON_SIZE_PX = 90;

  return (
    <div className="absolute inset-0 h-screen w-screen select-none">
      <Image
        src="/wallpaper.png"
        fill
        quality={100}
        alt=""
        loading="eager"
        preload={true}
        className="-z-20 object-cover object-center"
      />
      <div
        style={{
          gridTemplateRows: `repeat(auto-fill, ${ICON_SIZE_PX}px)`,
          gridAutoColumns: `${ICON_SIZE_PX}px`,
        }}
        className="absolute inset-0 grid grid-flow-col justify-start gap-2 p-4"
      >
        {APP_REGISTRY.map((app) => (
          <DesktopIcon
            key={app.id}
            iconUrl={app.iconUrl}
            name={app.title}
            size={ICON_SIZE_PX}
            onOpenRequest={() => props.onOpenRequest(app.id)}
          />
        ))}
      </div>
    </div>
  );
}
