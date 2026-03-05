"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { buttonClass } from "@/components/ui/Button";

type InvestorSection = {
  id: string;
  titleZh: string;
  titleEn: string;
  bodyZh: string;
  bodyEn: string;
};

const INVESTOR_SECTIONS: InvestorSection[] = [
  {
    id: "board",
    titleZh: "董事會",
    titleEn: "Board of Directors",
    bodyZh: "董事會職能",
    bodyEn: "Board of Directors’ Functions",
  },
  {
    id: "committees",
    titleZh: "委員會",
    titleEn: "Committees",
    bodyZh: "審計暨公司治理委員會",
    bodyEn: "Audit and Corporate Governance Committee",
  },
  {
    id: "shareholders",
    titleZh: "股東會",
    titleEn: "Shareholders'",
    bodyZh: "內容預留區塊（股東會）",
    bodyEn: "Placeholder content (Shareholders')",
  },
  {
    id: "financials",
    titleZh: "財務資訊",
    titleEn: "Financials",
    bodyZh: "",
    bodyEn: "",
  },
];

const BOARD_FUNCTIONS = [
  {
    zh: "公司策略與營運方針之制定",
    en: "Formulation of Corporate Strategy and Business Policies",
  },
  {
    zh: "重大議案之決策",
    en: "Decision-making on Material Matters",
  },
  {
    zh: "財務報表與重大財務事項之監督",
    en: "Oversight of Financial Statements and Major Financial Matters",
  },
  {
    zh: "內部控制與風險管理之監督",
    en: "Oversight of Internal Control and Risk Management",
  },
  {
    zh: "經理人之選任與監督",
    en: "Appointment and Supervision of Management",
  },
  {
    zh: "公司治理與法令遵循之確保",
    en: "Ensuring Corporate Governance and Legal Compliance",
  },
];

const AUDIT_FUNCTIONS = [
  {
    zh: "財務報表之審閱",
    en: "Review of Financial Statements",
  },
  {
    zh: "內部控制制度之監督",
    en: "Oversight of Internal Control System",
  },
  {
    zh: "內部稽核之監督",
    en: "Supervision of Internal Audit",
  },
  {
    zh: "會計師之選任與獨立性評估",
    en: "Appointment and Evaluation of External Auditors",
  },
  {
    zh: "法令遵循與風險管理之監督",
    en: "Compliance and Risk Management Oversight",
  },
  {
    zh: "重大交易與關係人交易之審議",
    en: "Review of Material Transactions and Related Party Transactions",
  },
];

const BOARD_EXTRA_SECTIONS = [
  {
    id: "performance",
    titleZh: "董事會績效評估",
    titleEn: "Performance Evaluation of Boards and Directors",
    bodyZh:
      "本公司董事會於109年8月通過董事績效評估辦法，績效評估每年執行一次，於第四季定期辦理董事自評，評估結果於第一季定期檢討。",
    bodyEn:
      "The Board of Directors of the Company approved the Regulations for the Performance Evaluation of Directors in August 2020. Performance evaluations are conducted annually. Directors’ self-evaluations are carried out on a regular basis in the fourth quarter, and the evaluation results are reviewed in the first quarter of the following year.",
  },
  {
    id: "communications",
    titleZh: "獨立董事與內部稽核主管及會計師之溝通日期",
    titleEn: "Dates of Communications between Independent Directors, \n the Head of Internal Audit, and the External Auditors",
    bodyZh: "",
    bodyEn: "",
  },
];

const PERFORMANCE_TABLE = [
  { year: "112", directorsAvg: "4.65", boardAvg: "4.14" },
  { year: "113", directorsAvg: "4.60", boardAvg: "4.16" },
  { year: "114", directorsAvg: "", boardAvg: "" },
];

const COMMUNICATIONS_TABLE = [
  { date: "", auditor: "", cpas: "" },
];

type ShareholdersSection = {
  id: string;
  titleZh: string;
  titleEn: string;
  downloads: Record<string, string>;
};

const SHAREHOLDERS_SECTIONS: ShareholdersSection[] = [
  {
    id: "notice",
    titleZh: "股東會開會通知",
    titleEn: "Meeting Notice",
    downloads: {
      "112": "https://drive.google.com/uc?export=download&id=1ATYtPW9rDUxWDhjmpcZUNt4NB12OV1Qv",
      "113": "https://drive.google.com/uc?export=download&id=1jK-N4jIzhMnyrmueP4pW1yxNT-hwMYpH",
      "114": "https://drive.google.com/uc?export=download&id=1BymlafkxHgrqJ3Ld6ZHFeSMDPH2mdTH4",
    },
  },
  {
    id: "handbook",
    titleZh: "股東會議事手冊",
    titleEn: "Handbook of Shareholders' Meeting",
    downloads: {
      "112": "https://drive.google.com/uc?export=download&id=1cilq2PFbahPieO56x_lpfk-IVqvMz2QD",
      "113": "https://drive.google.com/uc?export=download&id=1o-9ugow8kk_AZP2jHmR2ZOidLxta3ady",
      "114": "https://drive.google.com/uc?export=download&id=1yCX4c-aGaQTk9i9pUxTsl80rARPVRCFS",
    },
  },
  {
    id: "minutes",
    titleZh: "股東會議事錄",
    titleEn: "Minutes of Shareholders’ Meeting",
    downloads: {
      "112": "https://drive.google.com/uc?export=download&id=11cPAedDFktDNOJd-l_oM5NWN0bwUrPPL",
      "113": "https://drive.google.com/uc?export=download&id=1rcJ2B0ehTJtW7FmX_G0bsNb652Xajdr5",
      "114": "https://drive.google.com/uc?export=download&id=1SPrVPe9I6iZGJq74Sj2OtBowXKrMd6eX",
    },
  },
  {
    id: "annual",
    titleZh: "股東會年報",
    titleEn: "Annual Report",
    downloads: {
      "111": "https://drive.google.com/uc?export=download&id=1K07tDSoKz3vO-DpB_1KxKwE5Q5I31q34",
      "112": "https://drive.google.com/uc?export=download&id=10DhgN5HRDMPXAm-88tT_gJ-ccwH2iNZs",
      "113": "https://drive.google.com/uc?export=download&id=1p-v-NueYXKPhGIhlS09lJcuZpyN96LVQ",
    },
  },
  {
    id: "major",
    titleZh: "主要股東名單",
    titleEn: "Major Shareholders",
    downloads: {
      "112": "https://drive.google.com/uc?export=download&id=102cXp0Su2pqIZvn5xRbQ9hPM0HVwBcdt",
      "113": "https://drive.google.com/uc?export=download&id=17JFMcu8oVBOLzIRoe6iBkT4sqlKPbaUn",
      "114": "https://drive.google.com/uc?export=download&id=1ch_kyR85AI6qrCMJnWmjXK_-i6EVtgql",
    },
  },
];

const SHAREHOLDERS_YEARS_DEFAULT = ["112", "113", "114"];
const SHAREHOLDERS_YEARS_ANNUAL = ["111", "112", "113"];

const SHAREHOLDERS_CONTACTS = {
  zh: `聯絡人
股務代理機構：第一金證券股份有限公司
地　　　　址：台北市大安區安和路一段27號6樓
電　　　　話：02-2563-5711

發言人：林雅雯　協理
地　　　　址：新北市汐止區大同路一段239號17樓之1
電　　　　話：02-2649-0055
Email：public@jorjin.com`,
  en: `Contacts
Stock Affairs ： First Securities Inc.
Address ： 4th Floor, No. 22, Section 1, Chang'an East Road, Taipei
TEL：02-2563-5711

Spokesperson：Isley Lin Senior Manager
Address ： New Taipei City 22161, Taiwan, R.O.C.
TEL：02-2649-0055
Email：public@jorjin.com`,
};

const FINANCIALS_LINKS = [
  {
    titleZh: "每月營業額報告",
    titleEn: "Monthly Revenues",
    href: "https://mops.twse.com.tw/mops/#/web/t146sb05?companyId=4980",
  },
  {
    titleZh: "即時股價",
    titleEn: "Real-time Stock Price",
    href: "https://www.tpex.org.tw/zh-tw/esb/trading/info/pricing.html",
  },
];

const FINANCIALS_REPORTS = [
  {
    year: "112",
    q2: "https://drive.google.com/uc?export=download&id=1Oc9hJz0iMn6gZecx1KRxrzZCtJG3iCkm",
    q4: "https://drive.google.com/uc?export=download&id=1WUPhKElKzjOOAq1pnOvqtKHMYH59dFuM",
  },
  {
    year: "113",
    q2: "https://drive.google.com/uc?export=download&id=1MR7yjMzxL6kD466T842C1VKVS2BOdddT",
    q4: "https://drive.google.com/uc?export=download&id=1CFULRlAlCCi9KZamG4Gi_FkjSXHDHC47",
  },
  {
    year: "114",
    q2: "https://drive.google.com/uc?export=download&id=1y6kr0CJsa7Cm40wsdkFqrANur9NxMIM0",
    q4: "",
  },
];

const BOARD_STRUCTURE_ROWS = [
  {
    nameZh: "梁文隆",
    nameEn: "LIANG, WEN-LUNG",
    titleZh: "董事",
    titleEn: "Chairman",
    genderZh: "男",
    genderEn: "Male",
    employeeZh: "是",
    employeeEn: "Yes",
    nationalityZh: "中華民國",
    nationalityEn: "ROC",
    experienceZh: [
      "現任：本公司董事長",
      "曾任：家程科技(股)公司董事長",
      "學歷：國立高雄應用科技大學學士",
    ],
    experienceEn: [
      "Current Position: Chairman of the Company",
      "Previous Position: Chairman, Jia-Cheng Technology Co., Ltd.",
      "Academic Background: Bachelor’s Degree, National Kaohsiung University of Applied Sciences",
    ],
    note: "",
  },
  {
    nameZh: "蔡淑蓮",
    nameEn: "TSAI, SHU-LIEN",
    titleZh: "董事",
    titleEn: "Director",
    genderZh: "女",
    genderEn: "Female",
    employeeZh: "是",
    employeeEn: "Yes",
    nationalityZh: "中華民國",
    nationalityEn: "ROC",
    experienceZh: [
      "現任：本公司管理處資深經理",
      "曾任：安農(股)公司",
      "學歷：台中商專企管科",
    ],
    experienceEn: [
      "Current Position: Senior Manager, Administration Department of the Company",
      "Previous Position: An-Nong Co., Ltd.",
      "Academic Background: Department of Business Administration, Taichung Commercial Junior College",
    ],
    note: "",
  },
  {
    nameZh: "洪育堯",
    nameEn: "HUNG, YU-YAO",
    titleZh: "董事",
    titleEn: "Director",
    genderZh: "男",
    genderEn: "Male",
    employeeZh: "否",
    employeeEn: "No",
    nationalityZh: "中華民國",
    nationalityEn: "ROC",
    experienceZh: [
      "曾任：元大期貨協理",
      "學歷：國立中興大學社會科學暨管理學院高階經理人(財務金融組)碩士",
    ],
    experienceEn: [
      "Current Position: Associate Vice President, Yuanta Futures Co., Ltd.",
      "Academic Background: Master’s Degree, Executive Master of Business Administration (Finance), College of Social Sciences and Management, National Chung Hsing University",
    ],
    note: "",
  },
  {
    nameZh: "李博甯",
    nameEn: "LI, PO-NING",
    titleZh: "董事",
    titleEn: "Director",
    genderZh: "男",
    genderEn: "Male",
    employeeZh: "否",
    employeeEn: "No",
    nationalityZh: "中華民國",
    nationalityEn: "ROC",
    experienceZh: [
      "現任：和順興管理顧問股份有限公司業務協理",
      "曾任：鴻海精密股份有限公司經理",
      "學歷：美國匹茲堡大學財務數學碩士",
    ],
    experienceEn: [
      "Current Position: Associate Vice President of Business Development, He Shun Hsing Management Consulting Co., Ltd.",
      "Previous Position: Manager, Hon Hai Precision Industry Co., Ltd.",
      "Academic Background: Master’s Degree in Financial Mathematics, University of Pittsburgh, USA",
    ],
    note: "",
  },
  {
    nameZh: "吳怡昌",
    nameEn: "WU, I-CHANG",
    titleZh: "獨立董事",
    titleEn: "Independent Director",
    genderZh: "男",
    genderEn: "Male",
    employeeZh: "否",
    employeeEn: "No",
    nationalityZh: "中華民國",
    nationalityEn: "ROC",
    experienceZh: [
      "現任：國軍桃園總醫院主任醫師",
      "曾任：中華民國空軍中將軍官退伍",
      "學歷：美國杜克大學生理醫學博士",
    ],
    experienceEn: [
      "Current Position: Chief Physician, Taoyuan Armed Forces General Hospital",
      "Previous Position: Retired Lieutenant General, Republic of China Air Force",
      "Academic Background: Ph.D. in Physiology and Medicine, Duke University, USA",
    ],
    note: "",
  },
  {
    nameZh: "林森敏",
    nameEn: "LIN, SEN-MIN",
    titleZh: "獨立董事",
    titleEn: "Independent Director",
    genderZh: "男",
    genderEn: "Male",
    employeeZh: "否",
    employeeEn: "No",
    nationalityZh: "中華民國",
    nationalityEn: "ROC",
    experienceZh: [
      "現任：林森敏律師事務所主持律師",
      "曾任：思齊律師事務所主持律師",
      "學歷：東吳大學法律研究所財經法組碩士",
    ],
    experienceEn: [
      "Current Position: Managing Partner, Lin, Sen & Min Law Offices",
      "Previous Position: Managing Partner, Si-Chi Law Offices",
      "Academic Background: Master’s Degree, Institute of Law (Financial and Economic Law Division), Soochow University",
    ],
    note: "",
  },
  {
    nameZh: "張志勝",
    nameEn: "CHANG, CHIH-SHENG",
    titleZh: "獨立董事",
    titleEn: "Independent Director",
    genderZh: "男",
    genderEn: "Male",
    employeeZh: "否",
    employeeEn: "No",
    nationalityZh: "中華民國",
    nationalityEn: "ROC",
    experienceZh: [
      "現任：聯捷聯合會計師事務所所長",
      "曾任：敬業會計師事務所合夥會計師",
      "學歷：台中商專會統科",
    ],
    experienceEn: [
      "Current Position: Managing Partner, Lien-Jie Certified Public Accountants Firm",
      "Previous Position: Partner CPA, Jing-Yeh Certified Public Accountants Firm",
      "Academic Background: Department of Accounting and Statistics, Taichung Commercial Junior College",
    ],
    note: "",
  },
];

export default function InvestorPage() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = pathname?.startsWith("/zh") ? "zh" : "en";
  const [activeId, setActiveId] = useState(INVESTOR_SECTIONS[0].id);
  const active = INVESTOR_SECTIONS.find((s) => s.id === activeId) ?? INVESTOR_SECTIONS[0];

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && INVESTOR_SECTIONS.some((s) => s.id === tab)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveId(tab);
    }
  }, [searchParams]);

  return (
    <main className="bg-white min-h-screen">
      <section className="bg-gradient-to-b from-neutral-400 via-neutral-200 to-neutral-50">
        <div className="mx-auto max-w-8xl px-6 md:px-15 pt-24 md:pt-28 pb-10">
        <h1 className="text-[clamp(36px,6vw,64px)] leading-[0.95] tracking-tight text-neutral-900">
          {locale === "zh" ? "投資人專區" : "Investor"}
        </h1>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-6 md:px-15 pb-20">
        <div className="border-b border-neutral-300">
          <div className="flex flex-wrap items-center gap-14 border-t border-neutral-300 py-6">
            {INVESTOR_SECTIONS.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveId(item.id);
                    const next = new URLSearchParams(searchParams.toString());
                    next.set("tab", item.id);
                    router.replace(`${pathname}?${next.toString()}`);
                  }}
                  className={[
                    "text-[clamp(16px,2vw,22px)] tracking-tight",
                    isActive ? "text-neutral-900 border-b-2 border-neutral-900" : "text-neutral-500 hover:text-neutral-700",
                  ].join(" ")}
                >
                  {locale === "zh" ? item.titleZh : item.titleEn}
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-10 text-neutral-700">
          {activeId === "board" ? (
            <div>
              <div className="text-[clamp(22px,2.4vw,32px)] tracking-tight text-neutral-900">
                {locale === "zh" ? active.bodyZh : active.bodyEn}
              </div>
              <ol className="mt-6 space-y-3 text-[clamp(14px,1.6vw,18px)] leading-relaxed">
                {BOARD_FUNCTIONS.map((item, idx) => (
                  <li key={`${item.zh}-${idx}`} className="grid grid-cols-1 gap-1 md:grid-cols-[28px_1fr]">
                    <div className="text-neutral-500">{idx + 1}.</div>
                    <div>
                      <div className="text-neutral-900">{locale === "zh" ? item.zh : item.en}</div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-12">
                <div className="text-[clamp(22px,2.4vw,32px)] tracking-tight text-neutral-900">
                  {locale === "zh" ? "董事會組織" : "Board Structure"}
                </div>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full min-w-[900px] border border-neutral-300 text-left text-sm">
                    <thead className="bg-neutral-100">
                      <tr className="border-b border-neutral-300">
                        <th className="px-3 py-3 border-r border-neutral-300">
                          {locale === "zh" ? "姓名" : "Name"}
                        </th>
                        <th className="px-3 py-3 border-r border-neutral-300">
                          {locale === "zh" ? "職稱" : "Title"}
                        </th>
                        <th className="px-3 py-3 border-r border-neutral-300">
                          {locale === "zh" ? "性別" : "Gender"}
                        </th>
                        <th className="px-3 py-3 border-r border-neutral-300">
                          {locale === "zh" ? "兼任員工" : "Status of employee"}
                        </th>
                        <th className="px-3 py-3 border-r border-neutral-300">
                          {locale === "zh" ? "國籍" : "Nationality"}
                        </th>
                        <th className="px-3 py-3 border-r border-neutral-300">
                          {locale === "zh" ? "主要經歷" : "Main Experience"}
                        </th>
                        <th className="px-3 py-3">{locale === "zh" ? "備註" : "Notes"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BOARD_STRUCTURE_ROWS.map((row, idx) => (
                        <tr key={`${row.nameZh}-${idx}`} className="border-b border-neutral-200">
                          <td className="px-3 py-3 border-r border-neutral-200 whitespace-nowrap">
                            {locale === "zh" ? row.nameZh : row.nameEn}
                          </td>
                          <td className="px-3 py-3 border-r border-neutral-200 whitespace-nowrap">
                            {locale === "zh" ? row.titleZh : row.titleEn}
                          </td>
                          <td className="px-3 py-3 border-r border-neutral-200 whitespace-nowrap">
                            {locale === "zh" ? row.genderZh : row.genderEn}
                          </td>
                          <td className="px-3 py-3 border-r border-neutral-200 whitespace-nowrap">
                            {locale === "zh" ? row.employeeZh : row.employeeEn}
                          </td>
                          <td className="px-3 py-3 border-r border-neutral-200 whitespace-nowrap">
                            {locale === "zh" ? row.nationalityZh : row.nationalityEn}
                          </td>
                          <td className="px-3 py-3 border-r border-neutral-200">
                            <div className="space-y-1">
                              {(locale === "zh" ? row.experienceZh : row.experienceEn).map((line, i) => (
                                <div key={`${row.nameZh}-${i}`}>{line}</div>
                              ))}
                            </div>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-12 space-y-10">
                {BOARD_EXTRA_SECTIONS.map((section) => (
                  <div key={section.titleEn}>
                    <div className="text-[clamp(24px,2.6vw,34px)] tracking-tight text-neutral-900 whitespace-pre-line">
                      {locale === "zh" ? section.titleZh : section.titleEn}
                    </div>
                    {(() => {
                      const body = locale === "zh" ? section.bodyZh : section.bodyEn;
                      return body ? (
                        <p className="mt-4 text-[clamp(14px,1.6vw,18px)] leading-relaxed text-neutral-700">
                          {body}
                        </p>
                      ) : (
                        <p className="mt-4 text-[clamp(14px,1.6vw,18px)] leading-relaxed text-neutral-500">
                          {locale === "zh" ? "內容待補" : "Content to be updated"}
                        </p>
                      );
                    })()}

                    {section.id === "performance" ? (
                      <div className="mt-6 overflow-x-auto">
                        <table className="w-full min-w-[640px] border border-neutral-300 text-left text-sm">
                          <thead className="bg-neutral-100">
                            <tr className="border-b border-neutral-300">
                              <th className="px-3 py-3 border-r border-neutral-300">
                                {locale === "zh" ? "年度" : "Years"}
                              </th>
                              <th className="px-3 py-3 border-r border-neutral-300">
                                {locale === "zh"
                                  ? "董事成員績效評估平均分數"
                                  : "Average Score of Directors’ Performance Evaluation"}
                              </th>
                              <th className="px-3 py-3">
                                {locale === "zh"
                                  ? "董事會績效評估平均分數"
                                  : "Average Score of Board Performance Evaluation"}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {PERFORMANCE_TABLE.map((row) => (
                              <tr key={row.year} className="border-b border-neutral-200">
                                <td className="px-3 py-3 border-r border-neutral-200">{row.year}</td>
                                <td className="px-3 py-3 border-r border-neutral-200">
                                  {row.directorsAvg}
                                </td>
                                <td className="px-3 py-3">{row.boardAvg}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}

                    {section.id === "communications" ? (
                      <div className="mt-6 overflow-x-auto">
                        <table className="w-full min-w-[520px] border border-neutral-300 text-left text-sm">
                          <thead className="bg-neutral-100">
                            <tr className="border-b border-neutral-300">
                              <th className="px-3 py-3 border-r border-neutral-300">
                                {locale === "zh" ? "日期" : "Date"}
                              </th>
                              <th className="px-3 py-3 border-r border-neutral-300">
                                {locale === "zh" ? "稽核主管" : "Internal Auditor"}
                              </th>
                              <th className="px-3 py-3">{locale === "zh" ? "會計師" : "CPAs"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {COMMUNICATIONS_TABLE.map((row, i) => (
                              <tr key={`comm-${i}`} className="border-b border-neutral-200">
                                <td className="px-3 py-4 border-r border-neutral-200">{row.date}</td>
                                <td className="px-3 py-4 border-r border-neutral-200">{row.auditor}</td>
                                <td className="px-3 py-4">{row.cpas}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ) : activeId === "committees" ? (
            <div>
              <div className="text-[clamp(22px,2.4vw,32px)] tracking-tight text-neutral-900">
                {locale === "zh" ? "審計暨公司治理委員會" : "Audit and Corporate Governance Committee"}
              </div>

              <div className="mt-6 text-[clamp(20px,2.2vw,28px)] tracking-tight text-neutral-900">
                {locale === "zh" ? "審計委員會職能" : "Audit Committee Functions"}
              </div>

              <ol className="mt-6 space-y-3 text-[clamp(14px,1.6vw,18px)] leading-relaxed">
                {AUDIT_FUNCTIONS.map((item, idx) => (
                  <li key={`${item.zh}-${idx}`} className="grid grid-cols-1 gap-1 md:grid-cols-[28px_1fr]">
                    <div className="text-neutral-500">{idx + 1}.</div>
                    <div className="text-neutral-900">{locale === "zh" ? item.zh : item.en}</div>
                  </li>
                ))}
              </ol>
            </div>
          ) : activeId === "shareholders" ? (
            <div className="space-y-10">
              {SHAREHOLDERS_SECTIONS.map((section) => (
                <div key={section.id}>
                  <div className="text-[clamp(22px,2.4vw,32px)] tracking-tight text-neutral-900">
                    {locale === "zh" ? section.titleZh : section.titleEn}
                  </div>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full min-w-[420px] border border-neutral-300 text-left text-sm">
                      <thead className="bg-neutral-100">
                        <tr className="border-b border-neutral-300">
                          <th className="px-3 py-3 border-r border-neutral-300">
                            {locale === "zh" ? "年度" : "Year"}
                          </th>
                          <th className="px-3 py-3">{locale === "zh" ? "下載" : "Download"}</th>
                        </tr>
                      </thead>
                      <tbody>
                      {(section.id === "annual" ? SHAREHOLDERS_YEARS_ANNUAL : SHAREHOLDERS_YEARS_DEFAULT).map((year) => {
                          const href = section.downloads?.[year] ?? "";
                          return (
                            <tr key={`${section.id}-${year}`} className="border-b border-neutral-200">
                              <td className="px-3 py-3 border-r border-neutral-200">{year}</td>
                              <td className="px-3 py-3 text-neutral-500">
                                {href ? (
                                  <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
                                    Download
                                  </a>
                                ) : (
                                  "—"
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              <div className="text-[clamp(22px,2.4vw,32px)] tracking-tight text-neutral-900">
                {locale === "zh" ? "聯絡人" : "Contacts"}
              </div>
              <div className="whitespace-pre-line text-[clamp(14px,1.6vw,18px)] leading-relaxed text-neutral-700">
                {locale === "zh" ? SHAREHOLDERS_CONTACTS.zh : SHAREHOLDERS_CONTACTS.en}
              </div>
            </div>
          ) : activeId === "financials" ? (
            <div className="space-y-8 text-[clamp(14px,1.6vw,18px)] leading-relaxed text-neutral-700">
              <div>
                <div className="text-[clamp(22px,2.4vw,32px)] tracking-tight text-neutral-900">
                  {locale === "zh" ? "財務報告" : "Financial Reports"}
                </div>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[520px] border border-neutral-300 text-left text-sm">
                    <thead className="bg-neutral-100">
                      <tr className="border-b border-neutral-300">
                        <th className="px-3 py-3 border-r border-neutral-300">
                          {locale === "zh" ? "年度" : "Years"}
                        </th>
                        <th className="px-3 py-3 border-r border-neutral-300">
                          {locale === "zh" ? "第二季" : "Q2"}
                        </th>
                        <th className="px-3 py-3">{locale === "zh" ? "第四季" : "Q4"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FINANCIALS_REPORTS.map((row) => (
                        <tr key={`fin-${row.year}`} className="border-b border-neutral-200">
                          <td className="px-3 py-3 border-r border-neutral-200">{row.year}</td>
                          <td className="px-3 py-3 border-r border-neutral-200">
                            {row.q2 ? (
                              <a
                                href={row.q2}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                Download
                              </a>
                            ) : (
                              ""
                            )}
                          </td>
                          <td className="px-3 py-3">
                            {row.q4 ? (
                              <a
                                href={row.q4}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                Download
                              </a>
                            ) : (
                              ""
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {FINANCIALS_LINKS.map((item) => (
                  <div key={item.titleEn} className="flex flex-col gap-2">
                    <div className="text-[clamp(16px,2vw,22px)] tracking-tight text-neutral-900">
                      {locale === "zh" ? item.titleZh : item.titleEn}
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${buttonClass} justify-center self-start`}
                    >
                      {locale === "zh" ? "前往觀看更多資訊" : "View More Information"}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-[clamp(14px,1.6vw,18px)] leading-relaxed">
              {locale === "zh" ? active.bodyZh : active.bodyEn}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
