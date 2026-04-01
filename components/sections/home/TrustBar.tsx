export function TrustBar() {
  const items = [
    "FRSC Certified",
    "NEMA Registered",
    "ISO 9001:2015",
    "NMA Partner",
    "FCT Health Approved",
    "24/7 Emergency Cover",
    "2,400+ Lives Saved",
    "50+ Certified Paramedics",
    "15-Vehicle Fleet",
  ];

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <section className="bg-bg-tertiary border-y border-navy-100 overflow-hidden py-4">
      <div className="flex whitespace-nowrap">
        <div className="marquee-track flex items-center gap-0">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
              <span className="text-[#1A1A6E] font-semibold text-sm">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
