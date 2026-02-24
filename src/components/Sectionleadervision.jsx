import { useEffect, useRef, useState } from "react";
import executivePhoto from "../assets/img/profile/executive.png"; // ← เปลี่ยน path ตามจริง

/* ── Intersection Observer ── */
function useInView(threshold = 0.1) {
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

const STYLE_ID = "lv7-css";
function injectCSS() {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');

    .lv7 {
      font-family: 'Sarabun', sans-serif;
      background: #ffffff;
      position: relative; overflow: hidden;
    }


    /* photo */
    .lv7-photo-wrap {
      position: relative; border-radius: 20px; overflow: hidden;
      box-shadow:
        0 0 0 1px rgba(148,163,184,0.14),
        0 20px 56px rgba(15,23,42,0.09),
        0 4px 12px rgba(15,23,42,0.05);
    }
    .lv7-photo-wrap img {
      display: block; width: 100%;
      height: 520px; object-fit: cover; object-position: top center;
    }
    .lv7-scrim {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(15,23,42,0.75) 0%, transparent 55%);
      pointer-events: none;
    }
    .lv7-corner-badge {
      position: absolute; top: 16px; right: 16px;
      display: inline-flex; align-items: center;
      padding: 6px 14px; border-radius: 9999px;
      background: rgba(255,255,255,0.92);
      border: 1px solid rgba(148,163,184,0.35);
      font-size: 0.65rem; font-weight: 700;
      letter-spacing: 0.14em; text-transform: uppercase;
      color: #1e40af; backdrop-filter: blur(6px);
    }
    .lv7-nameplate { position: absolute; bottom: 0; left: 0; right: 0; padding: 28px 24px 22px; }
    .lv7-name {
      font-size: 1.15rem; font-weight: 700;
      color: #fff; line-height: 1.25; letter-spacing: -0.01em;
    }
    .lv7-role {
      margin-top: 4px; font-size: 0.72rem; font-weight: 600;
      letter-spacing: 0.14em; text-transform: uppercase;
      background: linear-gradient(90deg,#3b82f6,#10b981);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .lv7-company {
      margin-top: 3px; font-size: 0.68rem;
      color: rgba(255,255,255,0.38); letter-spacing: 0.04em;
    }

    /* ── Quote card ── */
    .lv7-card {
      position: relative;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 2px 16px rgba(15,23,42,0.05);
    }
    .lv7-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, #3b82f6, #10b981);
    }

    /* Large decorative quotemark */
    .lv7-qopen {
      position: absolute;
      top: 12px; left: 20px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 7rem; line-height: 1;
      background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
      opacity: 0.13; user-select: none; pointer-events: none;
      font-weight: 900;
    }
    .lv7-qclose {
      position: absolute;
      bottom: -20px; right: 20px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 7rem; line-height: 1;
      background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
      opacity: 0.13; user-select: none; pointer-events: none;
      font-weight: 900;
    }

    /* card inner padding */
    .lv7-card-body { padding: 36px 36px 32px; position: relative; }

    /* Vision para 1 — primary, larger */
    .lv7-vision-p1 {
      font-size: 1.12rem; font-weight: 400; line-height: 1.95; color: #1e293b;
    }
    .lv7-vision-p1 .key {
      font-size: 1.2rem; font-weight: 700; color: #1e40af;
    }
    .lv7-vision-p1 .sub {
      font-size: 1rem; font-weight: 300; color: #475569;
    }

    /* divider */
    .lv7-divider {
      display: flex; align-items: center; gap: 10px; margin: 24px 0;
    }
    .lv7-divider-line { flex: 1; height: 1px; background: #e2e8f0; }
    .lv7-divider-dot  {
      width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
      background: linear-gradient(135deg, #3b82f6, #10b981);
    }

    /* Vision para 2 — secondary, smaller, lighter */
    .lv7-vision-p2 {
      font-size: 0.95rem; font-weight: 300; line-height: 2; color: #64748b;
    }
    .lv7-vision-p2 .key2 {
      font-size: 1rem; font-weight: 600;
      background: linear-gradient(90deg,#059669,#10b981);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }

    /* tags */
    .lv7-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
    .lv7-tag {
      display: inline-flex; align-items: center; gap: 5px;
      padding: 5px 14px; border-radius: 9999px;
      font-size: 0.73rem; font-weight: 600;
      box-shadow: 0 0 0 1px; transition: filter .2s; cursor: default;
    }
    .lv7-tag:hover { filter: brightness(0.93); }
    .lv7-tag-blue    { background:#eff6ff; color:#1d4ed8; box-shadow: 0 0 0 1px #bfdbfe; }
    .lv7-tag-emerald { background:#ecfdf5; color:#065f46; box-shadow: 0 0 0 1px #a7f3d0; }
    .lv7-tag-slate   { background:#f8fafc; color:#334155; box-shadow: 0 0 0 1px #cbd5e1; }

    /* animations */
    @keyframes lv7Up   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
    @keyframes lv7L    { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:none} }
    @keyframes lv7R    { from{opacity:0;transform:translateX(28px)}  to{opacity:1;transform:none} }
  `;
  document.head.appendChild(s);
}

export default function SectionLeaderVision() {
  const [sectionRef, inView] = useInView(0.1);
  useEffect(() => {
    injectCSS();
  }, []);

  const a = (kf, delay) => ({
    opacity: inView ? 1 : 0,
    animation: inView
      ? `${kf} .75s cubic-bezier(.22,1,.36,1) ${delay}ms both`
      : "none",
  });
  const fade = (delay) => ({
    opacity: inView ? 1 : 0,
    transition: `opacity .7s ease ${delay}ms`,
  });

  return (
    <section ref={sectionRef} className="lv7 py-24 px-6">
     

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ── Header — centered ── */}
        <div
          className="mb-12 flex flex-col items-center text-center"
          style={a("lv7Up", 0)}
        >
          <span className="inline-flex items-center gap-2 rounded-full text-slate-600 border border-slate-400 bg-white/5 px-4 py-2 text-xs tracking-widest backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-600" />
            VISION &amp; LEADERSHIP
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
            พันธมิตรที่คุณวางใจ —{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              ในทุกขั้นตอนของการเติบโต
            </span>
          </h2>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:items-start">
          {/* LEFT — Photo */}
          <div style={a("lv7L", 160)}>
            <div className="lv7-photo-wrap">
              <img src={executivePhoto} alt="ผู้บริหาร Aileen Solutions" />
              <div className="lv7-scrim" />
            
              <div className="lv7-nameplate">
                {/* ← ใส่ชื่อ-นามสกุล */}
                <div className="lv7-name">Pramote.T</div>
                {/* ← ใส่ตำแหน่ง */}
                <div className="lv7-role">Professional Services Director</div>
                {/* ← ลบได้ถ้าไม่ต้องการ */}
                <div className="lv7-company">of Aileen Solutions Co., Ltd.</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Vision card */}
          <div style={a("lv7R", 240)}>
            <div className="lv7-card">
              {/* decorative open quote */}
              <div className="lv7-qopen" aria-hidden="true">
                &ldquo;
              </div>
              {/* decorative close quote */}
              <div className="lv7-qclose" aria-hidden="true">
                &rdquo;
              </div>

              <div className="lv7-card-body">
                {/* Para 1 — bigger, bolder, primary message */}
                <p className="lv7-vision-p1">
                 <br></br> เรามุ่งมั่นเป็น <span className="key">พันธมิตรระยะยาว</span>{" "}
                  <span className="sub">ไม่ใช่เพียงผู้ขายโซลูชั่น</span>
                  <br />
                  <span className="sub">
                    ด้วยบริการตั้งแต่ให้คำปรึกษา ออกแบบ พัฒนา อบรม
                    และดูแลต่อเนื่อง เพื่อให้เทคโนโลยีถูกนำไปใช้งาน ได้จริง
                    และสร้างคุณค่าให้กับองค์กร
                  </span>
                </p>

                <div className="lv7-divider">
                  <div className="lv7-divider-line" />
                  <div className="lv7-divider-dot" />
                  <div className="lv7-divider-line" />
                </div>

                {/* Para 2 — smaller, lighter, secondary belief */}
                <p className="lv7-vision-p2">
                  เพราะเราเชื่อว่า{" "}
                  <span className="key2">Sustainable Growth</span>{" "}
                  เกิดขึ้นได้จากกระบวนการทำงานที่แข็งแกร่ง
                  และเทคโนโลยีที่ได้รับการออกแบบให้เหมาะสมกับบริบท ขององค์กรนั้น
                  ๆ อย่างแท้จริง <br></br>
                </p>
              </div>
            </div>

            {/* tags */}
            <div style={fade(480)}>
              <div className="lv7-tags">
                <span className="lv7-tag lv7-tag-blue">Consult</span>
                <span className="lv7-tag lv7-tag-blue">
                  Design &amp; Develop
                </span>
                <span className="lv7-tag lv7-tag-emerald">
                  Train &amp; Support
                </span>
                <span className="lv7-tag lv7-tag-slate">
                  Long-term Partnership
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
