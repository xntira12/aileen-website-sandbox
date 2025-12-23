import React, { useEffect, useRef, useState } from "react";

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-2xl font-extrabold tracking-tight text-slate-900">
      {value}
    </div>
    <div className="mt-1 text-[16px] font-semibold uppercase tracking-widest text-slate-500">
      {label}
    </div>
  </div>
);

const OrbitChip = ({
  style,
  icon,
  title,
  tooltip, // ✅ เพิ่ม
  tone = "blue",
  isActive = false,
}) => {
  const toneMap = {
    blue: "bg-blue-50 text-blue-700 ring-blue-200",
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    violet: "bg-violet-50 text-violet-700 ring-violet-200",
    slate: "bg-slate-50 text-slate-700 ring-slate-200",
  };

  return (
    <div
      className={[
        "orbit-chip group absolute flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold shadow-sm ring-1",
        toneMap[tone],
        isActive ? "is-active" : "",
      ].join(" ")}
      style={style}
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-white shadow ring-1 ring-black/5">
        {icon}
      </span>
      <span className="whitespace-nowrap">{title}</span>

      {/* ✅ Tooltip (style เดียวกับ Customers) */}
      {tooltip && (
        <div
          className="
        pointer-events-none
      absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[115%]
      w-64
      rounded-xl
      bg-white
      px-4 py-2
      text-sm
      leading-relaxed
      border border-slate-200
      text-slate-600
      shadow-xs
      backdrop-blur-md
      opacity-0
      transition duration-200
      group-hover:opacity-90
      mt-[150px]
   
    "
        >
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default function SectionDataOrbit() {
  // ลำดับการ active ให้เดินตามเส้นวงกลม (Clockwise):
  // Conferences -> Email -> Financial -> Technographics -> Company -> Buying -> วน
  const sequence = [1, 2, 3, 4, 5, 0];

  const [seqIndex, setSeqIndex] = useState(0);
  const active = sequence[seqIndex];

  // 1 สเต็ป = เวลาที่ “จุด” วิ่งจากกล่องหนึ่งไปกล่องถัดไป
  const STEP_MS = 5200;

  useEffect(() => {
    const t = setInterval(() => {
      setSeqIndex((i) => (i + 1) % sequence.length);
    }, STEP_MS);
    return () => clearInterval(t);
  }, []);

  // ครบรอบ 1 วง = 6 สเต็ป
  const ORBIT_DUR_S = (STEP_MS * 6) / 1000; // 31.2s

  const layerRef = useRef(null);

  // target = ตำแหน่งเมาส์จริง, current = ตำแหน่งที่ค่อยๆไล่ตาม
  const target = useRef({ x: 50, y: 50 });
  const current = useRef({ x: 50, y: 50 });

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    const my = ((e.clientY - r.top) / r.height) * 100;

    // ✅ ขยับตามเมาส์เหมือนเดิม แต่ลดระยะให้ “ไม่เยอะ”
    const strength = 0.32; // 0.15 = น้อยมาก, 0.22 = กำลังดี, 0.35 = มากขึ้น
    target.current.x = 50 + (mx - 50) * strength;
    target.current.y = 50 + (my - 50) * strength;
  };

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;

    let raf = 0;
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      // ✅ ความ “สมูท/หนืด” (น้อย = หนืดขึ้น, มาก = ตามไวขึ้น)
      const t = 0.08;

      current.current.x = lerp(current.current.x, target.current.x, t);
      current.current.y = lerp(current.current.y, target.current.y, t);

      el.style.setProperty("--mx", `${current.current.x}%`);
      el.style.setProperty("--my", `${current.current.y}%`);

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-slate-50 py-20 cursor-gradient isolate "
      onMouseMove={handleMove}
    >
      <div
        ref={layerRef}
        className="cursor-gradient__layer pointer-events-none absolute inset-0 -z-20"
      />
      {/* soft blobs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />

      <div className="mx-auto z-10 grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        {/* LEFT */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square">
            {/* rings */}
            <div className="absolute inset-0 grid place-items-center ">
              <div className="h-[78%] w-[78%] rounded-full border border-slate-200/70" />
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-[58%] w-[58%] rounded-full border border-slate-200/70" />
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-[38%] w-[38%] rounded-full border border-slate-200/70" />
            </div>

            {/* center */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="orbit-float grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 shadow-xl shadow-emerald-500/20 ring-1 ring-white/40">
                <span className="text-sm font-black text-white">AILEEN</span>
              </div>
            </div>

            {/* wrapper ไม่หมุน */}
            <div className="orbit-static absolute inset-0">
              {/* chips (ตำแหน่งเดิมทั้งหมด) */}
              <OrbitChip
                tone="slate"
                title="Business Process & Workflows"
                icon="🏢"
                style={{ left: "-35%", top: "48%" }}
                isActive={active === 5}
                bob={5}
                tooltip="ออกแบบและจัดการกระบวนการทำงาน ให้เป็นระบบเดียวที่ชัดเจนและตรวจสอบได้"
              />
              <OrbitChip
                tone="blue"
                title="Software Development"
                icon="🛒"
                style={{ left: "-5%", top: "15%" }}
                isActive={active === 0}
                bob={0}
                tooltip="พัฒนาซอฟต์แวร์เฉพาะทางที่ออกแบบให้สอดคล้องกับกระบวนการธุรกิจองค์กร"
              />
              <OrbitChip
                tone="emerald"
                title="AI & Intelligent Automation"
                icon="🎤"
                style={{ left: "55%", top: "10%" }}
                isActive={active === 1}
                bob={1}
                tooltip="ใช้ AI และระบบอัตโนมัติ ลดงานซ้ำ เพิ่มประสิทธิภาพและความแม่นยำ เพิ่มขีดความสามารถของทีมงาน"
              />
              <OrbitChip
                tone="blue"
                title="Systems Integration"
                icon="✉️"
                style={{ left: "77%", top: "40%" }}
                isActive={active === 2}
                bob={2}
                tooltip="เชื่อมต่อระบบและข้อมูลจากหลายแหล่ง ให้ทำงานร่วมกันอย่างไร้รอยต่อและมีเสถียรภาพ"
              />
              <OrbitChip
                tone="slate"
                title="Low-Code Enablement"
                icon="📊"
                style={{ left: "62%", top: "74%" }}
                isActive={active === 3}
                bob={3}
                tooltip="พัฒนาระบบและแอปพลิเคชันได้รวดเร็ว ด้วยแพลตฟอร์ม Low-Code ที่ยืดหยุ่นตรงตามความต้องการขององค์กร"
              />
              <OrbitChip
                tone="emerald"
                title="Enterprise Platforms"
                icon="💻"
                style={{ left: "5%", top: "75%" }}
                isActive={active === 4}
                bob={4}
                tooltip="แพลตฟอร์มระดับองค์กรที่รองรับการใช้งานขนาดใหญ่ ปลอดภัย และขยายต่อได้ รองรับการเติบโตของธุรกิจ"
              />

              {/* ✅ จุดเดิม 4 จุด: ย้ายให้ “ทับเส้นวงกลม” และวิ่งตามวงกลมแบบสมูท */}
              {/* วง 78% => r=39% , วง 58% => r=29%  (r = diameter/2) */}
              {/* dots: วิ่งตามเส้นวงกลมจริงๆ ด้วย motion path */}
              {/* DOTS: วิ่งทับเส้นวงกลม (ใช้ track ขนาดเท่าริงจริง) */}
              <span
                className="orbit-track orbit-track-outer orbit-dot-run-1"
                style={{ "--dur": `${ORBIT_DUR_S}s`, "--delay": "0s" }}
              >
                <span className="orbit-dot" />
              </span>

              <span
                className="orbit-track orbit-track-outer orbit-dot-run-2"
                style={{
                  "--dur": `${ORBIT_DUR_S}s`,
                  "--delay": `-${ORBIT_DUR_S / 6}s`,
                }}
              >
                <span className="orbit-dot" />
              </span>

              <span
                className="orbit-track orbit-track-mid orbit-dot-run-3"
                style={{
                  "--dur": `${ORBIT_DUR_S}s`,
                  "--delay": `-${(ORBIT_DUR_S * 2) / 6}s`,
                }}
              >
                <span className="orbit-dot" />
              </span>

              <span
                className="orbit-track orbit-track-mid orbit-dot-run-4"
                style={{
                  "--dur": `${ORBIT_DUR_S}s`,
                  "--delay": `-${(ORBIT_DUR_S * 3) / 6}s`,
                }}
              >
                <span className="orbit-dot" />
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative pl-10">
          <span className=" inline-flex items-center gap-2 rounded-full text-slate-600 border border-slate-400 bg-white/5 px-4 py-2 text-xs tracking-widest  backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-600" />
            ABOUT US
          </span>

          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-3xl mt-5">
            Integrated digital solutions to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              enhance operational efficiency
            </span>
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
            เราส่งมอบโซลูชันซอฟต์แวร์ที่เชื่อถือได้ บริการที่ไว้วางใจ
            และการให้คำปรึกษาจากทีมมากประสบการณ์ ตั้งแต่ด้านกระบวนการและคุณภาพ
            ไปจนถึงระบบอัตโนมัติและ AI —
            เสริมศักยภาพประสิทธิภาพและการเติบโตของธุรกิจ
          </p>
        </div>
      </div>
    </section>
  );
}
