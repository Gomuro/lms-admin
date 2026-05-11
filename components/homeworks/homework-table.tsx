import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { HomeworkSubmission, MediaType } from "@/lib/types/homework";

function formatMediaType(type: MediaType): string {
  const labels: Record<MediaType, string> = {
    audio: "Аудіо",
    video: "Відео",
    image: "Зображення",
  };
  return labels[type];
}

export type HomeworkTableProps = {
  rows: HomeworkSubmission[];
  onReview: (row: HomeworkSubmission) => void;
};

export function HomeworkTable({ rows, onReview }: HomeworkTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-100 bg-zinc-50/80 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              <th className="px-4 py-3">Студент</th>
              <th className="px-4 py-3">Урок</th>
              <th className="px-4 py-3">Тип медіа</th>
              <th className="px-4 py-3">Статус</th>
              <th className="px-4 py-3 text-right">Дія</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-zinc-500">
                  Немає робіт за цим фільтром.
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-zinc-50 last:border-0 hover:bg-zinc-50/60"
                >
                  <td className="px-4 py-3 font-medium text-zinc-900">{row.studentName}</td>
                  <td className="px-4 py-3 text-zinc-600">{row.lessonName}</td>
                  <td className="px-4 py-3 text-zinc-600">{formatMediaType(row.mediaType)}</td>
                  <td className="px-4 py-3">
                    <Badge status={row.status} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button
                      type="button"
                      variant="secondary"
                      className="h-8 px-3 text-xs"
                      onClick={() => onReview(row)}
                    >
                      Переглянути
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="border-t border-zinc-100 px-4 py-2.5 text-[11px] leading-snug text-zinc-500">
        Таблиця лише для макету; реальний список робіт збиратиметься з подій бота / БД після розробки.
      </p>
    </div>
  );
}
