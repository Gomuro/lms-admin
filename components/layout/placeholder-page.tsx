export type PlaceholderPageProps = {
  title: string;
  description?: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="max-w-2xl space-y-2">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">{title}</h1>
      {description ? (
        <p className="text-sm leading-relaxed text-zinc-500">{description}</p>
      ) : null}
    </div>
  );
}
