import { useEffect, useRef, useState } from "react";
import executivePhoto1 from "../assets/img/profile/executive.png";
import executivePhoto2 from "../assets/img/profile/member5.png";

function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const STYLE_ID = "lv8-css";
function injectCSS() {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
   

    .lv8 {
    
      background: #ffffff;
      position: relative;
      overflow: hidden;
    }

    /* ── Header ── */
    .lv8-header {
      text-align: center;
      padding: 52px 24px 40px;
      position: relative; z-index: 1;
    }
    .lv8-eyebrow {
      display: inline-flex; align-items: center; gap: 10px;
      font-size: 0.65rem; font-weight: 600; letter-spacing: 0.22em;
      text-transform: uppercase; color: #94a3b8;
      margin-bottom: 14px;
    }
    .lv8-eyebrow-line {
      width: 28px; height: 1px;
      background: linear-gradient(90deg, #3b82f6, #10b981);
    }
    .lv8-title {
 
      font-size: clamp(1.5rem, 3vw, 2.1rem);
      font-weight: 900; color: #0f172a;
      line-height: 1.2; letter-spacing: -0.02em;
      margin: 0;
    }
    .lv8-title em {
      font-style: italic;
      background: linear-gradient(110deg, #2563eb 0%, #059669 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .lv8-subtitle {
      margin-top: 10px; font-size: 0.88rem; font-weight: 300;
      color: #64748b; max-width: 420px; margin-left: auto; margin-right: auto;
      line-height: 1.75;
    }

    /* ── Leader rows ── */
    .lv8-leaders {
      position: relative; z-index: 1;
      max-width: 1232px; margin: 0 auto;
      padding: 0 24px 64px;
    }

    /* each row */
    .lv8-row {
      display: grid;
      grid-template-columns: 320px 1fr;
      min-height: 380px;
      border-radius: 18px;
      overflow: hidden;
      box-shadow:
        0 0 0 1px rgba(15,23,42,0.06),
        0 12px 40px rgba(15,23,42,0.07),
        0 3px 10px rgba(15,23,42,0.04);
      margin-bottom: 32px;
    }
    .lv8-row-reverse {
      grid-template-columns: 1fr 320px;
    }
    @media (max-width: 768px) {
      .lv8-row { grid-template-columns: 1fr; min-height: auto; }
      .lv8-row-reverse .lv8-photo-panel { order: -1; }
    }

    /* ── Photo panel ── */
    .lv8-photo-panel {
      position: relative; overflow: hidden;
      background: #fff;
    }
    /* wrapper that holds only the image + its overlay */
    .lv8-photo-inner {
      position: absolute; top: 0; left: 0;
      width: 100%; height: 100%;
    }
    .lv8-row-reverse .lv8-photo-inner {
      left: auto; right: 0;
    }
    .lv8-photo-panel img {
      width: 100%; height: 100%;
      object-fit: cover; object-position: top center;
      display: block;
      transition: transform 6s ease;
    }
    .lv8-row:hover .lv8-photo-panel img {
      transform: scale(1.04);
    }
    .lv8-photo-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.05) 40%, transparent 100%);
    }
    .lv8-num {
      position: absolute; top: 18px; left: 20px;
   
      font-size: 3rem; font-weight: 900; line-height: 1;
      color: rgba(255,255,255,0.12);
      user-select: none; pointer-events: none;
      letter-spacing: -0.04em;
    }
    .lv8-row-reverse .lv8-num { left: auto; right: 20px; }
    .lv8-nameplate {
      position: absolute; bottom: 0; left: 0; right: 0;
      padding: 44px 20px 25px;
      background: linear-gradient(to top, rgba(15,23,42,0.88) 0%, transparent 100%);
    }
    .lv8-person-name {

      font-size: 1.1rem; font-weight: 700; color: #fff;
      letter-spacing: -0.01em; line-height: 1.2;
    }
    .lv8-person-role {
      margin-top: 3px; font-size: 0.6rem; font-weight: 600;
      letter-spacing: 0.14em; text-transform: uppercase;
      background: linear-gradient(90deg, #60a5fa, #34d399);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .lv8-person-co {
      margin-top: 2px; font-size: 0.6rem; color: rgba(255,255,255,0.35);
    }

    /* ── Content panel ── */
    .lv8-content-panel {
      background: #ffffff;
      display: flex; flex-direction: column; justify-content: center;
      padding: 60px 60px;
      position: relative; overflow: hidden;
    }
    .lv8-tags { display: flex; flex-wrap: wrap; gap: 6px; }
    .lv8-content-panel::before {
      content: '';
      position: absolute; bottom: -32px; right: -32px;
      width: 140px; height: 140px; border-radius: 50%;
      
      pointer-events: none;
    }
    .lv8-row-reverse .lv8-content-panel::before {
      right: auto; left: -32px;
    }

    .lv8-accent-bar {
      width: 3px; height: 36px; border-radius: 2px;
      background: linear-gradient(to bottom, #3b82f6, #10b981);
      margin-bottom: 16px;
      flex-shrink: 0;
    }
    .lv8-role-label {
      font-size: 0.62rem; font-weight: 700; letter-spacing: 0.2em;
      text-transform: uppercase; color: #94a3b8;
      margin-bottom: 12px;
    }
    .lv8-openquote {
    
      font-size: 3.5rem; line-height: 0.6;
      color: #e2e8f0;
      display: block; margin-bottom: 6px;
      user-select: none;
    }
    .lv8-quote {
      font-size: 1.5rem; font-weight: 700; font-style: italic;
      color: #1e293b; line-height: 1.6;
      margin: 0 0 16px;
    }
    .lv8-quote mark {
      background: none;
      background: linear-gradient(110deg, #2563eb, #059669);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      font-style: normal;
    }
    .lv8-body {
      font-size: 0.9rem; font-weight: 300; line-height: 1.85;
      color: #64748b; margin: 0 0 20px;
    }
    .lv8-body strong { font-weight: 600; color: #334155; }

    .lv8-tags { display: flex; flex-wrap: wrap; gap: 6px; }
    .lv8-tag {
      padding: 4px 12px; border-radius: 9999px;
      font-size: 0.67rem; font-weight: 600; letter-spacing: 0.03em;
      border: 1px solid; transition: all .2s; cursor: default;
    }
    .lv8-tag:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    .lv8-tag-b { background: #eff6ff; color: #1d4ed8; border-color: #bfdbfe; }
    .lv8-tag-g { background: #ecfdf5; color: #065f46; border-color: #a7f3d0; }
    .lv8-tag-s { background: #f8fafc; color: #475569; border-color: #cbd5e1; }
    .lv8-tag-v { background: #f5f3ff; color: #5b21b6; border-color: #ddd6fe; }
    .lv8-tag-a { background: #fffbeb; color: #92400e; border-color: #fde68a; }

    @keyframes lv8Up { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
    @keyframes lv8L  { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:none} }
    @keyframes lv8R  { from{opacity:0;transform:translateX(28px)}  to{opacity:1;transform:none} }
    @keyframes lv8Sc { from{opacity:0;transform:scale(.97)}        to{opacity:1;transform:none} }
  `;
  document.head.appendChild(s);
}

export default function SectionLeaderVision() {
  const [secRef, inView] = useInView(0.06);
  useEffect(() => {
    injectCSS();
  }, []);

  const anim = (kf, delay) => ({
    opacity: inView ? 1 : 0,
    animation: inView
      ? `${kf} .8s cubic-bezier(.22,1,.36,1) ${delay}ms both`
      : "none",
  });

  return (
    <section ref={secRef} className="lv8 pb-20">
      {/* Header */}
      <div className="lv8-header" style={anim("lv8Up", 0)}>
        <div className="lv8-eyebrow">
          <span className="lv8-eyebrow-line" />
          VISION &amp; LEADERSHIP
          <span className="lv8-eyebrow-line" />
        </div>
        {/* <h2 className="lv8-title">
          พันธมิตรที่คุณวางใจ
          <br />
          <em>ในทุกขั้นตอนของการเติบโต</em>
        </h2> */}
        <p className="lv8-subtitle">
          ผู้นำที่มีวิสัยทัศน์ พร้อมขับเคลื่อนองค์กรของคุณสู่อนาคต ด้วยความเชี่ยวชาญและความมุ่งมั่น
          
        </p>
      </div>

      {/* Leaders */}
      <div className="lv8-leaders">
        {/* Row 1: Photo LEFT, Content RIGHT */}
        <div className="lv8-row" style={anim("lv8Sc", 120)}>
          <div className="lv8-photo-panel">
            <div className="lv8-photo-inner">
              <img src={executivePhoto1} alt="Pramote T." />
              <div className="lv8-photo-overlay" />
            
              <div className="lv8-nameplate">
                <div className="lv8-person-name">Pramote.T</div>
                <div className="lv8-person-role">
                  Professional Services Director
                </div>
                <div className="lv8-person-co">Aileen Solutions Co., Ltd.</div>
              </div>
            </div>
          </div>

          <div className="lv8-content-panel" style={anim("lv8R", 280)}>
            <div className="lv8-accent-bar" />
            <div className="lv8-role-label">Professional Services</div>
            <span className="lv8-openquote">&ldquo;</span>
            <p className="lv8-quote">
              เรามุ่งมั่นเป็น<mark>พันธมิตรระยะยาว</mark>
              <br />
              ไม่ใช่เพียงผู้ขายโซลูชั่น
            </p>
            <p className="lv8-body">
              ด้วยบริการตั้งแต่ให้คำปรึกษา ออกแบบ พัฒนา อบรม และดูแลต่อเนื่อง
              เพื่อให้เทคโนโลยีถูกนำไปใช้งานได้จริง และสร้างคุณค่าให้กับองค์กร
              เพราะเราเชื่อว่า <strong>Sustainable Growth</strong>{" "}
              เกิดขึ้นได้จากกระบวนการ ทำงานที่แข็งแกร่ง
              และเทคโนโลยีที่ออกแบบให้เหมาะกับบริบทของแต่ละองค์กร
            </p>
            <div className="lv8-tags">
              <span className="lv8-tag lv8-tag-b">Consult</span>
              <span className="lv8-tag lv8-tag-b">Design &amp; Develop</span>
              <span className="lv8-tag lv8-tag-g">Train &amp; Support</span>
              <span className="lv8-tag lv8-tag-s">Long-term Partnership</span>
            </div>
          </div>
        </div>

        {/* Row 2: Content LEFT, Photo RIGHT */}
        <div className="lv8-row lv8-row-reverse" style={anim("lv8Sc", 200)}>
          <div className="lv8-content-panel" style={anim("lv8L", 360)}>
            <div className="lv8-accent-bar" />
            <div className="lv8-role-label">Sales &amp; Management</div>
            <span className="lv8-openquote">&ldquo;</span>
            <p className="lv8-quote">
              ความสำเร็จที่ยั่งยืน
              <br />
              <mark>เริ่มต้นจากการมีเป้าหมายเดียวกัน</mark>
            </p>
            <p className="lv8-body">
              เราเชื่อว่า ความสำเร็จที่ยั่งยืนเริ่มต้นจากการมีเป้าหมายเดียวกัน
              เรามุ่งมั่นในการสร้างวัฒนธรรมการทำงาน ที่มีสื่อสารชัดเจน เป็นระบบ
              และร่วมงานกันด้วยความเคารพในบทบาทหน้าที่ของทุกๆคน
              เมื่อทุกคนก้าวไปในทิศทางเดียวกัน องค์กรจะเติบโตได้อย่างมั่นคง
              และสามารถ<strong>ส่งมอบคุณค่าให้ลูกค้าได้อย่างแท้จริง</strong>
              เพราะการเติบโตที่ยั่งยืน คือการเติบโตไปพร้อมกันของทั้งองค์กร
            </p>
            <div className="lv8-tags">
              <span className="lv8-tag lv8-tag-b">Sales Strategy</span>
              <span className="lv8-tag lv8-tag-v">Business Development</span>
              <span className="lv8-tag lv8-tag-g">Customer Success</span>
              <span className="lv8-tag lv8-tag-a">Trusted Advisor</span>
            </div>
          </div>

          <div className="lv8-photo-panel" style={anim("lv8R", 440)}>
            <div className="lv8-photo-inner">
              <img src={executivePhoto2} alt="Surinna T." />
              <div className="lv8-photo-overlay" />
           
              <div className="lv8-nameplate">
                <div className="lv8-person-name">Surinna.T</div>
                <div className="lv8-person-role">
                  Managing Director 
                </div>
                <div className="lv8-person-co">Aileen Solutions Co., Ltd.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
