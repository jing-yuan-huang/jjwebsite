export default function MetaSpaceBanner() {
    return (
      <div className="border border-neutral-200 bg-neutral-950">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/25" />
  
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/metaspace.mp4"
            autoPlay
            muted
            loop
            playsInline
          />


        <div className="mx-auto max-w-8xl px-6 md:px-15">
  
          <div className="absolute top-6 md:top-15">
            <div className="whitespace-pre-line  text-[clamp(36px,4vw,96px)] tracking-tight leading-none text-white invert-header">
              MetaSpace{"\n"}Platform
            </div>
          </div>
  
          <div className="absolute  bottom-6 md:bottom-15 tracking-tight text-white/80">
            <div className="  text-[clamp(14px,3vw,40px)] leading-snug invert-header">
              Experience the Future.
              <br />
              Today with MetaSpace.
            </div>
          </div>
  
          <img
            src="/images/jorjin-logo.svg"
            alt="JORJIN"
            className="
                absolute
                right-[clamp(16px,4vw,60px)]
                bottom-[clamp(16px,4vw,60px)]
                h-[clamp(18px,3vw,28px)]
                w-auto
                opacity-90
            "
           />

        </div>


        </div>
      </div>
    );
  }
  