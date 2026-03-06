export type HomeLocale = "en" | "zh";

export const HOME_TEXT = {
  en: {
    navLeft: [
      { label: "AR Smart Glasses", href: "#smartglasses" },
      { label: "Module", href: "#module" },
      { label: "MetaSpace", href: "#metaspace" },
    ],
    navRight: [
      { label: "News", href: "#updates" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "mailto:sales@jorjin.com" },
    ],
    about: {
      title: "ABOUT\nJORJIN",
      subtitle: "Enabling the Future of AR/XR Smart Glasses and Immersive Interaction​",
      body:
        "Founded in 1997, JORJIN Technologies specializes in AR/XR smart glasses and immersive interaction solutions.​ By integrating expertise in optics, sensing, ergonomics, and hardware–software development, we provide advanced product design and system integration, enabling innovative AR applications across enterprise, academic, and public sectors. ",
      investorButton: "Investor",
    },
    news: {
      title: "News",
      updates: [
        { id: "ces", date: "0106 - 0109", title: "2026 CES", location: "Las Vegas" },
        { id: "milo", date: "0131 - 0202", title: "2026 MILO", location: "Milan" },
        { id: "mwc", date: "0302 - 0305", title: "2026 MWC", location: "Barcelona" },
      ],
    },
    hero: {
      title: "AR Smart\nGlasses",
      slides: [
        { subtitle: "Heavy-Duty AR Headset" },
        { subtitle: "Ultra-Light AR Glasses" },
        { subtitle: "Ultra-Light AR Glasses" },
      ],
    },
    productSection: {
      ultraTitle: "Ultra-Light AR Glasses Series",
      ultraSubtitle: "A lightweight AR solution designed for application development and enterprise-level integration.",
      heavyTitle: "Heavy-Duty AR Headset",
      heavySubtitle: "A rugged AR platform built for industrial environments.",
      jrTitle: "J-Reality",
      jrSubtitle: "Reliable AR Performance for Real-World Applications",
      jrToggle: "Learn more about J‑Reality",
    },
    module: {
      title: "Module",
      body: "Providing a comprehensive portfolio of modules supporting Wi-Fi, mmWave, Sigfox, and BT/BLE wireless connectivity, along with eye-tracking modules designed for AR glasses.",
    },
    metaspace: {
      title: "MetaSpace\nPlatform",
      body: " An immersive interactive projection platform \n designed for AI + AR applications.",
    },
    footer: {
      menuTitle: "Menu",
      menuProduct: "Product",
      menuUpdate: "Update",
      menuAbout: "About",
      socialTitle: "Social",
      companyName: "JORJIN TECHNOLOGIES INC.",
      address: "17F, No 239, Sec. 1, Datong Rd.\nXizhi Dist., New Taipei City 22161, Taiwan",
      ctaBody:
        "Schedule a quick call to learn how our solutions can support your business goals.",
      connect: "CONNECT\nUS ANYTIME",
      backToTop: "Back to top ↗",
    },
  },
  zh: {
    navLeft: [
      { label: "AR 智慧眼鏡", href: "#smartglasses" },
      { label: "模組", href: "#module" },
      { label: "沈浸式投影空間", href: "#metaspace" },
    ],
    navRight: [
      { label: "最新消息", href: "#updates" },
      { label: "關於佐臻", href: "#about" },
      { label: "聯絡我們", href: "mailto:sales@jorjin.com" },
    ],
    about: {
      title: "關於佐臻",
      subtitle:"引領 AR/XR 智慧眼鏡與沉浸式互動體驗的未來",
      body:
         "佐臻科技成立於 1997 年，專注於 AR/XR 智慧眼鏡與沉浸式互動解決方案。\n​透過整合 光學、感測、人因工程以及軟硬體開發技術，我們提供 完整的產品設計與系統整合服務，\n協助企業、學術與公共領域推動創新的 AR 應用。",
      investorButton: "投資人專區",
    },
    news: {
      title: "最新消息",
      updates: [
        { id: "ces", date: "0106 - 0109", title: "2026 CES", location: "拉斯維加斯" },
        { id: "milo", date: "0131 - 0202", title: "2026 MILO", location: "米蘭" },
        { id: "mwc", date: "0302 - 0305", title: "2026 MWC", location: "巴塞隆納" },
      ],
    },
    hero: {
      title: "AR \n 智慧眼鏡",
      slides: [
        { subtitle: "工業級 AR 頭戴顯示器" },
        { subtitle: "超輕量級 AR 眼鏡" },
        { subtitle: "超輕量級 AR 眼鏡" },
      ],
    },
    productSection: {
      ultraTitle: "超輕量級 AR 眼鏡系列",
      ultraSubtitle: "輕量化 AR 眼鏡解決方案，專為應用軟體開發與企業級整合部署打造",
      heavyTitle: "工業級 AR 頭戴顯示器",
      heavySubtitle: "專為工業環境打造的高耐用 AR 平台",
      jrTitle: "J-Reality",
      jrSubtitle: "穩定可靠的 AR 平台，提供高效能與卓越價值",
      jrToggle: "了解更多 J‑Reality",
    },
    module: {
      title: "模組",
      body: "提供完整的模組產品組合，涵蓋 Wi-Fi、mmWave、Sigfox、BT/BLE 等無線連線技術，並包含 AR 眼鏡專用的眼動追蹤模組",
    },
    metaspace: {
      title: "MetaSpace\n Plateform",
      body: " 專為 AI + AR 應用打造的\n沉浸式互動投影空間",
    },
    footer: {
      menuTitle: "選單",
      menuProduct: "產品",
      menuUpdate: "消息",
      menuAbout: "關於佐臻",
      socialTitle: "社群",
      companyName: "佐臻股份有限公司",
      address: "221 新北市汐止區大同路一段239號17樓",
      ctaBody:
        "歡迎安排時間交流，了解我們如何支持您的需求。",
        connect: "CONNECT\nUS ANYTIME",
        backToTop: "Back to top ↗",
    },
  },
} as const;

export const PRODUCT_LIST_OVERRIDES = {
  zh: {
    j7m: {
      listTitle: "工業 \n AR頭戴裝置",
      listSubtitle: ["以工業級設計為核心的頭戴式 AR 解決方案，\n提供穩定、高效的現場作業支援"],
    },
    hj1: {
      listTitle: "眼動追蹤 \nAR眼鏡 ",
      listSubtitle: ["全球最小整合式眼動追蹤模組，打造以 AI × AR 為核心的參考設計平台"],
    },
    c9t2: {
      listTitle: "雙眼顯示 \n AR眼鏡",
      listSubtitle: ["雙眼顯示架構設計，​提供更寬廣且沉浸式的 AR 視野體驗 "],
    },
    "j7ef-gaze": {
      listTitle: "J-Reality \n J7EF Gaze",
      listSubtitle: [ "高精度眼動追蹤技術，打造沉浸式 AR / XR 互動體驗",],
    },
    "j7ef-plus": {
      listTitle: "J-Reality \n J7EF Plus",
      listSubtitle: ["整合感測與運算能力，提升場景理解與即時互動能力",],
    },
    j7ef: {
      listTitle: "J-Reality \n J7EF",
      listSubtitle: [ "提供清晰穩定的 AR 顯示體驗，適用多元應用場景",],
    },
    "j7ef-plus-hb": {
      listTitle: "J-Reality \n J7EF Plus HB",
      listSubtitle: [ "長戴型頭環式設計，適用於戶外、工廠與醫院等多種作業環境",],
    },
    "j7ef-plus-hh": {
      listTitle: "J-Reality\n  J7EF Plus HH",
      listSubtitle: [ "專為工業與安全帽整合應用設計的 AR 系統"],
    },
  },
} as const;
