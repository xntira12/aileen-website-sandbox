import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";

/* ═══════════════════════════════════════════
   CSS
   ═══════════════════════════════════════════ */
const CSS_ID = "svc-x-css";
function injectCSS() {
  if (document.getElementById(CSS_ID)) return;
  const s = document.createElement("style");
  s.id = CSS_ID;
  s.textContent = `
.svx{--t:#1a2e3b;--m:#5d7b8a;--acc:#0d9488;--acc2:#0ea5e9;--abg:#ecfeff;--abg2:#f0fdfa;position:relative;overflow:hidden;background:linear-gradient(165deg,#f6fafb 0%,#eef5f7 40%,#f0f4f8 100%);padding:100px 0 110px}
@keyframes xbA{0%,100%{border-radius:42% 58% 64% 36%/47% 34% 66% 53%;transform:translate(0,0)}33%{border-radius:58% 42% 36% 64%/34% 66% 34% 66%;transform:translate(35px,-45px)}66%{border-radius:36% 64% 50% 50%/60% 40% 60% 40%;transform:translate(-25px,30px)}}
@keyframes xbB{0%,100%{border-radius:58% 42% 48% 52%/38% 62% 42% 58%;transform:translate(0,0)}50%{border-radius:42% 58% 52% 48%/62% 38% 58% 42%;transform:translate(-45px,-25px)}}
@keyframes xbC{0%,100%{border-radius:60% 40% 48% 52%/40% 60% 52% 48%;transform:translate(0,0)}50%{border-radius:40% 60% 52% 48%/60% 40% 48% 52%;transform:translate(25px,35px)}}
.svx-blob{position:absolute;pointer-events:none;filter:blur(90px);opacity:.35;will-change:transform,border-radius}
.svx-b1{width:480px;height:480px;background:radial-gradient(circle,rgba(13,148,136,.22),transparent 70%);top:-6%;left:-6%;animation:xbA 20s ease-in-out infinite}
.svx-b2{width:400px;height:400px;background:radial-gradient(circle,rgba(14,165,233,.18),transparent 70%);top:35%;right:-8%;animation:xbB 26s ease-in-out infinite}
.svx-b3{width:360px;height:360px;background:radial-gradient(circle,rgba(13,148,136,.16),transparent 70%);bottom:-8%;left:20%;animation:xbC 23s ease-in-out infinite}
@keyframes xSpk{0%,100%{transform:translateY(0) scale(1);opacity:.25}50%{transform:translateY(-16px) scale(1.3);opacity:.55}}
.svx-spk{position:absolute;border-radius:50%;pointer-events:none;animation:xSpk var(--d,5s) ease-in-out var(--dl,0s) infinite}
.svx-glow{position:absolute;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(13,148,136,.05),transparent 60%);pointer-events:none;transform:translate(-50%,-50%);transition:left .4s ease-out,top .4s ease-out;z-index:0}
@keyframes xHL{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.svx-hl{transform:scaleX(0);transform-origin:center}.svx-hl.on{animation:xHL .8s cubic-bezier(.22,1,.36,1) .3s forwards}

/* ═══ CARD ═══ */
.svx-c{position:relative;background:rgba(255,255,255,.68);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-radius:20px;padding:28px 24px 24px;cursor:pointer;overflow:visible;transform-style:preserve-3d;will-change:transform;transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .35s ease}
.svx-c:hover{box-shadow:0 14px 44px rgba(0,50,70,.07)}
.svx-c::before,.svx-c::after{content:'';position:absolute;inset:-1px;border-radius:20px;pointer-events:none}
.svx-c::before{border:1px solid rgba(0,50,70,.06);transition:border-color .3s}
.svx-c:hover::before{border-color:transparent}
/* animated border — unified teal-to-cyan gradient */
.svx-c::after{background:conic-gradient(from var(--border-angle,0deg),transparent 0%,#0d9488 5%,#0ea5e9 10%,transparent 20%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;padding:1.5px;opacity:0;transition:opacity .35s;animation:xBS 3s linear infinite}
.svx-c:hover::after{opacity:1}
@keyframes xBS{to{--border-angle:360deg}}
@property --border-angle{syntax:'<angle>';initial-value:0deg;inherits:false}

.svx-ic{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;position:relative;background:linear-gradient(135deg,var(--abg2),var(--abg));transition:transform .5s cubic-bezier(.22,1,.36,1),box-shadow .4s}
.svx-c:hover .svx-ic{transform:scale(1.1) rotate(-4deg);box-shadow:0 4px 18px rgba(13,148,136,.16)}
@keyframes xIcR{0%{transform:scale(1);opacity:.45}100%{transform:scale(2.2);opacity:0}}
.svx-ir{position:absolute;inset:0;border-radius:14px;border:2px solid var(--acc);opacity:0;pointer-events:none}.svx-c:hover .svx-ir{animation:xIcR 1s ease-out}
.svx-n{position:absolute;top:14px;right:18px;font-size:3rem;font-weight:900;line-height:1;background:linear-gradient(135deg,rgba(13,148,136,.06),rgba(14,165,233,.02));-webkit-background-clip:text;-webkit-text-fill-color:transparent;pointer-events:none;transition:all .4s}
.svx-c:hover .svx-n{background:linear-gradient(135deg,rgba(13,148,136,.12),rgba(14,165,233,.06));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.svx-tg{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:8px;font-size:.68rem;font-weight:600;letter-spacing:.02em;background:linear-gradient(135deg,#f0fdfa,#ecfeff);color:#0d9488}
.svx-grid{display:grid;gap:22px;grid-template-columns:repeat(4,1fr)}
.svx-grid3{display:grid;gap:22px;grid-template-columns:repeat(3,1fr);max-width:840px;margin:22px auto 0}
@media(max-width:1024px){.svx-grid{grid-template-columns:repeat(2,1fr)}.svx-grid3{grid-template-columns:repeat(2,1fr);max-width:100%}}
@media(max-width:600px){.svx-grid,.svx-grid3{grid-template-columns:1fr}}
@keyframes xRv{from{opacity:0;transform:translateY(45px) scale(.96);filter:blur(3px)}to{opacity:1;transform:none;filter:none}}
.svx-rv{opacity:0}.svx-rv.on{animation:xRv .7s cubic-bezier(.22,1,.36,1) forwards}

/* ═══ STAGE ═══ */
.svx-stage{transition:opacity .35s ease,transform .35s ease;position:relative}
.svx-stage.hide{opacity:0;pointer-events:none;position:absolute;inset:0;transform:translateY(16px)}
.svx-stage.show{opacity:1;pointer-events:auto;transform:translateY(0)}
@keyframes xDL{from{opacity:0;transform:translateX(-50px) scale(.96)}to{opacity:1;transform:none}}
@keyframes xDR{from{opacity:0;transform:translateX(50px) scale(.96)}to{opacity:1;transform:none}}
.svx-dl{animation:xDL .65s cubic-bezier(.22,1,.36,1) forwards}
.svx-dr{animation:xDR .65s cubic-bezier(.22,1,.36,1) forwards}
@keyframes xBdg{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
.svx-bdg{animation:xBdg .4s ease forwards}

/* ═══ Detail ═══ */
.svx-dtl{background:rgba(255,255,255,.75);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(13,148,136,.08);border-radius:22px;padding:36px 32px;position:relative;overflow:hidden}
.svx-dtl::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent 5%,#0d9488 35%,#0ea5e9 65%,transparent 95%)}
.svx-pill{display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border-radius:9999px;border:1px solid rgba(13,148,136,.12);background:rgba(255,255,255,.7);backdrop-filter:blur(6px);color:var(--m);font-size:.82rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:all .3s}
.svx-pill:hover{background:rgba(255,255,255,.9);border-color:rgba(13,148,136,.25);color:var(--acc)}
.svx-pill .ar{font-size:1rem;line-height:1;transition:transform .3s}
.svx-pill:hover .af{transform:translateX(2px)}.svx-pill:hover .ab{transform:translateX(-2px)}
.svx-sli{padding:10px 14px;border-radius:12px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .25s ease;border:1px solid transparent}
.svx-sli:hover{background:rgba(13,148,136,.03);border-color:rgba(13,148,136,.06)}
.svx-sli.act{background:linear-gradient(135deg,rgba(13,148,136,.06),rgba(14,165,233,.04));border-color:rgba(13,148,136,.14)}
.svx-feat{display:flex;align-items:flex-start;gap:10px;padding:12px 0;border-bottom:1px solid rgba(13,148,136,.06)}
.svx-feat:last-child{border-bottom:none}
@keyframes xSt{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.svx-st{opacity:0}.svx-st.on{animation:xSt .6s cubic-bezier(.22,1,.36,1) forwards}
@media(max-width:768px){.svx-n{font-size:2.2rem}.svx-dtl{padding:24px 20px}.svx-dg{grid-template-columns:1fr!important}.svx-dl{order:2}.svx-dr{order:1}}
`;
  document.head.appendChild(s);
}

/* ═══ DATA ═══ */
const SVC = [
  {
    id: "qmp",
    n: "01",
    t: "Quality Management Platform",
    ic: "🛡️",
    tags: ["Quality", "Compliance"],
    summary:
      "ระบบจัดการคุณภาพที่ใช้รายงาน ควบคุม ตรวจสอบ และดำเนินการพัฒนาคุณภาพขององค์กร",
    detail:
      "เพื่อลดข้อผิดพลาดจากกระบวนการที่ซ้ำซ้อน สามารถติดตามการทำงานได้ทุกขั้นตอน ช่วยยกระดับมาตรฐานการทำงานได้รวดเร็ว",
    features: [
      "รายงานและควบคุมคุณภาพแบบ Real-time",
      "ตรวจสอบย้อนกลับทุกขั้นตอน",
      "ลดข้อผิดพลาดจากกระบวนการซ้ำซ้อน",
      "ยกระดับมาตรฐานองค์กร",
    ],
  },
  {
    id: "lcbo",
    n: "02",
    t: "Low-Code Business Orchestrator",
    ic: "⚡",
    tags: ["Low-Code", "Workflow"],
    summary:
      "แพลตฟอร์มพัฒนาระบบงานในรูปแบบ Low-Code ช่วยให้ IT และ Users สามารถทำงานร่วมกัน",
    detail:
      "สร้าง Business Workflow ในองค์กรได้รวดเร็วยิ่งขึ้น บริหารการทำงานและตรวจสอบได้ Real-time พัฒนา Workflow ได้เร็วขึ้น 3–5 เท่า",
    features: [
      "พัฒนา Workflow เร็วขึ้น 3-5 เท่า",
      "IT และ Users ร่วมสร้างระบบ",
      "บริหารและตรวจสอบ Real-time",
      "ลดต้นทุนการพัฒนาซอฟต์แวร์",
    ],
  },
  {
    id: "pmp",
    n: "03",
    t: "Process Management Platform",
    ic: "🔄",
    tags: ["BPM", "Process"],
    summary:
      'การบริหารจัดการ "กระบวนการทำงาน" เปลี่ยนจากกระดาษหรือ Visio (เช่น BPMN, SOP)',
    detail:
      "ยกระดับเข้าสู่ระบบที่มีมาตรฐานเดียวกัน สามารถค้นหา ตรวจสอบ แก้ไขได้ เพื่อสนับสนุนการทำงานร่วมกัน และการปรับปรุงกระบวนการ",
    features: [
      "เปลี่ยน Paper-based เป็น Digital",
      "มาตรฐานเดียวกันทั้งองค์กร",
      "ค้นหา ตรวจสอบ แก้ไขได้ทันที",
      "รองรับ BPMN และ SOP",
    ],
  },
  {
    id: "rpa",
    n: "04",
    t: "Robotic Process Automation",
    ic: "🤖",
    tags: ["Automation", "RPA"],
    summary:
      "หุ่นยนต์ซอฟต์แวร์ (Robot) ที่ทำหน้าที่เป็นผู้ช่วยส่วนตัว สำหรับงานซ้ำซ้อนที่มีรูปแบบแน่นอน",
    detail:
      "สามารถทำงานได้ 24/7 เช่น การคัดลอก กรอกข้อมูล การตรวจสอบและรวบรวมข้อมูล รวมถึงการบันทึกข้อมูลเข้าสู่ระบบ",
    features: [
      "ทำงานอัตโนมัติ 24/7",
      "คัดลอก กรอก และบันทึกข้อมูล",
      "ตรวจสอบและรวบรวมข้อมูลอัตโนมัติ",
      "ลดข้อผิดพลาดจากคน",
    ],
  },
  {
    id: "dsai",
    n: "05",
    t: "Domain-Specific Generative AI",
    ic: "🧠",
    tags: ["AI", "Generative"],
    summary:
      "ก้าวสู่อนาคตของธุรกิจด้วย AI ที่เข้าใจบริบทของภาษาไทย ยกระดับการค้นหา การสื่อสาร",
    detail:
      "การบริการ และวิเคราะห์ข้อมูล ตอบโจทย์การทำงานเฉพาะองค์กร ลดภาระงาน ลดเวลา และทรัพยากรในการทำงาน",
    features: [
      "AI เข้าใจบริบทภาษาไทย",
      "วิเคราะห์ข้อมูลเชิงลึก",
      "ตอบโจทย์เฉพาะองค์กร",
      "ลดภาระงานและเวลา",
    ],
  },
  {
    id: "scr",
    n: "06",
    t: "Supply Chain Resilience",
    ic: "🚛",
    tags: ["Supply Chain", "Digital"],
    summary:
      "แพลตฟอร์มห่วงโซ่อุปทานดิจิทัลแบบครบวงจร ที่ผสานรวมคำสั่งซื้อ สินค้า คงคลัง",
    detail:
      "คลังสินค้า การขนส่ง และการจัดการทางการเงิน ได้อย่างราบรื่น ลดความเสี่ยง รวดเร็วและมีประสิทธิภาพ",
    features: [
      "รวมทุกขั้นตอนของ Supply Chain",
      "จัดการคำสั่งซื้อแบบ Real-time",
      "ลดความเสี่ยงด้าน Logistics",
      "ตอบสนองตลาดได้รวดเร็ว",
    ],
  },
  {
    id: "erp",
    n: "07",
    t: "ERP Workspace",
    ic: "🏢",
    tags: ["ERP", "Workspace"],
    summary:
      "แพลตฟอร์มบริหารจัดการธุรกิจแบบบูรณาการ ช่วยจัดระเบียบ Workflow ที่ซับซ้อนให้ง่ายขึ้น",
    detail:
      "ติดตามสถานะการดำเนินงานได้แบบ Real-time พร้อมเครื่องมือครบครันที่ช่วยขับเคลื่อนธุรกิจอย่างมั่นคง",
    features: [
      "บริหารจัดการแบบบูรณาการ",
      "ติดตามสถานะ Real-time",
      "เครื่องมือครบครัน",
      "ขับเคลื่อนธุรกิจอย่างมั่นคง",
    ],
  },
];

/* ── Specks ── */
function Specks() {
  const pts = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        w: 3 + Math.random() * 5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: `${3.5 + Math.random() * 5}s`,
        dl: `${Math.random() * 4}s`,
        c: i % 2 === 0 ? "rgba(13,148,136,.2)" : "rgba(14,165,233,.18)",
      })),
    [],
  );
  return (
    <>
      {pts.map((p, i) => (
        <div
          key={i}
          className="svx-spk"
          style={{
            width: p.w,
            height: p.w,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.c,
            "--d": p.d,
            "--dl": p.dl,
          }}
        />
      ))}
    </>
  );
}

/* ── Grid Card ── */
function GCard({ item, idx, onClick, inView }) {
  const ref = useRef(null);
  const onM = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) translateZ(4px)`;
  }, []);
  const onL = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "none";
  }, []);

  return (
    <div
      ref={ref}
      className={`svx-c svx-rv ${inView ? "on" : ""}`}
      style={{ animationDelay: `${idx * 100}ms` }}
      onClick={onClick}
      onMouseMove={onM}
      onMouseLeave={onL}
    >
      <span className="svx-n">{item.n}</span>
      <div className="svx-ic">
        {item.ic}
        <div className="svx-ir" />
      </div>
      <h3
        style={{
          marginTop: 14,
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "var(--t)",
          lineHeight: 1.35,
          paddingRight: 32,
        }}
      >
        {item.t}
      </h3>
      <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
        {item.tags.map((tg) => (
          <span key={tg} className="svx-tg">
            {tg}
          </span>
        ))}
      </div>
      <p
        style={{
          marginTop: 12,
          fontSize: ".86rem",
          lineHeight: 1.65,
          color: "var(--m)",
        }}
      >
        {item.summary}
      </p>
      <div
        style={{
          marginTop: 14,
          fontSize: ".78rem",
          fontWeight: 600,
          background: "linear-gradient(135deg,#0d9488,#0ea5e9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        ดูรายละเอียด{" "}
        <span style={{ fontSize: "1rem", WebkitTextFillColor: "#0d9488" }}>
          ›
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN
   ═══════════════════════════════════════════ */
export default function SectionServices() {
  const [view, setView] = useState("grid");
  const [vk, setVk] = useState(0);
  const [inView, setInView] = useState(false);
  const secRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    injectCSS();
  }, []);

  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onM = useCallback((e) => {
    const g = glowRef.current;
    if (!g) return;
    const r = secRef.current.getBoundingClientRect();
    g.style.left = `${e.clientX - r.left}px`;
    g.style.top = `${e.clientY - r.top}px`;
  }, []);

  const go = useCallback((v) => {
    setView(v);
    setVk((k) => k + 1);
  }, []);

  const activeItem = SVC.find((s) => s.id === view);
  const activeIdx = SVC.findIndex((s) => s.id === view);
  const prevItem = activeIdx > 0 ? SVC[activeIdx - 1] : null;
  const nextItem = activeIdx < SVC.length - 1 ? SVC[activeIdx + 1] : null;

  return (
    <section ref={secRef} className="svx" onMouseMove={onM}>
      <div className="svx-b1 svx-blob" />
      <div className="svx-b2 svx-blob" />
      <div className="svx-b3 svx-blob" />
      {inView && <Specks />}
      <div ref={glowRef} className="svx-glow" />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity .7s ease, transform .7s ease",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 18px",
              borderRadius: 9999,
              background: "rgba(13,148,136,.08)",
              color: "var(--acc)",
              fontSize: ".73rem",
              fontWeight: 700,
              letterSpacing: ".08em",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#0d9488,#0ea5e9)",
              }}
            />
            SERVICES &amp; SOLUTIONS
          </span>
          <h2
            style={{
              marginTop: 20,
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              fontWeight: 800,
              color: "var(--t)",
              lineHeight: 1.2,
            }}
          >
            โซลูชันครบวงจรเพื่อ{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#0d9488,#0ea5e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ธุรกิจยุคใหม่
            </span>
          </h2>
          <p
            style={{
              marginTop: 14,
              maxWidth: 580,
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: ".92rem",
              lineHeight: 1.7,
              color: "var(--m)",
            }}
          >
            ออกแบบมาเพื่อตอบโจทย์ทุกความต้องการทางธุรกิจ
            ยกระดับประสิทธิภาพและสร้างความได้เปรียบทางการแข่งขัน
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 24 }}
          >
            {inView && (
              <div
                className="svx-hl on"
                style={{
                  width: 72,
                  height: 3,
                  borderRadius: 2,
                  background: "linear-gradient(90deg,#0d9488,#0ea5e9)",
                }}
              />
            )}
          </div>
        </div>

        {/* ═══ STAGES ═══ */}
        <div style={{ marginTop: 52, position: "relative" }}>
          {/* GRID */}
          <div className={`svx-stage ${view === "grid" ? "show" : "hide"}`}>
            <div className="svx-grid">
              {SVC.slice(0, 4).map((it, i) => (
                <GCard
                  key={it.id}
                  item={it}
                  idx={i}
                  onClick={() => go(it.id)}
                  inView={inView}
                />
              ))}
            </div>
            <div className="svx-grid3">
              {SVC.slice(4).map((it, i) => (
                <GCard
                  key={it.id}
                  item={it}
                  idx={i + 4}
                  onClick={() => go(it.id)}
                  inView={inView}
                />
              ))}
            </div>
          </div>

          {/* DETAIL */}
          {activeItem && (
            <div
              className={`svx-stage ${view !== "grid" ? "show" : "hide"}`}
              key={`d-${vk}`}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 28,
                }}
              >
                <span
                  className="svx-bdg"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "7px 20px",
                    borderRadius: 9999,
                    background: "rgba(13,148,136,.06)",
                    color: "#0d9488",
                    fontSize: ".82rem",
                    fontWeight: 600,
                    border: "1px solid rgba(13,148,136,.14)",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{activeItem.ic}</span>
                  {activeItem.t}
                </span>
              </div>

              <div
                className="svx-dg"
                style={{
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  gap: 28,
                  maxWidth: 960,
                  margin: "0 auto",
                  alignItems: "start",
                }}
              >
                {/* sidebar */}
                <div
                  className="svx-dl"
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  {SVC.map((s) => (
                    <div
                      key={s.id}
                      className={`svx-sli ${s.id === activeItem.id ? "act" : ""}`}
                      onClick={() => go(s.id)}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            s.id === activeItem.id
                              ? "linear-gradient(135deg,#f0fdfa,#ecfeff)"
                              : "rgba(0,50,70,.03)",
                          fontSize: "1.1rem",
                          flexShrink: 0,
                          transition: "background .25s",
                        }}
                      >
                        {s.ic}
                      </div>
                      <div
                        style={{
                          fontSize: ".82rem",
                          fontWeight: 600,
                          lineHeight: 1.3,
                          color:
                            s.id === activeItem.id ? "#0d9488" : "var(--t)",
                          transition: "color .25s",
                        }}
                      >
                        {s.t}
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: 12 }}>
                    <button
                      className="svx-pill"
                      onClick={() => go("grid")}
                      type="button"
                    >
                      <span className="ar ab">‹</span> กลับหน้ารวม
                    </button>
                  </div>
                </div>

                {/* detail card */}
                <div className="svx-dr svx-dtl">
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 14 }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 16,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg,#f0fdfa,#ecfeff)",
                        fontSize: "1.6rem",
                        boxShadow: "0 4px 20px rgba(13,148,136,.12)",
                      }}
                    >
                      {activeItem.ic}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: ".7rem",
                          fontWeight: 700,
                          background: "linear-gradient(135deg,#0d9488,#0ea5e9)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          letterSpacing: ".06em",
                          textTransform: "uppercase",
                        }}
                      >
                        Service {activeItem.n}
                      </div>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 800,
                          color: "var(--t)",
                          lineHeight: 1.3,
                          marginTop: 2,
                        }}
                      >
                        {activeItem.t}
                      </h3>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      marginTop: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    {activeItem.tags.map((tg) => (
                      <span key={tg} className="svx-tg">
                        {tg}
                      </span>
                    ))}
                  </div>

                  <p
                    style={{
                      marginTop: 18,
                      fontSize: ".92rem",
                      lineHeight: 1.75,
                      color: "var(--m)",
                    }}
                  >
                    {activeItem.summary} {activeItem.detail}
                  </p>

                  <div
                    style={{
                      height: 1,
                      background:
                        "linear-gradient(90deg, transparent, rgba(13,148,136,.12), rgba(14,165,233,.08), transparent)",
                      margin: "20px 0",
                    }}
                  />

                  <div
                    style={{
                      fontSize: ".78rem",
                      fontWeight: 700,
                      background: "linear-gradient(135deg,#0d9488,#0ea5e9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      letterSpacing: ".05em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    Key Features
                  </div>
                  <div>
                    {activeItem.features.map((f, i) => (
                      <div key={i} className="svx-feat">
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background:
                              "linear-gradient(135deg,#f0fdfa,#ecfeff)",
                            color: "#0d9488",
                            fontSize: ".72rem",
                            fontWeight: 800,
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div
                          style={{
                            fontSize: ".88rem",
                            color: "var(--t)",
                            lineHeight: 1.5,
                            fontWeight: 500,
                          }}
                        >
                          {f}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 24,
                      gap: 12,
                    }}
                  >
                    {prevItem ? (
                      <button
                        className="svx-pill"
                        onClick={() => go(prevItem.id)}
                        type="button"
                      >
                        <span className="ar ab">‹</span>{" "}
                        {prevItem.t.length > 20
                          ? prevItem.t.slice(0, 20) + "…"
                          : prevItem.t}
                      </button>
                    ) : (
                      <div />
                    )}
                    {nextItem && (
                      <button
                        className="svx-pill"
                        onClick={() => go(nextItem.id)}
                        type="button"
                      >
                        {nextItem.t.length > 20
                          ? nextItem.t.slice(0, 20) + "…"
                          : nextItem.t}{" "}
                        <span className="ar af">›</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        {view === "grid" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 56,
              marginTop: 64,
              flexWrap: "wrap",
            }}
          >
            {[
              { v: "7+", l: "Solutions" },
              { v: "100+", l: "Enterprise Clients" },
              { v: "24/7", l: "Expert Support" },
            ].map((st, i) => (
              <div
                key={st.l}
                className={`svx-st ${inView ? "on" : ""}`}
                style={{
                  textAlign: "center",
                  animationDelay: `${0.9 + i * 0.15}s`,
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg,#0d9488,#0ea5e9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {st.v}
                </div>
                <div
                  style={{
                    fontSize: ".8rem",
                    color: "var(--m)",
                    marginTop: 4,
                    fontWeight: 500,
                  }}
                >
                  {st.l}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
