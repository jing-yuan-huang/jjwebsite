import type { ButtonHTMLAttributes } from "react";

export const buttonClass =
  "inline-flex items-center justify-center border border-neutral-900/40 px-4 py-2 text-xs tracking-[0.2em] text-neutral-900 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white";

export function Button({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`${buttonClass} ${className}`.trim()} {...props} />;
}
