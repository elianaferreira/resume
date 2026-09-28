export function SectionHeading({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "inverted";
}) {
  return (
    <h2
      className={`mb-3 text-xs font-bold uppercase tracking-widest print:break-after-avoid ${
        variant === "inverted" ? "text-white" : "text-primary"
      }`}
    >
      {children}
    </h2>
  );
}
