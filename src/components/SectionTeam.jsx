import { useEffect, useRef, useState } from "react";
import member1 from "../assets/img/profile/member1.png";
import member2 from "../assets/img/profile/member2.png";
import member3 from "../assets/img/profile/member3.png";
import member4 from "../assets/img/profile/member4.png";
import member5 from "../assets/img/profile/member5.png";
import member6 from "../assets/img/profile/member6.png";
import member7 from "../assets/img/profile/member7.png";
import member8 from "../assets/img/profile/member8.png";
import executive from "../assets/img/profile/executive.png";

const TEAM = [
  { photo: member1, name: "Kangsadan.S",  role: "Solutions Consultant",            dept: "sales"   },
  { photo: member2, name: "Nattida.T",  role: "Technical Support",     dept: "support"   },
  { photo: member3, name: "ชื่อ-นามสกุล 3",  role: "Business Development",     dept: "sales"   },
  { photo: member4, name: "ชื่อ-นามสกุล 4",  role: "Account Executive",        dept: "sales"   },
  { photo: member5, name: "ชื่อ-นามสกุล 5",  role: "Digital Marketing",        dept: "sales"   },
  { photo: member6, name: "ชื่อ-นามสกุล 6",  role: "Software Engineer",        dept: "tech"    },
  { photo: executive, name: "ชื่อ-นามสกุล 7",  role: "Frontend Developer",       dept: "tech"    },
  { photo: member7, name: "ชื่อ-นามสกุล 8",  role: "Backend Developer",        dept: "tech"    },
  { photo: member8, name: "ชื่อ-นามสกุล 9",  role: "AI & Automation Engineer", dept: "tech"    },
  { photo: null, name: "ชื่อ-นามสกุล 10", role: "Systems Integration Lead", dept: "tech"    },
  { photo: null, name: "ชื่อ-นามสกุล 11", role: "UX/UI Designer",           dept: "tech"    },
  { photo: null, name: "ชื่อ-นามสกุล 12", role: "Project Manager",          dept: "support" },
  { photo: null, name: "ชื่อ-นามสกุล 13", role: "Business Analyst",         dept: "support" },
  { photo: null, name: "ชื่อ-นามสกุล 14", role: "QA Engineer",              dept: "support" },
  { photo: null, name: "ชื่อ-นามสกุล 15", role: "Customer Support Lead",    dept: "support" },
];

const TABS = [
  { key: "sales",   label: "Sales & Marketing",    chip: "SALES"   },
  { key: "tech",    label: "Technical & Developer", chip: "TECH"    },
  { key: "support", label: "Project & Support",     chip: "SUPPORT" },
];

function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const CSS_ID = "team9css";
function injectCSS() {
  if (document.getElementById(CSS_ID)) return;
  const s = document.createElement("style");
  s.id = CSS_ID;
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700;800&display=swap');

    .t9 {
      font-family:'Sarabun',sans-serif;
      background:#f8fafc;
      position:relative;
      overflow:hidden;
    }

    .t9-blob { position:absolute; border-radius:50%; filter:blur(60px); pointer-events:none; z-index:0; }
    .t9-blob-tl { top:-60px; left:-80px; width:320px; height:320px; background:rgba(167,243,208,.18); }
    .t9-blob-br { bottom:-60px; right:-80px; width:320px; height:320px; background:rgba(191,219,254,.20); }

    /* pill */
    .t9-pill { display:inline-flex; align-items:center; gap:8px; padding:7px 18px; border-radius:9999px; border:1px solid #cbd5e1; background:rgba(255,255,255,.7); font-size:.7rem; font-weight:600; letter-spacing:.18em; text-transform:uppercase; color:#475569; backdrop-filter:blur(8px); }
    .t9-dot  { width:7px; height:7px; border-radius:50%; background:#06b6d4; box-shadow:0 0 6px rgba(6,182,212,.6); }

    /* heading */
    .t9-h2 { font-size:clamp(1.7rem,3vw,2.1rem); font-weight:800; letter-spacing:-.03em; color:#0f172a; line-height:1.25; margin:14px 0 0; }
    .t9-grad { background:linear-gradient(90deg,#2563eb,#10b981); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }

    /* controls row */
    .t9-ctrl-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 28px;
    }

    /* tabs */
    .t9-tabs { display:inline-flex; gap:4px; padding:5px; background:#fff; border:1px solid #e2e8f0; border-radius:14px; box-shadow:0 1px 6px rgba(15,23,42,.05); }
    .t9-tab { display:inline-flex; align-items:center; gap:6px; padding:8px 16px; border-radius:10px; font-size:.78rem; font-weight:600; color:#64748b; border:none; background:none; cursor:pointer; transition:all .2s; white-space:nowrap; font-family:'Sarabun',sans-serif; }
    .t9-tab:hover:not(.on) { background:#f1f5f9; color:#1e293b; }
    .t9-tab.on { color:#fff; background:linear-gradient(135deg,#3b82f6,#10b981); box-shadow:0 3px 12px rgba(59,130,246,.28); }
    .t9-cnt { display:inline-flex; align-items:center; justify-content:center; min-width:20px; height:20px; padding:0 6px; border-radius:9999px; font-size:.62rem; font-weight:700; }

    /* VIEWPORT — constrained to section width, fade edges */
    .t9-viewport-wrap {
      position: relative;
      max-width: 1152px;
      margin: 28px auto 0;
      padding: 0 0 8px;
    }
    .t9-viewport-wrap::before,
    .t9-viewport-wrap::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 8px;
      width: 60px;
      z-index: 2;
      pointer-events: none;
    }
    .t9-viewport-wrap::before {
      left: 0;
      background: linear-gradient(to right, #f8fafc 0%, transparent 100%);
    }
    .t9-viewport-wrap::after {
      right: 0;
      background: linear-gradient(to left, #f8fafc 0%, transparent 100%);
    }

    .t9-track {
      overflow-x: auto;
      overflow-y: visible;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
      padding: 8px 0 24px;
      cursor: grab;
    }
    .t9-track.dragging { cursor: grabbing; user-select: none; }
    .t9-track::-webkit-scrollbar { display: none; }

    /* Inner flex row — always centred; overflows → scrollable */
    .t9-inner {
      display: inline-flex;
      gap: 18px;
      min-width: 100%;
      justify-content: center;
      padding: 0 60px;
      box-sizing: border-box;
      scroll-snap-type: x mandatory;
    }
    .t9-inner > .t9-card { scroll-snap-align: start; }

    /* card */
    .t9-card { flex: 0 0 200px; scroll-snap-align: start; cursor: default; }
    .t9-box { width:90%; height:250px; border-radius:16px; overflow:hidden; background:linear-gradient(160deg,#e2e8f0,#cdd5e0); position:relative; box-shadow:0 2px 10px rgba(15,23,42,.07); transition:transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s; display:flex; align-items:center; justify-content:center; }
    .t9-card:hover .t9-box { transform:translateY(-8px) scale(1.025); box-shadow:0 20px 44px rgba(59,130,246,.17),0 6px 16px rgba(15,23,42,.07); }
    .t9-wash { position:absolute; inset:0; background:linear-gradient(150deg,rgba(59,130,246,.12),rgba(16,185,129,.15)); opacity:0; transition:opacity .35s; pointer-events:none; z-index:1; }
    .t9-card:hover .t9-wash { opacity:1; }
    .t9-img { width:100%; height:100%; object-fit:cover; object-position:center center; display:block; position:absolute; inset:0; }
    .t9-avatar { width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-size:2.4rem; font-weight:700; color:#94a3b8; transition:color .3s; font-family:'Sarabun',sans-serif; }
    .t9-card:hover .t9-avatar { color:#64748b; }
    .t9-chip { position:absolute; bottom:10px; left:10px; z-index:2; padding:4px 11px; border-radius:9999px; font-size:.58rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; background:linear-gradient(135deg,#3b82f6,#10b981); color:#fff; box-shadow:0 2px 8px rgba(16,185,129,.28); transition:transform .3s,box-shadow .3s; }
    .t9-card:hover .t9-chip { transform:scale(1.07); box-shadow:0 4px 16px rgba(59,130,246,.4); }
    .t9-meta { padding:10px 2px 0; text-align:center; }
    .t9-name { font-size:.88rem; font-weight:700; color:#0f172a; line-height:1.3; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; transition:color .25s; font-family:'Sarabun',sans-serif; }
    .t9-card:hover .t9-name { background:linear-gradient(90deg,#2563eb,#10b981); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
    .t9-role { margin-top:3px; font-size:.7rem; color:#64748b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; font-family:'Sarabun',sans-serif; }

    /* bottom nav bar */
    .t9-bottom-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-top: 4px;
      padding-bottom: 48px;
    }
    .t9-btn { width:40px; height:40px; border-radius:50%; border:1px solid #e2e8f0; background:#fff; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 1px 6px rgba(15,23,42,.06); transition:all .22s; color:#64748b; flex-shrink:0; }
    .t9-btn:hover:not(:disabled) { border-color:rgba(59,130,246,.4); background:#eff6ff; color:#1d4ed8; box-shadow:0 4px 14px rgba(59,130,246,.14); }
    .t9-btn:disabled { opacity:.25; pointer-events:none; }
    .t9-btn svg { width:14px; height:14px; }

    /* scroll progress dots */
    .t9-dots { display:flex; gap:6px; align-items:center; }
    .t9-dot-item { width:6px; height:6px; border-radius:50%; background:#cbd5e1; transition:all .3s; }
    .t9-dot-item.on { width:20px; border-radius:9999px; background:linear-gradient(90deg,#3b82f6,#10b981); }

    /* animations */
    @keyframes t9Up { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }
    .t9-rv { opacity:0; }
    .t9-rv.on { animation:t9Up .65s cubic-bezier(.22,1,.36,1) forwards; }
    @keyframes t9Card { from{opacity:0;transform:translateY(14px) scale(.97)} to{opacity:1;transform:none} }
    .t9-card { opacity:0; }
    .t9-card.on { animation:t9Card .5s cubic-bezier(.22,1,.36,1) forwards; }
  `;
  document.head.appendChild(s);
}

const Icons = {
  sales:   <svg viewBox="0 0 20 20" fill="currentColor" style={{width:13,height:13}}><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>,
  tech:    <svg viewBox="0 0 20 20" fill="currentColor" style={{width:13,height:13}}><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>,
  support: <svg viewBox="0 0 20 20" fill="currentColor" style={{width:13,height:13}}><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/></svg>,
};

function Card({ member, chip, delay, inView }) {
  const init = member.name.split(" ").filter(Boolean).map(w => w[0]).join("").slice(0,2).toUpperCase();
  return (
    <div className={`t9-card ${inView?"on":""}`} style={{ animationDelay:`${delay}ms` }}>
      <div className="t9-box">
        {member.photo ? <img src={member.photo} alt={member.name} className="t9-img"/> : <div className="t9-avatar">{init}</div>}
        <div className="t9-wash"/>
        <span className="t9-chip">{chip}</span>
      </div>
      <div className="t9-meta">
        <div className="t9-name">{member.name}</div>
        <div className="t9-role">{member.role}</div>
      </div>
    </div>
  );
}

export default function SectionTeam() {
  const [secRef, inView] = useInView(0.08);
  const [tab, setTab]     = useState("sales");
  const trackRef          = useRef(null);
  const [canL, setCanL]   = useState(false);
  const [canR, setCanR]   = useState(false);
  const [activeDot, setActiveDot] = useState(0);

  // drag-to-scroll state
  const dragRef = useRef({ dragging: false, startX: 0, scrollLeft: 0 });

  useEffect(() => { injectCSS(); }, []);

  const filtered = TEAM.filter(m => m.dept === tab);
  const curTab   = TABS.find(t => t.key === tab);
  const dotCount = Math.ceil(filtered.length / 2);

  const syncNav = () => {
    const el = trackRef.current; if (!el) return;
    const sl = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanL(sl > 8);
    setCanR(sl < maxScroll - 8);
    setActiveDot(Math.round((sl / (maxScroll || 1)) * (dotCount - 1)));
  };

  const switchTab = (key) => {
    if (key === tab) return;
    setTab(key); setCanL(false); setActiveDot(0);
    requestAnimationFrame(() => {
      const el = trackRef.current; if (!el) return;
      el.scrollLeft = 0;
      setTimeout(() => setCanR(el.scrollWidth > el.clientWidth + 8), 60);
    });
  };

  const scroll = (dir) => trackRef.current?.scrollBy({ left: dir*(200+18)*2, behavior:"smooth" });

  useEffect(() => {
    const el = trackRef.current; if (!el) return;
    const check = () => {
      setCanR(el.scrollWidth > el.clientWidth + 8);
    };
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el); return () => ro.disconnect();
  }, [tab, inView]);

  // Mouse drag handlers
  const onMouseDown = (e) => {
    const el = trackRef.current; if (!el) return;
    dragRef.current = { dragging: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.classList.add("dragging");
  };
  const onMouseMove = (e) => {
    if (!dragRef.current.dragging) return;
    const el = trackRef.current; if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragRef.current.startX) * 1.2;
    el.scrollLeft = dragRef.current.scrollLeft - walk;
  };
  const onMouseUp = () => {
    dragRef.current.dragging = false;
    trackRef.current?.classList.remove("dragging");
  };

  return (
    <section ref={secRef} className="t9 py-24">
      <div className="t9-blob t9-blob-tl"/>
      <div className="t9-blob t9-blob-br"/>

      {/* header — centred */}
      <div style={{ position:"relative", zIndex:1, textAlign:"center", padding:"0 24px" }}>
        <span className={`t9-pill t9-rv ${inView?"on":""}`} style={{ animationDelay:"0ms" }}>
          <span className="t9-dot"/> OUR TEAM
        </span>
        <h2 className={`t9-h2 t9-rv ${inView?"on":""}`} style={{ animationDelay:"80ms" }}>
          ทีมงานของเรา — <span className="t9-grad">ผู้ขับเคลื่อนทุกโซลูชั่น</span>
        </h2>
      </div>

      {/* tabs — centred */}
      <div style={{ position:"relative", zIndex:1, maxWidth:1152, margin:"0 auto", padding:"0 24px" }}>
        <div className={`t9-ctrl-wrap t9-rv ${inView?"on":""}`} style={{ animationDelay:"160ms" }}>
          <div className="t9-tabs">
            {TABS.map(t => {
              const count = TEAM.filter(m => m.dept === t.key).length;
              const on    = tab === t.key;
              return (
                <button key={t.key} className={`t9-tab ${on?"on":""}`} onClick={() => switchTab(t.key)}>
                  {Icons[t.key]}
                  {t.label}
                  <span className="t9-cnt" style={{ background:on?"rgba(255,255,255,.25)":"#e2e8f0", color:on?"#fff":"#64748b" }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scrollable viewport — constrained + fade edges */}
      <div style={{ position:"relative", zIndex:1, maxWidth:1152, margin:"0 auto", padding:"0 24px" }}>
        <div className="t9-viewport-wrap">
          <div
            ref={trackRef}
            className="t9-track"
            onScroll={syncNav}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <div className="t9-inner">
              {filtered.map((m, i) => (
                <Card key={`${tab}-${i}`} member={m} chip={curTab.chip} delay={200+i*60} inView={inView}/>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom nav: prev dots next */}
        <div className="t9-bottom-nav">
          <button className="t9-btn" disabled={!canL} onClick={() => scroll(-1)} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div className="t9-dots">
            {Array.from({ length: dotCount }).map((_, i) => (
              <span key={i} className={`t9-dot-item ${i === activeDot ? "on" : ""}`}/>
            ))}
          </div>

          <button className="t9-btn" disabled={!canR} onClick={() => scroll(1)} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}