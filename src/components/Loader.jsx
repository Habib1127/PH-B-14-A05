export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-ink-800 py-24">
      <span
        className="h-10 w-10 animate-spin rounded-full border-4 border-white/10"
        style={{ borderTopColor: "var(--brand-via)" }}
      />
      <p className="text-sm text-white/50">Loading technologies…</p>
    </div>
  );
}
