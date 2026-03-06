export type ModuleSpecRow = {
  label: string;
  value: string;
};

export type ModuleComparisonRow = {
  advantageArea: string;
  mmwaveRadar: string;
  cameraSensor: string;
  pirSensor: string;
};

export type ModuleData = {
  slug:
    | "eyetracking"
    | "wifi01"
    | "wifiv0"
    | "sigfox"
    | "ble"
    | "mmwave03"
    | "mmwave02r1";
  listTitle: string;
  listSuffix?: string;
  title: string;
  subtitle?: string;
  heroImage: string;
  topDetail: string;
  moduleBody: string;
  keyFeatures: string[];
  comparisonTitle?: string;
  comparisonRows?: ModuleComparisonRow[];
  specificationTitle?: string;
  specifications: ModuleSpecRow[];
  showDatasheetSection?: boolean;
  datasheetUrl?: string;
};

export const MODULES: Record<ModuleData["slug"], ModuleData> = {
  
  eyetracking: {
    slug: "eyetracking",
    listTitle: "Eyetracking",
    title: "Eyetracking",
    subtitle: "Module Placeholder",
    heroImage: "/images/products/module/eyetracking.png",
    topDetail: "Eyetracking module",
    moduleBody: "",
    keyFeatures: [],
    specifications: [
      { label: "Region", value: "SIGFOX RC 1 to 6" },
      { label: "Frequency", value: "860–943 MHz" },
      { label: "Output Power", value: "BLE Up to +8 dBm / Sub-1G up to +27 dBm" },
      { label: "Chipset", value: "STM BlueNRG-2 + S2-LP" },
      { label: "Certification", value: "FCC / CE / MIC" },
      { label: "SIGFOX Verified", value: "Passed" },
      { label: "Dimension (mm)", value: "22 mm (L) × 22 mm (W) × 2.8 mm (H)" },
      { label: "Operating Temperature", value: "−40°C ~ 85°C" },
      { label: "Interface", value: "UART ×1 / I2C ×2 / SPI ×1" },
    ],
  },
  
  wifi01: {
    slug: "wifi01",
    listTitle: "WiFi + BT",
    listSuffix: "5.4",
    title: "WiFi + BT",
    subtitle: "WG7A51-01",
    heroImage: "/images/products/module/wifi01.png",
    topDetail: " 2.4/5GHz WiFi 6/BLE 5.4 SiP Module",
    moduleBody:
      "WG7A51-01 integrates TI’s CC3351 chipset into a highly optimized System-in-Package (SiP) solution, enabling reliable, high-performance wireless connectivity while minimizing PCB space and design complexity. It provides the best WiFi and BLE coexistence interoperability and power saving technologies from TI.",
    keyFeatures: [
      "Highly optimized Wi-Fi 6 and BLE 5.4 system for low cost embedded IoT applications.",
      "Multirole support e.g. STA and AP to connect directly with other Wi-Fi devices on different RF channels (Wi-Fi networks).",
      "3-wire or 1-wire PTA for external coexistence with additional 2.4-GHz radios (for example, Thread or Zigbee).",
      "Application throughput up to 50 Mbps.",
      "Package LGA-100.",
    ],
    specifications: [
      { label: "Models", value: "WG7A51-01" },
      { label: "Chipset", value: "TI CC3351" },
      { label: "Wireless Standard", value: "IEEE 802.11 a/b/g/n/ax (Wi-Fi 6) & BLE 5.4" },
      { label: "Frequency Bands", value: "2.4GHz / 5GHz Dual-band" },
      { label: "Antenna Configuration", value: "1T1R" },
      { label: "Module Dimentions", value: "13.3 x 13.4 x 2.2 mm (SiP packaging)" },
      { label: "Host Interfaces", value: "Wi‑Fi: SDIO；Bluetooth: UART" },
      { label: "Operating Temperature", value: "-40°C ~ 85°C" },
      { label: "Certifications", value: "CE, FCC, IC, TELEC, NCC" },
    ],
    datasheetUrl: "https://drive.google.com/file/d/1a3J1v4Rwar7ssjikl29Le5JeHDWr8UYz/view?usp=sharing",
  },
  wifiv0: {
    slug: "wifiv0",
    listTitle: "WiFi + BT",
    listSuffix: "5.0",
    title: "WiFi + BT",
    subtitle: "WG7837-V0 ",
    heroImage: "/images/products/module/wifiv0.png",
    topDetail: "2.4/5 GHz WiFi & Bluetooth SiP Module",
    moduleBody:
      "The WG7837-V0 series SiP (System in Package) module, is the most demanded design for all handset and portable devices with TI WiLink8 IEEE 802.11 a/b/g/n and Bluetooth, Bluetooth LE solutions to provide the best WiFi and BT coexistence interoperability and power saving technologies from TI. The WG7837V0 WLAN is connected to the host processor via a 1.8V SDIO interface, and the Bluetooth is connected via a UART. Linux and Android drivers are provided for a wide range of application processors.",
    keyFeatures: [
      "Integrates RF, power amplifiers (PAs), clock, RF switches, filters, passives and power management.",
      "LGA100 pin package.",
      "Dimension 13.3 x 13.4 x 2.0 mm.",
      "FCC, IC, ETSI/CE, and TELEC certified with chip antennas.",
      "WLAN baseband processor and RF transceiver supporting IEEE 802.11 a/b/g/n.",
      "4-Bit SDIO host interface support.",
      "Supports Bluetooth core specification version 5.1.",
      "Host Controller Interface (HCI) transport for Bluetooth over UART.",
      "Dual-Mode Bluetooth and Bluetooth LE.",
      "Wi-Fi-Bluetooth single antenna coexistence.",
      "Operating temperature: -40°C ~ 85°C.",
    ],
    specifications: [
      { label: "Models", value: "WG7837-V0" },
      { label: "Chipset", value: "TI WL1837" },
      { label: "Wireless Standard", value: "IEEE 802.11 a/b/g/n & BT 5.1" },
      { label: "Frequency Bands", value: "2.4GHz / 5GHz Dual-band" },
      { label: "Antenna Configuration", value: "1T1R" },
      { label: "Module Dimentions", value: "13.3 x 13.4 x 2.2 mm (SiP packaging)" },
      { label: "Host Interfaces", value: "Wi‑Fi: SDIO；Bluetooth: UART" },
      { label: "Operating Temperature", value: "-40°C ~ 85°C" },
      { label: "Certifications", value: "FCC / CE / IC / TELEC / RCM / NCC" },
    ],
    datasheetUrl: "https://drive.google.com/file/d/10TvSl5oMVQyP7BkjS_Ci_-dh1Rn7nCX-/view?usp=sharing",
  },
  sigfox: {
    slug: "sigfox",
    listTitle: "Sigfox",
    title: "Sigfox",
    subtitle: "WS2216-A0",
    heroImage: "/images/products/module/sigfox.png",
    topDetail: "SIGFOX BLE MODULE RC 1 to 6",
    moduleBody:
      "The WS2116-A0 module is a cost-effective, high performance, and ultra-low power Bluetooth® device. Supporting Sigfox RCZ1 to RCZ6, WS2116-A0 is a global roaming “Monarch” module. It provides excellent battery lifetime and allows for operation on small coin cell batteries and energy-harvesting applications.",
    keyFeatures: [
      "STMBlueNRG-2, S2-LP, sub-1GHz PA, 32MHz, 50MHz & 32.768KHz crystals, and DC2DC on a single module.",
      "Stamp-hole 54 pins package.",
      "High performance, ultra-low power Cortex-M0 32-bit Microcontroller.",
      "Programmable 256 KB Flash.",
      "24 KB RAM with retention (two 12 KB banks).",
      "Up to +8dBm BLE RF output power, up to +27dBm sub-1GHz RF output power.",
      "Excellent performance of receiver sensitivity. Up to -88dBm (BLE) and -130dBm (Sub-1GHz).",
      "Low Power and Wide Supply Voltage Range: 1.8 to 3.6V.",
      "Internal DC-DC converter built-in.",
    ],
    specifications: [
      { label: "Region", value: "SIGFOX RC 1 to 6" },
      { label: "Frequency", value: "860–943 MHz" },
      { label: "Output Power", value: "BLE Up to +8 dBm / Sub-1G up to +27 dBm" },
      { label: "Chipset", value: "STM BlueNRG-2 + S2-LP" },
      { label: "Certification", value: "FCC / CE / MIC" },
      { label: "SIGFOX Verified", value: "Passed" },
      { label: "Dimension (mm)", value: "22 mm (L) × 22 mm (W) × 2.8 mm (H)" },
      { label: "Operating Temperature", value: "−40°C ~ 85°C" },
      { label: "Interface", value: "UART ×1 / I2C ×2 / SPI ×1" },
    ],
    showDatasheetSection: false,
    datasheetUrl: "https://drive.google.com/uc?export=download&id=1Ovh46ZxkzoVo1hDOH1U9I3fbKa0Zsaui",
  },
  ble: {
    slug: "ble",
    listTitle: "BLE",
    title: "BLE",
    subtitle: "ZB7412-00",
    heroImage: "/images/products/module/ble.png",
    topDetail: "",
    moduleBody:
      "ZB7412-00 module is a certified wireless MCU module targeting Bluetooth 5 low energy applications based on TI CC2640R2F wireless MCU QFN-32 package chip. The module is a cost-effective, ultralow power, and 2.4-GHz RF device. It provides excellent battery lifetime and allows for operation on small coin cell batteries and energy-harvesting applications.",
    keyFeatures: [
      "TI CC2640R2F, 24MHz & 32.768KHz crystals, DC2DC, and chip antenna on a single module.",
      "Built-in TI CC2640R2F 5x5mm RHB VQFN32 (15 GPIOs).",
      "LGA 25pins package.",
      "Powerful ARM ® Cortex®-M3 microcontroller.",
      "Ultra-low power sensor controller.",
      "Efficient code size architecture, placing drivers, Bluetooth® Low Energy controller, and bootloader in ROM.",
      "No external component required.",
      "Low Power and Wide Supply Voltage Range: 1.8 to 3.8V.",
      "Internal DC-DC converter built-in.",
      "2.4-GHz RF transceiver compatible with Bluetooth Low Energy (BLE) 5 specification.",
      "Excellent receiver sensitivity (–97 dBm for BLE ), selectivity, and blocking performance.",
      "Programmable output power up to +5 dBm.",
      "Integrated antenna.",
    ],
    specifications: [
      { label: "Model", value: "ZB7412-00" },
      { label: "Chipset", value: "TI CC2640R2F" },
      { label: "Wireless Standard", value: "Bluetooth Low Energy (BLE) 5.0" },
      { label: "MCU", value: "Arm Cortex-M3" },
      { label: "Antenna Configuration", value: "1T1R" },
      { label: "Dimensions", value: "16.9 x 11 x 2.45 mm" },
      { label: "Interface", value: "UART" },
      { label: "Temperature", value: "-40℃ ~ 85℃" },
      { label: "Certifications", value: "FCC, IC, CE, TELEC, RCM, NCC" },
    ],
    datasheetUrl: "https://drive.google.com/uc?export=download&id=1Ovh46ZxkzoVo1hDOH1U9I3fbKa0Zsaui",
  },
  mmwave03: {
    slug: "mmwave03",
    listTitle: "mmWave",
    listSuffix: "03",
    title: "mmWave",
    subtitle: "MT5C01-03",
    heroImage: "/images/products/module/mmwave03.png",
    topDetail: "IWRL6432AOP AoM Module",
    moduleBody:
      "MT5C01-03 is a 60GHz mmWave radar module adopting TI’s industrial IWRL6432AOP chipset. The module applies radar technology, and its ultra-low power consumption is ideal for battery-operated IoT devices. Its high-precision sensing capability targets applications like smart home appliance, supportive healthcare, and consumer electronics like laptop. Non-camera based sensing ensure 100% privacy in sensitive environments. In addition, slim form factor gives flexibility to fit it compact mechanical condition.",
    keyFeatures: [],
    comparisonTitle: "Comparison - mmWave & other sensors",
    comparisonRows: [
      {
        advantageArea: "Lighting Independence",
        mmwaveRadar: "Works in complete darkness and strong backlight",
        cameraSensor: "Performance degrades in low light or glare conditions",
        pirSensor: "Not affected by light",
      },
      {
        advantageArea: "Static Presence Detection",
        mmwaveRadar: "Detects stationary humans via micro-motion (breathing, slight movement)",
        cameraSensor: "Limited; depends on advanced image algorithms",
        pirSensor: "❌ Cannot detect stationary humans",
      },
      {
        advantageArea: "Micro-Motion Detection",
        mmwaveRadar: "Detects breathing and subtle body movement",
        cameraSensor: "❌ Not capable",
        pirSensor: "❌ Not capable",
      },
      {
        advantageArea: "Velocity Detection",
        mmwaveRadar: "Measures speed using Doppler effect",
        cameraSensor: "Limited and complex",
        pirSensor: "❌ Not available",
      },
      {
        advantageArea: "Environmental Robustness",
        mmwaveRadar: "Operates in fog, smoke, dust, and through plastic covers",
        cameraSensor: "Sensitive to environmental interference",
        pirSensor: "Affected by ambient temperature changes",
      },
      {
        advantageArea: "Penetration Capability",
        mmwaveRadar: "Can penetrate plastic, glass, and non-metal materials",
        cameraSensor: "❌ Cannot penetrate objects",
        pirSensor: "❌ Cannot penetrate objects",
      },
      {
        advantageArea: "Privacy Protection",
        mmwaveRadar: "No image capture, GDPR-friendly",
        cameraSensor: "High privacy concerns (image recording)",
        pirSensor: "No image capture",
      },
      {
        advantageArea: "False Alarm Resistance",
        mmwaveRadar: "Can distinguish real presence from environmental noise",
        cameraSensor: "Prone to shadow/light change triggers",
        pirSensor: "Easily triggered by heat variation",
      },
      {
        advantageArea: "Intelligence Level",
        mmwaveRadar: "Provides 3D position, motion state, and tracking",
        cameraSensor: "Visual-based recognition",
        pirSensor: "Binary motion detection only",
      },
    ],
    specifications: [
      { label: "Chipset", value: "TI IWRL6432AOP" },
      { label: "Antenna", value: "3RX and 2TX" },
      { label: "Frequency Range", value: "57–64 GHz" },
      { label: "Power (Avg.)", value: "<2 mW to 25 mW (depending on different SW)" },
      { label: "Azimuth FOV", value: "140°" },
      { label: "Elevation FOV", value: "120°" },
      { label: "Angular Resolution", value: "Azimuth: 30°" },
      { label: "Detect Range", value: "15 m at boresight and 7 m at FOV edges for human motion detection" },
      { label: "Dimensions", value: "15.5 mm (L) × 7.0 mm (W) × 2.2 mm (H)" },
      { label: "Temperature Range", value: "−40°C ~ 85°C" },
    ],
    datasheetUrl: "https://drive.google.com/file/d/1R9KxevI6Ktqhv_IZNPI5ere2VWG7h2Y7/view?usp=sharing",
  },
  mmwave02r1: {
    slug: "mmwave02r1",
    listTitle: "mmWave",
    listSuffix: "02R1",
    title: "mmWave",
    subtitle: "WT5C01-02R1 ",
    heroImage: "/images/products/module/mmwave02R1.png",
    topDetail: "IWRL6432WCSP AoM Module",
    moduleBody:
      "Extremely small form factor distinguishes itself from counterparts. MT5C01-02R1 is a 60GHz mmWave radar module adopting TI’s industrial IWRL6432AOP chipset. The ultra-low power consumption is ideal for battery-operated IoT devices. Its high-precision sensing capability targets applications like smart home appliance, supportive healthcare, and consumer electronics like laptop. Non-camera based sensing ensure 100% privacy in sensitive environments.",
    keyFeatures: [],
    comparisonTitle: "Comparison - mmWave & other sensors",
    comparisonRows: [
      {
        advantageArea: "Lighting Independence",
        mmwaveRadar: "Works in complete darkness and strong backlight",
        cameraSensor: "Performance degrades in low light or glare conditions",
        pirSensor: "Not affected by light",
      },
      {
        advantageArea: "Static Presence Detection",
        mmwaveRadar: "Detects stationary humans via micro-motion (breathing, slight movement)",
        cameraSensor: "Limited; depends on advanced image algorithms",
        pirSensor: "❌ Cannot detect stationary humans",
      },
      {
        advantageArea: "Micro-Motion Detection",
        mmwaveRadar: "Detects breathing and subtle body movement",
        cameraSensor: "❌ Not capable",
        pirSensor: "❌ Not capable",
      },
      {
        advantageArea: "Velocity Detection",
        mmwaveRadar: "Measures speed using Doppler effect",
        cameraSensor: "Limited and complex",
        pirSensor: "❌ Not available",
      },
      {
        advantageArea: "Environmental Robustness",
        mmwaveRadar: "Operates in fog, smoke, dust, and through plastic covers",
        cameraSensor: "Sensitive to environmental interference",
        pirSensor: "Affected by ambient temperature changes",
      },
      {
        advantageArea: "Penetration Capability",
        mmwaveRadar: "Can penetrate plastic, glass, and non-metal materials",
        cameraSensor: "❌ Cannot penetrate objects",
        pirSensor: "❌ Cannot penetrate objects",
      },
      {
        advantageArea: "Privacy Protection",
        mmwaveRadar: "No image capture, GDPR-friendly",
        cameraSensor: "High privacy concerns (image recording)",
        pirSensor: "No image capture",
      },
      {
        advantageArea: "False Alarm Resistance",
        mmwaveRadar: "Can distinguish real presence from environmental noise",
        cameraSensor: "Prone to shadow/light change triggers",
        pirSensor: "Easily triggered by heat variation",
      },
      {
        advantageArea: "Intelligence Level",
        mmwaveRadar: "Provides 3D position, motion state, and tracking",
        cameraSensor: "Visual-based recognition",
        pirSensor: "Binary motion detection only",
      },
    ],
    specificationTitle: "Key Features",
    specifications: [
      { label: "Chipset", value: "TI IWRL6432 WCSP" },
      { label: "Antenna", value: "3RX and 2TX" },
      { label: "Frequency Range", value: "57–64 GHz" },
      { label: "Power (Avg.)", value: "<2 mW to 25 mW (depending on different SW)" },
      { label: "Azimuth FOV", value: "140°" },
      { label: "Elevation FOV", value: "120°" },
      { label: "Angular Resolution", value: "Azimuth: 30°" },
      { label: "Detect Range", value: "Ceiling-mounted radar for a 6-meter meeting room" },
      { label: "Dimensions", value: "15.5 mm (L) × 5.5 mm (W) × 1.8 mm (H)" },
      { label: "Temperature Range", value: "−40°C ~ 85°C" },
    ],
    datasheetUrl: "https://drive.google.com/file/d/1rfqbIEHMj-ilDContEnjFeSzaMQJtTHG/view?usp=sharing",
  },
};
