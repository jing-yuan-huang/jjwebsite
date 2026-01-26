export default function SmartGlassesHero() {
    return (
      <section className="relative isolation-isolate mt-40 mb-20">
        {/* Outer container  */}
        <div className="mx-auto max-w-8xl px-6 md:px-15">
          {/* Inner container – 影片往內縮 */}
          <div className="px-4 md:px-10 lg:px-25">
            <div className="relative mt-[3vw] aspect-[16/8] overflow-hidden">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/odm2.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
  
        {/* Overlay content */}
        <div className="pointer-events-none absolute inset-0">
          <div className="mx-auto max-w-8xl px-6 md:px-15 h-full">
            <div className="grid h-full grid-cols-12 items-center">
              {/* Left title */}
              <div className="col-span-7 md:col-span-5">
                <h2 className=" md:text-[clamp(48px,5vw,96px)] leading-[0.95] text-white mix-blend-difference tracking-tight">
                  Smart<br />
                  Glasses
                </h2>
              </div>
  
              {/* Spacer */}
              <div className="hidden md:block md:col-span-4" />
  
              {/* Right tagline */}
              <div className="col-span-5 md:col-span-3 text-right mt-2 md:mt-0">
                <p className="text-[clamp(16px,3.8vw,20px)] md:text-[2.5vw] leading-[0.95] text-white mix-blend-difference tracking-tight">
                  Design the Future <br />
                  Together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  