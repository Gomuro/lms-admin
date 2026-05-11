import { DemoExpectationsNotice } from "@/components/demo/demo-expectations-notice";

const MOCK_ROWS = [
  { name: "Alex Kim", xp: 740, streak: 12, lesson: "Урок 6", status: "Активний" },
  { name: "Maria Santos", xp: 620, streak: 4, lesson: "Урок 5", status: "Активний" },
  { name: "Oleh Shevchenko", xp: 420, streak: 0, lesson: "Урок 4", status: "Пауза ДЗ" },
  { name: "Kateryna B.", xp: 910, streak: 21, lesson: "Урок 8", status: "Активний" },
  { name: "Jonas Weber", xp: 300, streak: 2, lesson: "Урок 3", status: "Лише передзапис" },
] as const;

export function StudentsWire() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Студенти</h1>
        <p className="max-w-2xl text-sm text-zinc-500">
          Макет списку учасників. Реальні рядки будуються з вашої БД після привʼязки{" "}
          <code className="rounded bg-zinc-100 px-1 text-[13px]">telegram_id</code> до профілю марафону.
        </p>
      </header>

      <DemoExpectationsNotice>
        <p>
          <strong className="text-zinc-700">XP, streak і «поточний урок»</strong> — не приходять одним
          готовим полем з Telegram; їх рахує ваша LMS за правилами марафону та збереженими подіями
          (надсилання ДЗ, відкриття уроку тощо). Підписи в колонках треба узгодити в ТЗ.
        </p>
      </DemoExpectationsNotice>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50/80 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                <th className="px-4 py-3">Студент</th>
                <th className="px-4 py-3">Бали XP</th>
                <th className="px-4 py-3">Серія днів</th>
                <th className="px-4 py-3">Поточний урок</th>
                <th className="px-4 py-3">Примітки</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_ROWS.map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-zinc-50 last:border-0 hover:bg-zinc-50/60"
                >
                  <td className="px-4 py-3 font-medium text-zinc-900">{row.name}</td>
                  <td className="px-4 py-3 tabular-nums text-zinc-700">{row.xp}</td>
                  <td className="px-4 py-3 tabular-nums text-zinc-700">{row.streak}</td>
                  <td className="px-4 py-3 text-zinc-600">{row.lesson}</td>
                  <td className="px-4 py-3 text-zinc-600">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-zinc-500">
        Пошук, фільтри, ручне відкриття доступу після простою — наступні кроки UI після затвердження
        логіки в ТЗ.
      </p>
    </div>
  );
}
