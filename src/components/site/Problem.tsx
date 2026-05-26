export const Problem = () => (
  <section className="bg-primary text-primary-foreground">
    <div className="container-narrow py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
      <div className="reveal lg:col-span-7">
        <span className="eyebrow !text-accent">The problem</span>
        <h2 className="mt-5 text-4xl md:text-6xl uppercase text-white leading-[0.95]">
          Crisis doesn't end when the news stops.
        </h2>
        <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
          Long after the headlines, trauma stays in the body — in sleep, in muscle, in
          the way a person flinches at a door closing. Talk therapy alone rarely reaches it.
        </p>
        <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-xl">
          Our work begins where words run out: with the body, with breath, with the slow
          return of safety in a nervous system that learned to expect the worst.
        </p>
      </div>
      <div className="reveal lg:col-span-5">
        <blockquote className="font-display uppercase text-2xl md:text-3xl text-white/90 leading-tight border-l-2 border-accent pl-6">
          "The war changed me. It is not good and not bad. It is just a fact — now I need to accept this new me."
        </blockquote>
        <div className="mt-4 text-sm text-white/60 pl-6">
          Kateryna, combat medic — Ukraine
        </div>
      </div>
    </div>
  </section>
);