export type HomeworkStatus = "new" | "checking" | "done";

export type MediaType = "audio" | "video" | "image";

export type HomeworkSubmission = {
  id: string;
  studentName: string;
  lessonName: string;
  mediaType: MediaType;
  status: HomeworkStatus;
  streakDays: number;
  submittedAt: string;
};

export type HomeworkFilter = "all" | HomeworkStatus;
