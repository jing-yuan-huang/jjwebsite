export type InnovationItem = {
    id: string;
    title: string;
    subtitle: string;
    video: string;
    theme?: "light" | "dark";
    href: string;
  };
  
  export const INNOVATION_ITEMS: InnovationItem[] = [
    {
      id: "hj1",
      title: "HJ1\nUltra-Light",
      subtitle: "ULTRA-LIGHT AR GLASSES",
      video: "/videos/hj1.mp4",
      theme: "light",
      href: "/products/hj1",
    },
    {
      id: "c9t2",
      title: "C9T2\nUltra-Light",
      subtitle: "ULTRA-LIGHT AR GLASSES",
      video: "/videos/c9t2.mp4",
      theme: "dark",
      href: "/products/c9t2",
    },
    {
      id: "j7m",
      title: "J7M\nHeavy Duty",
      subtitle: "INDUSTRIAL AR SOLUTION",
      video: "/videos/j7m.mp4",
      theme: "light",
      href: "/products/j7m",
    },
  ];
  