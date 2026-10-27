import { Header } from "./sections/header/Header";
import { Summary } from "./sections/summary/Summary";
import { Experience } from "./sections/experience/Experience";
import { Education } from "./sections/education/Education";
import { Skills } from "./sections/skills/Skills";
import { Certifications } from "./sections/certifications/Certifications";
import { Languages } from "./sections/languages/Languages";

export function Resume() {
  return (
    <div className="resume-page mx-auto flex w-[8.5in] min-h-[11in] flex-col bg-white text-zinc-900 shadow-lg print:w-auto print:min-h-0 print:shadow-none print:bg-transparent">
      <div
        aria-hidden
        className="fixed inset-y-0 left-0 -z-10 hidden w-[2.75in] bg-primary print:block"
      />

      <Header />

      <div className="flex flex-1">
        <aside className="flex w-[2.75in] flex-col gap-8 bg-primary px-6 py-8 print:box-decoration-clone print:px-5 print:py-5">
          <Skills />
          <Education />
          <Certifications />
          <Languages />
        </aside>

        <main className="flex flex-1 flex-col gap-8 px-8 py-8 print:box-decoration-clone print:px-6 print:py-5">
          <Summary />
          <Experience />
        </main>
      </div>
    </div>
  );
}
