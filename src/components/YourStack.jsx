export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="font-display text-base font-semibold text-slate-900">
        Your Stack
      </h3>
      <p className="mt-1 text-xs text-slate-400">
        {count === 0
          ? "No technologies selected yet"
          : `${count} ${count === 1 ? "Technology" : "Technologies"} Selected`}
      </p>

      {count === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-slate-200 px-4 py-10 text-center">
          <p className="text-sm text-slate-400">Your stack is empty</p>
        </div>
      ) : (
        <ul className="mt-4 flex flex-col gap-2.5">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5"
            >
              <img
                src={tech.icon}
                alt={`${tech.name} icon`}
                className="h-7 w-7 shrink-0 object-contain"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {tech.name}
                </p>
                <p className="truncate text-xs text-slate-400">
                  {tech.category}
                </p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {count > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-full border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
