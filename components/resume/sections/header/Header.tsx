import { CopyableEmail } from "./CopyableEmail";
import { headerData } from "./data";

export function Header() {
  const { name, title, email, linkedinLabel, linkedinUrl, location } =
    headerData;

  return (
    <header className="border-b-2 border-primary bg-white px-6 py-6 md:px-10 md:py-8 print:px-8 print:py-6">
      <h1 className="text-2xl font-bold md:text-3xl tracking-tight text-primary print:text-2xl">
        {name}
      </h1>
      <p className="mt-1 text-lg text-zinc-700 print:text-base">{title}</p>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-600">
        <CopyableEmail email={email} />
        <a
          href={linkedinUrl}
          className="text-primary underline-offset-2 hover:underline"
        >
          {linkedinLabel}
        </a>
        <span>{location}</span>
      </div>
    </header>
  );
}
