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
      subtitle: "JORJIN Technologies specializes in AR/XR smart glasses\nand immersive interaction solutions",
      body:
        "With integrated expertise in optics, sensing, and communication, we\nprovide end-to-end ODM services, supporting businesses, academia,\nand public sectors in creating smarter, immersive experiences.",
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
      ultraTitle: "Ultra-Light AR Glasses",
      ultraSubtitle: "Lightweight AR platform for custom integration and enterprise deployment",
      heavyTitle: "Heavy-Duty AR Headset",
      heavySubtitle: "Rugged AR Platform for Industrial Deployment",
      jrTitle: "J-Reality",
      jrSubtitle: "Reliable AR performance with outstanding value",
    },
    module: {
      title: "AR Module",
      body: "Offering a complete\nrange of wireless modules\ncovering WiFi, Sigfox,\nBT/BLE connectivity.",
    },
    metaspace: {
      title: "MetaSpace\nPlatform",
      body: "Immersive Interaction Platforms\nfor Physical Spaces",
    },
    footer: {
      menuTitle: "Menu",
      menuProduct: "Product",
      menuUpdate: "Update",
      menuAbout: "About JORJIN",
      socialTitle: "Social",
      ctaBody:
        "Schedule a quick call to learn how MetaSpace can turn your regional data into a powerful\nadvantage.",
      connect: "CONNECT\nWITH US",
      backToTop: "Back to top ↗",
    },
  },
  zh: {
    navLeft: [
      { label: "AR 智慧眼鏡", href: "#smartglasses" },
      { label: "模組", href: "#module" },
      { label: "MetaSpace", href: "#metaspace" },
    ],
    navRight: [
      { label: "最新消息", href: "#updates" },
      { label: "關於我們", href: "#about" },
      { label: "聯絡我們", href: "mailto:sales@jorjin.com" },
    ],
    about: {
      title: "關於\nJORJIN",
      subtitle: "JORJIN Technologies 專注於 AR/XR 智慧眼鏡\n與沉浸式互動解決方案",
      body:
        "結合光學、感測與通訊的整合專業，我們提供端到端的 ODM 服務，\n支援企業、學術與公部門打造更智慧的沉浸式體驗。",
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
      title: "AR 智慧\n眼鏡",
      slides: [
        { subtitle: "重工業級 AR 頭戴裝置" },
        { subtitle: "超輕量 AR 眼鏡" },
        { subtitle: "超輕量 AR 眼鏡" },
      ],
    },
    productSection: {
      ultraTitle: "超輕量 AR 眼鏡",
      ultraSubtitle: "適用於客製整合與企業部署的輕量 AR 平台",
      heavyTitle: "重工業級 AR 頭戴裝置",
      heavySubtitle: "適用於工業部署的堅固 AR 平台",
      jrTitle: "J-Reality",
      jrSubtitle: "可靠的 AR 表現與高性價比",
    },
    module: {
      title: "AR 模組",
      body: "提供完整的\n無線模組系列，\n涵蓋 WiFi、Sigfox、\nBT/BLE 連線。",
    },
    metaspace: {
      title: "MetaSpace\n平台",
      body: "沉浸式互動平台\n適用於實體空間",
    },
    footer: {
      menuTitle: "選單",
      menuProduct: "產品",
      menuUpdate: "消息",
      menuAbout: "關於 JORJIN",
      socialTitle: "社群",
      ctaBody:
        "安排快速通話，了解 MetaSpace 如何將您的區域資料轉化為\n強大優勢。",
      connect: "與我們\n聯繫",
      backToTop: "回到頂部 ↗",
    },
  },
} as const;

export const PRODUCT_LIST_OVERRIDES = {
  zh: {
    j7m: {
      listTitle: "J7M \n 工業款",
      listSubtitle: ["工業級", "頭戴式 AR 解決方案"],
    },
    hj1: {
      listTitle: "HJ1 \n 眼動追蹤",
      listSubtitle: ["世界最小眼動追蹤", "AR 參考平台"],
    },
    c9t2: {
      listTitle: "C9T2 \n 雙目顯示",
      listSubtitle: ["雙眼超輕量", "AR 眼鏡平台"],
    },
    "j7ef-gaze": {
      listTitle: "J-Reality J7EF Gaze",
      listSubtitle: ["用於元宇宙的眼動追蹤"],
    },
    "j7ef-plus": {
      listTitle: "J-Reality J7EF Plus",
      listSubtitle: ["增強工具", "場景理解"],
    },
    j7ef: {
      listTitle: "J-Reality J7EF",
      listSubtitle: ["出色視覺"],
    },
    "j7ef-plus-hb": {
      listTitle: "J-Reality J7EF Plus HB",
      listSubtitle: ["高亮度", "頭戴式 AR 解決方案"],
    },
    "j7ef-plus-hh": {
      listTitle: "J-Reality J7EF Plus HH",
      listSubtitle: ["重工業級", "安全帽整合 AR 系統"],
    },
  },
} as const;
