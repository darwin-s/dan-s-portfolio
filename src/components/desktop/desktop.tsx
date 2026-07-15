import Image from "next/image";

export default function Desktop() {
  return (
    <div className="absolute inset-0 -z-10 h-screen w-screen select-none">
      <Image
        src="/wallpaper.png"
        fill
        quality={100}
        alt=""
        loading="eager"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute"></div>
    </div>
  );
}
