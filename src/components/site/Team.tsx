import oleh from "@/assets/oleh.jpg";
import volodymyr from "@/assets/volodymyr.jpg";
import taras from "@/assets/taras.jpg";
import igor from "@/assets/igor.jpg";
import { ArrowRight } from "lucide-react";

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
      <div className="max-w-3xl reveal">
        <span className="eyebrow">The team</span>
        <h2 className="mt-4 text-3xl md:text-5xl">Built on frontline expertise from Ukraine.</h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Led by psychiatrists, psychotherapists, combat medics, and veteran specialists who have worked
          in active conflict — across military, clinical, and community settings.
        </p>
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
