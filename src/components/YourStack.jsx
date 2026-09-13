export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="sticky top-24 rounded-2xl border border-white/10 bg-ink-800 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-base font-semibold text-white">
          Your Stack
        </h3>
        {count > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-medium text-white/50 transition hover:text-white"
          >
            Remove All
          </button>
        )}
      </div>
      <p className="mt-1 text-xs text-white/50">
        {count} {count === 1 ? "Technology" : "Technologies"} Selected
      </p>

      {count === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-white/15 px-4 py-10 text-center">
          <p className="text-sm text-white/40">
            Your stack is empty. Add a technology to start building it.
          </p>
        </div>
      ) : (
        <ul className="mt-4 flex flex-col gap-2">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 rounded-xl bg-ink-700/60 px-3 py-2.5"
            >
              <img
                src={tech.icon}
                alt={`${tech.name} icon`}
                className="h-7 w-7 shrink-0 object-contain"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">
                  {tech.name}
                </p>
                <p className="truncate text-xs text-white/45">
                  {tech.category}
                </p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-white/40 transition hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
