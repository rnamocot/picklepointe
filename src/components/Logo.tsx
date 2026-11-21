import Link from "next/link";

export function LogoMark({ size = 36, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size * 0.735}
      height={size}
      viewBox="0 0 574 781"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="#3274A8" d="M0 0h274c116 0 186 70 186 150 0 60-45 107-106 107H0Z" />
      <path fill="#3274A8" d="M0 314h337C230 380 70 470 0 567Z" />
      <path
        fill="#2A5F6E"
        d="M514 120c41 55 60 115 60 180 0 165-134 299-300 299h-59v182H0v-41c0-140 90-220 250-315l142-82c88-58 133-138 122-223Z"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`logo ${className ?? ""}`} aria-label="Pickle Pointe home">
      <LogoMark />
      <span className="logo-word" aria-hidden="true">
        <span>PICKLE</span>
        <span>POINTE</span>
      </span>
    </Link>
  );
}
