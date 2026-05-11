"use client";

import { cn } from "@/lib/utils/cn";
import type { HomeworkMockPresetId } from "@/lib/data/mock-homeworks";

export type HomeworkMockToolbarProps = {
  presets: { id: HomeworkMockPresetId; label: string }[];
  value: HomeworkMockPresetId;
  onChange: (id: HomeworkMockPresetId) => void;
  className?: string;
};

export function HomeworkMockToolbar({
  presets,
  value,
  onChange,
  className,
}: HomeworkMockToolbarProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 shadow-sm",
        className,
      )}
      role="region"
      aria-label="Демо: вибір мок-даних"
    >
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-amber-900/70">
        Демо-мок<span className="mx-1">·</span>наочна зміна списку
      </p>
      <div className="flex flex-wrap gap-2" role="group">
        {presets.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2",
              value === id
                ? "bg-amber-900 text-white shadow-sm"
                : "bg-white text-amber-950 ring-1 ring-amber-200/90 hover:bg-amber-100/80",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-[11px] leading-snug text-amber-950/85">
        Пресети переключають лише локальний список для макету; реальний потік робіт із Telegram на цьому
        етапі не підключено.
      </p>
    </div>
  );
}
