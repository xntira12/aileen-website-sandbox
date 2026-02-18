import React, { useEffect, useRef, useState } from "react";
import stBg from "../assets/img/home/st-bg.png";
import logo from "../assets/img/logo/aileen-logo.png";

const STYLE_ID = "ct5-css";
function injectCSS() {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
  .ct5-card {
    border-radius: 24px;
    padding: 64px 48px;
    border: 1px solid rgba(255,255,255,.1);
    background: rgba(255,255,255,.03);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    position: relative;
    overflow: hidden;
    transition: border-color .4s, box-shadow .4s;
  }
  .ct5-card::before {
    content: '';
    position: absolute; inset: 0; border-radius: 24px;
    background: linear-gradient(135deg, rgba(56,224,208,.04), rgba(14,165,233,.02), transparent 60%);
    pointer-events: none;
  }
  .ct5-card:hover {
    border-color: rgba(56,224,208,.2);
    box-shadow: 0 0 60px rgba(56,224,208,.06);
  }

  .ct5-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent 5%, rgba(56,224,208,.15) 30%, rgba(14,165,233,.12) 70%, transparent 95%);
  }

  .ct5-link {
    color: rgba(255,255,255,.5);
    text-decoration: none;
    font-size: .84rem;
    transition: color .25s;
    display: block;
    padding: 3px 0;
  }
  .ct5-link:hover { color: #38e0d0; }

  .ct5-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,.5);
    font-size: .84rem;
    text-decoration: none;
    transition: color .25s;
  }
  .ct5-chip:hover { color: #38e0d0; }

  .ct5-map-wrap {
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.08);
    position: relative;
    cursor: pointer;
    transition: border-color .3s, box-shadow .3s;
  }
  .ct5-map-wrap:hover {
    border-color: rgba(56,224,208,.2);
    box-shadow: 0 4px 20px rgba(56,224,208,.08);
  }
  .ct5-map-wrap iframe {
    display: block;
    width: 100%;
    height: 140px;
    pointer-events: none;
    filter: grayscale(.3) brightness(.85);
    transition: filter .3s;
  }
  .ct5-map-wrap:hover iframe { filter: grayscale(0) brightness(1); }

  .ct5-map-overlay {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    background: rgba(0,0,0,.2);
    opacity: 0;
    transition: opacity .3s;
    border-radius: 12px;
  }
  .ct5-map-wrap:hover .ct5-map-overlay { opacity: 1; }

  .ct5-map-btn {
    padding: 6px 16px;
    border-radius: 999px;
    background: rgba(56,224,208,.15);
    border: 1px solid rgba(56,224,208,.3);
    color: #38e0d0;
    font-size: .75rem;
    font-weight: 600;
    backdrop-filter: blur(8px);
  }

  @keyframes ct5Up { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:none; } }
  .ct5-rv { opacity:0 }
  .ct5-rv.on { animation: ct5Up .65s cubic-bezier(.22,1,.36,1) forwards; }

  /* ✅ helper class for footer columns */
  .ct5-colTitle{
    color: rgba(255,255,255,.3);
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: .08em;
    margin-bottom: 14px;
    text-transform: uppercase;
  }

  @media(max-width:768px) {
    .ct5-card { padding: 40px 24px; }
    .ct5-fg { grid-template-columns: 1fr 1fr !important; }

    /* ✅ CENTER FOOTER ON MOBILE (≤768px) */
    .ct5-fg{
      text-align: center;
      justify-items: center;
    }
    .ct5-logoRow{
      justify-content: center !important;
    }
    .ct5-socialRow{
      justify-content: center !important;
    }
    .ct5-solCol a{
      text-align: center;
    }
    .ct5-contactCol .ct5-chip{
      justify-content: center;
    }
    .ct5-mapCol{
      width: 100%;
      max-width: 420px;
    }
    .ct5-mapCol .ct5-map-wrap{
      margin-left: auto;
      margin-right: auto;
    }
    .ct5-mapCol .ct5-chip{
      justify-content: center;
    }
  }

  @media(max-width:500px) {
    .ct5-fg { grid-template-columns: 1fr !important; }
  }
  `;
  document.head.appendChild(s);
}

const GMAP_URL =
  "https://www.google.com/maps/place/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3+%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%88%E0%B8%A3%E0%B8%A3%E0%B8%A2%E0%B9%8C/@13.6730174,100.5023752,17z/data=!3m1!4b1!4m6!3m5!1s0x30e2a213551fedc5:0x5be1f077764e696f!8m2!3d13.6730122!4d100.5072461!16s%2Fg%2F1hm44gy3t?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D";

const GMAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5233680716533!2d100.5046713!3d13.6730122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a213551fedc5%3A0x5be1f077764e696f!2z4Liq4LiE4Liy4Lij4Li14Lii4Liy4Lih4LiB4Lix4LiZIOC5gOC4o-C4suC4o-C5jA!5e0!3m2!1sth!2sth!4v1730000000000";

export default function SectionContactDark() {
  const bgRef = useRef(null);
  const secRef = useRef(null);
  const target = useRef({ x: 50, y: 50 });
  const current = useRef({ x: 50, y: 50 });
  const [inView, setInView] = useState(false);

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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const s = 0.35;
    target.current.x = 50 + (((e.clientX - r.left) / r.width) * 100 - 50) * s;
    target.current.y = 50 + (((e.clientY - r.top) / r.height) * 100 - 50) * s;
  };

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.08);
      current.current.y = lerp(current.current.y, target.current.y, 0.08);
      el.style.setProperty("--mx", current.current.x + "%");
      el.style.setProperty("--my", current.current.y + "%");
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const rv = (delay) => ({
    className: `ct5-rv ${inView ? "on" : ""}`,
    style: { animationDelay: `${delay}ms` },
  });

  return (
    <section
      ref={secRef}
      className="relative isolate overflow-hidden strength-dark"
      style={{ padding: "100px 24px 0" }}
      onMouseMove={handleMouseMove}
    >
      <img
        src={stBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover opacity-60"
      />
      <div
        ref={bgRef}
        className="strength-dark__bg pointer-events-none absolute inset-0 -z-20"
      />

      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ═══ CTA CARD ═══ */}
        <div {...rv(100)}>
          <div className="ct5-card">
            <div style={{ textAlign: "center" }}>
              <span
                {...rv(180)}
                style={{
                  ...rv(180).style,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,.12)",
                  background: "rgba(255,255,255,.05)",
                  color: "rgba(255,255,255,.65)",
                  fontSize: ".73rem",
                  letterSpacing: ".08em",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#38e0d0",
                  }}
                />
                CONTACT US
              </span>

              <h2
                {...rv(300)}
                style={{
                  ...rv(300).style,
                  marginTop: 22,
                  fontSize: "clamp(1.7rem,3.5vw,2.4rem)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.25,
                }}
              >
                Let's Start Something
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg,#38e0d0,#38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Great Together
                </span>
              </h2>

              <p
                {...rv(420)}
                style={{
                  ...rv(420).style,
                  marginTop: 14,
                  maxWidth: 480,
                  marginLeft: "auto",
                  marginRight: "auto",
                  color: "rgba(255,255,255,.5)",
                  lineHeight: 1.7,
                  fontSize: ".88rem",
                }}
              >
                ติดต่อทีมงานของเราเพื่อรับคำปรึกษา
                และค้นหาโซลูชันที่เหมาะสมกับองค์กรของคุณ
              </p>

              <div {...rv(540)} style={{ ...rv(540).style, marginTop: 32 }}>
                <a
                  href="/contact-form"
                  className="btn-fancy group relative inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/15"
                >
                  <span className="relative z-10">Go to Contact Form</span>
                  <svg
                    className="w-3.5 text-white relative z-10"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ DIVIDER ═══ */}
        <div style={{ padding: "0 40px", marginTop: 72 }}>
          <div className="ct5-divider" />
        </div>

        {/* ═══ FOOTER ═══ */}
        <footer style={{ padding: "48px 0 40px" }}>
          <div
            {...rv(700)}
            className={`ct5-fg ${rv(700).className}`}
            style={{
              ...rv(700).style,
              display: "grid",
              gridTemplateColumns: "1.3fr 1fr 1fr 1.2fr",
              gap: 40,
              alignItems: "start",
            }}
          >
            {/* Col 1: Logo */}
            <div>
              <div
                className="ct5-logoRow"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <img
                  src={logo}
                  alt="Aileen"
                  style={{ height: 28, width: "auto", opacity: 0.9 }}
                />
                <span
                  style={{
                    color: "rgba(255,255,255,.8)",
                    fontWeight: 700,
                    fontSize: ".82rem",
                    letterSpacing: ".04em",
                  }}
                >
                  AILEEN SOLUTIONS
                </span>
              </div>

              <p
                style={{
                  color: "rgba(255,255,255,.35)",
                  fontSize: ".8rem",
                  lineHeight: 1.65,
                }}
              >
                Enterprise Digital Solutions
                <br />
                Driving Business Innovation
              </p>

              {/* Social row */}
              <div
                className="ct5-socialRow"
                style={{ display: "flex", gap: 12, marginTop: 16 }}
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61565288523413"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,.08)",
                    background: "rgba(255,255,255,.03)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,.4)",
                    fontSize: ".85rem",
                    textDecoration: "none",
                    transition: "all .25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(56,224,208,.25)";
                    e.currentTarget.style.color = "#38e0d0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,.4)";
                  }}
                >
                  f
                </a>
                <a
                  href="mailto:info@aileensolutions.com"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,.08)",
                    background: "rgba(255,255,255,.03)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,.4)",
                    fontSize: ".75rem",
                    textDecoration: "none",
                    transition: "all .25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(56,224,208,.25)";
                    e.currentTarget.style.color = "#38e0d0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,.4)";
                  }}
                >
                  ✉
                </a>
              </div>
            </div>

            {/* Col 2: Solutions */}
            <div className="ct5-solCol">
              <div className="ct5-colTitle">Solutions</div>
              <a href="#" className="ct5-link">Quality Management Platform</a>
              <a href="#" className="ct5-link">Low-Code Business Orchestrator</a>
              <a href="#" className="ct5-link">Process Management Platform</a>
              <a href="#" className="ct5-link">Robotic Process Automation</a>
              <a href="#" className="ct5-link">Domain-Specific Generative AI</a>
              <a href="#" className="ct5-link">Supply Chain Resilience</a>
              <a href="#" className="ct5-link">ERP Workspace</a>
            </div>

            {/* Col 3: Contact */}
            <div className="ct5-contactCol">
              <div className="ct5-colTitle">Contact</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="mailto:hello@aileen.co.th" className="ct5-chip">
                  <span style={{ color: "rgba(255,255,255,.35)" }}>✉</span>
                  <span>info@aileensolutions.com</span>
                </a>
                <a href="tel:+6621234567" className="ct5-chip">
                  <span style={{ color: "rgba(255,255,255,.35)" }}>☎</span>
                  <span>06-4447-8955</span>
                </a>
              </div>
            </div>

            {/* Col 4: Map */}
            <div className="ct5-mapCol">
              <div className="ct5-colTitle">Location</div>
              <a
                href={GMAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="ct5-map-wrap">
                  <iframe
                    src={GMAP_EMBED}
                    title="Aileen Solutions Location"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                  <div className="ct5-map-overlay">
                    <span className="ct5-map-btn">Open in Google Maps ↗</span>
                  </div>
                </div>
              </a>
              <a
                href={GMAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ct5-chip"
                style={{ marginTop: 8, fontSize: ".78rem" }}
              >
                <span style={{ color: "rgba(255,255,255,.35)" }}>📍</span>
                <span>Bangkok, Thailand</span>
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div style={{ padding: "0 40px", marginTop: 40 }}>
            <div className="ct5-divider" />
          </div>
          <div
            style={{
              marginTop: 20,
              textAlign: "center",
              fontSize: ".75rem",
              color: "rgba(255,255,255,.25)",
            }}
          >
            © {new Date().getFullYear()} Aileen Solutions. All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  );
}
