import type { SpecBlock, Col3Row } from "../../types/spec";

type LeftInfo = {
  titleTop: string;
  titleBottom: string;
  category: string; // 可用 \n
};

type KVLine = { label: string; value: string };

function parseLines(text: string): KVLine[] {
  return text
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((line) => {
      const idx = line.indexOf(":");
      if (idx === -1) return { label: line, value: "" };
      return {
        label: line.slice(0, idx).trim(),
        value: line.slice(idx + 1).trim(),
      };
    });
}

function KVTable({ text }: { text: string }) {
  const rows = parseLines(text);
  return (
    <div className="grid gap-y-2">
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-[260px_1fr] gap-x-10">
          <div className="border-b border-white/30 pb-[2px]">{r.label}</div>
          <div className="text-right border-b border-white/30 pb-[2px] whitespace-pre-line">
            {r.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function Col3Table({
  columns,
  rows,
}: {
  columns: { left: string; middle: string; right: string };
  rows: Col3Row[];
}) {
  return (
    <div>
      {/* Header row: Optic / Description / Remark */}
      <div className="grid grid-cols-[200px_1fr_220px] gap-x-10 text-white">
        <div className="text-[34px] font-semibold leading-[0.92]">
          {columns.left}
        </div>
        <div className="text-[34px] font-semibold leading-[0.92] text-center">
          {columns.middle}
        </div>
        <div className="text-[34px] font-semibold leading-[0.92] text-right">
          {columns.right}
        </div>
      </div>

      {/* Rows */}
      <div className="mt-10 grid gap-y-6 text-[12px] tracking-wider text-white/90">
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[200px_1fr_220px] gap-x-10">
            <div className="border-b border-white/30 pb-[2px]">{r.optic}</div>
            <div className="border-b border-white/30 pb-[2px] whitespace-pre-line">
              {r.description}
            </div>
            <div className="text-right border-b border-white/30 pb-[2px] whitespace-pre-line">
              {r.remark}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SpecOverlay({
  open,
  onClose,
  left,
  featureBlocks = [],
  blocks,
}: {
  open: boolean;
  onClose: () => void;
  left: LeftInfo;
  featureBlocks?: SpecBlock[];
  blocks: SpecBlock[];
}) {
  if (!open) return null;

  const allBlocks: SpecBlock[] = [...featureBlocks, ...blocks];

  return (
    <div className="absolute inset-0 z-50">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-neutral-900/65 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* content */}
      <div className="relative mx-auto max-w-6xl px-10 py-14 pointer-events-none">
        <div className="grid grid-cols-[280px_1fr] gap-x-16">
          {/* LEFT COLUMN */}
          <div className="text-white">
            <div className="text-[42px] font-semibold leading-[0.92]">
              {left.titleTop}
              <br />
              {left.titleBottom}
            </div>
            <div className="mt-3 h-[2px] w-[210px] bg-white/60" />
            <div className="mt-5 whitespace-pre-line text-[20px] leading-[1.05] tracking-wider text-white/85">
              {left.category}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {allBlocks.map((b, idx) => (
              <div
                key={b.id}
                className="text-[12px] tracking-wider text-white/90"
              >
                {b.title ? (
                  <div className="mb-6 whitespace-pre-line text-[34px] font-semibold leading-[0.92] text-white">
                    {b.title}
                  </div>
                ) : null}

                {b.layout === "columns3" ? (
                  <Col3Table columns={b.columns} rows={b.rows} />
                ) : (
                  <KVTable text={b.text} />
                )}

                {idx !== allBlocks.length - 1 ? <div className="h-10" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* close */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 pointer-events-auto
                   bg-neutral-950/50 px-3 py-2 text-xs tracking-widest text-white
                   hover:bg-neutral-950/60
                   focus:outline-none focus-visible:outline-none"
      >
        CLOSE
      </button>
    </div>
  );
}
