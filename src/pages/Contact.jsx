import { useState } from 'react';
import { Send } from 'lucide-react';
import { data } from '../data.js';
import Card from '../components/Card.jsx';
import IconBadge from '../components/IconBadge.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Field({ label, name, value, onChange, type = 'text', textarea = false }) {
  const base =
    'w-full rounded-2xl border border-white/10 bg-[#101012] px-5 py-4 text-white caret-gold-400 outline-none transition placeholder:text-slate-500 focus:border-gold-400/60 focus:bg-ink-900 focus:ring-4 focus:ring-gold-400/10';

  if (textarea) {
    return (
      <textarea
        aria-label={label}
        className={`${base} min-h-40 resize-y`}
        name={name}
        onChange={onChange}
        placeholder={label}
        required
        value={value}
      />
    );
  }

  return (
    <input
      aria-label={label}
      className={base}
      name={name}
      onChange={onChange}
      placeholder={label}
      required
      type={type}
      value={value}
    />
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Formspree request failed');
      }

      setForm(initialForm);
      setStatus({ type: 'success', message: 'Message sent successfully. Thank you!' });
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email me directly.',
      });
    } finally {
      setIsSending(false);
    }
  }

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
          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" name="name" onChange={handleChange} value={form.name} />
              <Field label="Email Address" name="email" onChange={handleChange} type="email" value={form.email} />
            </div>
            <Field label="Subject" name="subject" onChange={handleChange} value={form.subject} />
            <Field label="Message" name="message" onChange={handleChange} textarea value={form.message} />

            {status.message && (
              <p
                className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
                  status.type === 'success'
                    ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                    : 'border-red-400/30 bg-red-400/10 text-red-300'
                }`}
              >
                {status.message}
              </p>
            )}

            <div className="flex justify-end max-sm:justify-stretch">
              <button
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-gold-400/20 bg-gold-400/10 px-6 py-4 font-bold text-gold-300 shadow-glow transition hover:-translate-y-1 hover:bg-gold-400 hover:text-ink-950 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-gold-400/10 disabled:hover:text-gold-300 max-sm:w-full"
                disabled={isSending}
                type="submit"
              >
                <Send size={18} />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}
