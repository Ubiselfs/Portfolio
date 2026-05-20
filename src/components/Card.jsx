export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.025] p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-gold-400/30 ${className}`}
    >
      {children}
    </div>
  );
}
