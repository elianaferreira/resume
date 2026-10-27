import { SectionHeading } from "../../SectionHeading";
import { educationData } from "./data";

export function Education() {
  return (
    <section>
      <SectionHeading variant="inverted">Education</SectionHeading>

      <div className="flex flex-col gap-3">
        {educationData.map((entry) => (
          <div key={entry.degree} className="print:break-inside-avoid">
            <h3 className="text-sm font-semibold text-white/90">
              {entry.degree}
            </h3>
            <p className="text-xs text-white/70">
              {entry.university} &middot; {entry.college}
            </p>
            <p className="text-xs text-white/60">{entry.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
