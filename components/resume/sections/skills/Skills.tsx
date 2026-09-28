import { SectionHeading } from "../../SectionHeading";
import { skillsData } from "./data";

export function Skills() {
  return (
    <section>
      <SectionHeading variant="inverted">Skills</SectionHeading>

      <div className="flex flex-col gap-3">
        {skillsData.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-semibold text-white/90">
              {group.category}
            </h3>
            <p className="text-sm leading-relaxed text-white/75">
              {group.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
