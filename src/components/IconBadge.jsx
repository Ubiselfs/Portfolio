export default function IconBadge({ icon: Icon, className = '' }) {
  return (
    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-ink-800 text-gold-400 ${className}`}>
      <Icon size={22} />
    </span>
  );
}
