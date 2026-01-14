export default function Contact() {
  return (
    <main className="bg-white">
      <section className="mx-auto  px-15 py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 items-start">
          {/* Left title */}
          <div className="md:col-span-4">
            <h1 className="whitespace-pre-line text-5xl md:text-6xl leading-[0.95] tracking-tight text-neutral-900">
              CONTACT{"\n"}WITH US
            </h1>
          </div>

          {/* Right content */}
          <div className="md:col-span-8 text-right">
            {/* Phone */}
            <a
              href="tel:+886226490055"
              className="block text-[22px]  tracking-wide text-neutral-900"
            >
              +886 (2) 2649-0055
            </a>

            {/* Address */}
            <div className="mt-2 text-sm leading-relaxed text-neutral-500">
              17F, No 239, Sec. 1, Datong Rd., Xizhi Dist.,<br />
              New Taipei City 22161, Taiwan
            </div>

            {/* Social Icons */}
            <div className="mt-4 flex justify-end gap-3 text-neutral-400">
              <a
                href="https://www.facebook.com/Jorjin.XR.Fusion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:border-neutral-500 hover:text-neutral-600"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="mailto:sales@jorjin.com"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:border-neutral-500 hover:text-neutral-600"
                aria-label="Email"
              >
                ✉
              </a>

              <a
                href="tel:+886226490055"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:border-neutral-500 hover:text-neutral-600"
                aria-label="Phone"
              >
                ☎
              </a>

              <a
                href="linkedin.com/company/jorjin-technologies-inc./"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:border-neutral-500 hover:text-neutral-600"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="https://www.youtube.com/channel/UC7IkoXGJ6-OxHWH61L7lDjA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:border-neutral-500 hover:text-neutral-600"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
