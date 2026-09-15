import StackIllustration from "./StackIllustration";

export default function Hero() {
  return (
    <section id="home" className="px-5 pb-16 pt-14 lg:px-8 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="font-display text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-slate-500 lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#technologies"
              className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md shadow-pink-200 transition hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <StackIllustration />
        </div>
      </div>
    </section>
  );
}
