import React, { useEffect, useRef } from "react";
import stBg from "../assets/img/home/st-bg.png";

const STYLE_ID = "contact-dark-match-strength";

function injectCSS() {
  if (document.getElementById(STYLE_ID)) return;

  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
  .contact-dark {
    position: relative;
    overflow: hidden;
    padding: 140px 24px 100px;
    background: #0b1116;
  }

  /* glow follow mouse */
  .contact-dark__bg {
    background:
      radial-gradient(circle at var(--mx,50%) var(--my,50%),
        rgba(56,224,208,.15),
        transparent 45%);
    transition: background .2s ease;
  }

  /* glass card */
  .contact-dark-card {
    position: relative;
    border-radius: 18px;
    padding: 70px 60px;
    border: 1px solid rgba(255,255,255,.08);
    background: rgba(255,255,255,.04);
    backdrop-filter: blur(14px);
    transition: .4s;
  }

  .contact-dark-card:hover {
    transform: translateY(-4px);
    border-color: rgba(56,224,208,.3);
    box-shadow:
      0 20px 60px rgba(0,0,0,.45),
      0 0 40px rgba(56,224,208,.08);
  }

  .contact-dark-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 38px;
    border-radius: 999px;
    font-weight: 600;
    border: 1px solid rgba(56,224,208,.4);
    background: linear-gradient(
      135deg,
      rgba(56,224,208,.2),
      rgba(14,165,233,.2)
    );
    color: white;
    transition: .4s;
  }

  .contact-dark-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(56,224,208,.25);
    background: linear-gradient(
      135deg,
      rgba(56,224,208,.3),
      rgba(14,165,233,.3)
    );
  }

  .contact-footer {
    margin-top: 120px;
    padding-top: 60px;
    border-top: 1px solid rgba(255,255,255,.08);
  }

  .contact-footer h4 {
    color: white;
    font-weight: 600;
    margin-bottom: 14px;
  }

  .contact-footer a {
    color: rgba(255,255,255,.6);
    text-decoration: none;
    transition: .3s;
  }

  .contact-footer a:hover {
    color: #38e0d0;
  }

  .contact-copy {
    margin-top: 60px;
    text-align: center;
    font-size: .8rem;
    color: rgba(255,255,255,.5);
  }

  @media (max-width:768px){
    .contact-dark-card { padding: 40px 28px; }
  }
  `;
  document.head.appendChild(s);
}

export default function SectionContactDark() {
  const bgRef = useRef(null);
  const target = useRef({ x: 50, y: 50 });
  const current = useRef({ x: 50, y: 50 });

  useEffect(() => { injectCSS(); }, []);

  // mouse parallax like strengths
  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    target.current.x = ((e.clientX - r.left) / r.width) * 100;
    target.current.y = ((e.clientY - r.top) / r.height) * 100;
  };

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    let raf;

    const lerp = (a,b,t)=>a+(b-a)*t;

    const animate = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.08);
      current.current.y = lerp(current.current.y, target.current.y, 0.08);
      el.style.setProperty("--mx", current.current.x + "%");
      el.style.setProperty("--my", current.current.y + "%");
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="contact-dark" onMouseMove={handleMouseMove}>

      {/* background image same as strengths */}
      <img
        src={stBg}
        alt=""
        className="pointer-events-none absolute inset-0 -z-30 w-full h-full object-cover opacity-60"
      />

      {/* glow layer */}
      <div
        ref={bgRef}
        className="contact-dark__bg pointer-events-none absolute inset-0 -z-20"
      />

      <div style={{maxWidth:1100,margin:"0 auto",position:"relative",zIndex:1}}>

        {/* CTA CARD */}
        <div className="contact-dark-card">

          <div style={{textAlign:"center"}}>

            <span style={{
              display:"inline-flex",
              alignItems:"center",
              gap:8,
              padding:"8px 20px",
              borderRadius:999,
              border:"1px solid rgba(255,255,255,.1)",
              background:"rgba(255,255,255,.05)",
              color:"rgba(255,255,255,.7)",
              fontSize:".75rem",
              letterSpacing:".08em"
            }}>
              <span style={{
                width:8,
                height:8,
                borderRadius:"50%",
                background:"#38e0d0"
              }}/>
              CONTACT US
            </span>

            <h2 style={{
              marginTop:24,
              fontSize:"clamp(1.8rem,4vw,2.6rem)",
              fontWeight:800,
              color:"white"
            }}>
              Let’s Start Something
              <span style={{
                background:"linear-gradient(135deg,#38e0d0,#38bdf8)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent"
              }}> Great Together</span>
            </h2>

            <p style={{
              marginTop:18,
              maxWidth:600,
              marginLeft:"auto",
              marginRight:"auto",
              color:"rgba(255,255,255,.65)",
              lineHeight:1.7
            }}>
              ติดต่อทีมงานของเราเพื่อรับคำปรึกษา และค้นหาโซลูชันที่เหมาะสมกับองค์กรของคุณ
            </p>

            <div style={{marginTop:40}}>
              <a href="/contact-form">
                <button className="contact-dark-btn">
                  Go to Contact Form →
                </button>
              </a>
            </div>

          </div>

        </div>

        {/* FOOTER */}
        <footer className="contact-footer">

          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
            gap:40
          }}>

            <div>
              <h4>Aileen Solutions</h4>
              <p style={{color:"rgba(255,255,255,.6)",fontSize:".9rem"}}>
                Enterprise Digital Solutions<br/>
                Driving Business Innovation
              </p>
            </div>

            <div>
              <h4>Solutions</h4>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                <a href="#">Quality Management</a>
                <a href="#">Low-Code Platform</a>
                <a href="#">AI Solutions</a>
                <a href="#">ERP Workspace</a>
              </div>
            </div>

            <div>
              <h4>Contact</h4>
              <p style={{color:"rgba(255,255,255,.6)",fontSize:".9rem"}}>
                hello@aileen.co.th<br/>
                +66 (0) 2 123 4567
              </p>
            </div>

          </div>

          <div className="contact-copy">
            © {new Date().getFullYear()} Aileen Solutions. All rights reserved.
          </div>

        </footer>

      </div>
    </section>
  );
}
