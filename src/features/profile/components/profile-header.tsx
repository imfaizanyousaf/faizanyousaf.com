import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        {/* Flag of Viet Nam */}
        {/* className="absolute top-0 -left-px h-8 sm:h-9" */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 -left-px h-8 sm:h-9"
          width="50"
          height="33"
          fill="none"
          viewBox="0 0 50 33"
        >
          <g clipPath="url(#a)">
            <path fill="#fff" d="M50 0H0v33h50V0Z" />
            <path fill="#01411C" d="M50 0H12.5v33H50V0Z" />
            <path
              fill="#fff"
              d="M31.25 26.4c5.523 0 10-4.433 10-9.9 0-5.468-4.477-9.9-10-9.9s-10 4.432-10 9.9c0 5.467 4.477 9.9 10 9.9Z"
            />
            <path
              fill="#01411C"
              d="M39.897 21.032a9.012 9.012 0 0 0 .76-12.811c-3.363-3.746-9.157-4.084-12.94-.754a9.012 9.012 0 0 0-.762 12.812c3.364 3.746 9.158 4.083 12.942.753Z"
            />
            <path
              fill="#fff"
              d="m34.897 9.091 4.212 4.692-6.194-1.344 5.81-2.517-3.206 5.416-.622-6.247Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h50v33H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-[1.3rem] font-semibold sm:text-3xl">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
