import Innovations from "../components/sections/Innovations";
//import TrustByMarquee from "../components/TrustByMarquee";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import Updates from "../components/News";
import About from "../components/About";
//import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main className="w-full" lang="en">
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>
      {/*
      <section>
        <TrustByMarquee />
      </section>
      */}

      <section id="smartglasses">
        <Innovations variant="smartglasses" locale="en" />
      </section>

      <section id="module">
        <Innovations variant="module" locale="en" />
      </section>

      <section id="metaspace">
        <Innovations variant="metaspace" locale="en" />
      </section>

      {/*
      <section id="updates">
        <Updates locale="en" />
      </section>
      */}

      <section id="about">
        <About locale="en" />
      </section>
        
      
    </main>
  );
}
