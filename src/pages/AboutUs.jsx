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

.r-up { opacity:0 } .r-up.on { animation:abUp .65s cubic-bezier(.22,1,.36,1) forwards }
.r-rt { opacity:0 } .r-rt.on { animation:abRt .7s  cubic-bezier(.22,1,.36,1) forwards }
.r-fd { opacity:0 } .r-fd.on { animation:abFd 1s   ease                      forwards }
.r-sc { opacity:0 } .r-sc.on { animation:abSc .65s cubic-bezier(.22,1,.36,1) forwards }

/* gradient helpers */
.gc  { background:linear-gradient(90deg,#0499a5,#2d65a2);
       -webkit-background-clip:text;-webkit-text-fill-color:transparent; }
.gb  { background:linear-gradient(90deg,#0499a5,#2d65a2);
       -webkit-background-clip:text;-webkit-text-fill-color:transparent; }

/* ════════════════════════════════
   S1  HERO — full width, constrained content
════════════════════════════════ */
.ab-hero {
  position:relative;
  height:680px;
  background:#060A14;
  overflow:hidden;
  display:flex; align-items:center; justify-content:center;
}

/* photo fills right absolutely */
.ab-ph-col {
  position:absolute; top:0; right:0;
  width:58%; height:100%;
  overflow:hidden;
}
.ab-ph-col img {
  width:100%; height:100%;
  object-fit:cover; object-position:center top; display:block;
}
/* fade left edge into dark */
.ab-ph-col::after {
  content:''; position:absolute; inset:0; pointer-events:none;
  background:linear-gradient(
    to right,
    #060A14 0%,
    rgba(6,10,20,.85) 18%,
    rgba(6,10,20,.4) 45%,
    transparent 100%
  );
}
.ab-tx-col {
  display:flex; flex-direction:column; justify-content:center;
  max-width:520px;
  padding:88px 0 68px;
  position:relative;
}
.ab-tx-col::before {
  content:''; position:absolute; top:10%; left:-60px;
  width:340px; height:340px; border-radius:50%; pointer-events:none;
  background:radial-gradient(circle,rgba(6,182,212,.1),transparent 65%); filter:blur(48px);
}
.ab-lbl {
  font-size:.85rem; font-weight:500;
  color:rgba(255,255,255,.5); letter-spacing:.02em; line-height:1.5; margin:0 0 12px;
}
.ab-h1 {
  font-size:clamp(2.4rem,4.5vw,3.8rem);
  font-weight:800; line-height:1.08; letter-spacing:-.03em; color:#fff; margin:0 0 6px;
}
.ab-uline {
  width:0; height:2px; border-radius:2px;
  background:linear-gradient(to right,#0499a5,#2d65a2); margin:20px 0 22px;
}
.ab-uline.on { animation:abLn .7s cubic-bezier(.22,1,.36,1) .4s forwards; }
.ab-sub {
  font-size:clamp(.9rem,1.15vw,1rem);
  font-weight:400; color:rgba(255,255,255,.55); line-height:1.8; margin:0 0 28px;
}
.ab-chip {
  display:inline-flex; align-items:center; gap:8px;
  padding:9px 18px; border-radius:10px;
  background:rgba(34,211,238,.07); border:1px solid rgba(34,211,238,.2);
  font-size:.8rem; font-weight:500; color:rgba(34,211,238,.9);
  width:fit-content; letter-spacing:.01em;
}

/* ════════════════════════════════
   S2  WHITE
════════════════════════════════ */
.ab-s2 {
  background:#ffffff; padding:72px 0 80px; position:relative;
}
.ab-s2::before {
  content:''; position:absolute; top:0; left:0; right:0; height:1px;
  background:linear-gradient(90deg,transparent 5%,rgba(203,213,225,.8) 30%,rgba(203,213,225,.8) 70%,transparent 95%);
}
.ab-focus-lbl { display:flex; align-items:center; gap:10px; margin-bottom:20px; }
.ab-focus-bar {
  width:3px; height:22px; border-radius:2px;
  background:linear-gradient(to bottom,#0499a5,#2d65a2); flex-shrink:0;
}
.ab-focus-tag {
  font-size:.68rem; font-weight:800; letter-spacing:.16em; color:#0891b2; text-transform:uppercase;
}
.ab-stat-min { display:flex; flex-direction:column; align-items:flex-start; }

/* ════════════════════════════════
   S3  LIGHT
════════════════════════════════ */
.ab-s3 { background:#f8fafc; position:relative; overflow:hidden; }
.ab-s3::after {
  content:''; position:absolute; top:-80px; right:-60px;
  width:400px; height:400px; border-radius:50%; pointer-events:none;
  background:radial-gradient(circle,rgba(6,182,212,.05),transparent 65%);
}
.ab-pill-l {
  display:inline-flex; align-items:center; gap:7px; padding:5px 14px; border-radius:9999px;
  border:1px solid rgba(8,145,178,.26); font-size:.68rem; font-weight:400;
  letter-spacing:.13em; color:#0e7490;
}
.ab-dotb { width:6px;height:6px;border-radius:50%;background:#0891b2;flex-shrink:0; }
.ab-dotc { width:6px;height:6px;border-radius:50%;background:#22d3ee;flex-shrink:0;
           box-shadow:0 0 6px rgba(34,211,238,.9); }
.ab-wcard {
  background:#fff; border:1px solid #e2e8f0; border-radius:18px; padding:28px 24px;
  position:relative; overflow:hidden;
  transition:transform .26s,box-shadow .26s,border-color .26s;
}
.ab-wcard:hover { transform:translateY(-4px); box-shadow:0 12px 36px rgba(0,0,0,.09); border-color:rgba(8,145,178,.28); }
.ab-wcard::before {
  content:''; position:absolute; top:0; left:0; right:0; height:2px;
  background:linear-gradient(90deg,#0499a5,#2d65a2); opacity:0; transition:opacity .26s;
}
.ab-wcard:hover::before { opacity:1; }
.ab-wic {
  width:44px; height:44px; border-radius:12px; display:flex; align-items:center;
  justify-content:center; font-size:1.2rem; margin-bottom:14px;
  background:linear-gradient(135deg,rgba(34,211,238,.1),rgba(52,211,153,.07));
  border:1px solid rgba(34,211,238,.15);
}

/* ════════════════════════════════
   S4  DARK — vision
════════════════════════════════ */
.ab-s4 {
  background:#060A14; padding:88px 0 100px; position:relative; overflow:hidden;
}
.ab-s4::before {
  content:''; position:absolute; bottom:-140px; left:50%;
  transform:translateX(-50%); width:700px; height:700px; border-radius:50%; pointer-events:none;
  background:radial-gradient(circle,rgba(4,153,165,.08),transparent 60%); filter:blur(40px);
}
.ab-s4::after {
  content:''; position:absolute; top:-80px; right:-60px;
  width:360px; height:360px; border-radius:50%; pointer-events:none;
  background:radial-gradient(circle,rgba(45,101,162,.1),transparent 65%); filter:blur(28px);
}
.ab-pill-d {
  display:inline-flex; align-items:center; gap:7px; padding:5px 14px; border-radius:9999px;
  border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.05);
  font-size:.68rem; font-weight:400; letter-spacing:.13em; color:rgba(255,255,255,.7);
}
.ab-vcard {
  background:rgba(255,255,255,.04); backdrop-filter:blur(12px);
  border:1px solid rgba(255,255,255,.09); border-radius:24px;
  position:relative; overflow:hidden; padding:56px 64px;
}
.ab-vcard::before {
  content:''; position:absolute; top:0; left:0; right:0; height:1px;
  background:linear-gradient(90deg,transparent,rgba(4,153,165,.5) 30%,rgba(45,101,162,.5) 70%,transparent);
}
.ab-vquote-deco {
  position:absolute; top:-8px; left:28px;
  font-size:9rem; line-height:1; font-family:Georgia,serif;
  color:rgba(4,153,165,.08); pointer-events:none; user-select:none;
}
.ab-vtext {
  font-size:clamp(1rem,1.85vw,1.18rem); font-weight:500;
  line-height:2.1; color:rgba(255,255,255,.85);
  position:relative; z-index:1; text-align:center; margin:0;
}
.ab-vsource {
  margin-top:20px; text-align:center; font-size:.73rem;
  letter-spacing:.06em; color:rgba(255,255,255,.25); font-weight:400;
}
.ab-tag {
  padding:9px 22px; border-radius:9999px;
  border:1px solid rgba(4,153,165,.25); background:rgba(4,153,165,.07);
  font-size:.8rem; font-weight:600; color:rgba(165,243,252,.85);
  transition:background .25s,border-color .25s;
}
.ab-tag:hover { background:rgba(4,153,165,.14); border-color:rgba(4,153,165,.45); }

/* separator */
.ab-sep { height:1px; background:linear-gradient(90deg,transparent,rgba(8,145,178,.15),transparent); }

/* ════════════════════════════════
   RESPONSIVE — MOBILE ≤ 860px
   Desktop is completely untouched
════════════════════════════════ */
@media(max-width:860px){

  /* S1: stack photo top, text centered below */
  .ab-hero { height:auto; flex-direction:column; justify-content:flex-start; }
  .ab-ph-col {
    position:relative; width:100%; height:260px;
    top:auto; right:auto;
  }
  .ab-ph-col::after {
    background:linear-gradient(to bottom,rgba(6,10,20,.05) 20%,rgba(6,10,20,.88) 80%,#060A14 100%);
  }
  .ab-tx-col {
    max-width:100%; padding:36px 0 52px;
    align-items:center; text-align:center;
  }
  .ab-tx-col::before { display:none; }
  .ab-uline { margin-left:auto; margin-right:auto; }
  .ab-chip { margin:0 auto; }
  .ab-tx-col {
    padding:36px 24px 52px;
    align-items:center;
    text-align:center;
  }
  .ab-tx-col::after { display:none; }
  /* animate from below on mobile, not from right */
  .r-rt.on { animation:abUp .65s cubic-bezier(.22,1,.36,1) forwards; }
  /* center the underline */
  .ab-uline { margin-left:auto; margin-right:auto; }
  /* center chip */
  .ab-chip { margin:0 auto; }

  /* S2: single column, all centered */
  .ab-s2-grid { grid-template-columns:1fr !important; gap:36px !important; }
  .ab-focus-lbl { justify-content:center; }
  .ab-s2 p { text-align:center; }
  .ab-stats-row {
    justify-content:center !important;
    gap:0 !important;
  }
  .ab-stat-min { align-items:center; }
  /* re-space stats evenly */
  .ab-stat-min + .ab-stat-min {
    padding-left:24px !important; margin-left:24px !important;
  }

  /* S3: single column */
  .ab-ww-grid { grid-template-columns:1fr !important; }

  /* S4: tighten padding, hide deco quote, smaller text */
  .ab-s4 { padding:60px 0 72px; }
  .ab-vcard { padding:32px 22px; }
  .ab-vquote-deco { display:none; }
  .ab-vtext { font-size:clamp(.93rem,3.8vw,1.05rem); line-height:1.95; }
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

/* same container as Navbar: max-w-7xl + px-8 */
const W = { maxWidth:"1280px", margin:"0 auto", padding:"0 32px" };

export default function AboutUs() {
  useEffect(() => { injectCSS(); }, []);
  const [hr, hv] = useInView(0.04);
  const [s2, sv] = useInView(0.08);
  const [s3, tv] = useInView(0.06);
  const [s4, qv] = useInView(0.06);

  return (
    <div className="min-h-screen bg-[#060A14] text-white">

      {/* gradient veil so navbar blends into dark hero */}
      <div style={{
        position:"fixed", top:0, left:0, right:0, height:80, zIndex:49, pointerEvents:"none",
        background:"linear-gradient(to bottom,rgba(6,10,20,.88),rgba(6,10,20,.45) 60%,transparent)",
      }}/>
      <Navbar />

      <main style={{ position:"relative", zIndex:1 }}>

        {/* ══ S1 HERO ══ */}
        <div className="ab-hero" ref={hr}>

          {/* photo RIGHT — absolute positioned */}
          <div className="ab-ph-col">
            <img src={aboutImg} alt="Aileen Solutions" className={`r-fd ${hv?"on":""}`} />
          </div>

          {/* text LEFT — same container as Navbar: max-w-7xl mx-auto px-8 */}
          <div style={{
            position:"relative", zIndex:2,
            width:"100%", maxWidth:"1280px",
            margin:"0 auto", padding:"0 32px",
            display:"flex", alignItems:"center",
          }}>
            <div className="ab-tx-col">
              <p className={`ab-lbl r-up ${hv?"on":""}`} style={{ animationDelay:"80ms" }}>
                ที่ปรึกษาและผู้ให้บริการด้าน
              </p>
              <h1 className={`ab-h1 r-up ${hv?"on":""}`} style={{ animationDelay:"160ms" }}>
                Digital<br/>
                <span className="gc">Transformation</span><br/>
                <span style={{ fontSize:"clamp(1.5rem,2.6vw,2.2rem)", color:"rgba(255,255,255,.6)", fontWeight:700 }}>
                  ของประเทศไทย
                </span>
              </h1>
              <div className={`ab-uline ${hv?"on":""}`} />
              <p className={`ab-sub r-up ${hv?"on":""}`} style={{ animationDelay:"300ms" }}>
                บริษัท ไอลีน โซลูชั่น จำกัด · ก่อตั้ง 2561<br/>
                ยกระดับประสิทธิภาพองค์กรทั้งในระดับบริหาร<br/>
                และระดับปฏิบัติการ
              </p>
              <div className={`r-up ${hv?"on":""}`} style={{ animationDelay:"380ms" }}>
                <div className="ab-chip">
                  <span style={{ opacity:.7 }}>🏭</span>
                  อุตสาหกรรม · พลังงาน · Manufacturing
                </div>
              </div>
            </div>
          </div>{/* end container */}

        </div>

        {/* ══ S2 WHITE ══ */}
        <div className="ab-s2">
          <div style={W} ref={s2}>
            <div className="ab-s2-grid"
              style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>

              <div>
                <div className={`ab-focus-lbl r-up ${sv?"on":""}`}>
                  <div className="ab-focus-bar"/>
                  <span className="ab-focus-tag">OUR FOCUS</span>
                </div>
                <p className={`r-up ${sv?"on":""}`}
                  style={{ animationDelay:"60ms", margin:"0 0 12px",
                    fontSize:"clamp(1.1rem,1.8vw,1.28rem)", fontWeight:700,
                    color:"#0f172a", lineHeight:1.6 }}>
                  มุ่งเน้นการยกระดับประสิทธิภาพองค์กร<br/>
                  ทั้งในระดับบริหารและระดับปฏิบัติการ
                </p>
                <p className={`r-up ${sv?"on":""}`}
                  style={{ animationDelay:"120ms", margin:0, fontSize:"14px",
                    fontWeight:400, color:"#64748b", lineHeight:1.75 }}>
                  โดยเฉพาะในภาคอุตสาหกรรม พลังงาน<br/>
                  และสายการผลิต (Manufacturing &amp; Production Line)
                </p>
              </div>

              <div className={`r-up ${sv?"on":""} ab-stats-row`}
                style={{ animationDelay:"160ms", display:"flex", gap:0,
                  alignItems:"center", justifyContent:"flex-end" }}>
                {[
                  { v:"2561", l:"ปีที่ก่อตั้ง" },
                  { v:"7+",   l:"โซลูชั่นหลัก" },
                  { v:"10+",  l:"องค์กรที่ไว้วางใจ" },
                ].map((st,i) => (
                  <div key={st.l} className="ab-stat-min"
                    style={{ paddingLeft:i===0?0:28, marginLeft:i===0?0:28,
                      borderLeft:i===0?"none":"1px solid #e2e8f0" }}>
                    <span style={{ fontSize:"clamp(1.6rem,3vw,2.1rem)", fontWeight:800,
                      lineHeight:1, display:"block",
                      background:"linear-gradient(120deg,#0b639b 30%,#62e5da)",
                      WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                      {st.v}
                    </span>
                    <span style={{ fontSize:".72rem", color:"#94a3b8",
                      fontWeight:500, marginTop:5, display:"block", letterSpacing:".04em" }}>
                      {st.l}
                    </span>
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
              <span className={`ab-pill-l r-up ${tv?"on":""}`}>
                <span className="ab-dotb"/>OUR APPROACH
              </span>
              <h2 className={`r-up ${tv?"on":""}`}
                style={{ animationDelay:"80ms", marginTop:14,
                  fontSize:"clamp(1.6rem,3vw,2.1rem)", fontWeight:800,
                  color:"#0f172a", letterSpacing:"-.02em", lineHeight:1.2 }}>
                โซลูชั่นที่เชื่อมโยง<span className="gb">กระบวนการ ข้อมูล และเทคโนโลยี</span>
              </h2>
              <p className={`r-up ${tv?"on":""}`}
                style={{ animationDelay:"150ms", marginTop:10, fontSize:".88rem",
                  color:"#64748b", maxWidth:400, marginLeft:"auto", marginRight:"auto", lineHeight:1.7 }}>
                แนวคิดการออกแบบโซลูชั่นที่ช่วยให้องค์กรสามารถพัฒนาได้จริง
              </p>
            </div>
            <div className="ab-ww-grid"
              style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
              {[
                { ic:"🔗", t:"กลยุทธ์ → กระบวนการ → ดิจิทัล",
                  b:"เราออกแบบโซลูชั่นที่เชื่อมโยง กลยุทธ์องค์กร เข้ากับ กระบวนการทำงาน และ ระบบดิจิทัล เพื่อให้องค์กรดำเนินงานได้อย่างมีโครงสร้าง โปร่งใส ตรวจสอบได้ และพัฒนาต่อเนื่อง" },
                { ic:"⚙️", t:"Process ก่อน Technology",
                  b:"เราให้ความสำคัญกับความถูกต้องของกระบวนการก่อนการเลือกใช้เทคโนโลยี เพราะเทคโนโลยีที่ดีต้องตั้งอยู่บนโครงสร้างที่ชัดเจน มีลำดับขั้นตอน และเข้าใจบทบาทหน้าที่อย่างแท้จริง" },
                { ic:"🚀", t:"Digital Transformation ที่แท้จริง",
                  b:"สำหรับเรา Digital Transformation ไม่ใช่แค่ติดตั้งระบบใหม่ แต่คือการออกแบบโครงสร้างการทำงานที่สอดคล้องกันทั้งองค์กร ตั้งแต่ระดับนโยบาย กลยุทธ์ ไปจนถึงการปฏิบัติงานจริง" },
              ].map((c,i) => (
                <div key={i} className={`ab-wcard r-up ${tv?"on":""}`}
                  style={{ animationDelay:`${200+i*90}ms` }}>
                  <div className="ab-wic">{c.ic}</div>
                  <div style={{ fontSize:".95rem", fontWeight:800, color:"#0f172a",
                    lineHeight:1.4, marginBottom:10 }}>{c.t}</div>
                  <div style={{ fontSize:".84rem", color:"#64748b", lineHeight:1.85 }}>{c.b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ S4 DARK VISION ══ */}
        <div className="ab-s4" ref={s4}>
          <div style={{ ...W, display:"flex", flexDirection:"column", alignItems:"center" }}>

            <span className={`ab-pill-d r-up ${qv?"on":""}`}>
              <span className="ab-dotc"/>VISION
            </span>

            <div className={`ab-vcard r-sc ${qv?"on":""}`}
              style={{ animationDelay:"140ms", marginTop:32, maxWidth:760, width:"100%" }}>


              <p className="ab-vtext">
                เราเชื่อว่าความเชี่ยวชาญที่แท้จริง ไม่ได้อยู่ที่เครื่องมือ<br/>
                แต่อยู่ที่ความเข้าใจในระบบการทำงานขององค์กรทั้งภาพรวม<br/>
                และความสามารถในการทำให้สิ่งที่ซับซ้อน<br/>
                กลายเป็นระบบที่{" "}
                <span className="gc" style={{ fontStyle:"normal", fontWeight:700 }}>
                  ชัดเจน บริหารจัดการได้ และเติบโตได้อย่างยั่งยืน
                </span>
              </p>

              {/* mini divider above source */}
              <div style={{ width:36, height:1, margin:"22px auto 18px",
                background:"linear-gradient(to right,#0499a5,#2d65a2)", borderRadius:2 }}/>
              <div className="ab-vsource">
                — บริษัท ไอลีน โซลูชั่น จำกัด · ก่อตั้ง 2561
              </div>
            </div>

            {/* tags */}
            {/* <div className={`r-up ${qv?"on":""}`}
              style={{ animationDelay:"300ms", display:"flex", flexWrap:"wrap",
                justifyContent:"center", gap:10, marginTop:36 }}>
              {["มีโครงสร้าง","โปร่งใส","ตรวจสอบได้","พัฒนาต่อเนื่อง","ยั่งยืน"].map(t => (
                <span key={t} className="ab-tag">{t}</span>
              ))}
            </div> */}

          </div>
        </div>

      </main>
      <SectionContactFooter/>
    </div>
  );
}