import { Mail, MapPin, Phone } from 'lucide-react';

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-ink-800 text-gold-400 shadow-glow">
        <Icon size={19} />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
          {label}
        </span>
        <span className="block truncate text-sm font-medium text-slate-100">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a className="flex items-center gap-4 rounded-2xl p-2 transition hover:bg-white/[0.03]" href={href}>
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-4 rounded-2xl p-2">{content}</div>;
}

export default function Sidebar({ profile }) {
  return (
    <aside className="rounded-[28px] border border-white/10 bg-ink-850 p-6 shadow-soft lg:sticky lg:top-12">
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 grid h-36 w-36 place-items-center rounded-[32px] border border-gold-400/20 bg-[#2a2a30] text-5xl font-black text-gold-400 shadow-glow">
          PH
        </div>

        <h1 className="text-3xl font-semibold tracking-normal text-white">{profile.name}</h1>
        <p className="mt-3 rounded-xl bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-200">
          {profile.title}
        </p>
        <p className="mt-2 text-sm text-slate-400">{profile.subtitle}</p>
      </div>

      <div className="my-7 h-px bg-white/10" />

      <div className="space-y-3">
        <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
        <ContactRow icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replaceAll(' ', '')}`} />
        <ContactRow icon={MapPin} label="Location" value={profile.location} />
      </div>

      <div className="mt-8 flex justify-center gap-4">
        {profile.socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-full text-slate-400 transition hover:-translate-y-1 hover:bg-white/[0.05] hover:text-gold-400"
            href={href}
            rel="noreferrer"
            target="_blank"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </aside>
  );
}
