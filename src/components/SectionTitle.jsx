export default function SectionTitle({ children }) {
  return (
    <header className="mb-8 lg:pr-[430px]">
      <h2 className="text-4xl font-bold tracking-normal text-white sm:text-5xl">{children}</h2>
      <div className="mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-gold-300 to-gold-500" />
    </header>
  );
}
