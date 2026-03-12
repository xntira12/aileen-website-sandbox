import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import SectionContactFooter from "../components/SectionContactFooter";
import aboutImg from "../assets/img/about/aileen-about.jpg";

function useInView(t = 0.06) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } },
      { threshold: t }
    );
    o.observe(el); return () => o.disconnect();
  }, []);
  return [ref, v];
}

const CSS_ID = "abu3";
function injectCSS() {
  if (document.getElementById(CSS_ID)) return;
  const s = document.createElement("style"); s.id = CSS_ID;
  s.textContent = `
/* ── keyframes ── */
@keyframes abUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:none} }
@keyframes abRt { from{opacity:0;transform:translateX(28px)}  to{opacity:1;transform:none} }
@keyframes abFd { from{opacity:0} to{opacity:1} }
@keyframes abSc { from{opacity:0;transform:scale(.96)} to{opacity:1;transform:none} }
@keyframes abLn { from{width:0} to{width:36px} }
@keyframes dashFlow { to { stroke-dashoffset: -24; } }
@keyframes pulseDot { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.35);opacity:.7} }

.r-up { opacity:0 } .r-up.on { animation:abUp .65s cubic-bezier(.22,1,.36,1) forwards }
.r-rt { opacity:0 } .r-rt.on { animation:abRt .7s  cubic-bezier(.22,1,.36,1) forwards }
.r-fd { opacity:0 } .r-fd.on { animation:abFd 1s   ease                      forwards }
.r-sc { opacity:0 } .r-sc.on { animation:abSc .65s cubic-bezier(.22,1,.36,1) forwards }

.gc  { background:linear-gradient(90deg,#0499a5,#2d65a2);
       -webkit-background-clip:text;-webkit-text-fill-color:transparent; }
.gb  { background:linear-gradient(90deg,#0499a5,#2d65a2);
       -webkit-background-clip:text;-webkit-text-fill-color:transparent; }

.lv8-openquote {
      font-size: 10.5rem; line-height: 0.6;
      color: #e2e8f0; display: block; margin-bottom: 6px;
      user-select: none;
    }

/* ════════ S1 HERO ════════ */
.ab-hero {
  position:relative; height:680px;
  background:#060A14; overflow:hidden;
  display:flex; align-items:center; justify-content:center;
}
.ab-ph-col {
  position:absolute; top:0; right:0;
  width:58%; height:100%; overflow:hidden;
}
.ab-ph-col img { width:100%; height:100%; object-fit:cover; object-position:center top; display:block; }
.ab-ph-col::after {
  content:''; position:absolute; inset:0; pointer-events:none;
  background:linear-gradient(to right,#060A14 0%,rgba(6,10,20,.85) 18%,rgba(6,10,20,.4) 45%,transparent 100%);
}
.ab-tx-col {
  display:flex; flex-direction:column; justify-content:center;
  max-width:520px; padding:88px 0 68px; position:relative;
}
.ab-tx-col::before {
  content:''; position:absolute; top:10%; left:-60px;
  width:340px; height:340px; border-radius:50%; pointer-events:none;
  background:radial-gradient(circle,rgba(6,182,212,.1),transparent 65%); filter:blur(48px);
}
.ab-lbl { font-size:.85rem; font-weight:500; color:rgba(255,255,255,.5); letter-spacing:.02em; line-height:1.5; margin:0 0 12px; }
.ab-h1  { font-size:clamp(2.4rem,4.5vw,3.8rem); font-weight:800; line-height:1.08; letter-spacing:-.03em; color:#fff; margin:0 0 6px; }
.ab-uline { width:0; height:2px; border-radius:2px; background:linear-gradient(to right,#0499a5,#2d65a2); margin:20px 0 22px; }
.ab-uline.on { animation:abLn .7s cubic-bezier(.22,1,.36,1) .4s forwards; }
.ab-sub  { font-size:clamp(.9rem,1.15vw,1rem); font-weight:400; color:rgba(255,255,255,.55); line-height:1.8; margin:0 0 28px; }
.ab-chip { display:inline-flex; align-items:center; gap:8px; padding:9px 18px; border-radius:50px; background:rgba(34,211,238,.07); border:1px solid rgba(34,211,238,.2); font-size:.8rem; font-weight:500; color:rgba(34,211,238,.9); width:fit-content; letter-spacing:.01em; }

/* ════════ S2 WHITE ════════ */
.ab-s2 { background:#f8fafc; padding:72px 0 80px; position:relative; }
.ab-s2::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent 5%,rgba(203,213,225,.8) 30%,rgba(203,213,225,.8) 70%,transparent 95%); }
.ab-focus-lbl { display:flex; align-items:center; gap:10px; margin-bottom:20px; }
.ab-focus-bar { width:3px; height:22px; border-radius:2px; background:linear-gradient(to bottom,#0499a5,#2d65a2); flex-shrink:0; }
.ab-focus-tag { font-size:.68rem; font-weight:800; letter-spacing:.16em; color:#0891b2; text-transform:uppercase; }
.ab-stat-min  { display:flex; flex-direction:column; align-items:flex-start; }

/* ════════ S3 LIGHT ════════ */
.ab-s3 { background:#fff; position:relative; overflow:hidden; }
.ab-s3::after { content:''; position:absolute; top:-80px; right:-60px; width:400px; height:400px; border-radius:50%; pointer-events:none; background:radial-gradient(circle,rgba(6,182,212,.05),transparent 65%); }
.ab-pill-l { display:inline-flex; align-items:center; gap:7px; padding:5px 14px; border-radius:9999px; border:1px solid rgba(8,145,178,.26); font-size:.68rem; font-weight:400; letter-spacing:.13em; color:#0e7490; }
.ab-dotb { width:6px;height:6px;border-radius:50%;background:#0891b2;flex-shrink:0; }
.ab-dotc { width:6px;height:6px;border-radius:50%;background:#0891b2;flex-shrink:0; }
.ab-wcard { background:#fff; border:1px solid #e2e8f0; border-radius:18px; padding:28px 24px; position:relative; overflow:hidden; transition:transform .26s,box-shadow .26s,border-color .26s; }
.ab-wcard:hover { transform:translateY(-4px); box-shadow:0 12px 36px rgba(0,0,0,.09); border-color:rgba(8,145,178,.28); }
.ab-wcard::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,#0499a5,#2d65a2); opacity:0; transition:opacity .26s; }
.ab-wcard:hover::before { opacity:1; }
.ab-wic { width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.2rem; margin-bottom:14px; background:linear-gradient(135deg,rgba(34,211,238,.1),rgba(52,211,153,.07)); border:1px solid rgba(34,211,238,.15); }

/* ── Org Roadmap Timeline ── */
@keyframes rmDot   { from{transform:scale(0);opacity:0} to{transform:scale(1);opacity:1} }
@keyframes rmLine  { from{width:0} to{width:100%} }
@keyframes rmPulse { 0%,100%{box-shadow:0 0 0 0 rgba(4,153,165,0)} 60%{box-shadow:0 0 0 7px rgba(4,153,165,.13)} }

.ab-diagram-wrap {
  margin-top: 64px;
  padding: 52px 48px 44px;
  background: #f8fafc;
  border-radius: 20px;
  border: 1px solid #e8eef4;
  position: relative; overflow: hidden;
}
/* faint teal glow top-right */
.ab-diagram-wrap::after {
  content:''; position:absolute; top:-60px; right:-60px;
  width:280px; height:280px; border-radius:50%; pointer-events:none;
  background:radial-gradient(circle,rgba(4,153,165,.07),transparent 65%);
}

.ab-rm-eyebrow {
  display:flex; flex-direction:column; align-items:center; gap:8px; margin-bottom:44px;
}
.ab-rm-pill {
  display:inline-flex; align-items:center; gap:6px;
  padding:4px 14px; border-radius:9999px;
  border:1px solid rgba(8,145,178,.22);
  font-size:.64rem; font-weight:600; letter-spacing:.14em;
  color:#0e7490; text-transform:uppercase;
}
.ab-rm-dot { width:5px;height:5px;border-radius:50%;background:#0499a5;flex-shrink:0; }
.ab-rm-title {
  font-size:clamp(1rem,1.7vw,1.2rem); font-weight:800; color:#0f172a;
  letter-spacing:-.02em; text-align:center; line-height:1.3; margin:0;
}
.ab-rm-sub {
  font-size:.8rem; color:#94a3b8; text-align:center; margin:0; line-height:1.6;
}

/* ── timeline track ── */
.ab-rm-track {
  position:relative;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

/* horizontal spine line */
.ab-rm-track::before {
  content:'';
  position:absolute;
  top: 22px; left: 12.5%; right: 12.5%;
  height: 1px;
  background: linear-gradient(to right,
    #e2e8f0 0%,
    rgba(4,153,165,.4) 33%,
    rgba(4,153,165,.6) 60%,
    rgba(4,153,165,.3) 80%,
    #e2e8f0 100%
  );
}

/* each milestone */
.ab-rm-step {
  display:flex; flex-direction:column; align-items:center;
  padding: 0 12px;
  position:relative;
}

/* dot on timeline */
.ab-rm-step-dot {
  width:44px; height:44px; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  position:relative; z-index:2; flex-shrink:0;
  margin-bottom:20px;
  background:#fff;
  border:1.5px solid #e2e8f0;
  transition: border-color .22s, box-shadow .22s, transform .22s;
  cursor:default;
}
.ab-rm-step:hover .ab-rm-step-dot {
  border-color:rgba(4,153,165,.4);
  box-shadow:0 4px 16px rgba(4,153,165,.1);
  transform:translateY(-2px);
}
/* active / future AI dot */
.ab-rm-step-dot.is-current {
  background: linear-gradient(135deg,#0499a5,#2d65a2);
  border:none;
  box-shadow:0 4px 20px rgba(4,153,165,.32);
  animation: rmPulse 2.6s ease-in-out infinite;
}
.ab-rm-step-dot.is-future {
  background:#fff;
  border:1.5px dashed rgba(4,153,165,.5);
}

/* year badge above dot */
.ab-rm-year {
  position:absolute; top:-22px;
  font-size:.6rem; font-weight:800; letter-spacing:.08em;
  color:#94a3b8;
}
.ab-rm-step-dot.is-current ~ .ab-rm-year,
.ab-rm-step.active .ab-rm-year { color:#0499a5; }

/* card below dot */
.ab-rm-card {
  background:#fff;
  border:1px solid #e8eef4;
  border-radius:14px;
  padding:18px 16px 16px;
  width:100%;
  text-align:center;
  transition:border-color .22s, box-shadow .22s, transform .22s;
  cursor:default;
  position:relative;
}
.ab-rm-step:hover .ab-rm-card {
  border-color:rgba(4,153,165,.25);
  box-shadow:0 6px 22px rgba(4,153,165,.07);
  transform:translateY(-2px);
}
.ab-rm-step.active .ab-rm-card {
  border-color:rgba(4,153,165,.3);
  background: linear-gradient(135deg,#f0fdfe,#f8fafc);
}
.ab-rm-step.future .ab-rm-card {
  border-style:dashed;
  border-color:rgba(4,153,165,.25);
  background:rgba(240,253,254,.4);
}

.ab-rm-card-label {
  font-size:.6rem; font-weight:700; letter-spacing:.1em;
  text-transform:uppercase; color:#94a3b8; display:block; margin-bottom:6px;
}
.ab-rm-step.active .ab-rm-card-label { color:#0499a5; }
.ab-rm-step.future .ab-rm-card-label { color:rgba(4,153,165,.7); }

.ab-rm-card-title {
  font-size:.82rem; font-weight:800; color:#0f172a;
  line-height:1.35; display:block; margin-bottom:6px;
}
.ab-rm-card-desc {
  font-size:.72rem; color:#64748b; line-height:1.65; display:block;
}
.ab-rm-step.future .ab-rm-card-title { color:#0499a5; }

/* AI badge on future card */
.ab-rm-ai-badge {
  display:inline-flex; align-items:center; gap:5px;
  margin-top:10px; padding:3px 10px; border-radius:9999px;
  background:linear-gradient(90deg,rgba(4,153,165,.1),rgba(45,101,162,.08));
  border:1px solid rgba(4,153,165,.2);
  font-size:.6rem; font-weight:700; color:#0499a5; letter-spacing:.04em;
}

/* bottom note */
.ab-rm-footnote {
  margin-top:36px; padding-top:24px;
  border-top:1px solid #f1f5f9;
  display:flex; align-items:center; justify-content:center; gap:8px;
}
.ab-rm-fn-bar {
  width:20px; height:2px; border-radius:2px;
  background:linear-gradient(to right,#0499a5,#2d65a2); flex-shrink:0;
}
.ab-rm-fn-text {
  font-size:.73rem; color:#94a3b8; line-height:1.6;
}
.ab-rm-fn-text strong { color:#0f172a; font-weight:700; }

@media(max-width:860px){
  .ab-diagram-wrap { padding:36px 24px 32px; }
  .ab-rm-track {
    grid-template-columns:1fr 1fr;
    gap:20px;
  }
  .ab-rm-track::before { display:none; }
}
@media(max-width:480px){
  .ab-rm-track { grid-template-columns:1fr; }
}

/* ════════ S4 WHITE — vision redesign ════════ */
.ab-s4 {
  background:#ffffff; padding:10px 0 110px; position:relative; overflow:hidden;
}
/* subtle grid pattern */
.ab-s4::before {
  content:''; position:absolute; inset:0; pointer-events:none;
  background-image:
    linear-gradient(rgba(4,153,165,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(4,153,165,.04) 1px, transparent 1px);
  background-size:48px 48px;
  mask-image:radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
}
/* teal glow bottom-left */
.ab-s4::after {
  content:''; position:absolute; bottom:-80px; left:-80px;
  width:480px; height:480px; border-radius:50%; pointer-events:none;
  background:radial-gradient(circle,rgba(4,153,165,.08),transparent 65%); filter:blur(48px);
}

/* pill badge */
.ab-pill-d {
  display:inline-flex; align-items:center; gap:7px; padding:5px 14px; border-radius:9999px;
  border:1px solid rgba(8,145,178,.28); background:rgba(255, 255, 255, 0.06);
  font-size:.68rem; font-weight:400; letter-spacing:.13em; color:#0e7490;
}

/* ── layout: left quote | right pillars ── */
.ab-v-grid {
  display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; margin-top:52px;
}
@media(max-width:860px){ .ab-v-grid { grid-template-columns:1fr; gap:48px; } }

/* LEFT — large quote block */
.ab-v-left { position:relative; }

/* big decorative " */
.ab-v-qdeco {
  font-size:clamp(5rem,10vw,8rem); line-height:.9; font-family:Georgia,serif; font-weight:900;
  background:linear-gradient(135deg,#0499a5,#2d65a2);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  background-clip:text; display:block; margin-bottom:8px; user-select:none;
}
.ab-v-qtext {
  font-size:clamp(1rem,1.6vw,1.12rem); font-weight:500; line-height:2;
  color:#1e293b; margin:0 0 28px;
}
.ab-v-qtext strong { font-weight:800; }
.ab-v-source {
  display:flex; align-items:center; gap:12px;
}
.ab-v-sbar {
  width:28px; height:2px; border-radius:2px;
  background:linear-gradient(to right,#0499a5,#2d65a2); flex-shrink:0;
}
.ab-v-sname {
  font-size:.75rem; letter-spacing:.06em; color:#94a3b8; font-weight:500;
}

/* corner accent */
.ab-v-corner {
  position:absolute; top:0; right:0; width:60px; height:60px; pointer-events:none;
  border-top:2px solid rgba(4,153,165,.2); border-right:2px solid rgba(4,153,165,.2);
  border-radius:0 12px 0 0;
}

/* RIGHT — value pillars */
.ab-v-right { display:flex; flex-direction:column; gap:0; }

.ab-v-pillar {
  display:flex; gap:20px; align-items:flex-start;
  padding:22px 0; border-bottom:1px solid #f1f5f9;
  transition:background .2s;
  cursor:default;
}
.ab-v-pillar:first-child { padding-top:0; }
.ab-v-pillar:last-child  { border-bottom:none; }

.ab-v-pnum {
  font-size:clamp(2rem,3.5vw,2.8rem); font-weight:900; line-height:1;
  background:linear-gradient(135deg,#0499a5,#2d65a2);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  background-clip:text; flex-shrink:0; min-width:52px;
  letter-spacing:-.04em;
}
.ab-v-ptxt {}
.ab-v-ptitle {
  font-size:.95rem; font-weight:800; color:#0f172a; margin:0 0 4px; line-height:1.3;
}
.ab-v-pdesc {
  font-size:.82rem; color:#64748b; line-height:1.7; margin:0;
}

/* hover line reveal */
.ab-v-pillar-line {
  position:absolute; left:0; bottom:0; height:1px; width:0;
  background:linear-gradient(to right,#0499a5,#2d65a2);
  transition:width .4s cubic-bezier(.22,1,.36,1);
}
.ab-v-pillar { position:relative; }
.ab-v-pillar:hover .ab-v-pillar-line { width:100%; }
.ab-v-pillar:hover .ab-v-ptitle { color:#0499a5; transition:color .2s; }

/* separator line between sections */
.ab-s4-sep {
  width:100%; height:1px; margin-bottom:80px;
  background:linear-gradient(90deg,transparent,rgba(4,153,165,.18) 20%,rgba(45,101,162,.18) 80%,transparent);
}

/* tags row */
.ab-v-tags { display:flex; flex-wrap:wrap; gap:8px; margin-top:48px; justify-content:center; }
.ab-tag {
  padding:8px 20px; border-radius:9999px;
  border:1px solid #e2e8f0; 
  font-size:.78rem; font-weight:600; color:#475569;
  transition:all .22s;
}
.ab-tag:hover { border-color:rgba(4,153,165,.4); background:rgba(4,153,165,.06); color:#0499a5; }

.ab-sep { height:1px; background:linear-gradient(90deg,transparent,rgba(8,145,178,.15),transparent); }

/* ════════ RESPONSIVE ════════ */
@media(max-width:860px){
  .ab-hero { height:auto; flex-direction:column; justify-content:flex-start; }
  .ab-ph-col { position:relative; width:100%; height:260px; top:auto; right:auto; }
  .ab-ph-col::after { background:linear-gradient(to bottom,rgba(6,10,20,.05) 20%,rgba(6,10,20,.88) 80%,#060A14 100%); }
  .ab-tx-col { max-width:100%; padding:36px 24px 52px; align-items:center; text-align:center; }
  .ab-tx-col::before { display:none; }
  .ab-uline { margin-left:auto; margin-right:auto; }
  .ab-chip  { margin:0 auto; }
  .r-rt.on  { animation:abUp .65s cubic-bezier(.22,1,.36,1) forwards; }

  .ab-s2-grid    { grid-template-columns:1fr !important; gap:36px !important; }
  .ab-focus-lbl  { justify-content:center; }
  .ab-s2 p       { text-align:center; }
  .ab-stats-row  { justify-content:center !important; gap:0 !important; }
  .ab-stat-min   { align-items:center; }
  .ab-stat-min + .ab-stat-min { padding-left:24px !important; margin-left:24px !important; }

  .ab-ww-grid { grid-template-columns:1fr !important; }

  .ab-s4 { padding:60px 0 72px; }
  .ab-v-qdeco { font-size:4rem; }
  .ab-v-corner { display:none; }
}
@media(max-width:480px){
  .ab-ph-col { height:210px; }
  .ab-h1 { font-size:1.7rem; }
  .ab-tag { padding:8px 15px; font-size:.74rem; }
  .ab-vcard { padding:26px 18px; }
}
`;
  document.head.appendChild(s);
}

const W = { maxWidth:"1280px", margin:"0 auto", padding:"0 32px" };



export default function AboutUs() {
  useEffect(() => { injectCSS(); }, []);
  const [hr, hv] = useInView(0.04);
  const [s2, sv] = useInView(0.08);
  const [s3, tv] = useInView(0.06);
  const [s4, qv] = useInView(0.06);

  return (
    <div className="min-h-screen bg-[#060A14] text-white">
      <div style={{ position:"fixed", top:0, left:0, right:0, height:80, zIndex:49, pointerEvents:"none", background:"linear-gradient(to bottom,rgba(6,10,20,.88),rgba(6,10,20,.45) 60%,transparent)" }}/>
      <Navbar />

      <main style={{ position:"relative", zIndex:1 }}>

        {/* ══ S1 HERO ══ */}
        <div className="ab-hero" ref={hr}>
          <div className="ab-ph-col">
            <img src={aboutImg} alt="Aileen Solutions" className={`r-fd ${hv?"on":""}`} />
          </div>
          <div style={{ position:"relative", zIndex:2, width:"100%", maxWidth:"1280px", margin:"0 auto", padding:"0 32px", display:"flex", alignItems:"center" }}>
            <div className="ab-tx-col">
              <p className={`ab-lbl r-up ${hv?"on":""}`} style={{ animationDelay:"80ms" }}>ที่ปรึกษาและผู้ให้บริการด้าน</p>
              <h1 className={`ab-h1 r-up ${hv?"on":""}`} style={{ animationDelay:"160ms" }}>
                Digital<br/>
                <span className="gc">Transformation</span><br/>
                <span style={{ fontSize:"clamp(1.5rem,2.6vw,2.2rem)", color:"rgba(255,255,255,.6)", fontWeight:700 }}>ของประเทศไทย</span>
              </h1>
              <div className={`ab-uline ${hv?"on":""}`} />
              <p className={`ab-sub r-up ${hv?"on":""}`} style={{ animationDelay:"300ms" }}>
                บริษัท ไอลีน โซลูชั่น จำกัด · ก่อตั้ง 2561<br/>
                ยกระดับประสิทธิภาพองค์กรทั้งในระดับบริหาร<br/>
                และระดับปฏิบัติการ
              </p>
              <div className={`r-up ${hv?"on":""}`} style={{ animationDelay:"380ms" }}>
                <div className="ab-chip">
                  อุตสาหกรรม · พลังงาน · Manufacturing
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ S2 WHITE ══ */}
        <div className="ab-s2">
          <div style={W} ref={s2}>
            <div className="ab-s2-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
              <div>
                <div className={`ab-focus-lbl r-up ${sv?"on":""}`}>
                  <div className="ab-focus-bar"/><span className="ab-focus-tag">OUR FOCUS</span>
                </div>
                <p className={`r-up ${sv?"on":""}`} style={{ animationDelay:"60ms", margin:"0 0 12px", fontSize:"clamp(1.1rem,1.8vw,1.28rem)", fontWeight:700, color:"#0f172a", lineHeight:1.6 }}>
                  มุ่งเน้นการยกระดับประสิทธิภาพองค์กร<br/>ทั้งในระดับบริหารและระดับปฏิบัติการ
                </p>
                <p className={`r-up ${sv?"on":""}`} style={{ animationDelay:"120ms", margin:0, fontSize:"14px", fontWeight:400, color:"#64748b", lineHeight:1.75 }}>
                  โดยเฉพาะในภาคอุตสาหกรรม พลังงาน<br/>และสายการผลิต (Manufacturing &amp; Production Line)
                </p>
              </div>
              <div className={`r-up ${sv?"on":""} ab-stats-row`} style={{ animationDelay:"160ms", display:"flex", gap:0, alignItems:"center", justifyContent:"flex-end" }}>
                {[{ v:"2561", l:"ปีที่ก่อตั้ง" }, { v:"7+", l:"โซลูชั่นหลัก" }, { v:"10+", l:"องค์กรที่ไว้วางใจ" }].map((st,i) => (
                  <div key={st.l} className="ab-stat-min" style={{ paddingLeft:i===0?0:28, marginLeft:i===0?0:28, borderLeft:i===0?"none":"1px solid #e2e8f0" }}>
                    <span style={{ fontSize:"clamp(1.6rem,3vw,2.1rem)", fontWeight:800, lineHeight:1, display:"block", background:"linear-gradient(120deg,#0b639b 30%,#62e5da)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{st.v}</span>
                    <span style={{ fontSize:".72rem", color:"#94a3b8", fontWeight:500, marginTop:5, display:"block", letterSpacing:".04em" }}>{st.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══ S3 LIGHT ══ */}
        <div className="ab-s3 pt-32 pb-32">
          <div style={W} ref={s3}>
            <div style={{ textAlign:"center", marginBottom:52 }}>
              <span className={`ab-pill-l r-up ${tv?"on":""}`}><span className="ab-dotb"/>OUR APPROACH</span>
              <h2 className={`r-up ${tv?"on":""}`} style={{ animationDelay:"80ms", marginTop:14, fontSize:"clamp(1.6rem,3vw,2.1rem)", fontWeight:800, color:"#0f172a", letterSpacing:"-.02em", lineHeight:1.2 }}>
                โซลูชั่นที่เชื่อมโยง<span className="gb">กระบวนการ ข้อมูล และเทคโนโลยี</span>
              </h2>
              <p className={`r-up ${tv?"on":""}`} style={{ animationDelay:"150ms", marginTop:10, fontSize:".88rem", color:"#64748b", maxWidth:400, marginLeft:"auto", marginRight:"auto", lineHeight:1.7 }}>
                แนวคิดการออกแบบโซลูชั่นที่ช่วยให้องค์กรสามารถพัฒนาได้จริง
              </p>
            </div>
            <div className="ab-ww-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
              {[
                { ic:"🔗", t:"เชื่อมโยงกลยุทธ์ กระบวนการ และเทคโนโลยี", b:"เราออกแบบโซลูชั่นที่เชื่อมโยง กลยุทธ์องค์กร เข้ากับ กระบวนการทำงาน และ ระบบดิจิทัล เพื่อให้องค์กรดำเนินงานได้อย่างมีโครงสร้าง โปร่งใส ตรวจสอบได้ และพัฒนาต่อเนื่อง" },
                { ic:"⚙️", t:"Process ก่อน Technology", b:"เราให้ความสำคัญกับความถูกต้องของกระบวนการก่อนการเลือกใช้เทคโนโลยี เพราะเทคโนโลยีที่ดีต้องตั้งอยู่บนโครงสร้างที่ชัดเจน มีลำดับขั้นตอน และเข้าใจบทบาทหน้าที่อย่างแท้จริง" },
                { ic:"🚀", t:"Digital Transformation ที่แท้จริง", b:"สำหรับเรา Digital Transformation ไม่ใช่แค่ติดตั้งระบบใหม่ แต่คือการออกแบบโครงสร้างการทำงานที่สอดคล้องกันทั้งองค์กร ตั้งแต่ระดับนโยบาย กลยุทธ์ ไปจนถึงการปฏิบัติงานจริง" },
              ].map((c,i) => (
                <div key={i} className={`ab-wcard r-up ${tv?"on":""}`} style={{ animationDelay:`${200+i*90}ms` }}>
                  <div className="ab-wic">{c.ic}</div>
                  <div style={{ fontSize:".95rem", fontWeight:800, color:"#0f172a", lineHeight:1.4, marginBottom:10 }}>{c.t}</div>
                  <div style={{ fontSize:".84rem", color:"#64748b", lineHeight:1.85 }}>{c.b}</div>
                </div>
              ))}
            </div>

            {/* ── Org Roadmap ── */}
            <div className={`ab-diagram-wrap r-up ${tv?"on":""}`} style={{ animationDelay:"460ms" }}>

              <div className="ab-rm-eyebrow">
                <div className="ab-rm-pill"><span className="ab-rm-dot"/>OUR JOURNEY</div>
                <h3 className="ab-rm-title">
                  เส้นทางการพัฒนาองค์กร — <span className="gc">สู่ยุคดิจิทัลที่ขับเคลื่อนด้วยข้อมูล</span>
                </h3>
                <p className="ab-rm-sub">จากรากฐานที่มั่นคง สู่ระบบที่ทันสมัยและพร้อมรับอนาคต</p>
              </div>

              <div className="ab-rm-track">

                {/* ── Milestone 1 ── */}
                <div className="ab-rm-step">
                  <div style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <span className="ab-rm-year" style={{top:"-22px",position:"absolute"}}>2561</span>
                    <div className="ab-rm-step-dot">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ab-rm-card">
                    <span className="ab-rm-card-label">ก่อตั้งบริษัท</span>
                    <span className="ab-rm-card-title">วางรากฐาน<br/>ที่ปรึกษาองค์กร</span>
                    <span className="ab-rm-card-desc">เริ่มต้นให้บริการที่ปรึกษาด้านกลยุทธ์และกระบวนการ สำหรับภาคอุตสาหกรรมและพลังงาน</span>
                  </div>
                </div>

                {/* ── Milestone 2 ── */}
                <div className="ab-rm-step">
                  <div style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <span className="ab-rm-year" style={{top:"-22px",position:"absolute"}}>2562–64</span>
                    <div className="ab-rm-step-dot">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
                        <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ab-rm-card">
                    <span className="ab-rm-card-label">พัฒนาโซลูชั่น</span>
                    <span className="ab-rm-card-title">ออกแบบ Process<br/>และระบบปฏิบัติการ</span>
                    <span className="ab-rm-card-desc">ขยายบริการสู่การออกแบบกระบวนการและระบบ ERP สำหรับสายการผลิต Manufacturing</span>
                  </div>
                </div>

                {/* ── Milestone 3 — CURRENT ── */}
                <div className="ab-rm-step active">
                  <div style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <span className="ab-rm-year" style={{top:"-22px",position:"absolute",color:"#0499a5",fontWeight:800}}>ปัจจุบัน</span>
                    <div className="ab-rm-step-dot is-current">
                      <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.95)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
                        <rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 20h8M12 18v2"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ab-rm-card">
                    <span className="ab-rm-card-label">Digital Platform</span>
                    <span className="ab-rm-card-title">ระบบดิจิทัลครบวงจร<br/>เชื่อมทุกระดับองค์กร</span>
                    <span className="ab-rm-card-desc">นำเสนอแพลตฟอร์มดิจิทัลที่เชื่อมโยงกลยุทธ์ กระบวนการ และข้อมูลแบบ Real-time</span>
                  </div>
                </div>

                {/* ── Milestone 4 — FUTURE / AI ── */}
                <div className="ab-rm-step future">
                  <div style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <span className="ab-rm-year" style={{top:"-22px",position:"absolute",color:"rgba(4,153,165,.7)"}}>อนาคต</span>
                    <div className="ab-rm-step-dot is-future">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0499a5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ab-rm-card">
                    <span className="ab-rm-card-label">Next Step</span>
                    <span className="ab-rm-card-title">ระบบที่ขับเคลื่อน<br/>ด้วย AI</span>
                    <span className="ab-rm-card-desc">บูรณาการ AI เข้ากับทุกกระบวนการ เพื่อการตัดสินใจที่ชาญฉลาดและพัฒนาได้ต่อเนื่อง</span>
                    <span className="ab-rm-ai-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:10,height:10}}>
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                      AI-Enabled
                    </span>
                  </div>
                </div>

              </div>

              <div className="ab-rm-footnote">
                <div className="ab-rm-fn-bar"/>
                <p className="ab-rm-fn-text">
                  <strong>ไอลีน โซลูชั่น</strong> มุ่งพัฒนาอย่างต่อเนื่อง — จากที่ปรึกษากระบวนการ สู่พาร์ทเนอร์ด้าน Digital &amp; AI Transformation
                </p>
              </div>

            </div>
            {/* ── end roadmap ── */}

          </div>
        </div>

        {/* ══ S4 WHITE VISION ══ */}
        <div className="ab-s4" ref={s4}>
          <div style={W}>

            {/* top label */}
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginBottom:0 }}>
              <span className={`ab-pill-d r-up ${qv?"on":""}`}>
                <span className="ab-dotc"/>VISION &amp; VALUES
              </span>
              <h2 className={`r-up ${qv?"on":""}`}
                style={{ animationDelay:"80ms", marginTop:16, fontSize:"clamp(1.7rem,3vw,2.3rem)",
                  fontWeight:800, letterSpacing:"-.03em", color:"#0f172a", textAlign:"center", lineHeight:1.15 }}>
                สิ่งที่เราเชื่อ และ<span className="gc"> สิ่งที่เราส่งมอบ</span>
              </h2>
            </div>

            {/* 2-col grid */}
            <div className="ab-v-grid">

              {/* LEFT — quote */}
              <div className={`ab-v-left r-up ${qv?"on":""}`} style={{ animationDelay:"160ms" }}>
                <div className="ab-v-corner" />
                <span className="lv8-openquote">&ldquo;</span>
                <p className="ab-v-qtext">
                  เราเชื่อว่าความเชี่ยวชาญที่แท้จริง ไม่ได้อยู่ที่เครื่องมือ<br/>
                  แต่อยู่ที่<strong>ความเข้าใจในระบบการทำงาน</strong>ขององค์กรทั้งภาพรวม<br/>
                  และความสามารถในการทำให้สิ่งที่ซับซ้อน<br/>
                  กลายเป็นระบบที่{" "}
                  <span className="gc" style={{ fontWeight:800 }}>
                    ชัดเจน บริหารจัดการได้ และเติบโตได้อย่างยั่งยืน
                  </span>
                </p>
                <div className="ab-v-source">
                  <div className="ab-v-sbar" />
                  <span className="ab-v-sname">บริษัท ไอลีน โซลูชั่น จำกัด · ก่อตั้ง 2561</span>
                </div>

                {/* tags */}
                <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:32 }}>
                  {["Smart Systems","Clear Operations","Reliable Processes","Adaptive Solutions","Sustainable Impact"].map(t => (
                    <span key={t} className="ab-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* RIGHT — value pillars */}
              <div className={`ab-v-right r-up ${qv?"on":""}`} style={{ animationDelay:"260ms" }}>
                {[
                  { n:"01", title:"Simplicity", desc:"เราเชื่อในระบบที่ใช้งานง่าย ช่วยให้ผู้ใช้เข้าใจกระบวนการ และทำงานได้ด้วยตนเองอย่างมีประสิทธิภาพ" },
                  { n:"02", title:"Rapidly", desc:"ให้ความสำคัญและตอบรับกับการเปลี่ยนแปลงทางธุรกิจที่เป็นไปอย่างรวดเร็วในปัจจุบัน" },
                  { n:"03", title:"Experience", desc:"เรานำเสนอโซลูชั่นที่มีคุณภาพ เหมาะสมกับความต้องการ ตอบโจทย์ผู้ใช้งานได้อย่างตรงจุด" },
                  { n:"04", title:"Platform", desc:"แพลตฟอร์มที่เชื่อถือได้และยืดหยุ่น รองรับโซลูชั่นหลากหลาย" },
                  { n:"05", title:"Services", desc:"บริการครบวงจร ครอบคลุมการบูรณาการเทคโนโลยี เพื่อยกระดับการทำงานในองค์กร" },
                  { n:"06", title:"Consulting", desc:"ที่ปรึกษามืออาชีพ ให้คำแนะนำ รวมทั้งช่วยวางแผน และขับเคลื่อนกลยุทธ์ด้วยความมั่นใจ" },
                ].map((p, i) => (
                  <div key={p.n} className={`ab-v-pillar r-up ${qv?"on":""}`}
                    style={{ animationDelay:`${300 + i*80}ms` }}>
                    <span className="ab-v-pnum">{p.n}</span>
                    <div className="ab-v-ptxt">
                      <p className="ab-v-ptitle">{p.title}</p>
                      <p className="ab-v-pdesc">{p.desc}</p>
                    </div>
                    <div className="ab-v-pillar-line" />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </main>
      <SectionContactFooter/>
    </div>
  );
}