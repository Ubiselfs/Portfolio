import { data } from '../data.js';
import Card from '../components/Card.jsx';
import IconBadge from '../components/IconBadge.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Blog() {
  return (
    <>
      <SectionTitle>Blog</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        {data.blogPosts.map(({ title, category, icon }) => (
          <Card key={title} className="overflow-hidden p-0">
            <div className="relative grid aspect-[16/9] place-items-center overflow-hidden bg-[radial-gradient(circle_at_70%_30%,rgba(246,189,63,0.28),transparent_30%),linear-gradient(135deg,#1d1d20,#111113)]">
              <IconBadge icon={icon} className="h-16 w-16 rounded-3xl" />
              <span className="absolute left-5 top-5 rounded-full bg-ink-950/70 px-3 py-1 text-xs font-bold text-gold-300">
                Coming Soon
              </span>
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-slate-400">Blog | {category}</p>
              <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">
                A future article draft space for notes, lessons, and development reflections.
              </p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
