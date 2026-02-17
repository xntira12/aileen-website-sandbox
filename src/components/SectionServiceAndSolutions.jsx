import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";

/* ════════════════════════════════════════════════
   CSS
   ════════════════════════════════════════════════ */
const CSS_ID = "svc-fin-css";
function injectCSS() {
  if (document.getElementById(CSS_ID)) return;
  const s = document.createElement("style");
  s.id = CSS_ID;
  s.textContent = `
/* ─ root ─ */
.svf{--t:#1a2e3b;--m:#5d7b8a;--acc:#0d9488;--acc2:#0ea5e9;position:relative;overflow:hidden;background:linear-gradient(165deg,#f6fafb 0%,#eef5f7 40%,#f0f4f8 100%);padding:100px 0 110px}

/* ─ ambient blobs ─ */
@keyframes bA{0%,100%{border-radius:42% 58% 64% 36%/47% 34% 66% 53%;transform:translate(0,0)}33%{border-radius:58% 42% 36% 64%/34% 66% 34% 66%;transform:translate(35px,-45px)}66%{border-radius:36% 64% 50% 50%/60% 40% 60% 40%;transform:translate(-25px,30px)}}
@keyframes bB{0%,100%{border-radius:50% 50% 42% 58%/58% 42% 60% 40%;transform:translate(0,0)}50%{border-radius:42% 58% 58% 42%/42% 58% 40% 60%;transform:translate(-45px,-25px)}}
@keyframes bC{0%,100%{border-radius:60% 40% 48% 52%/40% 60% 52% 48%;transform:translate(0,0) scale(1)}50%{border-radius:40% 60% 52% 48%/60% 40% 48% 52%;transform:translate(30px,40px) scale(1.05)}}
.svf-blob{position:absolute;pointer-events:none;filter:blur(90px);opacity:.35;will-change:transform,border-radius}
.svf-b1{width:480px;height:480px;background:radial-gradient(circle,rgba(13,148,136,.22),transparent 70%);top:-6%;left:-6%;animation:bA 20s ease-in-out infinite}
.svf-b2{width:400px;height:400px;background:radial-gradient(circle,rgba(14,165,233,.18),transparent 70%);top:35%;right:-8%;animation:bB 26s ease-in-out infinite}
.svf-b3{width:360px;height:360px;background:radial-gradient(circle,rgba(99,102,241,.14),transparent 70%);bottom:-6%;left:20%;animation:bC 23s ease-in-out infinite}

/* ─ floating specks ─ */
@keyframes spk{0%,100%{transform:translateY(0) scale(1);opacity:.25}50%{transform:translateY(-18px) scale(1.4);opacity:.6}}
.svf-spk{position:absolute;border-radius:50%;pointer-events:none;animation:spk var(--d,5s) ease-in-out var(--dl,0s) infinite}

/* ─ cursor glow ─ */
.svf-glow{position:absolute;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(13,148,136,.05),transparent 60%);pointer-events:none;transform:translate(-50%,-50%);transition:left .4s ease-out,top .4s ease-out;z-index:0}

/* ─ heading ─ */
@keyframes hLine{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.svf-hl{transform:scaleX(0);transform-origin:center;animation:hLine .8s cubic-bezier(.22,1,.36,1) .3s forwards}

/* ─ grid layout ─ */
.svf-grid{display:grid;gap:22px;grid-template-columns:repeat(4,1fr)}
.svf-grid-bot{display:grid;gap:22px;grid-template-columns:repeat(3,1fr);max-width:840px;margin:22px auto 0}
@media(max-width:1024px){.svf-grid{grid-template-columns:repeat(2,1fr)}.svf-grid-bot{grid-template-columns:repeat(2,1fr);max-width:100%}}
@media(max-width:600px){.svf-grid{grid-template-columns:1fr}.svf-grid-bot{grid-template-columns:1fr}}

/* ─ card ─ */
.svf-c{
  position:relative;
  background:rgba(255,255,255,.68);
  backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);
  border:1px solid rgba(0,50,70,.05);
  border-radius:20px;
  overflow:hidden;
  cursor:pointer;
  transform-style:preserve-3d;
  will-change:transform;
  transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .4s ease,border-color .35s ease;
}
.svf-c:hover{
  box-shadow:0 16px 48px rgba(0,50,70,.07),0 0 0 1px rgba(13,148,136,.07);
  border-color:rgba(13,148,136,.12);
}
/* prismatic top edge */
.svf-c::before{
  content:'';position:absolute;top:0;left:0;right:0;height:3px;
  background:linear-gradient(90deg,transparent 10%,var(--ac,#0d9488) 50%,transparent 90%);
  opacity:0;transition:opacity .35s;
}
.svf-c:hover::before{opacity:.7}
/* shimmer disc */
.svf-c::after{
  content:'';position:absolute;top:-80%;left:-80%;width:260%;height:260%;
  background:conic-gradient(from 0deg,transparent,rgba(255,255,255,.06),transparent 20%);
  opacity:0;transition:opacity .5s;pointer-events:none;
  animation:shimR 5s linear infinite;
}
.svf-c:hover::after{opacity:1}
@keyframes shimR{from{transform:rotate(0)}to{transform:rotate(360deg)}}

.svf-ci{position:relative;z-index:1;padding:28px 24px 24px}

/* ─ icon ─ */
.svf-ic{
  width:48px;height:48px;border-radius:14px;
  display:flex;align-items:center;justify-content:center;
  font-size:1.4rem;position:relative;
  transition:transform .5s cubic-bezier(.22,1,.36,1),box-shadow .4s;
}
.svf-c:hover .svf-ic{transform:scale(1.1) rotate(-4deg);box-shadow:0 4px 18px var(--acg,rgba(13,148,136,.16))}

/* icon ring burst */
@keyframes icR{0%{transform:scale(1);opacity:.45}100%{transform:scale(2.2);opacity:0}}
.svf-ir{position:absolute;inset:0;border-radius:14px;border:2px solid var(--ac,#0d9488);opacity:0;pointer-events:none}
.svf-c:hover .svf-ir{animation:icR 1s ease-out}

/* ─ number watermark ─ */
.svf-n{
  position:absolute;top:16px;right:18px;
  font-size:3rem;font-weight:900;line-height:1;
  background:linear-gradient(135deg,rgba(0,50,70,.04),rgba(0,50,70,.012));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  pointer-events:none;z-index:0;transition:all .4s;
}
.svf-c:hover .svf-n{background:linear-gradient(135deg,var(--ac2,rgba(13,148,136,.1)),rgba(0,50,70,.02));-webkit-background-clip:text;-webkit-text-fill-color:transparent}

/* ─ tags ─ */
.svf-tg{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:8px;font-size:.68rem;font-weight:600;letter-spacing:.02em}

/* ─ expand ─ */
.svf-ex{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s cubic-bezier(.22,1,.36,1)}
.svf-ex.op{grid-template-rows:1fr}
.svf-exi{overflow:hidden}

/* ─ chevron ─ */
.svf-ch{display:inline-block;transition:transform .4s cubic-bezier(.22,1,.36,1)}

/* ─ reveal ─ */
@keyframes rvU{from{opacity:0;transform:translateY(50px) scale(.96);filter:blur(3px)}to{opacity:1;transform:none;filter:none}}
.svf-rv{opacity:0}
.svf-rv.on{animation:rvU .75s cubic-bezier(.22,1,.36,1) forwards}

/* ─ stat counter ─ */
@keyframes stC{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.svf-st{opacity:0}
.svf-st.on{animation:stC .6s cubic-bezier(.22,1,.36,1) forwards}

/* ─ active card ─ */
.svf-c.act{border-color:rgba(13,148,136,.15);box-shadow:0 6px 32px rgba(13,148,136,.08),0 0 0 1px rgba(13,148,136,.06)}

@media(max-width:768px){.svf-n{font-size:2.2rem}.svf-ci{padding:22px 18px 20px}}
`;
  document.head.appendChild(s);
}

/* ── DATA ── */
const SVC = [
  {
    id: "qmp",
    n: "01",
    t: "Quality Management Platform",
    ic: "🛡️",
    c: "#0d9488",
    bg: "#ecfdf5",
    tags: ["Quality", "Compliance"],
    s: "ระบบจัดการคุณภาพที่ใช้รายงาน ควบคุม ตรวจสอบ และดำเนินการพัฒนาคุณภาพขององค์กร",
    d: "เพื่อลดข้อผิดพลาด จากกระบวนการที่ซ้ำซ้อน สามารถติดตามการทำงานได้ทุกขั้นตอน ช่วยยกระดับมาตรฐานการทำงานได้รวดเร็ว",
  },
  {
    id: "lcbo",
    n: "02",
    t: "Low-Code Business Orchestrator",
    ic: "⚡",
    c: "#0ea5e9",
    bg: "#ecfeff",
    tags: ["Low-Code", "Workflow"],
    s: "แพลตฟอร์มพัฒนาระบบงานในรูปแบบ Low-Code ช่วยให้ IT และ Users สามารถทำงานร่วมกัน",
    d: "สร้าง Business Workflow ในองค์กรได้รวดเร็วยิ่งขึ้น บริหารการทำงานและตรวจสอบได้ Real-time พัฒนา Workflow ได้เร็วขึ้น 3–5 เท่า",
  },
  {
    id: "pmp",
    n: "03",
    t: "Process Management Platform",
    ic: "🔄",
    c: "#6366f1",
    bg: "#eef2ff",
    tags: ["BPM", "Process"],
    s: 'การบริหารจัดการ "กระบวนการทำงาน" เปลี่ยนจากกระดาษหรือ Visio (เช่น BPMN, SOP)',
    d: "ยกระดับเข้าสู่ระบบที่มีมาตรฐานเดียวกัน สามารถค้นหา ตรวจสอบ แก้ไขได้ เพื่อสนับสนุนการทำงานร่วมกัน และการปรับปรุงกระบวนการ",
  },
  {
    id: "rpa",
    n: "04",
    t: "Robotic Process Automation",
    ic: "🤖",
    c: "#d97706",
    bg: "#fffbeb",
    tags: ["Automation", "RPA"],
    s: "หุ่นยนต์ซอฟต์แวร์ (Robot) ที่ทำหน้าที่เป็นผู้ช่วยส่วนตัว สำหรับงานซ้ำซ้อนที่มีรูปแบบแน่นอน",
    d: "สามารถทำงานได้ 24/7 เช่น การคัดลอก กรอกข้อมูล การตรวจสอบและรวบรวมข้อมูล รวมถึงการบันทึกข้อมูลเข้าสู่ระบบ",
  },
  {
    id: "dsai",
    n: "05",
    t: "Domain-Specific Generative AI",
    ic: "🧠",
    c: "#8b5cf6",
    bg: "#f5f3ff",
    tags: ["AI", "Generative"],
    s: "ก้าวสู่อนาคตของธุรกิจด้วย AI ที่เข้าใจบริบทของภาษาไทย ยกระดับการค้นหา การสื่อสาร",
    d: "การบริการ และวิเคราะห์ข้อมูล ตอบโจทย์การทำงานเฉพาะองค์กร ลดภาระงาน ลดเวลา และทรัพยากรในการทำงาน เพิ่มประสบการณ์ที่เหนือกว่า",
  },
  {
    id: "scr",
    n: "06",
    t: "Supply Chain Resilience",
    ic: "🚛",
    c: "#0d9488",
    bg: "#ecfdf5",
    tags: ["Supply Chain", "Digital"],
    s: "แพลตฟอร์มห่วงโซ่อุปทานดิจิทัลแบบครบวงจร ที่ผสานรวมคำสั่งซื้อ สินค้า คงคลัง",
    d: "คลังสินค้า การขนส่ง และการจัดการทางการเงิน ได้อย่างราบรื่น ลดความเสี่ยงต่าง ๆ รวดเร็วและมีประสิทธิภาพ",
  },
  {
    id: "erp",
    n: "07",
    t: "ERP Workspace",
    ic: "🏢",
    c: "#0ea5e9",
    bg: "#ecfeff",
    tags: ["ERP", "Workspace"],
    s: "แพลตฟอร์มบริหารจัดการธุรกิจแบบบูรณาการ ช่วยจัดระเบียบ Workflow ที่ซับซ้อนให้ง่ายขึ้น",
    d: "ติดตามสถานะการดำเนินงานได้แบบ Real-time พร้อมเครื่องมือครบครันที่ช่วยขับเคลื่อนธุรกิจให้เดินหน้าได้อย่างมั่นคงและรวดเร็ว",
  },
];

/* ── Specks ── */
function Specks() {
  const pts = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        w: 3 + Math.random() * 5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: `${3.5 + Math.random() * 5}s`,
        dl: `${Math.random() * 4}s`,
        c: [
          "rgba(13,148,136,.22)",
          "rgba(14,165,233,.18)",
          "rgba(99,102,241,.16)",
        ][i % 3],
      })),
    [],
  );
  return (
    <>
      {pts.map((p, i) => (
        <div
          key={i}
          className="svf-spk"
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

/* ── Card ── */
function Card({ item, idx, activeId, toggle, inView }) {
  const ref = useRef(null);
  const open = activeId === item.id;

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
      className={`svf-c svf-rv ${inView ? "on" : ""} ${open ? "act" : ""}`}
      style={{
        "--ac": item.c,
        "--ac2": `${item.c}18`,
        "--acg": `${item.c}28`,
        animationDelay: `${idx * 110}ms`,
      }}
      onClick={() => toggle(item.id)}
      onMouseMove={onM}
      onMouseLeave={onL}
    >
      <div className="svf-ci">
        <span className="svf-n">{item.n}</span>

        <div className="svf-ic" style={{ background: item.bg, color: item.c }}>
          {item.ic}
          <div className="svf-ir" />
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

        <div
          style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}
        >
          {item.tags.map((tg) => (
            <span
              key={tg}
              className="svf-tg"
              style={{ background: item.bg, color: item.c }}
            >
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
          {item.s}
        </p>

        <div className={`svf-ex ${open ? "op" : ""}`}>
          <div className="svf-exi">
            <div
              style={{
                marginTop: 14,
                padding: "14px 16px",
                background: `${item.c}08`,
                borderRadius: 14,
                borderLeft: `3px solid ${item.c}`,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: ".84rem",
                  lineHeight: 1.7,
                  color: "var(--m)",
                }}
              >
                {item.d}
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 14,
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: ".78rem",
            fontWeight: 600,
            color: item.c,
          }}
        >
          <span
            className="svf-ch"
            style={{ transform: open ? "rotate(90deg)" : "rotate(0)" }}
          >
            ›
          </span>
          {open ? "ย่อรายละเอียด" : "ดูรายละเอียดเพิ่มเติม"}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   MAIN
   ════════════════════════════════════════════════ */
export default function SectionServices() {
  const [activeId, setActiveId] = useState(null);
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

  const toggle = useCallback(
    (id) => setActiveId((p) => (p === id ? null : id)),
    [],
  );

  const top4 = SVC.slice(0, 4);
  const bot3 = SVC.slice(4);

  return (
    <section ref={secRef} className="svf" onMouseMove={onM}>
      {/* ambient */}
      <div className="svf-b1 svf-blob" />
      <div className="svf-b2 svf-blob" />
      <div className="svf-b3 svf-blob" />
      {inView && <Specks />}
      <div ref={glowRef} className="svf-glow" />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* ── Header ── */}
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
                background: "var(--acc)",
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
                className="svf-hl"
                style={{
                  width: 72,
                  height: 3,
                  borderRadius: 2,
                  background: "linear-gradient(90deg,var(--acc),var(--acc2))",
                }}
              />
            )}
          </div>
        </div>

        {/* ── Top 4 ── */}
        <div className="svf-grid" style={{ marginTop: 52 }}>
          {top4.map((it, i) => (
            <Card
              key={it.id}
              item={it}
              idx={i}
              activeId={activeId}
              toggle={toggle}
              inView={inView}
            />
          ))}
        </div>

        {/* ── Bottom 3 ── */}
        <div className="svf-grid-bot">
          {bot3.map((it, i) => (
            <Card
              key={it.id}
              item={it}
              idx={i + 4}
              activeId={activeId}
              toggle={toggle}
              inView={inView}
            />
          ))}
        </div>

        {/* ── Stats ── */}
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
              className={`svf-st ${inView ? "on" : ""}`}
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
      </div>
    </section>
  );
}
