import { Resume } from "@/components/resume/Resume";
import { PrintButton } from "@/components/PrintButton";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-100 py-10 print:bg-white print:py-0">
      <PrintButton />
      <Resume />
    </div>
  );
}
