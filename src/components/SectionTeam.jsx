import { useEffect, useRef, useState } from "react";
import member1  from "../assets/img/profile/member1.png";
import member2  from "../assets/img/profile/member2.png";
import member3  from "../assets/img/profile/member3.png";
import member4  from "../assets/img/profile/member4.png";
import member5  from "../assets/img/profile/member5.png";
import member6  from "../assets/img/profile/member6.png";
import member7  from "../assets/img/profile/member7.png";
import member8  from "../assets/img/profile/member8.png";
import member9  from "../assets/img/profile/member9.png";
import member10 from "../assets/img/profile/member10.png";
import member11 from "../assets/img/profile/member11.png";
import member12 from "../assets/img/profile/member12.png";
import member13 from "../assets/img/profile/member13.png";
import member14 from "../assets/img/profile/member14.png";
import member15 from "../assets/img/profile/member15.png";
import member16 from "../assets/img/profile/member16.png";
import member17 from "../assets/img/profile/member17.png";
import member18 from "../assets/img/profile/member18.png";

const TEAM = [
  { photo: member5,  name: "Surinna.T",    role: "Managing Director",          dept: "sales"   },
  { photo: member12, name: "Peerapat.A",   role: "Sale Representative",        dept: "sales"   },
  { photo: member1,  name: "Kangsadan.S",  role: "Solutions Consultant",       dept: "sales"   },
  { photo: member14, name: "Pramote.T",    role: "Professional Services Director", dept: "tech" },
  { photo: member13, name: "Sittichai.S",  role: "Technical Lead",             dept: "tech"    },
  { photo: member9,  name: "Suphakorn.D",  role: "AI Engineer",                dept: "tech"    },
  { photo: member4,  name: "Ranuka.M",     role: "Software Developer",         dept: "tech"    },
  { photo: member10, name: "Phurich.J",    role: "Software Developer",         dept: "tech"    },
  { photo: member11, name: "Nithitthak.C", role: "Software Developer",         dept: "tech"    },
  { photo: member17, name: "Peerakit.R",   role: "Software Developer",         dept: "tech"    },
  { photo: member18, name: "Pongthorn.w",  role: "Software Developer",         dept: "tech"    },
  { photo: member16, name: "Chanawee.S",   role: "System Engineer",            dept: "tech"    },
  { photo: member8,  name: "Intira.N",     role: "UX/UI Developer",            dept: "tech"    },
  { photo: member6,  name: "Rungrat.K",    role: "Enterprise Project Lead",    dept: "support" },
  { photo: member3,  name: "Prapaporn.M",  role: "Business Analysis",          dept: "support" },
  { photo: member7,  name: "Chanakan.S",   role: "Business Analysis",          dept: "support" },
  { photo: member15, name: "Suwat.M",      role: "Technical Support",          dept: "support" },
  { photo: member2,  name: "Nattida.T",    role: "Technical Support",          dept: "support" },
];

const DEPT_CHIP = { sales: "Sales & Marketing", tech: "Technical Development", support: "Project & Support" };

const TABS = [
  { key: "all",     label: "ทั้งหมด",               chip: null },
  { key: "sales",   label: "Sales & Marketing",     chip: "Sales & Marketing" },
  { key: "tech",    label: "Technical & Developer", chip: "Technical Development" },
  { key: "support", label: "Project & Support",     chip: "Project & Support" },
];

const CARD_W = 178;

function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const CSS_ID = "team9css";
function injectCSS() {
  if (document.getElementById(CSS_ID)) return;
  const s = document.createElement("style");
  s.id = CSS_ID;
  s.textContent = `
    .t9 { background:#f8fafc; position:relative; overflow:hidden; }
    .t9-blob { position:absolute; border-radius:50%; filter:blur(60px); pointer-events:none; z-index:0; }
    .t9-blob-tl { top:-60px; left:-80px; width:320px; height:320px; background:rgba(167,243,208,.18); }
    .t9-blob-br { bottom:-60px; right:-80px; width:320px; height:320px; background:rgba(191,219,254,.20); }

    .t9-pill { display:inline-flex; align-items:center; gap:8px; padding:7px 18px; border-radius:9999px; border:1px solid #cbd5e1; background:rgba(255,255,255,.7); font-size:.7rem; font-weight:400; letter-spacing:.18em; text-transform:uppercase; color:#475569; backdrop-filter:blur(8px); }
    .t9-hdot { width:7px; height:7px; border-radius:50%; background:#06b6d4; box-shadow:0 0 6px rgba(6,182,212,.6); }
    .t9-h2   { font-size:clamp(1.4rem,4vw,2.1rem); font-weight:800; letter-spacing:-.03em; color:#0f172a; line-height:1.25; margin:14px 0 0; }
    .t9-grad { background:linear-gradient(90deg,#0499a5,#2d65a2); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }

    /* ── DESKTOP TABS ── */
    .t9-ctrl-wrap { display:flex; justify-content:center; align-items:center; margin-top:28px; padding:0 12px; }
    .t9-tabs { display:inline-flex; gap:4px; padding:5px; background:#fff; border:1px solid #e2e8f0; border-radius:14px; box-shadow:0 1px 6px rgba(15,23,42,.05); }
    .t9-tab  { display:inline-flex; align-items:center; gap:5px; padding:7px 12px; border-radius:10px; font-size:.72rem; font-weight:600; color:#64748b; border:none; background:none; cursor:pointer; transition:all .2s; white-space:nowrap; }
    .t9-tab:hover:not(.on) { background:#f1f5f9; color:#1e293b; }
    .t9-tab.on { color:#fff; background:linear-gradient(135deg,#3b82f6,#10b981); box-shadow:0 3px 12px rgba(59,130,246,.28); }
    .t9-cnt  { display:inline-flex; align-items:center; justify-content:center; min-width:18px; height:18px; padding:0 5px; border-radius:9999px; font-size:.6rem; font-weight:700; }

    /* ── MOBILE DROPDOWN ── */
    .t9-dropdown-wrap { display:none; justify-content:center; margin-top:20px; padding:0 16px; }
    .t9-dropdown { position:relative; width:100%; max-width:320px; }
    .t9-dropdown-btn {
      width:100%; display:flex; align-items:center; justify-content:space-between; gap:8px;
      padding:11px 16px; border-radius:12px; border:1px solid #e2e8f0;
      background:#fff; box-shadow:0 1px 6px rgba(15,23,42,.06);
      font-size:.85rem; font-weight:600; color:#1e293b; cursor:pointer;
      transition:border-color .2s, box-shadow .2s;
    }
    .t9-dropdown-btn:hover { border-color:rgba(59,130,246,.4); box-shadow:0 2px 10px rgba(59,130,246,.12); }
    .t9-dropdown-arr { font-size:.7rem; color:#64748b; transition:transform .25s; }
    .t9-dropdown-arr.op { transform:rotate(180deg); }
    .t9-dropdown-list {
      position:absolute; top:calc(100% + 6px); left:0; right:0;
      background:#fff; border-radius:12px; border:1px solid #e2e8f0;
      box-shadow:0 8px 32px rgba(15,23,42,.12); overflow:hidden;
      max-height:0; opacity:0; pointer-events:none;
      transition:max-height .3s cubic-bezier(.22,1,.36,1), opacity .2s;
      z-index:50;
    }
    .t9-dropdown-list.op { max-height:280px; opacity:1; pointer-events:auto; }
    .t9-dropdown-item {
      display:flex; align-items:center; justify-content:space-between;
      padding:11px 16px; font-size:.85rem; font-weight:500; color:#475569;
      cursor:pointer; transition:background .15s; border-bottom:1px solid #f1f5f9;
    }
    .t9-dropdown-item:last-child { border-bottom:none; }
    .t9-dropdown-item:hover { background:#f8fafc; color:#1e293b; }
    .t9-dropdown-item.act { background:linear-gradient(135deg,rgba(59,130,246,.08),rgba(16,185,129,.06)); color:#1d4ed8; font-weight:700; }
    .t9-dropdown-badge { display:inline-flex; align-items:center; justify-content:center; min-width:20px; height:20px; padding:0 6px; border-radius:9999px; background:#e2e8f0; color:#64748b; font-size:.62rem; font-weight:700; }
    .t9-dropdown-item.act .t9-dropdown-badge { background:rgba(59,130,246,.15); color:#1d4ed8; }

    /* ── MARQUEE (all tab) ── */
    .t9-marquee-wrap { position:relative; overflow:hidden; margin:28px 0 0; padding:8px 0 24px; }
    .t9-marquee-wrap::before,.t9-marquee-wrap::after { content:''; position:absolute; top:0; bottom:0; width:60px; z-index:2; pointer-events:none; }
    .t9-marquee-wrap::before { left:0;  background:linear-gradient(to right,#f8fafc,transparent); }
    .t9-marquee-wrap::after  { right:0; background:linear-gradient(to left,#f8fafc,transparent); }

    .t9-marquee-track { display:flex; width:max-content; animation:t9scroll 50s linear infinite; }
    /* pause only when a card inside is hovered — controlled via JS class */
    .t9-marquee-track.paused { animation-play-state:paused; }

    .t9-marquee-list { display:flex; flex-shrink:0; gap:14px; padding:0 7px; }
    @keyframes t9scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }

    /* ── FILTERED TABS: manual scroll ── */
    .t9-viewport-wrap { position:relative; overflow:hidden; margin:28px 0 0; }
    .t9-viewport-wrap::before,.t9-viewport-wrap::after { content:''; position:absolute; top:0; bottom:8px; width:60px; z-index:2; pointer-events:none; }
    .t9-viewport-wrap::before { left:0;  background:linear-gradient(to right,#f8fafc,transparent); }
    .t9-viewport-wrap::after  { right:0; background:linear-gradient(to left,#f8fafc,transparent); }
    .t9-track { overflow-x:scroll; overflow-y:visible; -webkit-overflow-scrolling:touch; scrollbar-width:none; padding:8px 0 24px; cursor:grab; }
    .t9-track.dragging { cursor:grabbing; user-select:none; }
    .t9-track::-webkit-scrollbar { display:none; }
    .t9-inner { display:flex; flex-wrap:nowrap; gap:14px; width:max-content; padding:0 60px; }

    /* ── CARD ── */
    .t9-card { flex:0 0 160px; cursor:default; }
    .t9-box  { width:100%; height:220px; border-radius:16px; overflow:hidden; background:linear-gradient(160deg,#e2e8f0,#cdd5e0); position:relative; box-shadow:0 2px 10px rgba(15,23,42,.07); transition:transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s; display:flex; align-items:center; justify-content:center; }
    .t9-card:hover .t9-box { transform:translateY(-6px) scale(1.02); box-shadow:0 16px 36px rgba(59,130,246,.17),0 4px 12px rgba(15,23,42,.07); }
    .t9-wash { position:absolute; inset:0; background:linear-gradient(150deg,rgba(59,130,246,.12),rgba(16,185,129,.15)); opacity:0; transition:opacity .35s; pointer-events:none; z-index:1; }
    .t9-card:hover .t9-wash { opacity:1; }
    .t9-img  { width:100%; height:100%; object-fit:cover; object-position:center top; display:block; position:absolute; inset:0; }
    .t9-avatar { width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-size:2rem; font-weight:700; color:#94a3b8; }
    .t9-meta { padding:8px 2px 0; text-align:center; }
    .t9-role { font-size:.75rem; font-weight:700; color:#1e293b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; transition:color .25s; line-height:1.4; }
    .t9-card:hover .t9-role { background:linear-gradient(90deg,#0499a5,#2d65a2); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }

    /* ── BOTTOM NAV ── */
    .t9-bottom-nav { display:flex; align-items:center; justify-content:center; gap:12px; margin-top:4px; padding-bottom:48px; min-height:60px; }
    .t9-btn { width:40px; height:40px; border-radius:50%; border:1px solid #e2e8f0; background:#fff; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 1px 6px rgba(15,23,42,.06); transition:all .22s; color:#64748b; }
    .t9-btn:hover:not(:disabled) { border-color:rgba(59,130,246,.4); background:#eff6ff; color:#1d4ed8; }
    .t9-btn:disabled { opacity:.25; pointer-events:none; }
    .t9-btn svg { width:14px; height:14px; }
    .t9-dots { display:flex; gap:6px; align-items:center; }
    .t9-dot-item { width:6px; height:6px; border-radius:50%; background:#cbd5e1; transition:all .3s; }
    .t9-dot-item.on { width:20px; border-radius:9999px; background:linear-gradient(90deg,#3b82f6,#10b981); }

    /* ── ANIMATIONS ── */
    @keyframes t9Up   { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }
    .t9-rv { opacity:0; }
    .t9-rv.on { animation:t9Up .65s cubic-bezier(.22,1,.36,1) forwards; }
    @keyframes t9Card { from{opacity:0;transform:translateY(14px) scale(.97)} to{opacity:1;transform:none} }
    .t9-card { opacity:0; }
    .t9-card.on { animation:t9Card .5s cubic-bezier(.22,1,.36,1) forwards; }

    /* ── RESPONSIVE ── */
    @media (max-width:639px) {
      /* show dropdown, hide desktop tabs */
      .t9-ctrl-wrap { display:none !important; }
      .t9-dropdown-wrap { display:flex; }

      /* filtered: grid instead of scroll */
      .t9-viewport-wrap { overflow:visible; margin:20px 0 0; }
      .t9-viewport-wrap::before,.t9-viewport-wrap::after { display:none; }
      .t9-track { overflow:visible; cursor:default; padding:4px 0 16px; }
      .t9-track.dragging { cursor:default; }
      .t9-inner { display:grid; grid-template-columns:repeat(2,1fr); gap:12px; width:100%; padding:0 16px; }
      .t9-card { flex:none; width:100%; }
      .t9-box  { height:200px; border-radius:14px; }
      .t9-role { font-size:.72rem; white-space:normal; line-height:1.3; }
      .t9-bottom-nav { display:none; }

      /* marquee: smaller cards */
      .t9-marquee-list { gap:10px; }
      .t9-marquee-list .t9-card { flex:0 0 130px; }
      .t9-marquee-list .t9-box  { height:170px; }
    }
  `;
  document.head.appendChild(s);
}

const Icons = {
  all:     <svg viewBox="0 0 20 20" fill="currentColor" style={{ width:13,height:13 }}><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>,
  sales:   <svg viewBox="0 0 20 20" fill="currentColor" style={{ width:13,height:13 }}><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>,
  tech:    <svg viewBox="0 0 20 20" fill="currentColor" style={{ width:13,height:13 }}><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>,
  support: <svg viewBox="0 0 20 20" fill="currentColor" style={{ width:13,height:13 }}><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/></svg>,
};

/* ── Card — pause fires ONLY when pointer is inside the photo box ── */
function Card({ member, delay, inView, onHoverStart, onHoverEnd }) {
  return (
    <div
      className={`t9-card ${inView ? "on" : ""}`}
      style={{ animationDelay:`${delay}ms` }}
    >
      <div
        className="t9-box"
        onPointerEnter={onHoverStart}
        onPointerLeave={onHoverEnd}
      >
        {member.photo
          ? <img src={member.photo} alt={member.role} className="t9-img" />
          : <div className="t9-avatar">{member.name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase()}</div>}
        <div className="t9-wash" />
      </div>
      <div className="t9-meta">
        <div className="t9-role">{member.role}</div>
      </div>
    </div>
  );
}

/* ── Mobile Dropdown ── */
function MobileDropdown({ tab, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = TABS.find(t => t.key === tab);

  useEffect(() => {
    if (!open) return;
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("pointerdown", h);
    return () => document.removeEventListener("pointerdown", h);
  }, [open]);

  return (
    <div className="t9-dropdown-wrap">
      <div className="t9-dropdown" ref={ref}>
        <button type="button" className="t9-dropdown-btn" onClick={() => setOpen(o => !o)}>
          <span style={{ display:"flex", alignItems:"center", gap:8 }}>
            {Icons[tab]}
            <span>{current.label}</span>
          </span>
          <span className={`t9-dropdown-arr ${open ? "op" : ""}`}>▾</span>
        </button>
        <div className={`t9-dropdown-list ${open ? "op" : ""}`}>
          {TABS.map(t => {
            const count = t.key === "all" ? TEAM.length : TEAM.filter(m => m.dept === t.key).length;
            return (
              <div key={t.key} className={`t9-dropdown-item ${t.key === tab ? "act" : ""}`}
                onClick={() => { onChange(t.key); setOpen(false); }}>
                <span style={{ display:"flex", alignItems:"center", gap:8 }}>
                  {Icons[t.key]}<span>{t.label}</span>
                </span>
                <span className="t9-dropdown-badge">{count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function SectionTeam() {
  const [secRef, inView] = useInView(0.08);
  const [tab, setTab]    = useState("all");
  const trackRef   = useRef(null);
  const marqueeRef = useRef(null); // ref to marquee track element
  const [canL, setCanL]         = useState(false);
  const [canR, setCanR]         = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const [isMobile, setIsMobile]   = useState(false);
  const dragRef = useRef({ dragging:false, startX:0, scrollLeft:0 });

  useEffect(() => { injectCSS(); }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const isAll    = tab === "all";
  const filtered = isAll ? TEAM : TEAM.filter(m => m.dept === tab);
  const curTab   = TABS.find(t => t.key === tab);
  const dotCount = Math.max(1, Math.ceil(filtered.length / 2));

  /* pause marquee only when hovering a card */
  const pauseMarquee  = () => { marqueeRef.current?.classList.add("paused"); };
  const resumeMarquee = () => { marqueeRef.current?.classList.remove("paused"); };

  const syncNav = () => {
    if (isAll || isMobile) return;
    const el = trackRef.current; if (!el) return;
    const sl = el.scrollLeft, maxScroll = el.scrollWidth - el.clientWidth;
    setCanL(sl > 8);
    setCanR(sl < maxScroll - 8);
    setActiveDot(Math.round((sl / (maxScroll || 1)) * (dotCount - 1)));
  };

  const switchTab = key => {
    if (key === tab) return;
    setTab(key); setCanL(false); setActiveDot(0);
    requestAnimationFrame(() => {
      const el = trackRef.current; if (!el) return;
      el.scrollLeft = 0;
      setTimeout(() => setCanR(el.scrollWidth > el.clientWidth + 8), 80);
    });
  };

  const scroll = dir => trackRef.current?.scrollBy({ left: dir * CARD_W * 2, behavior:"smooth" });

  useEffect(() => {
    if (isAll || isMobile) return;
    const el = trackRef.current; if (!el) return;
    const check = () => setCanR(el.scrollWidth > el.clientWidth + 8);
    check();
    const ro = new ResizeObserver(check); ro.observe(el);
    return () => ro.disconnect();
  }, [tab, inView, isAll, isMobile]);

  const onMouseDown = e => {
    if (isMobile) return;
    const el = trackRef.current; if (!el) return;
    dragRef.current = { dragging:true, startX:e.pageX - el.offsetLeft, scrollLeft:el.scrollLeft };
    el.classList.add("dragging");
  };
  const onMouseMove = e => {
    if (!dragRef.current.dragging || isMobile) return;
    e.preventDefault();
    const el = trackRef.current; if (!el) return;
    el.scrollLeft = dragRef.current.scrollLeft - (e.pageX - el.offsetLeft - dragRef.current.startX) * 1.2;
  };
  const onMouseUp = () => { dragRef.current.dragging = false; trackRef.current?.classList.remove("dragging"); };

  return (
    <section ref={secRef} className="t9 py-24">
      <div className="t9-blob t9-blob-tl" />
      <div className="t9-blob t9-blob-br" />

      {/* header */}
      <div style={{ position:"relative", zIndex:1, textAlign:"center", padding:"0 24px" }}>
        <span className={`t9-pill t9-rv ${inView ? "on" : ""}`} style={{ animationDelay:"0ms" }}>
          <span className="t9-hdot" /> OUR TEAM
        </span>
        <h2 className={`t9-h2 t9-rv ${inView ? "on" : ""}`} style={{ animationDelay:"80ms" }}>
          ทีมงานของเรา — <span className="t9-grad">ผู้ขับเคลื่อนทุกโซลูชั่น</span>
        </h2>
      </div>

      {/* ── Desktop tabs ── */}
      <div style={{ position:"relative", zIndex:1, maxWidth:1152, margin:"0 auto", padding:"0 12px" }}>
        <div className={`t9-ctrl-wrap t9-rv ${inView ? "on" : ""}`} style={{ animationDelay:"160ms" }}>
          <div className="t9-tabs">
            {TABS.map(t => {
              const count = t.key === "all" ? TEAM.length : TEAM.filter(m => m.dept === t.key).length;
              const on = tab === t.key;
              return (
                <button key={t.key} className={`t9-tab ${on ? "on" : ""}`} onClick={() => switchTab(t.key)}>
                  {Icons[t.key]}{t.label}
                  <span className="t9-cnt" style={{ background:on?"rgba(255,255,255,.25)":"#e2e8f0", color:on?"#fff":"#64748b" }}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <div className={`t9-rv ${inView ? "on" : ""}`} style={{ animationDelay:"160ms", position:"relative", zIndex:10 }}>
        <MobileDropdown tab={tab} onChange={switchTab} />
      </div>

      {/* ── ALL TAB: CSS marquee, pause only on card hover ── */}
      {isAll && (
        <div style={{ position:"relative", zIndex:1 }}>
          <div className="t9-marquee-wrap">
            <div ref={marqueeRef} className="t9-marquee-track">
              {[0, 1].map(copy => (
                <div key={copy} className="t9-marquee-list">
                  {TEAM.map((m, i) => (
                    <Card
                      key={`all-${copy}-${i}`}
                      member={m}
                      delay={0}
                      inView={inView}
                      onHoverStart={pauseMarquee}
                      onHoverEnd={resumeMarquee}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{ height:52 }} />
        </div>
      )}

      {/* ── FILTERED TABS ── */}
      {!isAll && (
        <div style={{ position:"relative", zIndex:1, maxWidth:1152, margin:"0 auto" }}>
          <div className="t9-viewport-wrap">
            <div ref={trackRef} className="t9-track"
              onScroll={syncNav}
              onMouseDown={onMouseDown} onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}    onMouseLeave={onMouseUp}>
              <div className="t9-inner">
                {filtered.map((m, i) => (
                  <Card
                    key={`${tab}-${i}`}
                    member={m}
                    delay={200 + i * 60}
                    inView={inView}
                    onHoverStart={() => {}} // no marquee to pause
                    onHoverEnd={() => {}}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="t9-bottom-nav">
            <button className="t9-btn" disabled={!canL} onClick={() => scroll(-1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div className="t9-dots">
              {Array.from({ length: dotCount }).map((_, i) => (
                <span key={i} className={`t9-dot-item ${i === activeDot ? "on" : ""}`} />
              ))}
            </div>
            <button className="t9-btn" disabled={!canR} onClick={() => scroll(1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}