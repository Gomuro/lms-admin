import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export type DemoExpectationsNoticeProps = {
  /** Специфіка цієї сторінки (під загальним текстом) */
  children?: ReactNode;
  className?: string;
};

/**
 * Єдиний дисклеймер для демо: числа вигадані; реальність метрик — через Bot API + БД та ТЗ на проєкт;
 * межі Telegram — по документації й проєктуванню.
 */
export function DemoExpectationsNotice({ children, className }: DemoExpectationsNoticeProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-200 bg-zinc-50/90 px-4 py-3 text-xs leading-relaxed text-zinc-600 shadow-sm",
        className,
      )}
    >
      <p className="font-semibold text-zinc-800">Прикладові дані й обмеження Telegram</p>
      <ul className="mt-2 list-disc space-y-1.5 pl-4 marker:text-zinc-400">
        <li>
          Усі цифри, імена та статуси на цих екранах — <strong className="font-medium text-zinc-700">лише щоб показати вигляд</strong>,
          без реального бота й бази.
        </li>
        <li>
          Які саме показники в продакені можна будувати, залежить від того, які події бот записує через{" "}
          <strong className="font-medium text-zinc-700">Telegram Bot API</strong> і webhook (
          повідомлення, медіа, натиски кнопок, параметри старту тощо) — це задається на технічному
          проєктуванні, не малюється «з голови» в таблицях.
        </li>
        <li>
          Щого <strong className="font-medium text-zinc-700">немає</strong> в типовій моделі «бот + API» (наприклад{" "}
          аналог «лист прочитано» для кожного нагадування), того{" "}
          <strong className="font-medium text-zinc-700">не варто обіцяти дашборду</strong> без окремої
          узгодженої механіки (наприклад, клік по кнопці в тому самому повідомленні).
        </li>
        <li>
          Остаточно — що доступно технічно з месенджера, перевіряється по{" "}
          <strong className="font-medium text-zinc-700">актуальній документації Telegram</strong> для
          ботів і вашого сценарію; цей макет не є юридичним чи технічним гарантом переліку метрик.
        </li>
      </ul>
      {children ? (
        <div className="mt-3 border-t border-zinc-200 pt-3 text-zinc-600">{children}</div>
      ) : null}
    </div>
  );
}
