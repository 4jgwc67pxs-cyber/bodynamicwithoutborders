import oleh from "@/assets/oleh.jpg";
import volodymyr from "@/assets/volodymyr.jpg";
import taras from "@/assets/taras.jpg";
import igor from "@/assets/igor.jpg";


const team = [
  { img: oleh, name: "Oleh Hukovskyy, MD", title: "Psychiatry & combat stress",
    bio: "Chief of Combat Stress Control, Armed Forces of Ukraine. Psychotherapist and Bodynamic trainer. Contributor to NATO-related mental health initiatives." },
  { img: volodymyr, name: "Volodymyr Halashchuk", title: "Crisis & recovery",
    bio: "Psychotherapist specializing in PTSD. Active military service 2014–15 and 2022. Supervisor of mobile crisis teams and post-traumatic growth programs." },
  { img: taras, name: "Taras Kovalyk", title: "Peer-based recovery",
    bio: "Decorated veteran and trauma practitioner since 2015. Case manager at Veteran Hub. Specialist in psychosocial adaptation for veterans and families." },
  { img: igor, name: "Igor Kholodylo", title: "Frontline medicine & trauma",
    bio: "Former commander of a CASEVAC medical unit, AFU. Clinical psychologist and EMDR therapist. Co-facilitator of trauma programs for veterans." },
];

export const Team = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container-narrow">
      {/* Why we exist */}
      <div className="max-w-3xl reveal">
        <span className="eyebrow">About</span>
        <h2 className="mt-4 text-3xl md:text-5xl">
          Talk therapy stops at the edge of a warzone. We don't.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Bodynamic Without Borders was founded in 2006 after our team worked with survivors of
          mass-scale violence and saw the same pattern: trauma lodges in the body long after the
          mind has tried to move on. Conventional therapy wasn't reaching people in active conflict
          — so we built a body-based method that does. [edit]
        </p>
        <p className="mt-4 text-lg text-foreground font-medium">
          We don't replace local therapists. We train them — then we leave the work in their hands.
        </p>
      </div>

      {/* Combined credibility */}
      <div className="mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
        {[
          { n: "4", label: "Frontline practitioners" },
          { n: "60+", label: "Years combined field experience [edit]" },
          { n: "3", label: "Active conflict zones" },
          { n: "180+", label: "Local clinicians trained [edit]" },
        ].map((s) => (
          <div key={s.label} className="border-l-2 border-accent pl-4">
            <div className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              {s.n}
            </div>
            <div className="mt-1 text-xs text-muted-foreground leading-snug">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-3xl reveal">
        <span className="eyebrow">The team</span>
        <h3 className="mt-4 text-2xl md:text-3xl font-display font-semibold">
          Built on frontline expertise from Ukraine.
        </h3>
      </div>

      <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m, i) => (
          <article
            key={m.name}
            className="reveal group"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-muted shadow-card">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-smooth group-hover:scale-105"
              />
            </div>
            <h3 className="mt-5 text-lg">{m.name}</h3>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mt-1">
              {m.title}
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
          </article>
        ))}
      </div>

    </div>
  </section>
);
