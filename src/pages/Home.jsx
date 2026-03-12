import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/img/logo/aileen-logo.png";
import sloganImg from "../assets/img/home/slogan.png";
import SectionDataOrbit from "../components/SectionDataOrbit";
import SectionStrengths from "../components/SectionStrengths";
import SectionServiceAndSolutions from "../components/SectionServices";
import SectionContactFooter from "../components/SectionContactFooter";
import CustomersMarquee from "../components/CustomersMarquee";
import SectionLeaderVision from "../components/Sectionleadervision";
import SectionTeam from "../components/SectionTeam";

/* ─────────────────────────────────────────────────────────────
   AnimatedBg — Trunk-Branch wave canvas
   
   แนวคิด: เส้นหลัก (trunk) 1 เส้น วิ่งพาดผ่านหน้าจอ
   จากนั้นแตกออกเป็นหลายๆ เส้น (branches) ที่บิดซ้อนทับกัน
   ตรงที่เส้นซ้อนกันหนาแน่นจะสว่างขึ้นเหมือนเรืองแสง
   
   สีพื้นหลัง: ตาม SectionServices — dark navy + teal radial wash
───────────────────────────────────────────────────────────── */
function AnimatedBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    /* ──────────────────────────────────────────
       TRUNK-BRANCH SYSTEM
       
       แต่ละ "Bundle" มี:
       - trunk: เส้นหลัก 1 เส้น กำหนดเส้นทางหลัก
       - branches: เส้นที่แยกออกจาก trunk
         แต่ละ branch มี deviation (ระยะห่างจาก trunk)
         และ phase offset ที่ต่างกัน
         ทำให้เส้นบางส่วนไปทับกัน สร้าง glow effect
    ────────────────────────────────────────── */
    const bundles = [
      {
        /* Bundle A — ลากจากซ้ายกลาง ขึ้นขวาบน */
        trunkY:   0.42,          /* y เริ่มต้น (fraction of H) */
        trunkAmp: 70,            /* amplitude หลัก */
        trunkFreq: 0.0022,
        trunkSpeed: 0.00038,
        trunkPhase: 0,

        /* branches: deviation = ระยะห่างสูงสุดจาก trunk (px) */
        branches: [
          { dev: 0,    phOff: 0,     freqMul: 1.0,  aMul: 1.0,  alpha: 0.60 }, /* trunk เอง */
          { dev: 6,    phOff: 0.08,  freqMul: 0.98, aMul: 1.05, alpha: 0.40 },
          { dev: -6,   phOff: -0.08, freqMul: 1.02, aMul: 0.95, alpha: 0.40 },
          { dev: 15,   phOff: 0.18,  freqMul: 0.94, aMul: 1.12, alpha: 0.26 },
          { dev: -15,  phOff: -0.18, freqMul: 1.06, aMul: 0.88, alpha: 0.26 },
          { dev: 28,   phOff: 0.32,  freqMul: 0.88, aMul: 1.22, alpha: 0.16 },
          { dev: -28,  phOff: -0.32, freqMul: 1.12, aMul: 0.78, alpha: 0.16 },
          { dev: 44,   phOff: 0.50,  freqMul: 0.82, aMul: 1.35, alpha: 0.09 },
          { dev: -44,  phOff: -0.50, freqMul: 1.18, aMul: 0.65, alpha: 0.09 },
          { dev: 62,   phOff: 0.72,  freqMul: 0.75, aMul: 1.5,  alpha: 0.05 },
          { dev: -62,  phOff: -0.72, freqMul: 1.25, aMul: 0.5,  alpha: 0.05 },
        ],
        color: [0, 200, 185],
        glowBlur: 14,
      },
      {
        /* Bundle B — ลากจากซ้ายล่าง ผ่านกลาง ขึ้นขวา */
        trunkY:   0.67,
        trunkAmp: 60,
        trunkFreq: 0.0018,
        trunkSpeed: 0.00030,
        trunkPhase: Math.PI * 0.9,

        branches: [
          { dev: 0,    phOff: 0,     freqMul: 1.0,  aMul: 1.0,  alpha: 0.50 },
          { dev: 8,    phOff: 0.10,  freqMul: 0.96, aMul: 1.08, alpha: 0.34 },
          { dev: -8,   phOff: -0.10, freqMul: 1.04, aMul: 0.92, alpha: 0.34 },
          { dev: 20,   phOff: 0.24,  freqMul: 0.90, aMul: 1.18, alpha: 0.22 },
          { dev: -20,  phOff: -0.24, freqMul: 1.10, aMul: 0.82, alpha: 0.22 },
          { dev: 36,   phOff: 0.42,  freqMul: 0.84, aMul: 1.30, alpha: 0.13 },
          { dev: -36,  phOff: -0.42, freqMul: 1.16, aMul: 0.70, alpha: 0.13 },
          { dev: 54,   phOff: 0.64,  freqMul: 0.78, aMul: 1.45, alpha: 0.07 },
          { dev: -54,  phOff: -0.64, freqMul: 1.22, aMul: 0.55, alpha: 0.07 },
        ],
        color: [0, 175, 165],
        glowBlur: 12,
      },
      {
        /* Bundle C — เส้นเล็ก กลาง-ขวา ทำหน้าที่เป็น accent */
        trunkY:   0.54,
        trunkAmp: 42,
        trunkFreq: 0.0030,
        trunkSpeed: 0.00052,
        trunkPhase: Math.PI * 1.6,

        branches: [
          { dev: 0,    phOff: 0,     freqMul: 1.0,  aMul: 1.0,  alpha: 0.38 },
          { dev: 5,    phOff: 0.12,  freqMul: 0.95, aMul: 1.10, alpha: 0.24 },
          { dev: -5,   phOff: -0.12, freqMul: 1.05, aMul: 0.90, alpha: 0.24 },
          { dev: 14,   phOff: 0.28,  freqMul: 0.88, aMul: 1.22, alpha: 0.14 },
          { dev: -14,  phOff: -0.28, freqMul: 1.12, aMul: 0.78, alpha: 0.14 },
          { dev: 26,   phOff: 0.48,  freqMul: 0.80, aMul: 1.38, alpha: 0.07 },
          { dev: -26,  phOff: -0.48, freqMul: 1.20, aMul: 0.62, alpha: 0.07 },
        ],
        color: [30, 218, 200],
        glowBlur: 9,
      },
    ];

    /* ── คำนวณ Y ของ branch ณ ตำแหน่ง x ── */
    function branchY(b, bDef, x) {
      return (
        b.trunkY * H +
        Math.sin(x * b.trunkFreq * bDef.freqMul + b.trunkPhase + bDef.phOff) *
          (b.trunkAmp * bDef.aMul) +
        /* harmonic เพิ่มความซับซ้อน */
        Math.sin(x * b.trunkFreq * bDef.freqMul * 2.1 + b.trunkPhase * 1.4 + bDef.phOff * 0.6) *
          (b.trunkAmp * bDef.aMul * 0.28) +
        bDef.dev
      );
    }

    function draw() {
      /* ── Background: เข้มคล้าย SectionServices ── */
      ctx.fillStyle = "#060f1a";
      ctx.fillRect(0, 0, W, H);

      /* teal wash ซ้ายล่าง (คล้าย strength-dark) */
      const wash1 = ctx.createRadialGradient(W * 0.18, H * 0.72, 0, W * 0.18, H * 0.72, W * 0.5);
      wash1.addColorStop(0,   "rgba(0,80,80,0.22)");
      wash1.addColorStop(0.5, "rgba(0,50,60,0.10)");
      wash1.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = wash1;
      ctx.fillRect(0, 0, W, H);

      /* teal glow บนขวา — characteristic ของ original */
      const glowTR = ctx.createRadialGradient(W * 0.90, H * 0.08, 0, W * 0.90, H * 0.08, W * 0.40);
      glowTR.addColorStop(0,    "rgba(0,210,192,0.22)");
      glowTR.addColorStop(0.28, "rgba(0,172,158,0.09)");
      glowTR.addColorStop(0.55, "rgba(0,115,108,0.04)");
      glowTR.addColorStop(1,    "rgba(0,0,0,0)");
      ctx.fillStyle = glowTR;
      ctx.fillRect(0, 0, W, H);

      /* subtle blue wash กลาง-ขวา */
      const wash2 = ctx.createRadialGradient(W * 0.72, H * 0.5, 0, W * 0.72, H * 0.5, W * 0.38);
      wash2.addColorStop(0,   "rgba(0,50,80,0.14)");
      wash2.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = wash2;
      ctx.fillRect(0, 0, W, H);

      /* ── วาด Bundles ── */
      bundles.forEach((b) => {
        /* เลื่อน phase */
        b.trunkPhase += b.trunkSpeed;

        const [r, g, bl] = b.color;

        /* วาดทุก branch จาก outer ไป trunk (trunk ทับสุด) */
        for (let bi = b.branches.length - 1; bi >= 0; bi--) {
          const bDef = b.branches[bi];

          ctx.beginPath();
          const step = 3;
          for (let x = 0; x <= W; x += step) {
            const y = branchY(b, bDef, x);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }

          ctx.strokeStyle = `rgba(${r},${g},${bl},${bDef.alpha})`;
          ctx.lineWidth = bDef.dev === 0 ? 1.0 : 0.7;
          ctx.stroke();
        }

        /* ── Glow pass: trunk + ใกล้ trunk วาดซ้ำด้วย shadow ──
           จำลอง "เส้นซ้อนกันสว่าง" ตรงที่ branches ชิดกัน */
        ctx.save();
        ctx.shadowColor = `rgba(${r},${g},${bl},0.55)`;
        ctx.shadowBlur  = b.glowBlur;

        /* trunk glow */
        ctx.beginPath();
        for (let x = 0; x <= W; x += 3) {
          const y = branchY(b, b.branches[0], x);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${r},${g},${bl},0.75)`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        /* double-pass สว่างขึ้น */
        ctx.shadowBlur = b.glowBlur * 2.2;
        ctx.strokeStyle = `rgba(${r},${g},${bl},0.35)`;
        ctx.lineWidth = 2.2;
        ctx.stroke();

        ctx.restore();

        /* ── Intersection glow: จุดที่ branch ชิดกันมาก ──
           สแกนหาจุด x ที่เส้นที่ 1 กับ -1 ใกล้กัน → วาด radial glow */
        if (b.branches.length >= 3) {
          const bPos = b.branches[1];
          const bNeg = b.branches[2];
          for (let x = 0; x < W; x += 60) {
            const yPos = branchY(b, bPos, x);
            const yNeg = branchY(b, bNeg, x);
            const dist = Math.abs(yPos - yNeg);
            if (dist < 18) {
              /* เส้นชิดกัน — วาด glow */
              const yCtr = (yPos + yNeg) / 2;
              const intensity = (1 - dist / 18) * 0.25;
              const ig = ctx.createRadialGradient(x, yCtr, 0, x, yCtr, 22 + (18 - dist));
              ig.addColorStop(0,   `rgba(${r},${g},${bl},${intensity})`);
              ig.addColorStop(1,   "rgba(0,0,0,0)");
              ctx.fillStyle = ig;
              ctx.fillRect(x - 40, yCtr - 40, 80, 80);
            }
          }
        }
      });

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}

/* ─── slides ─── */
const slides = [
  <p key={0} className="absolute inset-0 flex items-center lg:items-start flex-col justify-center w-full max-w-[38rem] pr-2 text-center lg:text-left leading-[1.15] tracking-[-0.01em]">
    <span className="text-white/50 text-xl font-normal tracking-wide">ยกระดับการทำงานทั้งองค์กรด้วย</span>
    <span className="text-white font-bold text-[50px] pt-2"><em className="not-italic">Digital Process</em></span>
    <span className="text-white font-bold text-[50px] pt-1">& <em className="not-italic">Automation</em></span>
  </p>,
  <p key={1} className="absolute inset-0 flex items-center lg:items-start flex-col justify-center w-full max-w-[38rem] pr-2 text-center lg:text-left leading-[1.2] tracking-[-0.01em]">
    <span className="text-white/60 text-xl lg:text-xl">เลิกพึ่งเอกสารเปลี่ยนสู่<em className="text-white">แพลตฟอร์ม</em>ที่</span>
    <span className="text-white font-bold text-5xl lg:text-5xl mt-2">ควบคุมและ</span>
    <span className="text-white font-bold text-5xl lg:text-5xl mt-2">ตรวจสอบได้จริง</span>
  </p>,
  <p key={2} className="absolute inset-0 flex items-center lg:items-start flex-col justify-center w-full max-w-[38rem] pr-2 text-center lg:text-left leading-[1.2] tracking-[-0.01em]">
    <span className="text-white/50 text-xl font-normal">ยังเสียเวลากับ </span>
    <span className="text-white font-bold text-7xl lg:text-7xl"><em className="not-italic">งานซ้ำ ๆ</em></span>
    <span className="text-white/70 text-xl font-normal mt-1">จนไม่มีเวลาสร้าง<strong className="text-white text-2xl font-semibold">คุณค่าใหม่</strong>อยู่หรือไม่?</span>
  </p>,
  <p key={3} className="absolute inset-0 flex items-center lg:items-start flex-col justify-center w-full max-w-[38rem] pr-2 text-center lg:text-left leading-[1.2] tracking-[-0.01em]">
    <span className="text-white/60 text-xl lg:text-xl">AI ที่ดีเริ่มจากข้อมูลที่ดี</span>
    <span className="text-white text-5xl mt-1 font-bold">องค์กรคุณพร้อมสำหรับ AI แล้วหรือยัง ?</span>
  </p>,
  <p key={4} className="absolute inset-0 flex items-center lg:items-start flex-col justify-center w-full max-w-[38rem] pr-2 text-center lg:text-left leading-[1.2] tracking-[-0.01em]">
    <span className="text-white/50 text-xl font-normal">เมื่อทุก Process</span>
    <span className="text-white font-bold text-4xl lg:text-5xl pt-2"><em className="not-italic">มองเห็น</em>และ<em className="not-italic">พัฒนา</em>ได้จริง</span>
    <span className="text-white/50 text-xl mt-1 pt-2">องค์กรจะเปลี่ยนไป<strong className="text-white text-2xl font-bold">แค่ไหน?</strong></span>
  </p>,
];

export default function Home() {
  const [isLoaded, setIsLoaded]               = useState(false);
  const [isFading, setIsFading]               = useState(false);
  const [introPhase, setIntroPhase]           = useState("center");
  const [currentSlide, setCurrentSlide]       = useState(0);
  const [isAnimating, setIsAnimating]         = useState(false);
  const [slideDir, setSlideDir]               = useState("up");
  const [carouselHovered, setCarouselHovered] = useState(false);
  const [navVisible, setNavVisible]           = useState(false);
  const autoRef     = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!isLoaded) return;
    const t = setTimeout(() => setIntroPhase("split"), 400);
    return () => clearTimeout(t);
  }, [isLoaded]);

  useEffect(() => {
    if (introPhase !== "split") return;
    startAuto();
    return () => clearInterval(autoRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [introPhase, currentSlide]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY.current && y > 60) setNavVisible(true);
      else if (y < lastScrollY.current) setNavVisible(false);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const f = setTimeout(() => setIsFading(true), 1000);
    const l = setTimeout(() => setIsLoaded(true), 1600);
    return () => { clearTimeout(f); clearTimeout(l); };
  }, []);

  function startAuto() {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => triggerSlide("next"), 7500);
  }

  function triggerSlide(dir) {
    if (isAnimating) return;
    clearInterval(autoRef.current);
    setSlideDir(dir === "next" ? "up" : "down");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(prev =>
        dir === "next" ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length
      );
      setIsAnimating(false);
      startAuto();
    }, 380);
  }

  const isSplit = introPhase === "split";

  return (
    <div id="home">

      {/* PRELOADER */}
      {!isLoaded && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060f1a]"
          style={{ opacity: isFading ? 0 : 1, transition: "opacity 0.6s ease", pointerEvents: isFading ? "none" : "auto" }}>
          <img src={logo} alt="Aileen Solutions" className="mb-6 h-12 w-auto opacity-90"
            style={{ animation: "pulse 2s ease-in-out infinite" }} />
          <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
            <div className="absolute inset-y-0 left-0 rounded-full bg-emerald-400"
              style={{ animation: "loadBar 1.8s ease-in-out infinite" }} />
          </div>
          <p className="mt-5 text-xs tracking-[0.25em] text-white/40 uppercase">Loading</p>
          <style>{`
            @keyframes pulse   { 0%,100%{opacity:.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.04)} }
            @keyframes loadBar { 0%{left:-100%;width:60%} 50%{left:40%;width:60%} 100%{left:100%;width:60%} }
          `}</style>
        </div>
      )}

      {/* Navbar */}
      <div className="navbar-wrapper fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out"
        style={{ transform: navVisible ? "translateY(0)" : "translateY(-100%)" }}>
        <style>{`@media (min-width: 1024px) { .navbar-wrapper { transform: translateY(0) !important; } }`}</style>
        <Navbar />
      </div>

      {/* HERO */}
      <section className="relative w-full min-h-screen overflow-hidden bg-[#060f1a]">

        {/* ── Canvas animated background ── */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatedBg />
        </div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/25 via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-screen flex-col items-center px-6 pb-10"
          style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.8s ease 0.1s" }}>

          <div className="relative z-10 flex min-h-screen flex-col items-center px-6 pt-20 pb-10"
            style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.8s ease 0.1s" }}>
            <div className="flex flex-1 flex-col items-center justify-center w-full gap-8">

              {/* Logo + brand */}
              <div className="flex items-center justify-center gap-3">
                <img src={logo} alt="Aileen Solutions" className="h-10 w-auto" />
                <span className="text-sm font-semibold tracking-widest text-white/90">AILEEN SOLUTIONS</span>
              </div>

              <div className="mx-auto w-full max-w-6xl flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-0">

                {/* Slogan */}
                <div className="flex w-full justify-center lg:w-[65%] lg:pr-10"
                  style={{ transform: isSplit ? "translateX(0)" : "translateX(27%)", transition: isSplit ? "transform 0.75s cubic-bezier(0.4,0,0.2,1)" : "none" }}>
                  <img src={sloganImg} alt="Simplify Work Amplify Value" className="w-full"
                    style={{ opacity: isLoaded ? 1 : 0, animation: isLoaded && !isSplit ? "sloganIn 0.6s ease forwards" : "none", transition: "none" }} />
                </div>

                {/* Divider */}
                <div className="h-px w-4/5 bg-gradient-to-r from-transparent via-white/30 to-transparent lg:hidden"
                  style={{ opacity: isSplit ? 1 : 0, transition: "opacity 0.3s ease 0.1s" }} />
                <div className="hidden lg:block lg:h-64 lg:w-px lg:flex-shrink-0"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.28) 20%, rgba(255,255,255,0.28) 80%, transparent)", opacity: isSplit ? 1 : 0, transform: isSplit ? "scaleY(1)" : "scaleY(0.1)", transformOrigin: "center", transition: "opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s" }} />

                {/* Carousel */}
                <div className="flex w-full flex-col items-center lg:w-[35%] lg:items-start lg:pl-10"
                  style={{ opacity: isSplit ? 1 : 0, transform: isSplit ? "translateX(0)" : "translateX(-36px)", transition: "opacity 0.45s ease 0.1s, transform 0.45s cubic-bezier(0.2,0,0.2,1) 0.1s", pointerEvents: isSplit ? "auto" : "none" }}
                  onMouseEnter={() => setCarouselHovered(true)}
                  onMouseLeave={() => setCarouselHovered(false)}>
                  <div className="relative h-[180px] w-full overflow-hidden"
                    style={{ transform: carouselHovered ? "translateY(0)" : "translateY(14px)", transition: "transform 0.3s ease-out" }}>
                    <div key={currentSlide}
                      style={{ animation: isAnimating ? `slideOut${slideDir === "up" ? "Up" : "Down"} 0.38s ease forwards` : `slideIn${slideDir === "up" ? "Up" : "Down"} 0.38s ease forwards`, position: "absolute", inset: 0 }}>
                      {slides[currentSlide]}
                    </div>
                  </div>

                  {/* Prev / Next */}
                  <div className="mt-3 flex items-center gap-1.5 self-center lg:self-start"
                    style={{ opacity: carouselHovered ? 1 : 0, transform: carouselHovered ? "translateY(0)" : "translateY(4px)", transition: "opacity 0.3s ease, transform 0.3s ease", pointerEvents: carouselHovered ? "auto" : "none" }}>
                    <button onClick={() => triggerSlide("prev")} aria-label="Previous"
                      className="flex items-center gap-1 py-0.5 px-1.5 text-white/30 transition-colors hover:text-white/70">
                      <svg viewBox="0 0 8 12" fill="none" className="h-2 w-1.5 flex-shrink-0">
                        <path d="M6.5 1L1.5 6L6.5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[10px] uppercase tracking-widest">Prev</span>
                    </button>
                    <span className="h-0.5 w-0.5 rounded-full bg-white/20" />
                    <button onClick={() => triggerSlide("next")} aria-label="Next"
                      className="flex items-center gap-1 py-0.5 px-1.5 text-white/30 transition-colors hover:text-white/70">
                      <span className="text-[10px] uppercase tracking-widest">Next</span>
                      <svg viewBox="0 0 8 12" fill="none" className="h-2 w-1.5 flex-shrink-0">
                        <path d="M1.5 1L6.5 6L1.5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Description + Buttons */}
              <div className="flex flex-col items-center text-center">
                <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/85 md:text-base">
                  We deliver reliable software solutions, trusted services, and experienced consulting from process and quality to Automation and AI — Empowering business efficiency and growth.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <a href="#about" className="btn-fancy group relative inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/15">
                    <span className="relative z-10">Get To Know Us</span>
                    <svg className="w-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                  <a href="#contact" className="btn-fancy group relative inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/15">
                    <span className="relative z-10">Contact Us</span>
                    <svg className="w-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes sloganIn     { from{opacity:0;transform:scale(0.94)} to{opacity:1;transform:scale(1)} }
        @keyframes slideInUp    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideOutUp   { from{opacity:1;transform:translateY(0)} to{opacity:0;transform:translateY(-28px)} }
        @keyframes slideInDown  { from{opacity:0;transform:translateY(-28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideOutDown { from{opacity:1;transform:translateY(0)} to{opacity:0;transform:translateY(28px)} }
      `}</style>

      <main className="mx-auto max-w-6xl px-6"></main>
      <section id="customers" className="py-0 bg-white"><CustomersMarquee /></section>
      <section className="py-0 bg-slate-50"><SectionDataOrbit /></section>
      <section id="service" className="py-0 bg-slate-50"><SectionServiceAndSolutions /></section>
      <section id="leaderVision" className="py-0 bg-white"><SectionLeaderVision /></section>
      <section id="strengths" className="py-0"><SectionStrengths /></section>
      <section className="py-0 bg-slate-50"><SectionTeam /></section>
      <section id="contact" className=""><SectionContactFooter /></section>
    </div>
  );
}