import { SectionHeading } from "../../SectionHeading";
import { educationData } from "./data";

export function Education() {
  return (
    <section>
      <SectionHeading>Education</SectionHeading>

      <div className="flex flex-col gap-3">
        {educationData.map((entry) => (
          <div key={entry.degree}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-sm font-semibold text-zinc-900">
                {entry.degree}
              </h3>
              <span className="text-xs text-zinc-500">{entry.year}</span>
            </div>
            <p className="text-xs text-zinc-500">
              {entry.university} &middot; {entry.college}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
