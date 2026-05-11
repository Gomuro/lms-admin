import { cn } from "@/lib/utils/cn";
import type { HomeworkStatus } from "@/lib/types/homework";
import type { HTMLAttributes } from "react";

const statusStyles: Record<HomeworkStatus, string> = {
  new: "bg-sky-50 text-sky-800 ring-sky-200",
  checking: "bg-amber-50 text-amber-900 ring-amber-200",
  done: "bg-emerald-50 text-emerald-900 ring-emerald-200",
};

const statusLabels: Record<HomeworkStatus, string> = {
  new: "Нове",
  checking: "На перевірці",
  done: "Перевірено",
};

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  status: HomeworkStatus;
};

export function Badge({ status, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
        statusStyles[status],
        className,
      )}
      {...props}
    >
      {statusLabels[status]}
    </span>
  );
}
