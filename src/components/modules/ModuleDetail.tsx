import type { ModuleData } from "@/app/data/modules";
/* eslint-disable @next/next/no-img-element */

export default function ModuleDetail({
  module,
}: {
  module: ModuleData;
}) {
  const hasKeyFeatures = module.keyFeatures.length > 0;
  const shouldShowDatasheetSection =
    module.showDatasheetSection ?? (Boolean(module.datasheetUrl) || module.slug === "wifi01");

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-neutral-500 via-neutral-300 to-neutral-100">
        <div className="mx-auto max-w-8xl px-6 md:px-15 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 items-center">
            {/* Left list */}
            <div className="md:col-span-4">
              <div className="text-left tracking-tight text-[clamp(44px,5vw,96px)] leading-[0.8] text-neutral-900">
                <span className="inline-flex items-baseline gap-2">
                  <span>{module.listTitle}</span>
                  {module.listSuffix ? (
                    <span className="text-[0.45em] tracking-tight text-current/70">
                      {module.listSuffix}
                    </span>
                  ) : null}
                </span>
              </div>
            </div>

            {/* Center image */}
            <div className="md:col-span-4 flex items-center justify-center">
              <div className="aspect-square w-full max-w-[320px] flex items-center justify-center">
                <img
                  src={module.heroImage}
                  alt={module.title}
                  className="max-h-[80%] max-w-[80%] object-contain"
                />
              </div>
            </div>

            {/* Right detail */}
            <div className="md:col-span-4">
              <div className="text-right">
                <div className="text-[clamp(20px,2.4vw,32px)] tracking-tight text-neutral-900">
                  {module.subtitle}
                </div>
                <div className="mt-3 text-[clamp(14px,1.4vw,18px)] leading-snug text-neutral-700 underline">
                  {module.topDetail}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-6 md:px-15 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="text-[clamp(28px,3vw,44px)] leading-[0.9] tracking-tight text-neutral-900">
              Module
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-6">
            <p className="max-w-3xl text-[clamp(15px,1.4vw,18px)] leading-relaxed text-neutral-700">
              {module.moduleBody}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-8xl px-6 md:px-15">
        <div className="h-px w-full bg-neutral-200" />
      </div>

      {hasKeyFeatures ? (
        <section className="mx-auto max-w-8xl px-6 md:px-15 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="text-[clamp(28px,3vw,44px)] leading-[0.9] tracking-tight text-neutral-900">
                Key Features
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-6">
              <div className="space-y-4 text-[clamp(14px,1.2vw,16px)] text-neutral-700">
                {module.keyFeatures.map((feature, idx) => (
                  <div key={`${feature}-${idx}`} className="border-b border-black pb-3">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {module.comparisonTitle ? (
        <section className="mx-auto max-w-8xl px-6 md:px-15 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <h2 className="text-[clamp(28px,3vw,44px)] leading-[0.9] tracking-tight text-neutral-900">
                {module.comparisonTitle}
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-6">
              {module.comparisonRows?.length ? (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[860px] border border-neutral-300 text-left text-[clamp(13px,1.1vw,15px)] text-neutral-700">
                    <thead className="bg-neutral-100 text-neutral-900">
                      <tr className="border-b border-neutral-300">
                        <th className="px-4 py-3 border-r border-neutral-300">Advantage Area</th>
                        <th className="px-4 py-3 border-r border-neutral-300">mmWave Radar</th>
                        <th className="px-4 py-3 border-r border-neutral-300">Camera Sensor</th>
                        <th className="px-4 py-3">PIR Sensor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {module.comparisonRows.map((row) => (
                        <tr key={row.advantageArea} className="border-b border-neutral-200 align-top">
                          <td className="px-4 py-3 border-r border-neutral-200 font-medium text-neutral-900">
                            {row.advantageArea}
                          </td>
                          <td className="px-4 py-3 border-r border-neutral-200">{row.mmwaveRadar}</td>
                          <td className="px-4 py-3 border-r border-neutral-200">{row.cameraSensor}</td>
                          <td className="px-4 py-3">{row.pirSensor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <div className="mx-auto max-w-8xl px-6 md:px-15">
        <div className="h-px w-full bg-neutral-200" />
      </div>

      <section className="mx-auto max-w-8xl px-6 md:px-15 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="text-[clamp(28px,3vw,44px)] leading-[0.9] tracking-tight text-neutral-900">
              {module.specificationTitle ?? "Specification"}
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-6">
            <div className="space-y-4 text-[clamp(14px,1.2vw,16px)] text-neutral-700">
              {module.specifications.map((row, idx) => (
                <div key={`${row.label}-${idx}`} className="flex items-start justify-between gap-6 border-b border-neutral-200 pb-3">
                  <div className="w-[40%] text-neutral-800">{row.label}</div>
                  <div className="w-[60%] text-right text-neutral-700">{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-8xl px-6 md:px-15">
        <div className="h-px w-full bg-neutral-200" />
      </div>

      {shouldShowDatasheetSection ? (
        <section className="mx-auto max-w-8xl px-6 md:px-15 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="text-[clamp(28px,3vw,44px)] leading-[0.9] tracking-tight text-neutral-900">
                Datasheet
                <br />
                Download
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-6">
              {module.datasheetUrl ? (
                <a
                  href={module.datasheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[clamp(14px,1.2vw,16px)] text-neutral-700 underline"
                >
                  Download
                </a>
              ) : (
                <span className="text-[clamp(14px,1.2vw,16px)] text-neutral-500">Coming soon</span>
              )}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
