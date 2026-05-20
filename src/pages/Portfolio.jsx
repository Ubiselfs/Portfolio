import { data } from '../data.js';
import Card from '../components/Card.jsx';
import IconBadge from '../components/IconBadge.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Portfolio() {
  return (
    <>
      <SectionTitle>Portfolio</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.projects.map(({ title, description, tag, icon }) => (
          <Card key={title} className="overflow-hidden p-0">
            <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(255,209,102,0.18),transparent_32%),linear-gradient(135deg,#222226,#111113)]">
              <IconBadge icon={icon} className="h-16 w-16 rounded-3xl" />
              <span className="absolute right-4 top-4 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-gold-300">
                Coming Soon
              </span>
            </div>
            <div className="p-6">
              <span className="text-sm font-semibold text-gold-400">{tag}</span>
              <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{description}</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
