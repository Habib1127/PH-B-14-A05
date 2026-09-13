import TechCard from "./TechCard";
import Loader from "./Loader";

export default function TechGrid({ technologies, loading, stackIds, onAdd }) {
  return (
    <div id="technologies">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-white">
            Explore Technologies
          </h2>
          <p className="mt-1 text-sm text-white/50">
            {technologies.length} tools across every layer of the stack.
          </p>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              isAdded={stackIds.has(tech.id)}
              onAdd={() => onAdd(tech)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
