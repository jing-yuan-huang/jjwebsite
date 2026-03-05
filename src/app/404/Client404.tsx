// app/404/Client404.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function Client404() {
  const sp = useSearchParams();
  const from = sp.get("from");

  return (
    <p style={{ opacity: 0.8 }}>
      {from ? `From: ${from}` : ""}
    </p>
  );
}