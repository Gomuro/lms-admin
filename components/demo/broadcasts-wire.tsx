import { DemoExpectationsNotice } from "@/components/demo/demo-expectations-notice";

export function BroadcastsWire() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Розсилки</h1>
        <p className="max-w-2xl text-sm text-zinc-500">
          Макет форми для масових повідомлень. Кнопки не викликають реальну відправку.
        </p>
      </header>

      <DemoExpectationsNotice>
        <p>
          У продакені відправка йде через <strong className="text-zinc-700">ваш сервер</strong> і методи Bot
          API (черги, ліміти частоти, блокування користувачів). Сегменти «усі активні» тощо — це запити до
          вашої БД, не вбудована аналітика Telegram.
        </p>
      </DemoExpectationsNotice>

      <div className="mx-auto max-w-xl space-y-5 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="bc-audience" className="text-sm font-medium text-zinc-800">
            Аудиторія
          </label>
          <select
            id="bc-audience"
            className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
            defaultValue="all"
          >
            <option value="all">Усі активні студенти</option>
            <option value="cohort-a">Зараз пройшли тільки 1–5 урок</option>
            <option value="no-hw">Без домашнього минулого тижня</option>
          </select>
        </div>

        <div>
          <label htmlFor="bc-text" className="text-sm font-medium text-zinc-800">
            Текст повідомлення
          </label>
          <textarea
            id="bc-text"
            rows={6}
            placeholder="Наприклад: нагадування про Zoom у суботу о 10:00…"
            className="mt-2 w-full resize-y rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
          />
        </div>

        <div>
          <label htmlFor="bc-when" className="text-sm font-medium text-zinc-800">
            Коли надіслати (за бажанням)
          </label>
          <input
            id="bc-when"
            type="datetime-local"
            className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
          />
        </div>

        <div className="flex flex-wrap gap-2 border-t border-zinc-100 pt-4">
          <button
            type="button"
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
          >
            Зберегти чернетку
          </button>
          <button
            type="button"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
          >
            Надіслати зараз (демо)
          </button>
        </div>
      </div>
    </div>
  );
}
