export default function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 mask-fade-y" />
      <div className="absolute -top-40 left-[8%] h-[36rem] w-[36rem] rounded-full bg-accent-cyan/20 blur-[130px] animate-aurora" />
      <div
        className="absolute top-[14%] right-[4%] h-[32rem] w-[32rem] rounded-full bg-accent-purple/20 blur-[130px] animate-aurora"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-[-12%] left-[30%] h-[30rem] w-[30rem] rounded-full bg-accent-pink/15 blur-[140px] animate-aurora"
        style={{ animationDelay: "-13s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-background)_92%)]" />
    </div>
  );
}
