// app/404/page.tsx
import { Suspense } from "react";
import Client404 from "./Client404";

export default function Page404() {
  return (
    <div style={{ padding: 24 }}>
      <h1>404</h1>
      <p>Page not found.</p>

      <Suspense fallback={null}>
        <Client404 />
      </Suspense>
    </div>
  );
}