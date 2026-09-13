export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-ink-800 p-5 transition hover:border-white/20">
      <div className="flex items-start justify-between">
        <img
          src={icon}
          alt={`${name} icon`}
          className="h-10 w-10 object-contain"
          loading="lazy"
        />
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
          {badge}
        </span>
      </div>

      <h3 className="font-display mt-4 text-lg font-semibold text-white">
        {name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full border border-white/15 px-2.5 py-1 text-white/70">
          {category}
        </span>
        <span className="rounded-full border border-white/15 px-2.5 py-1 text-white/70">
          {difficulty}
        </span>
        <span className="flex items-center gap-1 text-white/70">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="#f59e0b">
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
            ? "cursor-not-allowed bg-white/10 text-white/40"
            : "bg-brand-gradient text-white hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
