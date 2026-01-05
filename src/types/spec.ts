export type Col3Row = {
    optic: string;
    description: string;
    remark: string;
  };
  
  export type SpecBlock =
  | { id: string; title?: string; layout: "kv"; text: string }
  | {
      id: string;
      title?: string;
      layout: "columns3";
      columns: { left: string; middle: string; right: string };
      rows: { optic: string; description: string; remark: string }[];
    };
