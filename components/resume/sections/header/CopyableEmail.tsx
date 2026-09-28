"use client";

import { useState } from "react";

export function CopyableEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access can be denied (e.g. insecure context); fail silently.
    }
  };

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={handleClick}
        className="cursor-pointer p-0 underline-offset-2 hover:underline print:no-underline"
      >
        {email}
      </button>

      {copied && (
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-zinc-800 px-2 py-1 text-xs whitespace-nowrap text-white shadow print:hidden">
          Copied to clipboard!
        </span>
      )}
    </span>
  );
}
