import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import homeVideo from "../assets/img/home/main-bg.mp4";

const CSS_ID = "cs-css";
function injectCSS() {
  if (document.getElementById(CSS_ID)) return;
  const s = document.createElement("style"); s.id = CSS_ID;
  s.textContent = `
@keyframes csFd  { from{opacity:0}                      to{opacity:1} }
@keyframes csUp  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
@keyframes csPls { 0%,100%{transform:scale(1);opacity:.7} 50%{transform:scale(1.12);opacity:1} }
@keyframes csRot { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
@keyframes csDsh { to{stroke-dashoffset:0} }

.cs-wrap {
  position:relative; min-height:100vh;
  display:flex; flex-direction:column;
  overflow:hidden;
}

/* background photo */
.cs-bg {
  position:absolute; inset:0; z-index:0;
}
.cs-bg img {
  width:100%; height:100%;
  object-fit:cover; object-position:center top;
  display:block;
}
/* dark overlay — heavier than hero so text pops */
.cs-bg::after {
  content:''; position:absolute; inset:0;
  background:linear-gradient(
    135deg,
    rgba(6,10,20,.82) 0%,
    rgba(6,10,20,.75) 40%,
    rgba(6,10,20,.88) 100%
  );
}

/* content layer */
.cs-body {
  position:relative; z-index:2;
  flex:1; display:flex; align-items:center; justify-content:center;
  padding:80px 24px 60px;
}

.cs-card {
  text-align:center;
  max-width:560px; width:100%;
  animation:csFd .9s ease forwards;
}

/* animated ring icon */
.cs-icon-wrap {
  position:relative; width:96px; height:96px;
  margin:0 auto 32px; display:flex; align-items:center; justify-content:center;
}
.cs-ring {
  position:absolute; inset:0;
  animation:csRot 3s linear infinite;
}
.cs-ring circle {
  fill:none; stroke:url(#csGrad); stroke-width:2.5;
  stroke-linecap:round;
  stroke-dasharray:220;
  stroke-dashoffset:160;
}
.cs-icon-inner {
  width:68px; height:68px; border-radius:50%;
  background:rgba(34,211,238,.1);
  border:1px solid rgba(34,211,238,.25);
  display:flex; align-items:center; justify-content:center;
  font-size:1.8rem;
  animation:csPls 2.8s ease-in-out infinite;
}

/* pill */
.cs-pill {
  display:inline-flex; align-items:center; gap:7px;
  padding:5px 14px; border-radius:9999px;
  border:1px solid rgba(255,255,255,.14);
  background:rgba(255,255,255,.06);
  font-size:.68rem; font-weight:700; letter-spacing:.13em;
  color:rgba(255,255,255,.7);
  margin-bottom:20px;
  animation:csUp .6s cubic-bezier(.22,1,.36,1) .1s both;
}
.cs-dot {
  width:6px; height:6px; border-radius:50%; background:#22d3ee;
  box-shadow:0 0 7px rgba(34,211,238,.9); flex-shrink:0;
}

/* heading */
.cs-h1 {
  font-size:clamp(1.8rem,4vw,2.6rem);
  font-weight:800; letter-spacing:-.025em;
  color:#fff; line-height:1.15; margin:0 0 12px;
  animation:csUp .65s cubic-bezier(.22,1,.36,1) .2s both;
}

/* sub */
.cs-sub {
  font-size:clamp(.88rem,1.3vw,.98rem);
  color:rgba(255,255,255,.52); line-height:1.75;
  margin:0 0 36px;
  animation:csUp .65s cubic-bezier(.22,1,.36,1) .3s both;
}

/* status row */
.cs-status {
  display:flex; align-items:center; justify-content:center; gap:10px;
  margin-bottom:40px;
  animation:csUp .65s cubic-bezier(.22,1,.36,1) .38s both;
}
.cs-status-dot {
  width:8px; height:8px; border-radius:50%; background:#f59e0b;
  box-shadow:0 0 8px rgba(245,158,11,.8);
  animation:csPls 1.8s ease-in-out infinite;
}
.cs-status-txt {
  font-size:.78rem; font-weight:600; color:rgba(255,255,255,.55);
  letter-spacing:.04em;
}

/* progress bar */
.cs-prog-wrap {
  background:rgba(255,255,255,.08); border-radius:9999px;
  height:4px; overflow:hidden; margin-bottom:40px;
  animation:csUp .65s cubic-bezier(.22,1,.36,1) .44s both;
}
.cs-prog-bar {
  height:100%; width:38%; border-radius:9999px;
  background:linear-gradient(to right,#22d3ee,#34d399);
  position:relative;
}
.cs-prog-bar::after {
  content:''; position:absolute; right:0; top:50%; transform:translateY(-50%);
  width:8px; height:8px; border-radius:50%;
  background:#34d399; box-shadow:0 0 8px rgba(52,211,153,.9);
}

/* back button */
.cs-btn {
  display:inline-flex; align-items:center; gap:10px;
  padding:13px 28px; border-radius:12px; cursor:pointer;
  background:linear-gradient(135deg,rgba(34,211,238,.15),rgba(52,211,153,.1));
  border:1px solid rgba(34,211,238,.3);
  color:#fff; font-size:.9rem; font-weight:700;
  text-decoration:none; transition:background .25s, border-color .25s, transform .2s;
  animation:csUp .65s cubic-bezier(.22,1,.36,1) .52s both;
}
.cs-btn:hover {
  background:linear-gradient(135deg,rgba(34,211,238,.22),rgba(52,211,153,.16));
  border-color:rgba(34,211,238,.5);
  transform:translateY(-2px);
}
.cs-btn svg { transition:transform .2s; }
.cs-btn:hover svg { transform:translateX(-3px); }

/* decorative grid lines */
.cs-grid {
  position:absolute; inset:0; z-index:1; pointer-events:none; overflow:hidden;
}
.cs-grid::before, .cs-grid::after {
  content:''; position:absolute;
  border-radius:50%;
  border:1px solid rgba(34,211,238,.06);
}
.cs-grid::before { width:700px; height:700px; top:50%; left:50%; transform:translate(-50%,-50%); }
.cs-grid::after  { width:440px; height:440px; top:50%; left:50%; transform:translate(-50%,-50%); }
`;
  document.head.appendChild(s);
}

export default function ComingSoon() {
  useEffect(() => { injectCSS(); }, []);
  const navigate = useNavigate();
    const videoRef = useRef(null);

  return (
    <div className="cs-wrap">

      {/* navbar gradient veil */}
      <div style={{
        position:"fixed", top:0, left:0, right:0, height:80, zIndex:49, pointerEvents:"none",
        background:"linear-gradient(to bottom,rgba(6,10,20,.88),rgba(6,10,20,.4) 60%,transparent)",
      }}/>
      <Navbar />

      {/* background photo */}
      <div className="cs-bg">
         <video ref={videoRef} autoPlay muted loop playsInline preload="auto"
                 className="absolute inset-0 h-full w-full object-cover">
                 <source src={homeVideo} type="video/mp4" />
               </video>
      </div>

      {/* decorative circles */}
      <div className="cs-grid" />

      {/* content */}
      <div className="cs-body">
        <div className="cs-card">

          {/* animated spinner icon */}
          <div className="cs-icon-wrap">
            <svg className="cs-ring" viewBox="0 0 96 96">
              <defs>
                <linearGradient id="csGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee"/>
                  <stop offset="100%" stopColor="#34d399"/>
                </linearGradient>
              </defs>
              <circle cx="48" cy="48" r="44"/>
            </svg>
            <div className="cs-icon-inner">🔧</div>
          </div>

          {/* pill badge */}
          <div>
            <span className="cs-pill">
              <span className="cs-dot"/>IN DEVELOPMENT
            </span>
          </div>

          {/* heading */}
          <h1 className="cs-h1">
            This page will be available soon as we 
            <span style={{
              background:"linear-gradient(to right,#22d3ee,#34d399)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"
            }}>continue improving our platform.</span>
          </h1>

         

          {/* status */}
          <div className="cs-status">
            <div className="cs-status-dot"/>
            <span className="cs-status-txt">กำลังดำเนินการพัฒนา ขออภัยในความไม่สะดวก</span>
          </div>


          {/* back button */}
          <button className="cs-btn" onClick={() => navigate("/")}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            กลับสู่หน้าแรก
          </button>

        </div>
      </div>

    </div>
  );
}