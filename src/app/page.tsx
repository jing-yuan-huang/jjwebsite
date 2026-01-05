import Innovations from "../components/Innovations";
import TrustByMarquee from "../components/TrustByMarquee";
import Updates from "../components/Updates";
import About from "../components/About";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main className=" w-full">

      <section className="relative h-screen w-full  overflow-hidden">

          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

      </section>
  
      <section >
        <TrustByMarquee />
        <section id="innovations">
          <Innovations />
        </section>
        <section  id="updates">
          <Updates />
        </section>
        <section id="about">
          <About />
        </section>
        <Contact/>

      </section>
      
    </main>

    


  );
}
