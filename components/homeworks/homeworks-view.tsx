"use client";

import { DemoExpectationsNotice } from "@/components/demo/demo-expectations-notice";
import { HomeworkMockToolbar } from "@/components/homeworks/homework-mock-toolbar";
import { HomeworkFilters } from "@/components/homeworks/homework-filters";
import { HomeworkTable } from "@/components/homeworks/homework-table";
import { ReviewHomeworkModal } from "@/components/homeworks/review-homework-modal";
import {
  HOMEWORK_MOCK_PRESETS,
  MOCK_HOMEWORKS,
  type HomeworkMockPresetId,
} from "@/lib/data/mock-homeworks";
import type {
  HomeworkFilter,
  HomeworkSubmission,
} from "@/lib/types/homework";
import { useMemo, useState } from "react";

export type HomeworksViewProps = {
  /** Як не передано — використовується демо-тулбар і пресети з `mock-homeworks`. */
  submissions?: HomeworkSubmission[];
};

export function HomeworksView({
  submissions: submissionsProp,
}: HomeworksViewProps = {}) {
  const useToolbar = submissionsProp === undefined;
  const [presetId, setPresetId] = useState<HomeworkMockPresetId>("full");

  const submissions = useMemo(() => {
    if (!useToolbar) return submissionsProp;
    const preset = HOMEWORK_MOCK_PRESETS.find((p) => p.id === presetId);
    return preset?.submissions ?? MOCK_HOMEWORKS;
  }, [useToolbar, submissionsProp, presetId]);

  const [filter, setFilter] = useState<HomeworkFilter>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState<HomeworkSubmission | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return submissions;
    return submissions.filter((s) => s.status === filter);
  }, [submissions, filter]);

  const openReview = (row: HomeworkSubmission) => {
    setActive(row);
    setModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Домашні завдання</h1>
        <p className="text-sm text-zinc-500">
          Перевірка домашніх із медіа, які студент надіслав у бот: у продакені рядки з webhook або черги
          перевірки — тут лише приклад інтерфейсу.
        </p>
      </header>

      <DemoExpectationsNotice>
        <p>
          Які типи вкладень і статусів показуємо (голосове кружечком, файл, текст), чи зберігаєте ви{" "}
          <code className="rounded bg-white px-1 ring-1 ring-zinc-200">file_id</code> чи кидаєте файл на
          об’єктне сховище — узгоджується з ТЗ; модалка «Відгук і XP» після узгодження підʼєднається до бота,
          зараз без відправки в Telegram.
        </p>
      </DemoExpectationsNotice>

      {useToolbar ? (
        <HomeworkMockToolbar
          presets={HOMEWORK_MOCK_PRESETS}
          value={presetId}
          onChange={(id) => {
            setPresetId(id);
            setModalOpen(false);
            setActive(null);
          }}
        />
      ) : null}

      <HomeworkFilters value={filter} onChange={setFilter} />

      <HomeworkTable rows={filtered} onReview={openReview} />

      <ReviewHomeworkModal
        submission={active}
        open={modalOpen}
        onOpenChange={(open) => {
          setModalOpen(open);
          if (!open) setActive(null);
        }}
      />
    </div>
  );
}
