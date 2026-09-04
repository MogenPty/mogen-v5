import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "arrowUpRight"
  | "arrowRight"
  | "arrowLeft"
  | "check"
  | "chevron"
  | "code"
  | "device"
  | "seal"
  | "docs"
  | "compass"
  | "sun"
  | "moon"
  | "auto"
  | "mail"
  | "phone"
  | "pin"
  | "clock"
  | "menu"
  | "close"
  | "spark"
  | "shield"
  | "bolt"
  | "send"
  | "globe"
  | "layers"
  | "search";

const paths: Record<IconName, ReactNode> = {
  arrowUpRight: <path d="M7 17 17 7M9 7h8v8" />,
  arrowRight: <path d="M4 12h15M13 6l6 6-6 6" />,
  arrowLeft: <path d="M20 12H5M11 6l-6 6 6 6" />,
  check: <path d="M4.5 12.5l5 5L19.5 7" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  code: <path d="M8 7 3 12l5 5M16 7l5 5-5 5" />,
  device: (
    <>
      <path d="M7.5 2.5h9A1.5 1.5 0 0 1 18 4v16a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V4a1.5 1.5 0 0 1 1.5-1.5Z" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  seal: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9.7 9l1.7 1.7 3-3.3M8.6 13.7 7 21l5-2.4L17 21l-1.6-7.3" />
    </>
  ),
  docs: (
    <>
      <path d="M6 2.5h8l4 4V21.5H6Z" />
      <path d="M14 2.5v4h4M9.5 12.5h5M9.5 16h5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5l-2.3 4.7-4.7 2.3 2.3-4.7Z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </>
  ),
  moon: <path d="M20 13.6A8.5 8.5 0 1 1 10.4 4a6.8 6.8 0 0 0 9.6 9.6Z" />,
  auto: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5a8.5 8.5 0 0 1 0 17Z" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <path d="M3.5 5.5h17v13h-17Z" />
      <path d="M3.5 7.5l8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  pin: (
    <>
      <path d="M12 21.5S5 15.6 5 10a7 7 0 0 1 14 0c0 5.6-7 11.5-7 11.5Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h9" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  spark: <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />,
  shield: (
    <>
      <path d="M12 2.8l7.5 3v6.2c0 4.6-3.2 7.6-7.5 9.2-4.3-1.6-7.5-4.6-7.5-9.2V5.8Z" />
      <path d="M8.8 11.8l2.2 2.2 4.2-4.6" />
    </>
  ),
  bolt: <path d="M13 2.5 4.5 13.5H11L10 21.5l8.5-11H12Z" />,
  send: <path d="M21 3 10.5 13.5M21 3l-6.8 18-3.7-7.3L3 10Z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c-4.5 4.6-4.5 12.4 0 17 4.5-4.6 4.5-12.4 0-17Z" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5Z" />
      <path d="M3.5 12.5 12 17l8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 21 21" />
    </>
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 20, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
