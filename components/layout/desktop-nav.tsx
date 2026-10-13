"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { SmartLink } from "@/components/ui/smart-link";
import { cn } from "@/lib/cn";
import { MAIN_NAV, type NavMenu } from "@/lib/site";

/** Hover intent: a short wait before opening, a longer one before closing. */
const OPEN_DELAY = 80;
const CLOSE_DELAY = 160;

const linkClass =
  "rounded-full px-3.5 py-2 text-[15px] font-medium text-fg-2 transition-colors hover:bg-surface-2 hover:text-fg";

/**
 * Desktop header nav with RankYak-style mega-menus. Uses the disclosure
 * pattern (a button with aria-expanded that shows a panel of links) rather
 * than ARIA menus, so links keep their normal keyboard and screen-reader
 * behaviour. Opens on click or hover; Escape, an outside click, focus leaving
 * the nav or following a link closes it.
 */
export function DesktopNav() {
  const [openId, setOpenId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timer = useRef<number | undefined>(undefined);

  const schedule = (next: string | null, delay: number) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpenId(next), delay);
  };
  const close = () => {
    window.clearTimeout(timer.current);
    setOpenId(null);
  };

  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    if (!openId) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenId(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenId(null);
      document.getElementById(`${openId}-trigger`)?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openId]);

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className="hidden flex-1 justify-center lg:flex"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) close();
      }}
    >
      <ul className="flex items-center gap-1">
        {MAIN_NAV.map((entry) =>
          entry.kind === "menu" ? (
            <li
              key={entry.id}
              className="relative"
              onPointerEnter={(event) => event.pointerType === "mouse" && schedule(entry.id, OPEN_DELAY)}
              onPointerLeave={(event) => event.pointerType === "mouse" && schedule(null, CLOSE_DELAY)}
            >
              <button
                type="button"
                id={`${entry.id}-trigger`}
                aria-expanded={openId === entry.id}
                aria-controls={`${entry.id}-panel`}
                onClick={() => (openId === entry.id ? close() : setOpenId(entry.id))}
                className={cn(
                  linkClass,
                  "inline-flex items-center gap-1",
                  openId === entry.id && "bg-surface-2 text-fg",
                )}
              >
                {entry.label}
                <ChevronDown
                  aria-hidden
                  className={cn("size-4 transition-transform duration-200", openId === entry.id && "rotate-180")}
                />
              </button>
              <MenuPanel menu={entry} open={openId === entry.id} onNavigate={close} />
            </li>
          ) : (
            <li key={entry.href}>
              <SmartLink href={entry.href} className={linkClass}>
                {entry.label}
              </SmartLink>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

function MenuPanel({ menu, open, onNavigate }: { menu: NavMenu; open: boolean; onNavigate: () => void }) {
  return (
    // pt-3 bridges the gap under the trigger so the pointer can travel into the panel
    <div
      id={`${menu.id}-panel`}
      inert={!open}
      className={cn(
        "absolute top-full left-1/2 w-[min(680px,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition-[opacity,translate,visibility] duration-150 ease-out",
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
      )}
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-pop">
        <ul className="grid grid-cols-2 gap-1 p-2">
          {menu.items.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <SmartLink
                  href={item.href}
                  onClick={onNavigate}
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-2"
                >
                  {Icon ? (
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-blue-bg text-blue-ink">
                      <Icon aria-hidden className="size-[18px]" />
                    </span>
                  ) : null}
                  <span className="min-w-0">
                    <span className="block text-[15px] font-medium text-fg">{item.label}</span>
                    {item.description ? (
                      <span className="mt-0.5 block text-[13px] leading-5 text-fg-3">{item.description}</span>
                    ) : null}
                  </span>
                </SmartLink>
              </li>
            );
          })}
        </ul>
        {menu.more ? (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border bg-bg/60 px-5 py-3.5">
            <p className="text-overline text-fg-3">{menu.more.title}</p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {menu.more.items.map((item) => (
                <li key={item.href}>
                  <SmartLink
                    href={item.href}
                    onClick={onNavigate}
                    className="group inline-flex items-center gap-1 text-[14px] font-medium text-fg-2 transition-colors hover:text-fg"
                  >
                    {item.label}
                    <ArrowRight
                      aria-hidden
                      className="size-3.5 opacity-0 transition-[opacity,translate] duration-150 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
