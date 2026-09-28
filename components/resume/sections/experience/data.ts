import type { ExperienceData } from "./types";

export const experienceData: ExperienceData = [
  {
    company: "Willdom",
    startDate: "09/2023",
    endDate: "Present",
    roles: [
      {
        title: "Senior Mobile Developer",
        projects: [
          {
            name: "Application for a Financial and Card Processor Company",
            responsibilities: [
              "Served as the Project Team Lead.",
              "Wrote technical documentation for the newly implemented features.",
              "Developed a native Android application in Kotlin, designed to run on POS devices, enabling cash register management and service payments.",
            ],
          },
          {
            name: "Applications for a Financial and Card Processor Company",
            responsibilities: [
              "Maintaining existing Android and iOS native applications for a financial company, that are widely used in Paraguay.",
              "Redesign of existing Android Native application that works with a POS to facilitate sales for commerces.",
              "Maintained a native Android application for data processing and onboarding of new users, ensuring proper handling of sensitive data and photographs.",
            ],
          },
          {
            name: "KYC Application",
            responsibilities: [
              "Implemented a mechanism for scanning and processing personal documents using a third-party SDK in a native Android application.",
            ],
          },
          {
            name: "KYC-Type Application for the National Government",
            responsibilities: [
              "Designed and developed a native Android application for data processing and user onboarding, managing sensitive data, geolocation, and photographs.",
              "Maintained the application for exclusive use in the Itapúa department, with usage restrictions based on geolocation.",
            ],
          },
        ],
      },
      {
        title: "Full-stack Developer",
        projects: [
          {
            name: "System to help nurses to apply to shifts in hospitals",
            responsibilities: [
              "Developed a native application to help nurses to apply to shifts in hospitals.",
              "Developed a web application for administrators to manage shifts and positions.",
              "Developed the backend system in which the mobile and the web app depend on.",
            ],
          },
          {
            name: "System to track and monitor vehicles",
            responsibilities: [
              "Redesign of an existing system that manages high volumes of data monitoring automobile tracking systems.",
            ],
          },
        ],
      },
      {
        title: "Front End Developer",
        projects: [
          {
            name: "System to search for people information and administrate the access to those reports",
            responsibilities: [
              "Developed a NextJS application to help users with the administration of their accounts.",
              "Redesigned a ReactJS application to retrieve reports on individuals and companies.",
            ],
          },
          {
            name: "Application to connect recreational property owners with users",
            responsibilities: [
              "Participated in the discovery sessions to evaluate client engineering workflows, identifying the complete absence of a QA process as a critical bottleneck for platform stability.",
              "Mapped core user flows and critical system workflows to define a prioritized roadmap for automated testing coverage and quality assurance adoption.",
              "Designed and implemented comprehensive end-to-end and unit test suites targeted directly at high-risk user flows, establishing the client's baseline test coverage.",
              "Engineered CI/CD pipelines for both web and Android applications to streamline build, test, and deployment workflows.",
            ],
          },
        ],
      },
    ],
  },
  {
    company: "Roshka S.A.",
    startDate: "07/2014",
    endDate: "09/2017",
    roles: [
      {
        title: "Mobile Developer",
        projects: [
          {
            name: "Native Application for a Multinational Bank",
            responsibilities: [
              "Developed an Android application for requesting payments and paying received requests.",
            ],
          },
          {
            name: "Hybrid Application for a Multinational Bank",
            responsibilities: [
              "Maintained existing Android and iOS hybrid applications.",
            ],
          },
        ],
      },
    ],
  },
];
