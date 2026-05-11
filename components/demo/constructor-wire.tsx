"use client";

import { DemoExpectationsNotice } from "@/components/demo/demo-expectations-notice";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";

const LESSONS = [
  "Урок 1",
  "Урок 2",
  "Урок 3",
  "Урок 4",
  "Урок 5",
  "Урок 6",
  "Урок 7",
  "Урок 8",
  "Урок 9",
  "Урок 10",
] as const;

function FieldStub({ title }: { title: string }) {
  return (
    <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-3 py-2 text-xs text-zinc-500">
      {title}
      <span className="block text-[11px] text-zinc-400">редактор контенту (MVP)</span>
    </div>
  );
}

export function ConstructorWire() {
  const [activeLesson, setActiveLesson] = useState<number>(5);

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Конструктор марафону</h1>
        <p className="max-w-2xl text-sm text-zinc-500">
          Макет полів контенту та таймінгів уроків. Бот лише віддає те, що задано у вашій системі; сам
          конструктор не є частиною Bot API.
        </p>
      </header>

      <DemoExpectationsNotice>
        <p>
          Тексти, відео, ДЗ, посилання на Zoom зберігаються в <strong className="text-zinc-700">вашій БД</strong>
          ; Telegram обмежує формати повідомлень і розмір файлів — фінальні поля форми погоджуються з
          документацією та обраною бібліотекою бота.
        </p>
      </DemoExpectationsNotice>

      <div className="flex flex-col gap-6 lg:flex-row">
        <aside className="shrink-0 lg:w-48">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Уроки</p>
          <nav className="flex flex-wrap gap-1 lg:flex-col">
            {LESSONS.map((label, idx) => {
              const num = idx + 1;
              const active = num === activeLesson;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveLesson(num)}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-left text-sm font-medium transition-colors",
                    active ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100",
                  )}
                >
                  {label}
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0 flex-1 space-y-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-medium text-zinc-800">
              Обраний марафон: <span className="text-zinc-500">англійська A1 · 10 тижнів</span>
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <FieldStub title="Текст привітання у вівторок" />
              <FieldStub title="Відеоматеріал уроку" />
              <FieldStub title="Словник / лексика" />
              <FieldStub title="Speaking task (промпт)" />
              <FieldStub title="Домашнє завдання (Інструкція)" />
              <FieldStub title="Кнопка наступного кроку / посилання Zoom" />
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              Доступність наступного уроку перев’язано з перевіреним ДЗ (логіка в бекенді, не показано
              тут).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
