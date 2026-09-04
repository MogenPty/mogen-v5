import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeCtx {
  mode: ThemeMode;
  resolved: "light" | "dark";
  setMode: (m: ThemeMode) => void;
  cycle: () => void;
}

const Ctx = createContext<ThemeCtx | null>(null);

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    try {
      const stored = localStorage.getItem("mogen-theme");
      if (stored === "light" || stored === "dark" || stored === "system")
        return stored;
    } catch {}
    return "system";
  });
  const [resolved, setResolved] = useState<"light" | "dark">(() =>
    mode === "system" ? (systemPrefersDark() ? "dark" : "light") : mode
  );

  const apply = useCallback((m: ThemeMode) => {
    const next = m === "system" ? (systemPrefersDark() ? "dark" : "light") : m;
    setResolved(next);
    const el = document.documentElement;
    el.classList.remove("light", "dark");
    el.classList.add(next);
    el.setAttribute("data-theme", next);
  }, []);

  const setMode = useCallback(
    (m: ThemeMode) => {
      setModeState(m);
      try {
        localStorage.setItem("mogen-theme", m);
      } catch {}
      apply(m);
    },
    [apply]
  );

  const cycle = useCallback(() => {
    setMode(mode === "light" ? "dark" : mode === "dark" ? "system" : "light");
  }, [mode, setMode]);

  useEffect(() => {
    apply(mode);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (mode === "system") apply("system");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode, apply]);

  return (
    <Ctx.Provider value={{ mode, resolved, setMode, cycle }}>
      {children}
    </Ctx.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
