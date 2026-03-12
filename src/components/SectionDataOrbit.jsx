import { useEffect, useMemo, useRef, useState } from "react";

import agc from "../assets/img/home/customers/AGC.png";
import bangchak from "../assets/img/home/customers/bangchak.svg";
import egat from "../assets/img/home/customers/egat.png";
import gc from "../assets/img/home/customers/GC.webp";
import ggc from "../assets/img/home/customers/ggc.png";
import hmc from "../assets/img/home/customers/HMC.png";
import logoPTT3 from "../assets/img/home/customers/logo_PTT_3.png";
import npc from "../assets/img/home/customers/npc.png";
import pttAsahi from "../assets/img/home/customers/ptt-asahi.png";
import pttDigital from "../assets/img/home/customers/ptt-digital.png";
import tex from "../assets/img/home/customers/Tex.png";

/* ── inject CSS once ── */
const CSS_ID = "orbit-scroll-css";
function injectScrollCSS() {
  if (document.getElementById(CSS_ID)) return;
  const s = document.createElement("style");
  s.id = CSS_ID;
  s.textContent = `
@keyframes orbFadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes orbScale{from{opacity:0;transform:scale(.4);filter:blur(6px)}to{opacity:1;transform:scale(1);filter:blur(0)}}
@keyframes orbSlideR{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}
@keyframes orbRingGrow{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:scale(1)}}
.orb-rv{opacity:0}.orb-rv.on{animation:orbFadeUp .7s cubic-bezier(.22,1,.36,1) forwards}
.orb-sc{opacity:0}.orb-sc.on{animation:orbScale .7s cubic-bezier(.22,1,.36,1) forwards}
.orb-sr{opacity:0}.orb-sr.on{animation:orbSlideR .7s cubic-bezier(.22,1,.36,1) forwards}
.orb-rg{opacity:0}.orb-rg.on{animation:orbRingGrow .6s cubic-bezier(.22,1,.36,1) forwards}

/* marquee reveal */
@keyframes cmUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@keyframes cmScale{from{opacity:0;transform:scale(.97) translateY(16px)}to{opacity:1;transform:none}}
@keyframes cmLine{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.cm-rv{opacity:0}.cm-rv.on{animation:cmUp .65s cubic-bezier(.22,1,.36,1) forwards}
.cm-wrap-rv{opacity:0}.cm-wrap-rv.on{animation:cmScale .8s cubic-bezier(.22,1,.36,1) .32s forwards}
.cm-line{display:block;height:2px;width:48px;margin:10px auto 0;border-radius:2px;background:linear-gradient(90deg,#0499a5,#2d65a2);transform:scaleX(0);transform-origin:left}
.cm-line.on{animation:cmLine .6s cubic-bezier(.22,1,.36,1) .22s forwards}

/* divider */
@keyframes cmDivLine{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.cm-div{display:flex;align-items:center;gap:16px;margin:60px 0 0}
.cm-div-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(0,0,0,.08),transparent);transform:scaleX(0);transform-origin:center}
.cm-div-line.on{animation:cmDivLine .7s cubic-bezier(.22,1,.36,1) .1s forwards}
.cm-div-dot{width:6px;height:6px;border-radius:50%;background:linear-gradient(135deg,#0499a5,#2d65a2);flex-shrink:0}

.cm-logo-item{transition:transform .25s cubic-bezier(.22,1,.36,1),filter .25s}
.cm-logo-item:hover{transform:translateY(-4px) scale(1.08);filter:drop-shadow(0 8px 16px rgba(37,99,235,.15))}
`;
  document.head.appendChild(s);
}

/* ── OrbitChip ── */
const OrbitChip = ({ style, title, tooltip, tone = "blue", isActive = false, inView = false, revealDelay = 0 }) => {
  const toneMap = {
    blue:    "bg-blue-50 text-blue-700 ring-blue-200",
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    violet:  "bg-violet-50 text-violet-700 ring-violet-200",
    slate:   "bg-slate-50 text-slate-700 ring-slate-200",
  };
  return (
    <div
      className={["orbit-chip group absolute flex items-center rounded-full px-4 py-2 text-sm font-semibold shadow-sm ring-1", toneMap[tone], isActive ? "is-active" : "", `orb-rv ${inView ? "on" : ""}`].join(" ")}
      style={{ ...style, animationDelay: `${revealDelay}ms` }}
    >
      <span className="whitespace-nowrap">{title}</span>
      {tooltip && (
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[115%] w-64 rounded-xl bg-white px-4 py-2 text-sm leading-relaxed border border-slate-200 text-slate-600 shadow-xs backdrop-blur-md opacity-0 transition duration-200 group-hover:opacity-90 mt-[150px]">
          {tooltip}
        </div>
      )}
    </div>
  );
};

/* ── LogoItem ── */
function LogoItem({ src, alt }) {
  return (
    <div className="group relative flex h-20 w-40 shrink-0 items-center justify-center overflow-visible">
      <img src={src} alt={alt} draggable={false} className="cm-logo-item max-h-16 w-auto opacity-70 group-hover:opacity-100" />
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/80 px-5 py-1.5 text-sm border border-slate-200 text-slate-800 shadow-sm backdrop-blur-md opacity-0 transition duration-200 group-hover:opacity-100 z-20">
        {alt}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SectionDataOrbit  (+ CustomersMarquee inside)
════════════════════════════════════════════ */
export default function SectionDataOrbit() {
  const sequence = [1, 2, 3, 4, 5, 0];
  const [seqIndex, setSeqIndex] = useState(0);
  const active = sequence[seqIndex];
  const STEP_MS = 5200;

  const [inView, setInView] = useState(false);
  const secRef = useRef(null);

  useEffect(() => { injectScrollCSS(); }, []);

  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setSeqIndex((i) => (i + 1) % sequence.length), STEP_MS);
    return () => clearInterval(t);
  }, [inView]);

  const ORBIT_DUR_S = (STEP_MS * 6) / 1000;

  /* cursor-gradient parallax */
  const layerRef = useRef(null);
  const target   = useRef({ x: 50, y: 50 });
  const current  = useRef({ x: 50, y: 50 });

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const strength = 0.32;
    target.current.x = 50 + (((e.clientX - r.left) / r.width)  * 100 - 50) * strength;
    target.current.y = 50 + (((e.clientY - r.top)  / r.height) * 100 - 50) * strength;
  };

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;
    let raf = 0;
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.08);
      current.current.y = lerp(current.current.y, target.current.y, 0.08);
      el.style.setProperty("--mx", `${current.current.x}%`);
      el.style.setProperty("--my", `${current.current.y}%`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* marquee */
  const logos = useMemo(() => [
    { src: pttDigital, alt: "PTT Digital" },
    { src: gc,         alt: "GC" },
    { src: agc,        alt: "AGC" },
    { src: ggc,        alt: "GGC" },
    { src: bangchak,   alt: "Bangchak" },
    { src: egat,       alt: "EGAT" },
    { src: hmc,        alt: "HMC Polymers" },
    { src: npc,        alt: "NPC" },
    { src: pttAsahi,   alt: "PTT Asahi" },
    { src: tex,        alt: "Thai Ethoxylate (TEX)" },
    { src: logoPTT3,   alt: "PTT Group" },
  ], []);

  const trackRef    = useRef(null);
  const rafMarquee  = useRef(null);
  const posRef      = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef    = useRef(0);
  const [paused,     setPaused]     = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const normalizePos = (pos, halfWidth) => {
    if (!halfWidth) return 0;
    return -(( (-pos % halfWidth) + halfWidth) % halfWidth);
  };

  useEffect(() => {
    const tick = () => {
      const track = trackRef.current;
      if (!track) return;
      const halfWidth = track.scrollWidth / 2;
      if (!halfWidth) { rafMarquee.current = requestAnimationFrame(tick); return; }
      if (!paused && !draggingRef.current) posRef.current -= 0.7;
      posRef.current = normalizePos(posRef.current, halfWidth);
      track.style.transform = `translateX(${posRef.current}px)`;
      rafMarquee.current = requestAnimationFrame(tick);
    };
    rafMarquee.current = requestAnimationFrame(tick);
    return () => rafMarquee.current && cancelAnimationFrame(rafMarquee.current);
  }, [paused]);

  const onPointerDown = (e) => { draggingRef.current = true; setIsDragging(true); lastXRef.current = e.clientX; e.currentTarget.setPointerCapture?.(e.pointerId); };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const halfWidth = track.scrollWidth / 2;
    if (!halfWidth) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    posRef.current += dx;
    posRef.current = normalizePos(posRef.current, halfWidth);
    track.style.transform = `translateX(${posRef.current}px)`;
  };
  const onPointerUp = () => { draggingRef.current = false; setIsDragging(false); };

  const mobileItems = [
    { tone: "text-blue-700 bg-blue-50 ring-blue-200",       title: "Software Development" },
    { tone: "text-emerald-700 bg-emerald-50 ring-emerald-200", title: "AI & Intelligent Automation" },
    { tone: "text-blue-700 bg-blue-50 ring-blue-200",       title: "Systems Integration" },
    { tone: "text-slate-700 bg-slate-50 ring-slate-200",    title: "Low-Code Platforms" },
    { tone: "text-emerald-700 bg-emerald-50 ring-emerald-200", title: "Enterprise Platforms" },
    { tone: "text-slate-700 bg-slate-50 ring-slate-200",    title: "Business Process & Workflows" },
  ];

  return (
    <section
      ref={secRef}
      className="relative overflow-hidden bg-white cursor-gradient isolate"
      onMouseMove={handleMove}
    >
      <div ref={layerRef} className="cursor-gradient__layer pointer-events-none absolute inset-0 -z-20" />

    {/* ── CUSTOMERS MARQUEE ── */}
      <div className="pb-[60px] pt-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* pill */}
          <div className="flex justify-center pb-4">
            <span className={`cm-rv ${inView ? "on" : ""} inline-flex items-center gap-2 rounded-full text-slate-600 border border-slate-400 bg-white/5 px-4 py-2 text-xs tracking-widest backdrop-blur`} style={{ animationDelay: "200ms" }}>
              <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_6px_rgba(6,182,212,.6)]" />
              OUR CUSTOMERS
            </span>
          </div>
          {/* heading */}
          <h2 className={`cm-rv ${inView ? "on" : ""} text-center text-3xl font-extrabold tracking-tight`}
            style={{ animationDelay: "280ms", background: "linear-gradient(90deg,#0f172a 60%,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            ได้รับความไว้วางใจจากองค์กรชั้นนำ
          </h2>
          <span className={`cm-line ${inView ? "on" : ""}`} style={{ animationDelay: "300ms" }} />
          <p className={`cm-rv ${inView ? "on" : ""} mt-3 text-center text-sm font-light text-slate-500`} style={{ animationDelay: "360ms" }}>
            บริษัทชั้นนำในอุตสาหกรรมพลังงานและปิโตรเคมีที่ไว้วางใจ Aileen Solutions
          </p>
        </div>

        {/* marquee track */}
        <div className={`cm-wrap-rv ${inView ? "on" : ""} mt-10 mx-auto max-w-6xl px-6`}>
          <div
            className="relative select-none overflow-hidden rounded-2xl backdrop-blur-sm"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            <div ref={trackRef} className="flex items-center gap-16 will-change-transform px-10 md:px-14">
              {logos.map((l, idx) => <LogoItem key={`a-${idx}`} {...l} />)}
              {logos.map((l, idx) => <LogoItem key={`b-${idx}`} {...l} />)}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-28 bg-gradient-to-r from-white/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-28 bg-gradient-to-l from-white/60 to-transparent" />
          </div>
        </div>
      </div>
      {/* ── ORBIT SECTION ── */}
      <div className="py-[60px]">
        <div className="mx-auto z-10 grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          {/* LEFT */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-square hidden md:block">
              {/* rings */}
              <div className="absolute inset-0 grid place-items-center">
                <div className={`h-[78%] w-[78%] rounded-full border border-slate-200/70 orb-rg ${inView ? "on" : ""}`} style={{ animationDelay: "200ms" }} />
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <div className={`h-[58%] w-[58%] rounded-full border border-slate-200/70 orb-rg ${inView ? "on" : ""}`} style={{ animationDelay: "350ms" }} />
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <div className={`h-[38%] w-[38%] rounded-full border border-slate-200/70 orb-rg ${inView ? "on" : ""}`} style={{ animationDelay: "500ms" }} />
              </div>
              {/* center */}
              <div className="absolute inset-0 grid place-items-center">
                <div className={`orbit-float grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 shadow-xl shadow-emerald-500/20 ring-1 ring-white/40 orb-sc ${inView ? "on" : ""}`} style={{ animationDelay: "400ms" }}>
                  <span className="text-sm font-black text-white">AILEEN</span>
                </div>
              </div>
              {/* chips */}
              <div className="orbit-static absolute inset-0">
                <OrbitChip tone="slate"    title="Business Process & Workflows"  style={{ left: "-35%", top: "48%" }} isActive={active === 5} tooltip="ออกแบบและจัดการกระบวนการทำงาน ให้เป็นระบบเดียวที่ชัดเจนและตรวจสอบได้"                                           inView={inView} revealDelay={600} />
                <OrbitChip tone="blue"     title="Software Development"           style={{ left: "-5%",  top: "15%" }} isActive={active === 0} tooltip="พัฒนาซอฟต์แวร์เฉพาะทางที่ออกแบบให้สอดคล้องกับกระบวนการธุรกิจองค์กร"                                             inView={inView} revealDelay={700} />
                <OrbitChip tone="emerald"  title="AI & Intelligent Automation"    style={{ left: "55%",  top: "10%" }} isActive={active === 1} tooltip="ใช้ AI และระบบอัตโนมัติ ลดงานซ้ำ เพิ่มประสิทธิภาพและความแม่นยำ เพิ่มขีดความสามารถของทีมงาน"                    inView={inView} revealDelay={800} />
                <OrbitChip tone="blue"     title="Systems Integration"            style={{ left: "77%",  top: "40%" }} isActive={active === 2} tooltip="เชื่อมต่อระบบและข้อมูลจากหลายแหล่ง ให้ทำงานร่วมกันอย่างไร้รอยต่อและมีเสถียรภาพ"                               inView={inView} revealDelay={900} />
                <OrbitChip tone="slate"    title="Low-Code Platforms"             style={{ left: "62%",  top: "74%" }} isActive={active === 3} tooltip="พัฒนาระบบและแอปพลิเคชันได้รวดเร็ว ด้วยแพลตฟอร์ม Low-Code ที่ยืดหยุ่นตรงตามความต้องการขององค์กร"             inView={inView} revealDelay={1000} />
                <OrbitChip tone="emerald"  title="Enterprise Platforms"           style={{ left: "5%",   top: "75%" }} isActive={active === 4} tooltip="แพลตฟอร์มระดับองค์กรที่รองรับการใช้งานขนาดใหญ่ ปลอดภัย และขยายต่อได้ รองรับการเติบโตของธุรกิจ"               inView={inView} revealDelay={1100} />
                {/* dots */}
                <span className="orbit-track orbit-track-outer orbit-dot-run-1" style={{ "--dur": `${ORBIT_DUR_S}s`, "--delay": "0s", opacity: inView ? 1 : 0, transition: "opacity 0.5s ease 1.3s" }}><span className="orbit-dot" /></span>
                <span className="orbit-track orbit-track-outer orbit-dot-run-2" style={{ "--dur": `${ORBIT_DUR_S}s`, "--delay": `-${ORBIT_DUR_S / 6}s`, opacity: inView ? 1 : 0, transition: "opacity 0.5s ease 1.4s" }}><span className="orbit-dot" /></span>
                <span className="orbit-track orbit-track-mid orbit-dot-run-3"   style={{ "--dur": `${ORBIT_DUR_S}s`, "--delay": `-${(ORBIT_DUR_S * 2) / 6}s`, opacity: inView ? 1 : 0, transition: "opacity 0.5s ease 1.5s" }}><span className="orbit-dot" /></span>
                <span className="orbit-track orbit-track-mid orbit-dot-run-4"   style={{ "--dur": `${ORBIT_DUR_S}s`, "--delay": `-${(ORBIT_DUR_S * 3) / 6}s`, opacity: inView ? 1 : 0, transition: "opacity 0.5s ease 1.6s" }}><span className="orbit-dot" /></span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative px-2">
            <span className={`inline-flex items-center gap-2 rounded-full text-slate-600 border border-slate-400 bg-white/5 px-4 py-2 text-xs tracking-widest backdrop-blur orb-sr ${inView ? "on" : ""}`} style={{ animationDelay: "300ms" }}>
              <span className="h-2 w-2 rounded-full bg-cyan-600" />
              WHAT WE DO ?
            </span>
            <h3 className={`text-3xl font-extrabold tracking-tight text-slate-900 md:text-3xl mt-5 orb-sr ${inView ? "on" : ""}`} style={{ animationDelay: "500ms" }}>
              Integrated digital solutions to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">enhance operational efficiency</span>
            </h3>
            <p className={`mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base orb-sr ${inView ? "on" : ""}`} style={{ animationDelay: "700ms" }}>
              เราส่งมอบโซลูชั่นซอฟต์แวร์ที่เชื่อถือได้ บริการที่วางใจได้ และการให้คำปรึกษาจากทีมมากประสบการณ์ ครอบคลุมตั้งแต่การบริหารจัดการกระบวนการและคุณภาพ ไปจนถึงการทำ Automation และ Ai ที่เสริมศักยภาพ สู่การเติบโตอย่างมีประสิทธิภาพและยั่งยืนของอค์กร
            </p>
            {/* mobile list */}
            <div className="md:hidden mt-6">
              <ul className="space-y-2">
                {mobileItems.map((it, idx) => (
                  <li key={it.title} className={["flex items-start gap-3 rounded-full px-4 py-3 ring-1 bg-white/60 backdrop-blur", it.tone, `orb-rv ${inView ? "on" : ""}`].join(" ")} style={{ animationDelay: `${900 + idx * 90}ms` }}>
                    <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-current opacity-70" />
                    <span className="text-sm font-semibold leading-snug">{it.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

   

      
    </section>
  );
}