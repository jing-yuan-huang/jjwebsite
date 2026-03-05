import { Suspense } from "react";
import InvestorPage from "@/components/investor/InvestorPage";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <InvestorPage />
    </Suspense>
  );
}
