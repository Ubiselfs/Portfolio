import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { data } from '../data.js';
import Card from '../components/Card.jsx';
import IconBadge from '../components/IconBadge.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

function TimelineItem({ title, meta, children }) {
  return (
    <div className="relative border-l border-white/10 pb-8 pl-7 last:pb-0">
      <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-ink-850 bg-gold-400 shadow-[0_0_0_4px_rgba(255,209,102,0.12)]" />
      <h4 className="text-lg font-bold text-white">{title}</h4>
      {meta && <p className="mt-1 text-sm font-semibold text-gold-400">{meta}</p>}
      <div className="mt-3 text-slate-300">{children}</div>
    </div>
  );
}

export default function Resume() {
  return (
    <>
      <SectionTitle>Resume</SectionTitle>

      <section className="space-y-8">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <IconBadge icon={BriefcaseBusiness} />
            <div>
              <h3 className="text-3xl font-bold text-white">Work Experience</h3>
              <p className="mt-1 text-slate-400">
                {data.experience.company} | {data.experience.location}
              </p>
              <p className="text-sm font-semibold text-gold-400">{data.experience.dates}</p>
            </div>
          </div>

          <div className="ml-6">
            {data.experience.roles.map(({ title, bullets, icon: Icon }) => (
              <TimelineItem key={title} title={title}>
                <div className="mb-3 flex items-center gap-3 text-slate-400">
                  <Icon size={18} className="text-gold-400" />
                  <span>Role at All in Trading SARL</span>
                </div>
                <ul className="space-y-2 leading-7">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </TimelineItem>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-4">
            <IconBadge icon={GraduationCap} />
            <h3 className="text-3xl font-bold text-white">Education</h3>
          </div>
          <div className="ml-6">
            {data.education.map((item) => (
              <TimelineItem
                key={item.school}
                title={item.school}
                meta={`${item.dates} | ${item.location}`}
              >
                <p className="leading-7">{item.degree}</p>
              </TimelineItem>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-3xl font-bold text-white">Skills</h3>
          <div className="grid gap-5 md:grid-cols-3">
            {data.resumeSkills.map(({ title, items, icon }) => (
              <Card key={title}>
                <IconBadge icon={icon} />
                <h4 className="mt-4 text-xl font-bold text-white">{title}</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-xl bg-white/[0.06] px-3 py-2 text-sm text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
