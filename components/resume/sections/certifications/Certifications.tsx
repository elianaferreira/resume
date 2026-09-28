import { SectionHeading } from "../../SectionHeading";
import { certificationsData } from "./data";

export function Certifications() {
  return (
    <section>
      <SectionHeading variant="inverted">Certifications</SectionHeading>

      <div className="flex flex-col gap-3">
        {certificationsData.map((cert) => (
          <div key={cert.name}>
            <h3 className="text-sm font-semibold text-white/90">
              {cert.name}
            </h3>
            <p className="text-xs text-white/70">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
