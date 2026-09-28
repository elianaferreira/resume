import { SectionHeading } from "../../SectionHeading";
import { experienceData } from "./data";

export function Experience() {
  return (
    <section>
      <SectionHeading>Professional Experience</SectionHeading>

      <div className="flex flex-col gap-6">
        {experienceData.map((company) => (
          <div key={company.company} className="print:break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-m font-bold text-zinc-900">
                {company.company}
              </h3>
              <span className="text-xs text-zinc-500">
                {company.startDate} &ndash; {company.endDate}
              </span>
            </div>

            <div className="mt-2 flex flex-col gap-4">
              {company.roles.map((role) => (
                <div key={role.title} className="print:break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h4 className="text-sm font-bold text-zinc-800">
                      {role.title}
                    </h4>
                  </div>

                  <div className="mt-2 flex flex-col gap-3">
                    {role.projects.map((project) => (
                      <div
                        key={project.name}
                        className="print:break-inside-avoid"
                      >
                        <h5 className="text-sm font-semibold text-zinc-600">
                          {project.name}
                        </h5>
                        <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-relaxed text-zinc-700">
                          {project.responsibilities.map((responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
