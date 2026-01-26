type UpdateItem = {
    id: string;
    date: string;
    title: string;
    location: string;
    bg: string; // tailwind bg class
    text?: string; 
  };
  
  const UPDATES: UpdateItem[] = [
    {
      id: "ces",
      date: "0106 - 0109",
      title: "2026 CES",
      location: "Las Vegas",
      bg: "bg-[#A6261C]",
      text: "text-white",
   
    },
    {
      id: "milo",
      date: "0131 - 0202",
      title: "2026 MILO",
      location: "Milan",
      bg: "bg-[#E0472A]",
      text: "text-white",
    },
    {
      id: "mwc",
      date: "0302 - 0305",
      title: "2026 MWC",
      location: "Barcelona",
      bg: "bg-[#0F171A]",
      text: "text-white",
    },
  ];
  

  export default function Updates() {
    return (
        <section className="bg- white">
         <div className="mx-auto mt-30 ">
            {/* ===== Header ===== */}
            <div className="mx-auto max-w-8xl px-6 md:px-15">
            <h2 className="type-[42px] md:text-[96px] tracking-tight text-neutral-900">
                News
            </h2>

            </div>

            {/* ===== Rows ===== */}
            <div>
              {UPDATES.map((item) => (
                <div
                  key={item.date + item.title}
                  className={[
                    "w-full py-10",
                    item.bg,
                    item.text ?? "text-white",
                    "transition-all duration-300 hover:brightness-110",
                  ].join(" ")}
                >
                  {/* Text container */}
                  <div className="mx-auto max-w-8xl px-6 md:px-15">
                    <div className="flex items-center justify-between">
                      {/* Date */}
                      <div className="text-3xl md:text-4xl tracking-tight">
                        {item.date}
                      </div>

                      {/* Title + Location */}
                      <div className="text-right">
                        <div className="text-3xl md:text-4xl tracking-tight">
                          {item.title}
                        </div>
                        <div className="mt-2 text-sm opacity-80">
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>
        </section>
    );
    }

  