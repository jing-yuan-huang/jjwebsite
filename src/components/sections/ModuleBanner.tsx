import { ArrowIcon } from "../ui/icons/ArrowIcon";

export default function ModuleSection() {
    return (
      <section id="module" className="bg-white">
        <div className="mx-auto max-w-8xl px-6 py-10 md:px-15 md:py-[clamp(64px,8vw,160px)] ">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left text */}
            <div className="col-span-12 md:col-span-4 relative flex flex-col justify-end items-start h-full">
                {/*
                <span
                    className="absolute left-0 top-1 text-neutral-900 "
                >
                    <ArrowIcon className="w-[clamp(28px,4vw,56px)] h-[clamp(28px,4vw,56px)]" />
                </span>
                */}

                <h2 className="text-[clamp(44px,5vw,96px)] leading-[0.95] tracking-tight text-neutral-900">
                    AR Module
                </h2>

                <p className="mt-3 text-[clamp(18px,2vw,28px)] tracking-tight text-neutral-900/80 leading-[0.95]">
                    Offering a complete <br />
                    range of wireless modules<br />
                    covering WiFi, Sigfox, <br />
                    BT/BLE connectivity.
                </p>
            </div>

  
            {/* Right image */}
            <div className="col-span-12 md:col-span-8">
              <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100">

              <video
                className="h-full w-full object-cover"
                src="/videos/module.mp4"
                autoPlay
                muted
                loop
                playsInline
                />

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
   