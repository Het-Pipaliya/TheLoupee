import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Hand-Fabricated",
    body: "Nearly every piece begins as raw metal in the hands of our goldsmiths — cut, soldered, and shaped on the bench, not cast from a mold.",
  },
  {
    number: "02",
    title: "Responsibly Sourced",
    body: "Every diamond and gemstone is traceable, conflict-free, and independently graded before it ever reaches the workbench.",
  },
  {
    number: "03",
    title: "Made to Endure",
    body: "Each commission includes lifetime cleaning, inspection, and complimentary resizing within the first year — built to be handed down.",
  },
];

export default function CraftsmanshipStory() {
  return (
    <section className="section-space border-t border-line bg-ivory">
      <div className="container-fluid grid gap-16 md:grid-cols-2 md:gap-20">
        <div className="md:sticky md:top-32 md:h-fit">
          <PlaceholderImage ratio="portrait" label="In the atelier" />
        </div>
        <div className="flex flex-col gap-14">
          {steps.map((step) => (
            <Reveal key={step.number}>
              <div className="border-t border-line pt-8">
                <span className="font-display text-2xl text-gold">{step.number}</span>
                <h3 className="mt-3 text-sm uppercase tracking-[0.2em]">{step.title}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-charcoal/75">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
