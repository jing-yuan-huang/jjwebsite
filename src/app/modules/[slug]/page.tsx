import { notFound } from "next/navigation";
import ModuleDetail from "@/components/modules/ModuleDetail";
import { MODULES } from "@/app/data/modules";
import type { ModuleData } from "@/app/data/modules";

type Params = { slug: ModuleData["slug"] };

function isModuleSlug(slug: string): slug is ModuleData["slug"] {
  return slug in MODULES;
}

export function generateStaticParams(): Params[] {
  return Object.keys(MODULES).map((slug) => ({
    slug: slug as ModuleData["slug"],
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!isModuleSlug(slug)) return notFound();

  const selectedModule = MODULES[slug];
  return <ModuleDetail module={selectedModule} />;
}
