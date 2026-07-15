"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Taskbar() {
  const [localTime, setLocalTime] = useState<string>("");
  const [localDate, setLocalDate] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const currentDate = new Date();
      setLocalTime(
        currentDate.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
      setLocalDate(currentDate.toLocaleDateString("en-GB"));
    };

    updateTime();

    const interval = setInterval(() => {
      updateTime();
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div className="bottom-0 left-0 flex h-10 w-full flex-row items-center justify-between border-t border-neutral-700/60 bg-neutral-400/15 pt-1 pr-5 pb-1 pl-2 backdrop-blur-lg select-none md:absolute">
      <Image
        src="/start.png"
        width={32}
        height={32}
        alt="Start Icon"
        loading="eager"
      />
      <div className="flex flex-col items-end justify-center text-xs select-none">
        <span>{localTime}</span>
        <span>{localDate}</span>
      </div>
    </div>
  );
}
