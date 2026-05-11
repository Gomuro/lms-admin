import { DemoExpectationsNotice } from "@/components/demo/demo-expectations-notice";

function MetricCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-dashed border-zinc-300 bg-white p-4 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold tabular-nums text-zinc-900">{value}</p>
      {hint ? <p className="mt-2 text-xs text-zinc-500">{hint}</p> : null}
    </div>
  );
}

export function DashboardWire() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Панель</h1>
        <p className="max-w-2xl text-sm text-zinc-500">
          Приклад зведення: кожна картка нижче пояснює, <em>з якого типу подій</em> можна збирати такий
          показник після інтеграції — конкретні формули й наявність полів у API уточнюються в ТЗ.
        </p>
      </header>

      <DemoExpectationsNotice>
        <p className="rounded-lg bg-amber-50/90 px-3 py-2 text-amber-950 ring-1 ring-amber-100">
          <strong className="font-semibold">Панель:</strong> не показуємо «open rate» розсилок як у
          пошті — лише те, що можна вивести з відстежуваних дій (кнопка, відповідь боту тощо), якщо це
          закладено в тексті нагадування.
        </p>
      </DemoExpectationsNotice>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <MetricCard
          label="У боті натиснули Start"
          value="842"
          hint="приклад: /start у webhook; факт залежить від того, як рахуєте «унікальний старт»"
        />
        <MetricCard
          label="Активні цього тижня"
          value="68%"
          hint="приклад: частка користувачів із хоча б однією подією за тижень у вашій БД (правило задається в ТЗ)"
        />
        <MetricCard
          label="Закрили програму"
          value="124"
          hint="приклад: прапорець LMS або N/N уроків — не телеграмівська метрика «з коробки»"
        />
        <MetricCard
          label="Клік кнопки після нагадування"
          value="38%"
          hint="приклад: лише якщо в розсилці є inline-кнопка й ви логуєте callback_query"
        />
        <MetricCard
          label="ДЗ здали вчасно"
          value="76%"
          hint="приклад: час приходу медіа в бот vs дедлайн у вашому часовому поясі (узгоджується з ТЗ)"
        />
        <MetricCard
          label="Натиск «зв’язатися з менеджером»"
          value="312"
          hint="приклад: callback меню або deep link — якщо так зробите сценарій у боті"
        />
      </div>

      <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4 text-sm text-zinc-600">
        Експорт у Excel, UTM із start-параметрів і воронка «марафон → менеджер» — це вже{' '}
        <strong className="font-medium text-zinc-700">ваша база й адмінка</strong>, не «сирий»
        екран Telegram; склад реалізації обговорюється окремо в MVP.
      </div>
    </div>
  );
}
