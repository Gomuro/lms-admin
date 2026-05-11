import type { HomeworkSubmission } from "@/lib/types/homework";

/** Повний набір для звичайного перегляду таблиці та модалки. */
export const MOCK_HOMEWORKS: HomeworkSubmission[] = [
  {
    id: "hw-1",
    studentName: "Alex Kim",
    lessonName: "Модуль 3: вправи на вимову",
    mediaType: "audio",
    status: "checking",
    streakDays: 12,
    submittedAt: "2026-05-10T14:22:00Z",
  },
  {
    id: "hw-2",
    studentName: "Maria Santos",
    lessonName: "Вступні діалоги — урок 1",
    mediaType: "video",
    status: "new",
    streakDays: 4,
    submittedAt: "2026-05-11T09:05:00Z",
  },
  {
    id: "hw-3",
    studentName: "Jonas Weber",
    lessonName: "Граматика: Past Perfect",
    mediaType: "audio",
    status: "done",
    streakDays: 21,
    submittedAt: "2026-05-09T11:40:00Z",
  },
  {
    id: "hw-4",
    studentName: "Priya Patel",
    lessonName: "Лексика: подорожі",
    mediaType: "image",
    status: "new",
    streakDays: 7,
    submittedAt: "2026-05-11T08:12:00Z",
  },
  {
    id: "hw-5",
    studentName: "Chris Lee",
    lessonName: "Аудіювання — новинні уривки",
    mediaType: "video",
    status: "checking",
    streakDays: 3,
    submittedAt: "2026-05-10T19:55:00Z",
  },
  {
    id: "hw-6",
    studentName: "Elena Rossi",
    lessonName: "Говоріння — виклик, тиждень 2",
    mediaType: "audio",
    status: "new",
    streakDays: 0,
    submittedAt: "2026-05-11T10:01:00Z",
  },
  {
    id: "hw-7",
    studentName: "Sam Okonkwo",
    lessonName: "Міні-презентація (90 с)",
    mediaType: "video",
    status: "done",
    streakDays: 30,
    submittedAt: "2026-05-08T16:30:00Z",
  },
  {
    id: "hw-8",
    studentName: "Nour Haddad",
    lessonName: "Фонетичний воркшит",
    mediaType: "image",
    status: "checking",
    streakDays: 9,
    submittedAt: "2026-05-10T07:48:00Z",
  },
];

const MOCK_MINI: HomeworkSubmission[] = [
  {
    id: "mini-1",
    studentName: "Олена Кравченко",
    lessonName: "Диктант — тиждень 4",
    mediaType: "audio",
    status: "new",
    streakDays: 5,
    submittedAt: "2026-05-11T11:00:00Z",
  },
  {
    id: "mini-2",
    studentName: "Марко Верес",
    lessonName: "Відео-відповідь на питання",
    mediaType: "video",
    status: "checking",
    streakDays: 1,
    submittedAt: "2026-05-11T10:30:00Z",
  },
  {
    id: "mini-3",
    studentName: "Софія Мельник",
    lessonName: "Фото завдання (скрін вправи)",
    mediaType: "image",
    status: "done",
    streakDays: 14,
    submittedAt: "2026-05-09T18:00:00Z",
  },
];

const MOCK_REVIEW_QUEUE: HomeworkSubmission[] = [
  {
    id: "rq-1",
    studentName: "Ігор П.",
    lessonName: "Швидка усна відповідь",
    mediaType: "audio",
    status: "checking",
    streakDays: 2,
    submittedAt: "2026-05-11T12:00:00Z",
  },
  {
    id: "rq-2",
    studentName: "Настя Л.",
    lessonName: "Ролик — самопрезентація",
    mediaType: "video",
    status: "checking",
    streakDays: 8,
    submittedAt: "2026-05-11T12:05:00Z",
  },
  {
    id: "rq-3",
    studentName: "Дмитро С.",
    lessonName: "Скан робочого аркуша",
    mediaType: "image",
    status: "checking",
    streakDays: 0,
    submittedAt: "2026-05-11T12:10:00Z",
  },
];

export type HomeworkMockPresetId = "full" | "mini" | "empty" | "review-queue";

export type HomeworkMockPreset = {
  id: HomeworkMockPresetId;
  label: string;
  submissions: HomeworkSubmission[];
};

/** Пресети для демо-тулбару на сторінці домашніх завдань. */
export const HOMEWORK_MOCK_PRESETS: HomeworkMockPreset[] = [
  { id: "full", label: "Повний список", submissions: MOCK_HOMEWORKS },
  { id: "mini", label: "Короткий (3)", submissions: MOCK_MINI },
  { id: "review-queue", label: "Черга на перевірку", submissions: MOCK_REVIEW_QUEUE },
  { id: "empty", label: "Порожньо", submissions: [] },
];
