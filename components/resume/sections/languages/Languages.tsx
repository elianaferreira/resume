import { SectionHeading } from "../../SectionHeading";
import { languagesData } from "./data";

export function Languages() {
  return (
    <section>
      <SectionHeading variant="inverted">Languages</SectionHeading>

      <div className="flex flex-col gap-3">
        {languagesData.map((language) => (
          <div key={language.name} className="print:break-inside-avoid">
            <h3 className="text-sm font-semibold text-white/90">
              {language.name}
            </h3>
            <p className="text-xs text-white/70">{language.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
