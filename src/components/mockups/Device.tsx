import { asset } from "@/lib/asset";
import { ScaleBox } from "./ScaleBox";

/**
 * A real iPhone frame with a real SCULPTÉ screenshot behind it.
 *
 * The frame PNG has a transparent screen cutout; the screenshot is absolutely
 * positioned into that exact rect (measured off the frame's alpha channel) and
 * the frame's own rounded opening masks the corners. Frame is 1032x2048 and the
 * cutout is 870x1886 at (81, 81) — an aspect of 0.46129 against the
 * screenshots' 0.46127, so nothing is stretched.
 */
const FRAME_W = 1032;
const FRAME_H = 2048;
const SCREEN = {
  left: "7.8488%",
  top: "3.9551%",
  width: "84.3023%",
  height: "92.0898%",
};

export const SCREENS = {
  home: { src: "/sculpte/app-home.webp", alt: "SCULPTÉ app — programme home screen" },
  programs: { src: "/sculpte/app-programs.webp", alt: "SCULPTÉ app — programme library" },
  workout: { src: "/sculpte/app-workout.webp", alt: "SCULPTÉ app — guided workout" },
} as const;

export type ScreenKey = keyof typeof SCREENS;

/** Design width; height follows the frame's exact aspect ratio. */
const W = 330;
const H = (W * FRAME_H) / FRAME_W;

export function Device({
  screen,
  className = "",
  priority = false,
}: {
  screen: ScreenKey;
  className?: string;
  priority?: boolean;
}) {
  const s = SCREENS[screen];
  return (
    <ScaleBox width={W} height={H} className={className}>
      <div className="relative h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(s.src)}
          alt={s.alt}
          width={786}
          height={1704}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="absolute object-cover"
          style={SCREEN}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/sculpte/iphone-frame.webp")}
          alt=""
          aria-hidden="true"
          width={720}
          height={1429}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full select-none"
        />
      </div>
    </ScaleBox>
  );
}
