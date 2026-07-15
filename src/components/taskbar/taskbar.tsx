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
    <div className="md:absolute bottom-0 left-0 w-full h-10 flex flex-row justify-between items-center select-none pl-2 pr-5 pt-1 pb-1 bg-neutral-400/15 border-t border-neutral-700/60 backdrop-blur-lg">
      <Image
        src="/start.png"
        width={32}
        height={32}
        alt="Start Icon"
        loading="eager"
      />
      <div className="flex flex-col justify-center items-end select-none text-xs">
        <span>{localTime}</span>
        <span>{localDate}</span>
      </div>
    </div>
  );
}
