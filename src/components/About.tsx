export default function AboutPage() {
    return (
      <main className="bg-white">
        <section className="mx-auto px-15 py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 items-start">
            {/* Left title */}
            <div className="md:col-span-4">
              <h1 className="whitespace-pre-line text-5xl md:text-6xl leading-[0.95] tracking-tight text-neutral-900">
                ABOUT{"\n"}JORJIN
              </h1>
            </div>
  
            {/* Right copy */}
            <div className="md:col-span-8 md:pt-2">
              <p className="max-w-2xl text-center md:text-right ml-auto text-base md:text-lg font-medium leading-snug text-neutral-900">
                JORJIN Technologies specializes in AR/XR smart glasses <br/>
                and immersive interaction solutions
              </p>
  
              <p className="mt-4 max-w-2xl text-center md:text-right ml-auto text-sm leading-relaxed text-neutral-500">
                With integrated expertise in optics, sensing, and communication, we
                provide end-to-end ODM services, supporting businesses, academia,
                and public sectors in creating smarter, immersive experiences.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  