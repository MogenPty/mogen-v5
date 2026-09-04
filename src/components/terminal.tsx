import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type LineKind = "cmd" | "task" | "live";

interface Line {
  kind: LineKind;
  label: string;
  detail?: string;
}

const LINES: Line[] = [
  { kind: "cmd", label: 'mogen launch --client "acme-trading"' },
  { kind: "task", label: "CIPC name reservation", detail: "approved · 2026/184221/07" },
  { kind: "task", label: "Pty Ltd registration", detail: "CoR 14.3 issued" },
  { kind: "task", label: "web build", detail: "compiled in 1.2s · lighthouse 98" },
  { kind: "task", label: "SSL certificate", detail: "active · grade A" },
  { kind: "task", label: "app store submission", detail: "approved · v1.0.0" },
  { kind: "live", label: "acme-trading.co.za is live" },
];

/** Plain-text form of a line, used while it is being "typed". */
function raw(line: Line) {
  if (line.kind === "cmd") return `$ ${line.label}`;
  if (line.kind === "live") return `> ${line.label}`;
  return `✓ ${line.label} ${"·".repeat(3)} ${line.detail}`;
}

export function BuildLog() {
  const reduce = useReducedMotion();
  const plain = useMemo(() => LINES.map(raw), []);
  const total = useMemo(
    () => plain.reduce((acc, l) => acc + l.length + 1, 0),
    [plain]
  );
  const [pos, setPos] = useState(reduce ? total : 0);

  const pauseRef = useRef(0);

  useEffect(() => {
    if (reduce) {
      setPos(total);
      return;
    }
    const interval = setInterval(() => {
      setPos((p) => {
        if (p >= total) {
          // Hold the finished log on screen, then start a fresh run.
          pauseRef.current += 1;
          if (pauseRef.current > 175) {
            pauseRef.current = 0;
            return 0;
          }
          return p;
        }
        return Math.min(p + 2, total);
      });
    }, 26);
    return () => clearInterval(interval);
  }, [reduce, total]);

  // Map the global char position onto lines.
  let cursorPlaced = false;
  const rendered = LINES.map((line, i) => {
    const start = plain.slice(0, i).reduce((a, l) => a + l.length + 1, 0);
    const end = start + plain[i].length;
    const shown = Math.max(0, Math.min(pos, end) - start);
    const text = plain[i].slice(0, shown);
    const isDone = pos >= end;
    const isTyping = pos > start && pos < end;
    if (isTyping) cursorPlaced = true;

    if (text.length === 0 && !isTyping) return null;

    if (isDone) {
      if (line.kind === "cmd")
        return (
          <p key={i} className="text-[#e8d9ae]">
            <span className="text-[#6f8578]">$ </span>
            {line.label}
          </p>
        );
      if (line.kind === "live")
        return (
          <p key={i} className="mt-2 font-bold text-[#7fd6a4]">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#7fd6a4] align-middle" />
            {line.label}
          </p>
        );
      return (
        <p key={i} className="text-[#b9cfc0]">
          <span className="text-[#7fd6a4]">✓</span>{" "}
          <span className="text-[#e9eee6]">{line.label}</span>{" "}
          <span className="text-[#6f8578]">···</span>{" "}
          <span className="text-[#e9c578]">{line.detail}</span>
        </p>
      );
    }

    return (
      <p key={i} className="text-[#b9cfc0]">
        {text}
        {isTyping && <Cursor />}
      </p>
    );
  });

  const allDone = pos >= total;

  return (
    <div className="overflow-hidden rounded-xl border border-[#243129] bg-terminal shadow-[0_30px_70px_-20px_rgba(10,20,15,0.55)]">
      <div className="flex items-center gap-2 border-b border-[#243129] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d96c57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e5b455]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#6fbf8f]" />
        <span className="ml-3 font-mono text-[11px] tracking-wider text-[#6f8578]">
          mogen — deploy · zsh
        </span>
        <span className="ml-auto font-mono text-[11px] text-[#6f8578]">
          {allDone ? "exit 0" : "running"}
        </span>
      </div>
      <div className="min-h-[248px] px-5 py-5 font-mono text-[12.5px] leading-[1.9] sm:text-[13px]">
        {rendered}
        {allDone && (
          <p className="text-[#6f8578]">
            $ <Cursor />
          </p>
        )}
        {!cursorPlaced && !allDone && (
          <p className="text-[#6f8578]">
            $ <Cursor />
          </p>
        )}
      </div>
    </div>
  );
}

function Cursor() {
  return (
    <span className="animate-blink ml-0.5 inline-block h-[13px] w-[7px] translate-y-[2px] bg-[#7fd6a4]" />
  );
}
