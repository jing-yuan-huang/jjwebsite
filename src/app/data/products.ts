import type { SpecBlock } from "@/types/spec";

export type Product = {
  slug:
    | "j7m"
    | "c9t2"
    | "hj1"
    | "j7ef-gaze"
    | "j7ef-plus"
    | "j7ef"
    | "j7ef-plus-hb"
    | "j7ef-plus-hh";

  // must 
  listTitle: string;
  listSubtitle: string[];
  listPic: string;
  group: "ultraLight" | "heavyDuty" | "jReality";

  // page
  hasDetailPage?: boolean;

  // detail（
  titleTop?: string;
  titleBottom?: string;
  category?: string;
  specButtonText?: string;
  heroImage?: string;
  theme?: "dark" | "light";
  heroBgClass?: string;
  gallery?: string[];
  designFeatureBlocks?: SpecBlock[];
  specBlocks?: SpecBlock[];
};

export const PRODUCTS: Record<Product["slug"], Product> = {
  
  j7m: {

    slug: "j7m",

    listTitle: "J7M \n Industrial",
    listSubtitle:[ 
      "Industrial-Grade",
       "Head-Mounted AR Solution",
      ],
    listPic: "/images/products/j7m/view-2.png",
    group: "heavyDuty",
   
    titleTop: "J7M",
    titleBottom: "Industrial",
    category: "INDUSTRIAL\nAR SOLUTION",
    specButtonText: "J7M SPEC",
    theme: "dark",
    heroBgClass: "bg-gradient-to-b from-neutral-950 to-indigo-700",
    heroImage: "/images/products/j7m/hero.png",
    gallery: [
      "/images/products/j7m/view-1.png",
      "/images/products/j7m/view-2.png",
      "/images/products/j7m/view-3.png",
      "/images/products/j7m/view-4.png",
    ],
  
  
    designFeatureBlocks: [
      {
        id: "j7m-feature",
        layout: "kv",
        title: "DESIGN FEATURE\nOF J7M",
        text: `
        Ergonomic Design: High-resolution Display
        Built-in Video Recording: Magnification
        AI-powered Assistant: Function Customization
        Enhanced Magnification: Remote Assistance
        Customizable Functions: High Resolution
        Real-time Remote Assistanc: 
        `.trim(),
      },
    ],
  
    
    specBlocks: [
      {
        id: "j7m-optic",
        layout: "kv",
        title: "Optic",
        text: `
        Solution: Binocular See-Through Display
        Display Type: 0.453" Si-OLED
        Resolution: FHD (1920 × 1080)
        FOV: 34° (120" at 5 m)
        Display Distance: 5M
        Color: 24-bit color
        Brightness: Typ. 1000 cd/m²
        `.trim(),
      },
  
    
      {
        id: "j7m-camera",
        layout: "kv",
        title: "Camera",
        text: `
        Module size (XYZ): 125 × 40 × 27 mm
        Operating temperature: 0–50°C
        Sensor: OV9282
        Baseline: 100 mm
        Full Resolution: 1280 × 800
        Binning Resolution: 640 × 400
        IR Filter: 850 nm
        FOV (Calibrated) [h×v]: 66° × 44°
        Min. Sensing Range (Full Mode): 72 cm
        Max. Sensing Range: 6 m
        Depth Accuracy: 0.3% @ 1 m
        `.trim(),

        
      },
    ],
  },
  
  hj1: {

    slug: "hj1",

    listTitle: "HJ1 \n Eye-Tracking ",
    listSubtitle:[
       "The World’s Smallest Eye-Tracking", 
       "AR Reference Platform",
    ],
    listPic:"/images/products/hj1/view-4.png",
    group: "ultraLight",

    titleTop: "HJ1",
    titleBottom: "Eye-Tracking",
    category: "ULTRA-LIGHT\nAR GLASSES",
    specButtonText: "HJ1 SPEC",
    theme: "light",
    heroBgClass: "bg-neutral-200",
    heroImage: "/images/products/hj1/hero.png",
    gallery: [
      "/images/products/hj1/view-1.png",
      "/images/products/hj1/view-2.png",
      "/images/products/hj1/view-3.png",
      "/images/products/hj1/view-4.png",
    ],

  
    designFeatureBlocks: [
      {
        id: "hj1-feature",
        layout: "kv",
        title: "DESIGN FEATURE",
        text: `
        Feature: Equipped with sRGB Micro-LED Display
        Optics: Ultra-thin Waveguide Optics
        Module: Integrated Eye-tracking Module &
        Nose-pad: Detachable Nose-pad
        Lens: Direct Prescription Lens Integration
        `.trim(),
      },
    ],

  
    specBlocks: [
      {
        id: "hj1-spec",
        layout: "kv",
        title: "Specification of\nHJ1",
        text: `
        Weight: 46g
        Material: Plastic
        Nosepads: Replaceable
        Optics technology: Waveguides
        Ocularity: Monocular
        Passthrough: 85%
        ECD: 20%~80%
        Eye Tracking: 2 eye cam
        Prescription Lens: direct-bond
        DFOV: hFOV 24°, vFOV 18°
        Display: uLED Micro-projector
        Resolution: 640×480
        Brightness: 2000 nits
        Eye Relief: 17 mm

        Eye Box: 7.58mm × 8.61mm
        Processor: Cortex A32 + M55
        Battery: 225 mAh
        BT: Bluetooth BT/BLE 5.4
        Speakers: 2 stereo speakers
        Audio DSP: Hi-Fi 5
        Microphones: 4 mics (Noise Cancellation)
        Antenna: FPC
        I/O: POGO 4 pin
        Camera: 5MP
        Wi-Fi: a/b/g/n
        Physical button: Power button only
        Touch pad: Volume control & further features
        `.trim(),
      },
    ],
  },

  c9t2: {

    slug: "c9t2",

    listTitle: "C9T2 \n Binocular Display ",
    listSubtitle: [ 
      "Dual-Eye Ultra-Light",
      "AR Glasses Platform",
    ],
    listPic: "/images/products/c9t2/view-4.png",
    group: "ultraLight",

    titleTop: "C9T2",
    titleBottom: "Binocular Display",
    category: "ULTRA-LIGHT\nAR GLASSES",
    specButtonText: "C9T2 SPEC",
    theme: "light",
    heroBgClass: "bg-neutral-100",
    heroImage: "/images/products/c9t2/hero.png",
    gallery: [
      "/images/products/c9t2/view-1.png",
      "/images/products/c9t2/view-2.png",
      "/images/products/c9t2/view-3.png",
      "/images/products/c9t2/view-4.png",
    ],


    designFeatureBlocks: [],

    specBlocks: [
      {
        id: "c9t2-spec",
        layout: "columns3",
        columns: { left: "Optic", middle: "Description", right: "Remark" },
        rows: [
          {
            optic: "System",
            description:
              "CORTEX-A32, Dual CORTEX-M55 CPU,\nDual ETHOS-U55 NPU, 13.5MB SRAM, 5.5MB",
            remark: "Main Processor",
          },
          {
            optic: "Memory",
            description: "PSRAM (Pseudo SRAM), 256 Mbit\nNOR Flash, 512 Mbit",
            remark: "",
          },
          {
            optic: "Optical System",
            description:
              "Monochrome Projector,\nAmyLED™ Hummingbird Mini II\nFoV : 30 / Effeciency : 800 /\nWeight : 4.8g / Thickness : 2.12mm",
            remark: "Light Engine\nWaveguide",
          },
          {
            optic: "Display Interface",
            description: "High-Speed MIPI DSI 4-lane to 8-lane Bridge",
            remark: "MIPI 1:2 Bridge",
          },
          {
            optic: "I2C Switch",
            description:
              "Low-Capacitance, 2-Channel, 2:1 Switch with Power-\nOff Isolation (1.8V Logic)",
            remark: "",
          },
          {
            optic: "Scene Camera",
            description: "5MP Fixed Focus CMOS Image Sensor",
            remark: "With camera interface",
          },
          {
            optic: "Sensing",
            description:
              "6-axis IMU + AI Sensor with\nEmbedded Fusion + Qvar\n3-axis Magnetometer",
            remark: "High-end motion\n& touch sensing",
          },
          {
            optic: "Wireless",
            description:
              "Wi-Fi IEEE 802.11 a/b/g/n/ac/ax\n(Dual-band 2.4GHz / 5GHz)\nBluetooth 5.3 / BLE 5.3",
            remark: "",
          },
          {
            optic: "Microphones",
            description:
              "High-SNR PDM Directional MEMS Microphone\nBottom Port Digital MEMS Microphone",
            remark: "Directional\nOmnidirectional",
          },
          {
            optic: "Speaker",
            description: "Dual Direct Radiating Speakers",
            remark: "",
          },
          {
            optic: "Operating",
            description:
              "Ultra-small Tactile Switch\nCapacitive Touch & Proximity Controller",
            remark: "Power Button\nTouchpad IC",
          },
          {
            optic: "Battery",
            description:
              "Li-Polymer Battery, 200mAh, 3.7V (Charge 4.2V)\nwith FPC Cable (L68.08±0.5mm)",
            remark: "",
          },
          {
            optic: "Charging Circuit",
            description:
              "1-Cell, 1A Linear Battery Charger with\nPower Path & Ship Mode",
            remark: "Charger IC",
          },
          {
            optic: "Charging Interface",
            description: "Detachable Power Cable near Left Temple Tip",
            remark: "POGO Pin",
          },
          {
            optic: "Software",
            description: "Android 8.0+ / Windows Compatible",
            remark: "Host Device OS",
          },
        ],
      },
    ],
  },

  


  "j7ef-gaze": {
    slug: "j7ef-gaze",
    listTitle: "J-Reality J7EF Gaze",
    listSubtitle: [
      "Eye-Tracking For Metaverse",
    ],
    listPic: "/images/products/jreality/j7ef-gaze.png",
    group: "jReality",
    hasDetailPage: false,
  },

  "j7ef-plus": {
    slug: "j7ef-plus",
    listTitle: "J-Reality J7EF Plus",
    listSubtitle: [
      "An Enhanced Tool",
      "For Scene Understanding",
    ],
    listPic: "/images/products/jreality/j7ef-plus.png",
    group: "jReality",
    hasDetailPage: false,
  },

  "j7ef": {
    slug: "j7ef",
    listTitle: "J-Reality J7EF",
    listSubtitle: [
      "Incredible Vision",
    ],
    listPic: "/images/products/jreality/j7ef.png",
    group: "jReality",
    hasDetailPage: false,
  },

  "j7ef-plus-hb": {
    slug: "j7ef-plus-hb",
    listTitle: "J-Reality J7EF Plus HB",
    listSubtitle: [
      "High-Brightness",
      "Head-Mounted AR Solution",
    ],
    listPic: "/images/products/jreality/j7ef-plus-hb.png",
    group: "jReality",
    hasDetailPage: false,
  },

  "j7ef-plus-hh": {
    slug: "j7ef-plus-hh",
    listTitle: "J-Reality J7EF Plus HH",
    listSubtitle: [
      "Heavy-Duty",
      "Helmet-Integrated AR System"
    ],
    listPic: "/images/products/jreality/j7ef-plus-hh.png",
    group: "jReality",
    hasDetailPage: false,
  },



  
};
