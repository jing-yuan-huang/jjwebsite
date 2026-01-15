// components/TrustByMarquee.tsx
type Logo = {
    alt: string;
    src: string; // 放在 /public/logos/xxx.svg 或 .png
    width?: number; // 可不填
    height?: number; // 可不填
  };
  
  const logos: Logo[] = [
    { alt: "enovis", src: "/logos/enovis.svg" },
    { alt: "ganzin", src: "/logos/ganzin.svg" },
    { alt: "cellid", src: "/logos/cellid.svg" },
    { alt: "PORTECH", src: "/logos/portech.svg" },
    { alt: "Epson", src: "/logos/epson.svg" },
    { alt: "Avegant", src: "/logos/avegant.svg" },
    { alt: "Foxconn", src: "/logos/Foxconn.svg" },
    { alt: "qualcom", src: "/logos/qualcom.svg" },
    { alt: "GIS", src: "/logos/gis.svg" },
  ];
  
  export default function TrustByMarquee() {
    
    const track = [...logos, ...logos];
  
    return (
      <section className="w-full">
        <div className=" px-6 py-8">
         
  
          <div className= "relative overflow-hidden bg-white">

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-56 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-56 bg-gradient-to-l from-white via-white/90 to-transparent" />


          <div className="trustby-track flex w-max items-center gap-12 py-4">
            {track.map((logo, idx) => (
              <div
                key={`${logo.alt}-${idx}`}
                className="flex items-center justify-center"
              >
                <div className="h-8 w-28 md:h-10 md:w-32 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
            
          </div>
        </div>
      </section>
    );
  }
  