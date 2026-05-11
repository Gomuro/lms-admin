"use client";

import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/dashboard", label: "Панель" },
  { href: "/students", label: "Студенти" },
  { href: "/homeworks", label: "Домашні завдання" },
  { href: "/constructor", label: "Конструктор" },
  { href: "/broadcasts", label: "Розсилки" },
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-60 shrink-0 flex-col border-r border-zinc-200 bg-white">
      <div className="border-b border-zinc-100 px-5 py-5">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          Telegram LMS
        </p>
        <p className="mt-1 text-sm font-semibold text-zinc-900">Адмінка</p>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 p-3" aria-label="Головна навігація">
        {NAV.map(({ href, label }) => {
          const active =
            pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2",
                active
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
              )}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <p className="mt-auto border-t border-zinc-100 p-3 text-[10px] leading-snug text-zinc-400">
        Маршрути макета; реальність метрик під бота — лише по ТЗ та Telegram Bot API.
      </p>
    </aside>
  );
}
