"use client";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import type { HomeworkSubmission, MediaType } from "@/lib/types/homework";
import { useState } from "react";

function formatUkrainianDays(n: number): string {
  const abs10 = n % 100;
  const d = n % 10;
  if (abs10 > 10 && abs10 < 20) return `${n} днів`;
  if (d === 1) return `${n} день`;
  if (d >= 2 && d <= 4) return `${n} дні`;
  return `${n} днів`;
}

function MediaPlayerMock({ mediaType }: { mediaType: MediaType }) {
  const isVideo = mediaType === "video";
  const isAudio = mediaType === "audio";
  const progressPct =
    mediaType === "video" ? 6 : mediaType === "audio" ? 34 : 38;

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 shadow-inner">
      <div
        className={
          isAudio
            ? "relative flex aspect-[16/5] items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950"
            : "relative flex aspect-video items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-900 to-black"
        }
      >
        {mediaType === "image" ? (
          <div className="flex w-full flex-col items-center justify-center gap-2 py-12 text-zinc-400">
            <span className="text-3xl" aria-hidden>
              ▢
            </span>
            <span className="text-xs font-medium uppercase tracking-wider">Зображення (вкладення)</span>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 opacity-30">
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#60a5fa_0,transparent_45%),radial-gradient(circle_at_80%_30%,#a78bfa_0,transparent_40%)]" />
            </div>
            <button
              type="button"
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-zinc-900 shadow-lg ring-1 ring-black/10 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              aria-label={isVideo ? "Відтворити прев’ю відео" : "Відтворити прев’ю аудіо"}
            >
              <span className="ml-0.5 text-xl">▶</span>
            </button>
            {isVideo ? (
              <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-0.5 font-mono text-[10px] font-medium tabular-nums text-white">
                0:18 / 3:10
              </span>
            ) : null}
          </>
        )}
      </div>
      <div className="space-y-2 border-t border-zinc-800 bg-zinc-900/95 px-4 py-3">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-sky-500 transition-[width]"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="flex justify-between font-mono text-[11px] font-medium tabular-nums text-zinc-400">
          <span>{isAudio ? "0:42" : isVideo ? "0:18" : "0:00"}</span>
          <span>{isAudio ? "2:05" : isVideo ? "3:10" : "0:00"}</span>
        </div>
      </div>
    </div>
  );
}

export type ReviewHomeworkModalProps = {
  submission: HomeworkSubmission | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type ReviewHomeworkModalInnerProps = {
  submission: HomeworkSubmission;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function ReviewHomeworkModalInner({
  submission,
  open,
  onOpenChange,
}: ReviewHomeworkModalInnerProps) {
  const [feedback, setFeedback] = useState("");
  const [xp, setXp] = useState(10);

  const handleClose = () => onOpenChange(false);

  const handleSendFeedback = () => {
    console.log("Send feedback", {
      submissionId: submission.id,
      studentName: submission.studentName,
      feedback,
      xp: Number(xp),
    });
    handleClose();
  };

  const handleRequestRedo = () => {
    console.log("Request redo", {
      submissionId: submission.id,
      studentName: submission.studentName,
      note: feedback,
    });
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Перегляд роботи"
      className="w-[min(100%,36rem)]"
      footer={
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          <Button type="button" variant="danger" onClick={handleRequestRedo}>
            Запитати переробку
          </Button>
          <Button type="button" variant="primary" onClick={handleSendFeedback}>
            Надіслати відгук
          </Button>
        </div>
      }
    >
      <div className="space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-100 pb-4">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Студент</p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-zinc-900">{submission.studentName}</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Поточна серія</p>
            <p className="mt-1 text-xl font-semibold tabular-nums tracking-tight text-zinc-900">
              {formatUkrainianDays(submission.streakDays)}
            </p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            Попередній перегляд
          </p>
          <MediaPlayerMock mediaType={submission.mediaType} />
        </div>

        <div>
          <label htmlFor="curator-feedback" className="text-sm font-medium text-zinc-800">
            Відгук куратора
          </label>
          <textarea
            id="curator-feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            placeholder="Короткі, зрозумілі рекомендації для студента…"
            className="mt-2 w-full resize-y rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
          />
        </div>

        <div>
          <label htmlFor="xp-points" className="text-sm font-medium text-zinc-800">
            Бали XP
          </label>
          <input
            id="xp-points"
            type="number"
            min={0}
            max={500}
            value={xp}
            onChange={(e) => setXp(Number(e.target.value))}
            className="mt-2 w-full max-w-[12rem] rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm tabular-nums text-zinc-900 shadow-sm focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
          />
        </div>

        <p className="border-t border-zinc-100 pt-4 text-[11px] leading-relaxed text-zinc-500">
          Демо-форма: надсилання відгуку студентові в Telegram і запис XP у базу виконуватимуться після
          підключення бека; межі того, що бот може надіслати назад користувачеві — за документацією Telegram.
        </p>
      </div>
    </Modal>
  );
}

export function ReviewHomeworkModal({
  submission,
  open,
  onOpenChange,
}: ReviewHomeworkModalProps) {
  if (!open || !submission) return null;

  return (
    <ReviewHomeworkModalInner
      key={submission.id}
      submission={submission}
      open={open}
      onOpenChange={onOpenChange}
    />
  );
}
