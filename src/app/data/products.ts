import type { SpecBlock } from "../../types/spec";

export type Product = {
  slug: "j7m" | "c9t2" | "hj1";

  titleTop: string;
  titleBottom: string;
  category: string;
  specButtonText: string;

  heroImage: string;
  theme: "dark" | "light";
  heroBgClass: string;

  gallery: string[];

  // ✅ 新格式
  designFeatureBlocks?: SpecBlock[];
  specBlocks: SpecBlock[];
};

export const PRODUCTS: Record<string, Product> = {
  j7m: {
    slug: "j7m",
    titleTop: "J7M",
    titleBottom: "AR Glasses",
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
  
    // ✅ DESIGN FEATURE OF J7M（用 kv 形式塞兩欄清單）
    // 你的 KVTable 是 label/value，所以我把左欄當 label，右欄當 value
    // 這樣呈現會是兩欄對齊，且不需要新增 renderer
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
  
    // ✅ Optic（kv）
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
        Camera: 8 MP
        `.trim(),
      },
  
      // ✅ Camera（用 columns3 做 Parameter / M4.3WN / M4.51-L）
      {
        id: "j7m-camera",
        layout: "columns3",
        title: "Camera",
        columns: { left: "Parameter", middle: "M4.3WN", right: "M4.51-L" },
        rows: [
          { optic: "Module size (XYZ)", description: "125 × 40 × 27 mm", remark: "127 × 36 × 23.5 mm" },
          { optic: "Operating temperature", description: "0–50°C", remark: "0–50°C" },
          { optic: "Sensor", description: "OV9282", remark: "ams Mira130" },
          { optic: "Baseline", description: "100 mm", remark: "" },
          { optic: "Full Resolution", description: "1280 × 800", remark: "1080 × 720" },
          { optic: "Binning Resolution", description: "640 × 400", remark: "544 × 360" },
          { optic: "Hybrid Resolution", description: "N/A", remark: "848 × 480" },
          { optic: "IR Filter", description: "850 nm", remark: "850 nm" },
          { optic: "FOV (Calibrated) [h×v]", description: "66° × 44°", remark: "89° × 58°" },
          { optic: "Min. Sensing Range (Full Mode)", description: "72 cm", remark: "30 cm" },
          { optic: "Max. Sensing Range", description: "6 m", remark: "8 m" },
          { optic: "Depth Accuracy", description: "0.3% @ 1 m", remark: "0.5% @ 1 m" },
        ],
      },
    ],
  },
  

  c9t2: {
    slug: "c9t2",
    titleTop: "C9T2",
    titleBottom: "Smart Glasses",
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

    // ✅ C9T2 不需要 feature
    designFeatureBlocks: [],

    // ✅ 三欄表格：一個 block
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

  hj1: {
    slug: "hj1",
    titleTop: "HJ1 AI",
    titleBottom: "SMART Glasses",
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

    // ✅ HJ1 有 DESIGN FEATURE（同樣 kv）
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

    // ✅ Specification（kv）
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
};
