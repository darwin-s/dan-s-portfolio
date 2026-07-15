import Image from "next/image";

export default function Desktop() {
  return (
    <div className="absolute inset-0 h-full w-full -z-10 select-none">
      <Image
        src="/wallpaper.png"
        fill
        quality={100}
        alt=""
        loading="eager"
        className="object-cover object-center -z-20"
      />
    </div>
  );
}
