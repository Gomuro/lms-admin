"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { useEffect, useRef, type ReactNode } from "react";

export type ModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function Modal({
  open,
  title,
  onClose,
  children,
  footer,
  className,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={cn(
        "w-[min(100%,32rem)] max-h-[90vh] overflow-hidden rounded-xl border border-zinc-200 bg-white p-0 text-zinc-900 shadow-xl backdrop:bg-zinc-950/40",
        className,
      )}
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
    >
      <div className="flex max-h-[90vh] flex-col">
        <header className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
          <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
          <Button
            type="button"
            variant="ghost"
            className="h-8 w-8 shrink-0 rounded-md border border-zinc-200 bg-zinc-50 p-0 text-lg leading-none text-zinc-500 hover:border-zinc-300 hover:bg-white hover:text-zinc-900"
            aria-label="Закрити"
            onClick={onClose}
          >
            ×
          </Button>
        </header>
        <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
        {footer ? (
          <footer className="border-t border-zinc-100 px-5 py-4">{footer}</footer>
        ) : null}
      </div>
    </dialog>
  );
}
