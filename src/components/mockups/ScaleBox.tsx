import type { CSSProperties, ReactNode } from "react";

/**
 * Mockups are authored once at a fixed design size and scaled with a
 * transform, so a phone rendered at 240px and at 380px are the same artwork.
 * Set `--ps` responsively via className, e.g. "[--ps:0.7] md:[--ps:1]".
 */
export function ScaleBox({
  width,
  height,
  children,
  className = "",
  style,
}: {
  width: number;
  height: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`scale-box ${className}`}
      style={
        {
          "--design-w": `${width}px`,
          "--design-h": `${height}px`,
          ...style,
        } as CSSProperties
      }
    >
      <div className="scale-inner">{children}</div>
    </div>
  );
}
