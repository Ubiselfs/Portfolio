export default function Navbar({ navItems, activePage, onPageChange }) {
  return (
    <nav className="border-b border-white/10 bg-ink-800/80 px-3 py-3 backdrop-blur lg:absolute lg:right-0 lg:top-0 lg:rounded-bl-[26px] lg:border-l">
      <ul className="flex flex-wrap justify-center gap-1 sm:gap-2">
        {navItems.map((item) => (
          <li key={item}>
            <button
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition sm:px-5 ${
                activePage === item
                  ? 'bg-gold-400/10 text-gold-400'
                  : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
              }`}
              type="button"
              onClick={() => onPageChange(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
