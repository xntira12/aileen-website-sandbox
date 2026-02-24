import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import homeVideo from "../assets/img/home/main-bg.mp4";
import logo from "../assets/img/logo/aileen-logo.png";
import sloganImg from "../assets/img/home/slogan.png";
import SectionDataOrbit from "../components/SectionDataOrbit";
import SectionStrengths from "../components/SectionStrengths";
import SectionServiceAndSolutions from "../components/SectionServiceAndSolutions";
import SectionContactFooter from "../components/SectionContactFooter";
import CustomersMarquee from "../components/CustomersMarquee";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // ถ้าวิดีโอโหลดเสร็จแล้ว (cached)
    if (video.readyState >= 3) {
      handleVideoReady();
      return;
    }

    video.addEventListener("canplaythrough", handleVideoReady);
    return () => video.removeEventListener("canplaythrough", handleVideoReady);
  }, []);

  function handleVideoReady() {
    setIsFading(true);
    // รอให้ fade-out animation เสร็จก่อน
    setTimeout(() => setIsLoaded(true), 600);
  }

  return (
    <div id="home">
      {/* ─── PRELOADER ─── */}
      {!isLoaded && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050d1a]"
          style={{
            opacity: isFading ? 0 : 1,
            transition: "opacity 0.6s ease",
            pointerEvents: isFading ? "none" : "auto",
          }}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Aileen Solutions"
            className="mb-6 h-12 w-auto opacity-90"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          />

          {/* Loading bar */}
          <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-emerald-400"
              style={{ animation: "loadBar 1.8s ease-in-out infinite" }}
            />
          </div>

          <p className="mt-5 text-xs tracking-[0.25em] text-white/40 uppercase">
            Loading
          </p>

          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 0.7; transform: scale(1); }
              50%       { opacity: 1;   transform: scale(1.04); }
            }
            @keyframes loadBar {
              0%   { left: -100%; width: 60%; }
              50%  { left: 40%;   width: 60%; }
              100% { left: 100%;  width: 60%; }
            }
          `}</style>
        </div>
      )}

      <Navbar />

      {/* HERO */}
      <section className="relative w-full min-h-screen overflow-hidden">

        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>

        {/* Content — fade in หลังโหลดเสร็จ */}
        <div
          className="relative z-10 flex min-h-screen items-center"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.8s ease 0.1s",
          }}
        >
          <div className="mx-auto w-full max-w-6xl px-6 pt-24 pb-16 text-center">

            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              <img src={logo} alt="Aileen Solutions" className="h-10 w-auto" />
              <span className="text-sm font-semibold tracking-widest text-white/90">
                AILEEN SOLUTIONS
              </span>
            </div>

            <div className="mx-auto max-w-5xl">
              <img
                src={sloganImg}
                alt="Simplify Work Amplify Value"
                className="mx-auto w-full max-w-4xl"
              />
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-sm leading-relaxed text-white/85 md:text-base">
              We deliver reliable software solutions, trusted services, and
              experienced consulting from process and quality to Automation and
              AI — Empowering business efficiency and growth.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#about"
                className="btn-fancy group relative inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/15"
              >
                <span className="relative z-10">Get To Know Us</span>
                <svg className="w-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>

              <a
                href="#contact"
                className="btn-fancy group relative inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/15"
              >
                <span className="relative z-10">Contact Us</span>
                <svg className="w-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <main className="mx-auto max-w-6xl px-6"></main>

      <section id="customers" className="py-0 bg-white">
        <CustomersMarquee />
      </section>

      <section className="py-0 bg-slate-50">
        <SectionDataOrbit />
      </section>

      <section id="strengths" className="py-0">
        <SectionStrengths />
      </section>

      <section className="py-0 bg-slate-50">
        <SectionServiceAndSolutions />
      </section>

      <section id="contact" className="">
        <SectionContactFooter />
      </section>
    </div>
  );
}