export default function Footer() {
    return (
      <footer className="bg-neutral-200 text-neutral-900">
        {/* <div className="absolute left-6 top-6 md:left-15 md:top-15"> */}
        <div className="mx-auto max-w-8xl px-6 md:px-15 pt-16 md:pt-20 pb-10">
          {/* Top row: Menu / Social / Company info */}
          <div className="grid grid-cols-12 gap-y-12 gap-x-8">
            {/* Menu */}
            <div className="col-span-12 md:col-span-3">
              <div className="text-[22px] tracking-tight">Menu</div>
              <div className="mt-4 h-px w-full bg-neutral-900/40" />
  
              <nav className="mt-6 space-y-4 text-[18px]">
                <a href="#innovations" className="underline underline-offset-4">
                  Product
                </a>
                <a href="#updates" className="block underline underline-offset-4">
                  Update
                </a>
                <a href="#about" className="block underline underline-offset-4">
                  About JORJIN
                </a>
              </nav>
            </div>
  
            {/* Social */}
            <div className="col-span-12 md:col-span-3">
              <div className="text-[22px] tracking-tight">Social</div>
              <div className="mt-4 h-px w-full bg-neutral-900/40" />
  
              <div className="mt-6 space-y-4 text-[18px]">
                <a
                  href="https://www.facebook.com/Jorjin.XR.Fusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline underline-offset-4"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/company/jorjin-technologies-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline underline-offset-4"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/channel/UC7IkoXGJ6-OxHWH61L7lDjA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline underline-offset-4"
                >
                  Youtube
                </a>
              </div>
            </div>
  
            {/* Company info (right) */}
            <div className="col-span-12 md:col-span-6">
              <div className="text-right text-[22px] tracking-tight">
                JORJIN TECHNOLOGIES INC.
              </div>
              <div className="mt-4 h-px w-full bg-neutral-900/40" />
  
              <div className="mt-6 text-right text-[18px] leading-relaxed text-neutral-900/70">
                17F, No 239, Sec. 1, Datong Rd.<br />
                Xizhi Dist., New Taipei City 22161, Taiwan
              </div>
  
              <a
                href="tel:+886226490055"
                className="mt-6 block text-right text-[18px] text-neutral-900/70 underline underline-offset-4"
              >
                +886 (2) 2649 - 0055
              </a>
            </div>
          </div>


         {/* ===== Middle: Big CTA + email ===== */}
         <div className="mt-20 md:mt-28">
            <div className="ml-auto max-w-[520px] text-right">
                <a
                href="mailto:sales@jorjin.com"
                className="inline-block text-[clamp(28px,3vw,52px)] leading-[1] tracking-tight underline underline-offset-8"
                >
                sales@jorjin.com
                </a>
                <p className="mt-4 text-[14px] leading-snug text-neutral-900/70">
                Schedule a quick call to learn how MetaSpace can turn your regional data into a powerful
                advantage.
                </p>
            </div>
        </div>


        {/* ===== Bottom row: 3 items bottom-aligned ===== */}
        <div className="mt-16 md:mt-20 grid grid-cols-12 items-end text-[18px] text-neutral-900/80">
        {/* Left */}
        <div className="col-span-12 md:col-span-4">
            {/* Left: Big title */}
       
            <div className="text-[clamp(64px,5vw,96px)] leading-[0.9] tracking-tight text-neutral-900">
            CONNECT
            <br />
            WITH US
            </div>
        
        </div>

        {/* Center */}
        <div className="col-span-12 md:col-span-4 md:text-center">
            <a href="#top" className="inline-block leading-none underline underline-offset-4">
            Back to top ↗
            </a>
        </div>

        {/* Right */}
        <div className="col-span-12 md:col-span-4 md:text-right">
            <div className="leading-none">Copyright © JORJIN 2026</div>
        </div>
        </div>

         
        </div>
      </footer>
    );
  }
  