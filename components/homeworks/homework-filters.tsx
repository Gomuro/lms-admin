import { cn } from "@/lib/utils/cn";
import type { HomeworkFilter } from "@/lib/types/homework";

const FILTERS: { id: HomeworkFilter; label: string }[] = [
  { id: "all", label: "Усі" },
  { id: "new", label: "Нові" },
  { id: "checking", label: "На перевірці" },
  { id: "done", label: "Перевірено" },
];

export type HomeworkFiltersProps = {
  value: HomeworkFilter;
  onChange: (value: HomeworkFilter) => void;
  className?: string;
};

export function HomeworkFilters({ value, onChange, className }: HomeworkFiltersProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="group" aria-label="Фільтр за статусом">
      {FILTERS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2",
            value === id
              ? "bg-zinc-900 text-white shadow-sm"
              : "bg-white text-zinc-600 ring-1 ring-zinc-200 hover:bg-zinc-50 hover:text-zinc-900",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
