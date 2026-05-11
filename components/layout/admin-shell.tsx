import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";

export type AdminShellProps = {
  children: ReactNode;
};

export function AdminShell({ children }: AdminShellProps) {
  return (
    <div className="flex min-h-screen bg-zinc-50 text-zinc-900">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <p className="border-b border-zinc-200 bg-zinc-100/90 px-6 py-2 text-center text-xs leading-snug text-zinc-600 md:px-8">
          Демо веб-макета адмін-панелі: усюди прикладові числа й тексти · що можна й не можна вимірювати
          через Telegram для вашого сценарію — лише по Bot API та окремому ТЗ; сторінки нижче нагадують про це
          окремо.
        </p>
        <main className="flex flex-1 flex-col p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
