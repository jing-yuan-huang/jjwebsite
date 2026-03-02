export type TextAlign = "left" | "center" | "right";


export type TitleCue = {
    id: string;
    start: number; 
    end: number;   
    title: string;
    subtitle?: string;

    // per-cue style (optional)
    align?: TextAlign;
    titleColor?: string;     // e.g. "#fff", "rgba(0,0,0,.9)"
    subtitleColor?: string;
  };
  
  export const TITLE_CUES: TitleCue[] = [
    {
      id: "t1",
      start: 2.5,
      end: 5.0,
      title: "Only 46g",
      subtitle: "total system weight\nultra-light design for long-duration wear",
      align: "center",
      titleColor: "#000000",
      subtitleColor: "rgba(0,0,0,0.75)",
    },
    {
      id: "t2",
      start: 6.0,
      end: 9.0,
      title: "50% smaller",
      subtitle: "next-generation eye-tracking module more lighter, more compact, improved integration",
      align: "left",
      titleColor: "#000000",
      subtitleColor: "rgba(0,0,0,0.75)",
    },
    {
      id: "t3",
      start: 9.14,
      end: 10.5,
      title: "Detachable NOSE-PAD",
      subtitle: "Enabling personal sized ergonomic comfort.",
      align: "center",
      titleColor: "#000000",
      subtitleColor: "rgba(0,0,0,0.75)",
    },
    {
      id: "t4",
      start: 11.1,
      end: 13,
      title: "2000 nits Micro-LED ​full-color display (sRGB)​",
      subtitle: "high brightness, clear visibility, true color​​",
      align: "center",
      titleColor: "#000000",
      subtitleColor: "rgba(0,0,0,0.75)",
    },
    {
      id: "t5",
      start:16 ,
      end:18 ,
      title: "Integrated ECD electrochromic module",
      subtitle: "adaptive light control across environments Transmittance (with AR) 25 ~ 80%​",
      align: "center",
      titleColor: "#000000",
      subtitleColor: "rgba(0,0,0,0.75)",
    },
    {
      id: "t6",
      start: 20,
      end: 21,
      title: "5MP pixel camera",
      subtitle: "​",
      align: "right",
      titleColor: "#000000",
      subtitleColor: "rgba(0,0,0,0.75)",
    },
    {
      id: "t7",
      start: 23,
      end: 25,
      title: "Prescription lens compatibility",
      subtitle: "seamless AR experience for myopic users​",
      align: "right",
      titleColor: "#000000",
      subtitleColor: "rgba(0,0,0,0.75)",
    },
  ];

  export const DEFAULT_CUE_STYLE = {
    align: "center" as TextAlign,
    titleColor: "#000000",
    subtitleColor: "#000000",
  };
  
  // ===== align mapping =====
 export const alignClassMap: Record<TextAlign, string> = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };