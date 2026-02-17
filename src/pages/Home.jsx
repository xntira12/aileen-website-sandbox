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
  return (
    <div id="home">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full min-h-screen overflow-hidden">
        
        {/* ✅ Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-6xl px-6 pt-24 pb-16 text-center">
            
            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              <img
                src={logo}
                alt="Aileen Solutions"
                className="h-10 w-auto"
              />
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
                <svg
                  className="w-3.5 text-white"
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

              <a
                href="#contact"
                className="btn-fancy group relative inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/15"
              >
                <span className="relative z-10">Contact Us</span>
                <svg
                  className="w-3.5 text-white"
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
      </section>

      {/* SECTIONS */}
      <main className="mx-auto max-w-6xl px-6 "></main>

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
