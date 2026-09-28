import { SectionHeading } from "../../SectionHeading";
import { summaryData } from "./data";

export function Summary() {
  return (
    <section>
      <SectionHeading>Professional Summary</SectionHeading>
      <p className="text-sm leading-relaxed text-zinc-700 whitespace-break-spaces">
        {summaryData.paragraph}
      </p>
    </section>
  );
}
