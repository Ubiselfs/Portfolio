import { data } from '../data.js';
import Card from '../components/Card.jsx';
import IconBadge from '../components/IconBadge.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function About() {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="space-y-5 text-base leading-8 text-slate-300">
        {data.aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-10">
        <h3 className="mb-5 text-3xl font-bold text-white">What I&apos;m Doing</h3>
        <div className="grid gap-5 md:grid-cols-2">
          {data.services.map(({ title, text, icon }) => (
            <Card key={title} className="flex gap-5">
              <IconBadge icon={icon} />
              <div>
                <h4 className="text-xl font-bold text-white">{title}</h4>
                <p className="mt-2 leading-7 text-slate-400">{text}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h3 className="mb-5 text-3xl font-bold text-white">Skills &amp; Interests</h3>
        <div className="flex flex-wrap gap-3">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-2xl border border-white/10 bg-ink-800 px-4 py-3 text-sm font-semibold text-slate-200 shadow-glow transition hover:border-gold-400/40 hover:text-gold-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
