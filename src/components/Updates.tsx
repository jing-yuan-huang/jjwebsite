type UpdateItem = {
    id: string;
    date: string;
    title: string;
    location: string;
    bg: string; // tailwind bg class
    text?: string; // 文字顏色（可選）
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
         <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-32 mt-30">
            {/* ===== Header ===== */}
            <div className="mb-12 flex items-start justify-between">
            <h2 className="type-[42px] md:text-[54px] font-semibold tracking-tight text-neutral-900">
                UPDATES
            </h2>

            </div>

            {/* ===== Rows ===== */}
            <div className="space-y-6">
            {UPDATES.map((item) => (
                
                <div
                    className={[
                    "grid grid-cols-1 md:grid-cols-12 items-center px-6 py-10",
                    "border border-transparent",
                    item.bg,
                    item.text ?? "text-white",
                    // hover 效果
                    "transition-all duration-300",
                    "group-hover:brightness-110",
                    ].join(" ")}
                >
                    
                    {/* Left: Date */}
                    <div className="md:col-span-6">
                    <div className="text-3xl md:text-4xl font-semibold tracking-tight">
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

                        {/* hover 箭頭 */}
                        <span
                        className={[
                            "text-lg opacity-0 translate-x-[-4px]",
                            "transition-all duration-300",
                            "group-hover:opacity-100 group-hover:translate-x-0",
                        ].join(" ")}
                        aria-hidden
                        >
                        </span>
                    </div>
                    </div>
                </div>
               
            ))}
            </div>
        </div>
        </section>
    );
    }

  