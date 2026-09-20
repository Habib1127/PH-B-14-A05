export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white py-24">
      <span
        className="h-9 w-9 animate-spin rounded-full border-4 border-slate-200"
        style={{ borderTopColor: "var(--brand-via)" }}
      />
      <p className="text-sm text-slate-400">Loading technologies…</p>
    </div>
  );
}
