import Innovations from "../../components/sections/Innovations";
import TrustByMarquee from "../../components/TrustByMarquee";
import Updates from "../../components/News";
import About from "../../components/About";
//import Contact from "../../components/Contact";

export default function HomePageZh() {
  return (
    <main className="w-full" lang="zh-Hant">
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

      <section>
        <TrustByMarquee />
      </section>

      <section id="smartglasses">
        <Innovations variant="smartglasses" locale="zh" />
      </section>

      <section id="module">
        <Innovations variant="module" locale="zh" />
      </section>

      <section id="metaspace">
        <Innovations variant="metaspace" locale="zh" />
      </section>

      <section id="updates">
        <Updates locale="zh" />
      </section>

      <section id="about">
        <About locale="zh" />
      </section>
    </main>
  );
}
