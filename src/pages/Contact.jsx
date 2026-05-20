import { Send } from 'lucide-react';
import { data } from '../data.js';
import Card from '../components/Card.jsx';
import IconBadge from '../components/IconBadge.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

function Field({ label, type = 'text', textarea = false }) {
  const base =
    'w-full rounded-2xl border border-white/10 bg-ink-900 px-5 py-4 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-gold-400/60 focus:ring-4 focus:ring-gold-400/10';

  if (textarea) {
    return <textarea aria-label={label} className={`${base} min-h-40 resize-y`} name={label.toLowerCase()} placeholder={label} />;
  }

  return <input aria-label={label} className={base} name={label.toLowerCase().replaceAll(' ', '-')} placeholder={label} type={type} />;
}

export default function Contact() {
  return (
    <>
      <SectionTitle>Contact</SectionTitle>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <h3 className="text-2xl font-bold text-white">Contact Information</h3>
          <p className="mt-3 leading-7 text-slate-400">
            Open to internship opportunities, collaboration, and real-world projects in web, mobile, UI/UX, and e-commerce.
          </p>
          <div className="mt-6 space-y-4">
            {data.contactItems.map(({ label, value, icon }) => (
              <div key={label} className="flex items-center gap-4">
                <IconBadge icon={icon} />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
                  <p className="font-semibold text-slate-100">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-2xl font-bold text-white">Contact Form</h3>
          <form className="mt-6 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" />
              <Field label="Email Address" type="email" />
            </div>
            <Field label="Subject" />
            <Field label="Message" textarea />
            <div className="flex justify-end">
              <button
                className="inline-flex items-center gap-3 rounded-2xl border border-gold-400/20 bg-gold-400/10 px-6 py-4 font-bold text-gold-300 shadow-glow transition hover:-translate-y-1 hover:bg-gold-400 hover:text-ink-950"
                type="button"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}
