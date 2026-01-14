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
            <div className="mb-8 flex items-start justify-between px-15">
            <h2 className="type-[42px] md:text-[54px] tracking-tight text-neutral-900">
                UPDATES
            </h2>

            </div>

            {/* ===== Rows ===== */}
            <div>
            {UPDATES.map((item) => (
                
                <div
                    className={[
                    "grid grid-cols-1 md:grid-cols-12 items-center px-6 py-10",
                    "border border-transparent",
                    item.bg,
                    item.text ?? "text-white",

                    "transition-all duration-300",
                    "group-hover:brightness-110",
                    ].join(" ")}
                >
                    
                    {/* Left: Date */}
                    <div className="md:col-span-6 px-10">
                    <div className="text-3xl md:text-4xl  tracking-tight">
                        {item.date}
                    </div>
                    </div>

                    {/* Right: Event */}
                    <div className="md:col-span-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                        <div>
                        <div className="text-xl md:text-2xl font-semibold">
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

  