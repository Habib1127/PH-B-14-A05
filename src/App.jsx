import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  // Fetch the technology data from the JSON file on mount.
  // useEffect is needed here because fetching data is a side effect —
  // it happens outside of rendering and only needs to run once.
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Couldn't load technology data."))
      .finally(() => setLoading(false));
  }, []);

  const stackIds = new Set(stack.map((t) => t.id));

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(id) {
    const tech = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Stack cleared.");
  }

  return (
    <div id="top" className="min-h-screen bg-ink-950">
      <Navbar />
      <Hero />

      <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <TechGrid
            technologies={technologies}
            loading={loading}
            stackIds={stackIds}
            onAdd={handleAdd}
          />
          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
