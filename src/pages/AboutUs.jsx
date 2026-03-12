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

.gc  { background:linear-gradient(90deg,#0499a5,#a8f4ed);
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
.ab-chip { display:inline-flex; align-items:center; gap:8px; padding:9px 18px; border-radius:50px; background:rgba(34,211,238,.07); border:1px solid rgb(139 228 224); font-size:.8rem; font-weight:500; color:rgb(108 211 211); width:fit-content; letter-spacing:.01em; }

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

/* ── Focus Pillars Diagram ── */
@keyframes pillarGlow { 0%,100%{box-shadow:0 0 0 0 rgba(4,153,165,0)} 60%{box-shadow:0 0 0 10px rgba(4,153,165,.12)} }
@keyframes aiFloat   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }

.ab-diagram-wrap {
  margin-top: 64px;
  padding: 56px 48px 48px;

  border-radius: 24px;
  border: 1px solid #e8eef4;
  position: relative; overflow: hidden;
}
.ab-diagram-wrap::after {
  content:''; position:absolute; bottom:-80px; right:-80px;
  width:320px; height:320px; border-radius:50%; pointer-events:none;
  background:radial-gradient(circle,rgba(4,153,165,.07),transparent 65%);
}

/* eyebrow */
.ab-rm-eyebrow {
  display:flex; flex-direction:column; align-items:center; gap:8px; margin-bottom:48px;
}
.ab-rm-pill {
  display:inline-flex; align-items:center; gap:6px; padding:5px 14px;
  border-radius:9999px; border:1px solid rgba(8,145,178,.26);
  font-size:.68rem; font-weight:400; letter-spacing:.13em; color:#0e7490; text-transform:uppercase;
}
.ab-rm-dot { width:6px;height:6px;border-radius:50%;background:#0891b2;flex-shrink:0; }
.ab-rm-title {
  font-size:clamp(1.6rem,3vw,2.1rem); font-weight:800; color:#0f172a;
  letter-spacing:-.02em; text-align:center; line-height:1.2; margin:0;
}
.ab-rm-sub { font-size:.88rem; color:#64748b; text-align:center; margin:0; line-height:1.7; max-width:400px; }

/* ── new layout: left stack + right AI hero ── */
.ab-pillar-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: stretch;
}

/* left col: two stacked rows */
.ab-pillar-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* small supporting card */
.ab-pillar-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 22px;
  background: #fff;
  border: 1px solid #e8eef4;
  border-radius: 16px;
  transition: border-color .2s, box-shadow .2s, transform .2s;
  cursor: default;
  flex: 1;
}
.ab-pillar-row:hover {
  border-color: rgba(4,153,165,.22);
  box-shadow: 0 4px 18px rgba(4,153,165,.06);
  transform: translateY(-2px);
}
.ab-pillar-row-icon {
  width: 40px; height: 40px; border-radius: 11px; flex-shrink:0;
  background: linear-gradient(135deg,rgba(34,211,238,.1),rgba(52,211,153,.06));
  border: 1px solid rgba(34,211,238,.18);
  display: flex; align-items: center; justify-content: center;
}
.ab-pillar-row-body {}
.ab-pillar-row-num {
  font-size: .78rem; font-weight:400; letter-spacing:.1em;
  color: #089aa5; text-transform:uppercase; display:block; margin-bottom:14px;
}
.ab-pillar-row-title {
  font-size: 1rem; font-weight:800; color:#0f172a;
  line-height:1.3; display:block; margin-bottom:5px;
}
.ab-pillar-row-desc {
  font-size: .90rem; color:#64748b; line-height:1.65; display:block;
}
.ab-pillar-row-tag {
  display:inline-flex; align-items:center; gap:5px;
  margin-top:10px; padding:3px 10px; border-radius:9999px;
  background:rgba(4,153,165,.05); border:1px solid rgba(4,153,165,.12);
  font-size:.6rem; font-weight:600; color:#0891b2; letter-spacing:.04em;
}

/* right: AI hero card — tall */
.ab-pillar-ai {
  background: linear-gradient(145deg,#0499a5,#2056a0);
  border-radius: 20px;
  padding: 36px 28px 32px;
  display: flex; flex-direction:column; align-items:flex-start;
  justify-content: space-between;
  position:relative; overflow:hidden;
  cursor:default;
  box-shadow: 0 16px 48px rgba(4,153,165,.22);
}
/* decorative circles */
.ab-pillar-ai::before {
  content:''; position:absolute; top:-40px; right:-40px;
  width:180px; height:180px; border-radius:50%;
  background:rgba(255,255,255,.06); pointer-events:none;
}
.ab-pillar-ai::after {
  content:''; position:absolute; bottom:-60px; left:-30px;
  width:220px; height:220px; border-radius:50%;
  background:rgba(255,255,255,.04); pointer-events:none;
}

.ab-pillar-ai-num {
  font-size:.76rem; font-weight:400; letter-spacing:.14em;
  color:rgba(255, 255, 255, 0.5); text-transform:uppercase; display:block; margin-bottom:24px;
}
/* big AI icon */
.ab-pillar-ai-icon {
  width:64px; height:64px; border-radius:18px;
  background:rgba(255,255,255,.15);
  border:1px solid rgba(255,255,255,.2);
  display:flex; align-items:center; justify-content:center;
  margin-bottom:20px;
  animation: aiFloat 3.2s ease-in-out infinite;
}
.ab-pillar-ai-phase {
  font-size:.65rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
  color:rgba(255,255,255,.6); display:block; margin-bottom:8px;
}
.ab-pillar-ai-title {
  font-size:clamp(1.1rem,1.8vw,1.3rem); font-weight:800; color:#fff;
  line-height:1.3; display:block; margin-bottom:10px;
}
.ab-pillar-ai-desc {
  font-size:.88rem; color:rgba(255,255,255,.75); line-height:1.75; display:block; flex:1;
}
.ab-pillar-ai-tag {
  display:inline-flex; align-items:center; gap:6px;
  margin-top:22px; padding:6px 14px; border-radius:9999px;
  background:rgba(255,255,255,.15); border:1px solid rgba(255,255,255,.25);
  font-size:.65rem; font-weight:700; color:#fff; letter-spacing:.04em;
}

/* bottom note */
.ab-rm-footnote {
  margin-top:32px; padding-top:24px; border-top:1px solid rgba(4,153,165,.1);
  display:flex; align-items:center; justify-content:center; gap:10px;
}
.ab-rm-fn-bar {
  width:20px; height:2px; border-radius:2px;
  background:linear-gradient(to right,#0499a5,#2d65a2); flex-shrink:0;
}
.ab-rm-fn-text { font-size:.93rem; color:#94a3b8; line-height:1.6; }
.ab-rm-fn-text strong { color:#0f172a; font-weight:400; }

@media(max-width:860px){
  .ab-diagram-wrap { padding:36px 24px 32px; }
  .ab-pillar-layout { grid-template-columns:1fr; }
}
@media(max-width:480px){
  .ab-pillar-ai { padding:28px 20px 24px; }
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
                <span style={{ fontSize:"clamp(1.5rem,2.6vw,2.2rem)", color:"rgba(255, 255, 255, 0.66)", fontWeight:700 }}>ของประเทศไทย</span>
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
                {[{ v:"2561", l:"ปีที่ก่อตั้ง" }, { v:"10+", l:"โซลูชั่นหลัก" }, { v:"10+", l:"องค์กรที่ไว้วางใจ" },{ v:"50+", l:"โครงการระดับองค์กร" }].map((st,i) => (
                  <div key={st.l} className="ab-stat-min" style={{ paddingLeft:i===0?0:28, marginLeft:i===0?0:28, borderLeft:i===0?"none":"1px solid #e2e8f0" }}>
                    <span style={{ fontSize:"clamp(1.6rem,3vw,2.1rem)", fontWeight:800, lineHeight:1, display:"block", background:"linear-gradient(120deg,#0891b2 30%,#0891b2)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{st.v}</span>
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

            {/* ── Current Focus Pillars ── */}
            <div className={`ab-diagram-wrap r-up ${tv?"on":""}`} style={{ animationDelay:"460ms" }}>

              <div className="ab-rm-eyebrow">
                <div className="ab-rm-pill"><span className="ab-rm-dot"/>OUR FOCUS</div>
                <h3 className="ab-rm-title">
                  มุ่งพัฒนาระบบองค์กร — <span className="gb">ที่ทำงานร่วมกับ AI</span>
                </h3>
               
              </div>

              <div className="ab-pillar-layout">

                {/* LEFT — two supporting rows */}
                <div className="ab-pillar-stack">

                  <div className="ab-pillar-row">
                    <div className="ab-pillar-row-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0499a5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div className="ab-pillar-row-body">
                      <span className="ab-pillar-row-num">01 — รากฐาน</span>
                      <span className="ab-pillar-row-title">กลยุทธ์และกระบวนการที่ชัดเจน</span>
                      <span className="ab-pillar-row-desc">วางโครงสร้างองค์กรและกระบวนการทำงานให้มั่นคงก่อน เพื่อให้ระบบที่จะตามมาทำงานได้อย่างมีประสิทธิภาพ</span>
                      <span className="ab-pillar-row-tag">Process-First</span>
                    </div>
                  </div>

                  <div className="ab-pillar-row">
                    <div className="ab-pillar-row-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0499a5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
                        <rect x="2" y="4" width="20" height="14" rx="2"/>
                        <path d="M8 20h8M12 18v2"/>
                      </svg>
                    </div>
                    <div className="ab-pillar-row-body">
                      <span className="ab-pillar-row-num">02 — ระบบดิจิทัล</span>
                      <span className="ab-pillar-row-title">Platform ที่เชื่อมทุกส่วนขององค์กร</span>
                      <span className="ab-pillar-row-desc">ระบบดิจิทัลที่ยืดหยุ่นและขยายได้ เชื่อมโยงข้อมูลและการดำเนินงานทุกระดับแบบ Real-time</span>
                      <span className="ab-pillar-row-tag">Digital Platform</span>
                    </div>
                  </div>

                </div>

                {/* RIGHT — AI hero card */}
                <div className="ab-pillar-ai">
                  <div>
                    <span className="ab-pillar-ai-num">03 — จุดมุ่งหมาย</span>
                    <div className="ab-pillar-ai-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.95)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{width:30,height:30}}>
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                    </div>
                    <span className="ab-pillar-ai-phase">AI &amp; Intelligence</span>
                    <span className="ab-pillar-ai-title">AI ที่ทำงานร่วมกับระบบได้จริง</span>
                    <span className="ab-pillar-ai-desc">นี่คือสิ่งที่เรามุ่งเน้น — บูรณาการ AI เข้ากับกระบวนการและระบบดิจิทัลขององค์กร ให้ทำงานร่วมกันได้อย่างเป็นธรรมชาติและสร้างคุณค่าได้จริง</span>
                  </div>
                  <span className="ab-pillar-ai-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{width:11,height:11}}>
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                    AI-Integrated System
                  </span>
                </div>

              </div>

              <div className="ab-rm-footnote">
                <div className="ab-rm-fn-bar"/>
                <p className="ab-rm-fn-text">
                  <strong>ไอลีน โซลูชั่น</strong> มุ่งพัฒนาระบบและโซลูชันที่ผสาน AI เข้ากับกระบวนการทำงานขององค์กร เพื่อสร้างคุณค่าอย่างแท้จริงและรองรับการเติบโตในอนาคต
                </p>
              </div>

            </div>
            {/* ── end focus pillars ── */}

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
                สิ่งที่เราเชื่อ และ<span className="gb"> สิ่งที่เราส่งมอบ</span>
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
                  <span className="gb" style={{ fontWeight:800 }}>
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