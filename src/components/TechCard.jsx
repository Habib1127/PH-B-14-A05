const BADGE_STYLES = {
  Popular: "bg-sky-50 text-sky-600",
  Essential: "bg-violet-50 text-violet-600",
  Fast: "bg-orange-50 text-orange-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Flexible: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-blue-50 text-blue-600",
  Minimal: "bg-slate-100 text-slate-600",
  Efficient: "bg-fuchsia-50 text-fuchsia-600",
  "Blazing Fast": "bg-red-50 text-red-600",
  Collaborative: "bg-teal-50 text-teal-600",
  Scalable: "bg-indigo-50 text-indigo-600",
  "Full-Stack": "bg-pink-50 text-pink-600",
  Containers: "bg-cyan-50 text-cyan-600",
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;
  const badgeClass = BADGE_STYLES[badge] ?? "bg-slate-100 text-slate-600";

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm">
      <div className="flex items-start justify-between">
        <img
          src={icon}
          alt={`${name} icon`}
          className="h-9 w-9 object-contain"
          loading="lazy"
        />
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClass}`}>
          {badge}
        </span>
      </div>

      <h3 className="font-display mt-4 text-base font-semibold text-slate-900">
        {name}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
          {category}
        </span>
        <span className="text-slate-500">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-medium text-slate-700">
          <svg width="13" height="13" viewBox="0 0 20 20" fill="#f59e0b">
            <path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.8z" />
          </svg>
          {rating}
        </span>
      </div>

      <button
        onClick={onAdd}
        disabled={isAdded}
        className={`mt-5 w-full rounded-full px-4 py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
