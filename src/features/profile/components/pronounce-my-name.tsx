"use client";

import { Volume2Icon } from "lucide-react";
import { Portal } from "@radix-ui/react-portal";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export function PronounceMyName({
  className,
  namePronunciationUrl,
  namePronunciationUrl2,
}: {
  className?: string;
  namePronunciationUrl: string;
  namePronunciationUrl2?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

const playRandom = () => {
  if (!audioRef.current) return;

  const hasAlt = Boolean(namePronunciationUrl2);

  // 80% first, 20% second (tweak as needed)
  const useFirst = !hasAlt || Math.random() < 0.6;

  const src = useFirst
    ? namePronunciationUrl
    : (namePronunciationUrl2 as string);

  audioRef.current.src = src;
  audioRef.current.currentTime = 0;
  audioRef.current.play();
};

  return (
    <>
      <button
        className={cn(
          "text-muted-foreground transition-all hover:text-foreground active:scale-[0.9]",
          className
        )}
        onClick={playRandom}
      >
        <Volume2Icon className="size-[0.6em]" />
        <span className="sr-only">Pronounce my name</span>
      </button>

      <Portal>
        <audio ref={audioRef} preload="auto" />
      </Portal>
    </>
  );
}