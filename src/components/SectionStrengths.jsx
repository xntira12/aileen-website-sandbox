import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import cubeImg from "../assets/img/home/cube.png";
import stBg from "../assets/img/home/st-bg.png";

/* ══════════════════════════════════════════════
   Injected CSS (enhanced animations only)
   ══════════════════════════════════════════════ */
const STYLE_ID = "st-v4-css";
function injectCSS() {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
    /* cube float + glow */
    @keyframes stFloat{0%,100%{transform:translate(-50%,-50%) translateY(-6px)}50%{transform:translate(-50%,-50%) translateY(-18px)}}
    @keyframes stGlow{0%,100%{filter:drop-shadow(0 0 20px rgba(56,224,208,.3)) drop-shadow(0 0 50px rgba(56,224,208,.12))}50%{filter:drop-shadow(0 0 35px rgba(56,224,208,.5)) drop-shadow(0 0 70px rgba(56,224,208,.25))}}
    .st-cube-anim{animation:stFloat 4.5s ease-in-out infinite, stGlow 3.5s ease-in-out infinite}

    /* particles */
    @keyframes stPart{0%{transform:translateY(0) scale(1);opacity:0}12%{opacity:.8}80%{opacity:.5}100%{transform:translateY(-360px) scale(.2);opacity:0}}
    .st-p{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(56,224,208,.75),transparent 70%);pointer-events:none;animation:stPart var(--d) ease-in-out var(--dl) infinite}

    /* dot ring pulse */
    @keyframes stRing{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.2);opacity:0}}
    .st-ring::after{content:'';position:absolute;inset:-4px;border-radius:50%;border:1.5px solid rgba(56,224,208,.4);animation:stRing 2.8s ease-out infinite}

    /* svg connection lines */
    @keyframes stLine{from{stroke-dashoffset:500}to{stroke-dashoffset:0}}
    .st-ln{stroke-dasharray:500;stroke-dashoffset:500}.st-ln.on{animation:stLine 1s ease forwards}

    /* card slide */
    @keyframes stCdL{from{opacity:0;transform:translateX(-45px) scale(.96)}to{opacity:1;transform:translateX(0) scale(1)}}
    @keyframes stCdR{from{opacity:0;transform:translateX(45px) scale(.96)}to{opacity:1;transform:translateX(0) scale(1)}}
    .st-cl{animation:stCdL .65s cubic-bezier(.22,1,.36,1) forwards}
    .st-cr{animation:stCdR .65s cubic-bezier(.22,1,.36,1) forwards}

    /* cube enter for trust/provide */
    @keyframes stCbR{from{opacity:0;transform:translateX(50px) scale(.9);filter:blur(3px)}to{opacity:1;transform:none;filter:none}}
    @keyframes stCbL{from{opacity:0;transform:translateX(-50px) scale(.9);filter:blur(3px)}to{opacity:1;transform:none;filter:none}}
    .st-cbr{animation:stCbR .7s cubic-bezier(.22,1,.36,1) forwards}
    .st-cbl{animation:stCbL .7s cubic-bezier(.22,1,.36,1) forwards}

    /* badge */
    @keyframes stBdg{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
    .st-bdg{animation:stBdg .4s ease forwards}

    /* enhanced card */
    .st-ec{position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.08);border-radius:14px;background:rgba(255,255,255,.04);backdrop-filter:blur(10px);padding:20px 24px;display:flex;align-items:flex-start;gap:16px;transition:transform .3s,box-shadow .3s,border-color .3s}
    .st-ec::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(56,224,208,.05),transparent);transition:left .55s}
    .st-ec:hover{transform:translateY(-2px);box-shadow:0 6px 28px rgba(0,0,0,.25),0 0 16px rgba(56,224,208,.06);border-color:rgba(56,224,208,.2)}
    .st-ec:hover::before{left:100%}
    .st-ec:hover .st-ico{transform:rotateY(180deg)}
    .st-ico{flex-shrink:0;width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);transition:transform .5s;transform-style:preserve-3d}

    /* internal pill for trust/provide views */
    .st-ip{display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border-radius:9999px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);backdrop-filter:blur(6px);color:rgba(255,255,255,.7);font-size:.82rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:all .3s}
    .st-ip:hover{background:rgba(255,255,255,.1);border-color:rgba(56,224,208,.25);color:rgba(255,255,255,.9)}
    .st-ip .a{font-size:1rem;line-height:1;transition:transform .3s}
    .st-ip:hover .af{transform:translateX(2px)}.st-ip:hover .ab{transform:translateX(-2px)}

    /* mobile accordion */
    @keyframes stAcc{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
    .st-acc{display:none}
    .st-acc.open{display:block;animation:stAcc .18s ease-out both}
  `;
  document.head.appendChild(s);
}

/* ─── Particles ─── */
function Particles({ n = 16 }) {
  const d = useMemo(
    () =>
      Array.from({ length: n }, () => ({
        l: `${Math.random() * 100}%`,
        b: `${Math.random() * 25}%`,
        d: `${7 + Math.random() * 7}s`,
        dl: `${Math.random() * 5}s`,
        s: `${2 + Math.random() * 2.5}px`,
      })),
    [n]
  );
  return (
    <>
      {d.map((p, i) => (
        <div
          key={i}
          className="st-p"
          style={{
            left: p.l,
            bottom: p.b,
            width: p.s,
            height: p.s,
            "--d": p.d,
            "--dl": p.dl,
          }}
        />
      ))}
    </>
  );
}

/* ─── SVG Connection Lines (center view) ─── */
function Lines({ on }) {
  const pts = [
    { x1: "50%", y1: "48%", x2: "10%", y2: "48%" },
    { x1: "50%", y1: "48%", x2: "22%", y2: "12%" },
    { x1: "50%", y1: "48%", x2: "78%", y2: "12%" },
    { x1: "50%", y1: "48%", x2: "90%", y2: "48%" },
    { x1: "50%", y1: "48%", x2: "78%", y2: "84%" },
    { x1: "50%", y1: "48%", x2: "22%", y2: "84%" },
  ];
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      style={{ zIndex: 0 }}
    >
      <defs>
        <linearGradient id="slg">
          <stop offset="0%" stopColor="rgba(56,224,208,.22)" />
          <stop offset="100%" stopColor="rgba(56,224,208,.04)" />
        </linearGradient>
      </defs>
      {pts.map((l, i) => (
        <line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="url(#slg)"
          strokeWidth="1"
          className={`st-ln ${on ? "on" : ""}`}
          style={{ animationDelay: `${0.4 + i * 0.12}s` }}
        />
      ))}
    </svg>
  );
}

/* ─── KeyDot (desktop center) ─── */
function KeyDot({
  item,
  posClass,
  onClick,
  tooltipSide = "right",
  isRevealed = false,
  revealDelay = 0,
}) {
  return (
    <button
      onClick={onClick}
      className={`strength-dot group absolute ${posClass}`}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed
          ? "translateY(0) scale(1)"
          : "translateY(25px) scale(0.75)",
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${revealDelay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${revealDelay}ms`,
        zIndex: 2,
      }}
    >
      <div className={`strength-dot__icon relative ${isRevealed ? "st-ring" : ""}`}>
        <span className="text-lg">💡</span>
      </div>
      <div className="mt-2 font-semibold text-white/85">{item.title}</div>
      <div
        className={`strength-tooltip ${
          tooltipSide === "left" ? "strength-tooltip--right" : "strength-tooltip--left"
        } mt-[-55px] ml-5 mr-5`}
        style={{
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? "translateY(0) scale(1)" : "translateY(8px) scale(0.92)",
          transition: `opacity 0.5s ease ${revealDelay + 400}ms, transform 0.5s ease ${
            revealDelay + 400
          }ms`,
          visibility: isRevealed ? "visible" : "hidden",
          pointerEvents: isRevealed ? "auto" : "none",
        }}
      >
        {item.tooltip}
      </div>
    </button>
  );
}

/* ─── Card (trust/provide desktop views) ─── */
function EC({ item, dir = "left", dl = 0, on = false }) {
  return (
    <div
      className={`st-ec ${on ? (dir === "left" ? "st-cl" : "st-cr") : ""}`}
      style={{
        animationDelay: `${dl}ms`,
        opacity: on ? undefined : 0,
        animationFillMode: "forwards",
      }}
    >
      <div className="st-ico">
        <span className="text-xl">💡</span>
      </div>
      <div>
        <div className="font-semibold text-white text-[.95rem]">{item.title}</div>
        <div className="mt-1 text-sm leading-relaxed text-white/65">{item.tooltip}</div>
      </div>
    </div>
  );
}

/* ─── Mobile accordion (เปิดทีละอัน) ─── */
function MobileKeysAccordion({ items, inV = false }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="md:hidden">
      <div className="space-y-2">
        {items.map((it, idx) => {
          const open = openIdx === idx;

          return (
            <div key={it.id}>
              <button
                type="button"
                onClick={() => setOpenIdx((cur) => (cur === idx ? null : idx))}
                className={[
                  "w-full text-left flex items-start gap-3 rounded-full px-4 py-3 ring-1",
                  "bg-white/5 ring-white/15 text-white/85 backdrop-blur",
                ].join(" ")}
                style={{
                  opacity: inV ? 1 : 0,
                  transform: inV ? "translateY(0)" : "translateY(14px)",
                  transition: `opacity .55s ease ${200 + idx * 70}ms, transform .55s ease ${
                    200 + idx * 70
                  }ms`,
                }}
                aria-expanded={open}
              >
                <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-emerald-300/90" />
                <span className="flex-1 text-sm font-semibold leading-snug">{it.title}</span>
                <span className="ml-2 text-xs opacity-70">{open ? "−" : "+"}</span>
              </button>

              <div
                className={[
                  "st-acc mt-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-white/70 backdrop-blur",
                  open ? "open" : "",
                ].join(" ")}
              >
                {it.tooltip}
              </div>
            </div>
          );
        })}
      </div>

    
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN
   ══════════════════════════════════════════════ */
export default function SectionStrengths() {
  const [view, setView] = useState("center"); // desktop ใช้เหมือนเดิม
  const [inV, setInV] = useState(false);
  const [vk, setVk] = useState(0);
  const secRef = useRef(null);
  const bgRef = useRef(null);
  const tgt = useRef({ x: 50, y: 50 });
  const cur = useRef({ x: 50, y: 50 });

  useEffect(() => {
    injectCSS();
  }, []);

  // Intersection Observer
  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInV(true);
      },
      { threshold: 0.18 }
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);

  // Mouse parallax
  const onM = (e) => {
    const r = e.currentTarget.getBoundingClientRect(),
      s = 0.35;
    tgt.current.x = 50 + (((e.clientX - r.left) / r.width) * 100 - 50) * s;
    tgt.current.y = 50 + (((e.clientY - r.top) / r.height) * 100 - 50) * s;
  };

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    let raf = 0;
    const lr = (a, b, t) => a + (b - a) * t;
    const tk = () => {
      cur.current.x = lr(cur.current.x, tgt.current.x, 0.08);
      cur.current.y = lr(cur.current.y, tgt.current.y, 0.08);
      el.style.setProperty("--mx", `${cur.current.x}%`);
      el.style.setProperty("--my", `${cur.current.y}%`);
      raf = requestAnimationFrame(tk);
    };
    raf = requestAnimationFrame(tk);
    return () => cancelAnimationFrame(raf);
  }, []);

  const go = useCallback((v) => {
    setView(v);
    setVk((k) => k + 1);
  }, []);

  // 6 Keys
  const keys = useMemo(
    () => [
      { id: "simplicity", title: "Simplicity", tooltip: "เราเชื่อในระบบที่ใช้งานง่าย ช่วยให้ผู้ใช้เข้าใจ กระบวนการ และทำงานได้ด้วยตนเอง อย่างมีประสิทธิภาพ" },
      { id: "rapidly", title: "Rapidly", tooltip: "ให้ความสำคัญและตอบรับกับการเปลี่ยนแปลง ทางธุรกิจที่เป็นไปอย่างรวดเร็วในปัจจุบัน" },
      { id: "experience", title: "Experience", tooltip: "เรานำเสนอโซลูชั่น ที่มีคุณภาพ เหมาะสมกับความต้องการ ตอบโจทย์ผู้ใช้งานได้อย่างตรงจุด และคุ้มค่า กับการลงทุน" },
      { id: "platform", title: "Platform", tooltip: "แพลตฟอร์มที่เชื่อถือได้และยืดหยุ่น รองรับโซลูชั่นหลากหลาย เพิ่มคุณภาพการทำงานและขยายศักยภาพทางธุรกิจ" },
      { id: "services", title: "Services", tooltip: "บริการครบวงจร ครอบคลุมการบูรณาการเทคโนโลยี เพื่อยกระดับการทำงานในองค์กร และตอบโจทย์ ทางธุรกิจ" },
      { id: "consulting", title: "Consulting", tooltip: "ที่ปรึกษามืออาชีพ ให้คำแนะนำ รวมทั้งช่วยวางแผน และขับเคลื่อน กลยุทธ์ด้วยความมั่นใจ" },
    ],
    []
  );

  const trustC = useMemo(() => [keys[0], keys[1], keys[2]], [keys]);
  const provC = useMemo(() => [keys[3], keys[4], keys[5]], [keys]);

  // ✅ Mobile: ไม่มี Overview -> ถ้า view เป็น center ให้ถือว่าเป็น trust
  const mobileView = view === "center" ? "trust" : view;

  return (
    <section ref={secRef} className="relative isolate overflow-hidden py-20 strength-dark" onMouseMove={onM}>
      {/* BG */}
      <img src={stBg} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover opacity-60" />
      <div ref={bgRef} className="strength-dark__bg pointer-events-none absolute inset-0 -z-20" />
      {inV && <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"><Particles /></div>}

      <div className="relative z-10 mx-auto max-w-6xl px-6 mt-20 mb-20">
        {/* Header */}
        <div
          className="flex flex-col items-center text-center"
          style={{
            opacity: inV ? 1 : 0,
            transform: inV ? "translateY(0)" : "translateY(24px)",
            transition: "opacity .7s ease, transform .7s ease",
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-widest text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            OUR STRENGTHS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Why Businesses Choose{" "}
            <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Aileen Solutions
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            6 Keys to Value — เราเชื่อมั่นในสิ่งที่ทำ และมุ่งส่งมอบคุณค่าให้กับองค์กร ผ่านโซลูชัน แพลตฟอร์ม บริการ
            และการให้คำปรึกษาที่เชื่อถือได้
          </p>
        </div>

        {/* ✅ Mobile switcher: เหลือแค่ 2 อัน */}
        <div className="md:hidden mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur">
            <button
              type="button"
              onClick={() => go("trust")}
              className={[
                "px-4 py-2 text-xs font-semibold rounded-full transition",
                mobileView === "trust" ? "bg-white/10 text-white" : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              Trust By
            </button>
            <button
              type="button"
              onClick={() => go("provide")}
              className={[
                "px-4 py-2 text-xs font-semibold rounded-full transition",
                mobileView === "provide" ? "bg-white/10 text-white" : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              Provide To
            </button>
          </div>
        </div>

        {/* ═══ STAGES ═══ */}
        <div className="mt-10 md:mt-14 relative">
          {/* ─── MOBILE CONTENT (ไม่มี Overview) ─── */}
          <div className="md:hidden">
            <div className="flex items-center justify-center gap-3 mb-4 mt-6">
              <img
                src={cubeImg}
                alt="Cube"
                className="w-[110px] select-none"
                draggable={false}
                style={{ filter: "drop-shadow(0 0 18px rgba(56,224,208,.22))" }}
              />
            </div>

            {mobileView === "trust" ? (
              <>
                <div className="flex justify-center mb-4">
                  <span className="st-bdg inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Trust By — สิ่งที่เรายึดมั่น
                  </span>
                </div>

                {/* ✅ key = mobileView เพื่อ reset การเปิด/ปิดทุกครั้งที่สลับแท็บ */}
                <MobileKeysAccordion key="trust" items={trustC} inV={inV} />
              </>
            ) : (
              <>
                <div className="flex justify-center mb-4">
                  <span className="st-bdg inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-5 py-2 text-sm font-medium text-sky-300 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                    Provide To — สิ่งที่เราส่งมอบ
                  </span>
                </div>

                <MobileKeysAccordion key="provide" items={provC} inV={inV} />
              </>
            )}
          </div>

          {/* ─── DESKTOP: ORIGINAL (เหมือนเดิมทั้งหมด) ─── */}
          <div className={`strength-stage hidden md:block ${view === "center" ? "is-show" : "is-hide"}`}>
            <div className="relative mx-auto h-[520px] max-w-5xl">
              <Lines on={inV} />

              <div className={`strength-cube mt-5 ${inV ? "st-cube-anim" : ""}`} style={{ opacity: inV ? 1 : 0, transition: "opacity 0.7s ease 0.1s" }}>
                <img src={cubeImg} alt="Cube" className="w-[250px] select-none" draggable={false} />
              </div>

              <button
                className="strength-pill strength-pill--left"
                onClick={() => go("trust")}
                type="button"
                style={{
                  opacity: inV ? 1 : 0,
                  transform: inV ? "translateX(0)" : "translateX(25px)",
                  transition: "opacity 0.6s ease 700ms, transform 0.6s ease 700ms",
                }}
              >
                <span className="strength-pill__arrow rotate-180">›</span>Trust By
              </button>

              <button
                className="strength-pill strength-pill--right"
                onClick={() => go("provide")}
                type="button"
                style={{
                  opacity: inV ? 1 : 0,
                  transform: inV ? "translateX(0)" : "translateX(-25px)",
                  transition: "opacity 0.6s ease 700ms, transform 0.6s ease 700ms",
                }}
              >
                Provide To <span className="strength-pill__arrow">›</span>
              </button>

              <KeyDot item={keys[0]} posClass="top-[230px] left-[90px]" tooltipSide="right" onClick={() => go("trust")} isRevealed={inV} revealDelay={300} />
              <KeyDot item={keys[1]} posClass="top-[50px] left-[200px]" tooltipSide="right" onClick={() => go("trust")} isRevealed={inV} revealDelay={450} />
              <KeyDot item={keys[2]} posClass="top-[50px] right-[200px]" tooltipSide="left" onClick={() => go("trust")} isRevealed={inV} revealDelay={600} />
              <KeyDot item={keys[3]} posClass="top-[230px] right-[90px]" tooltipSide="left" onClick={() => go("provide")} isRevealed={inV} revealDelay={750} />
              <KeyDot item={keys[4]} posClass="bottom-[30px] right-[200px]" tooltipSide="left" onClick={() => go("provide")} isRevealed={inV} revealDelay={900} />
              <KeyDot item={keys[5]} posClass="bottom-[30px] left-[200px]" tooltipSide="right" onClick={() => go("provide")} isRevealed={inV} revealDelay={1050} />
            </div>
          </div>

          <div className={`strength-stage hidden md:block ${view === "trust" ? "is-show" : "is-hide"}`}>
            {view === "trust" && (
              <div className="flex justify-center mb-8">
                <span className="st-bdg inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Trust By — สิ่งที่เรายึดมั่น
                </span>
              </div>
            )}
            <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2" key={`t${vk}`}>
              <div className="space-y-4">
                {trustC.map((it, i) => (
                  <EC key={it.id} item={it} dir="left" dl={i * 140} on={view === "trust"} />
                ))}
              </div>
              <div className={`relative flex flex-col items-center gap-5 ${view === "trust" ? "st-cbr" : ""}`}>
                <img src={cubeImg} alt="Cube" className="w-[320px] select-none" draggable={false} style={{ filter: "drop-shadow(0 0 24px rgba(56,224,208,.25))" }} />
                <div className="flex items-center gap-3">
                  <button className="st-ip" onClick={() => go("center")} type="button">
                    <span className="a ab">‹</span> Overview
                  </button>
                  <button className="st-ip" onClick={() => go("provide")} type="button">
                    Provide To <span className="a af">›</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={`strength-stage hidden md:block ${view === "provide" ? "is-show" : "is-hide"}`}>
            {view === "provide" && (
              <div className="flex justify-center mb-8">
                <span className="st-bdg inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-5 py-2 text-sm font-medium text-sky-300 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                  Provide To — สิ่งที่เราส่งมอบ
                </span>
              </div>
            )}
            <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2" key={`p${vk}`}>
              <div className={`relative flex flex-col items-center gap-5 ${view === "provide" ? "st-cbl" : ""}`}>
                <img src={cubeImg} alt="Cube" className="w-[320px] select-none" draggable={false} style={{ filter: "drop-shadow(0 0 24px rgba(56,224,208,.25))" }} />
                <div className="flex items-center gap-3">
                  <button className="st-ip" onClick={() => go("trust")} type="button">
                    <span className="a ab">‹</span> Trust By
                  </button>
                  <button className="st-ip" onClick={() => go("center")} type="button">
                    Overview <span className="a af">›</span>
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {provC.map((it, i) => (
                  <EC key={it.id} item={it} dir="right" dl={i * 140} on={view === "provide"} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* end stages */}
      </div>
    </section>
  );
}
