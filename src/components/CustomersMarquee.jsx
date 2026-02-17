import { useEffect, useMemo, useRef, useState } from "react";

// ✅ แก้ path ให้ตรงกับโปรเจกต์คุณ
import agc from "../assets/img/home/customers/AGC.png";
import bangchak from "../assets/img/home/customers/bangchak.svg";
import egat from "../assets/img/home/customers/egat.png";
import gc from "../assets/img/home/customers/GC.webp";
import ggc from "../assets/img/home/customers/ggc.png";
import hmc from "../assets/img/home/customers/HMC.png";
import logoPTT3 from "../assets/img/home/customers/logo_PTT_3.png";
import npc from "../assets/img/home/customers/npc.png";
import pttAsahi from "../assets/img/home/customers/ptt-asahi.png";
import pttDigital from "../assets/img/home/customers/ptt-digital.png";
import tex from "../assets/img/home/customers/Tex.png";

export default function CustomersMarquee() {
  const logos = useMemo(
    () => [
      { src: pttDigital, alt: "PTT Digital" },
      { src: gc, alt: "GC" },
      { src: agc, alt: "AGC" },
      { src: ggc, alt: "GGC" },
      { src: bangchak, alt: "Bangchak" },
      { src: egat, alt: "EGAT" },
      { src: hmc, alt: "HMC Polymers" },
      { src: npc, alt: "NPC" },
      { src: pttAsahi, alt: "PTT Asahi" },
      { src: tex, alt: "Thai Ethoxylate (TEX)" },
      { src: logoPTT3, alt: "PTT Group" },
    ],
    []
  );

  const trackRef = useRef(null);
  const rafRef = useRef(null);

  const posRef = useRef(0);
  const speedRef = useRef(0.7);

  const draggingRef = useRef(false);
  const lastXRef = useRef(0);

  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // ✅ normalize ให้ pos อยู่ในช่วง [-halfWidth, 0)
  const normalizePos = (pos, halfWidth) => {
    if (!halfWidth) return 0;
    let x = ((-pos % halfWidth) + halfWidth) % halfWidth;
    return -x;
  };

  useEffect(() => {
    const tick = () => {
      const track = trackRef.current;
      if (!track) return;

      const halfWidth = track.scrollWidth / 2;
      if (!halfWidth) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (!paused && !draggingRef.current) {
        posRef.current -= speedRef.current;
      }

      posRef.current = normalizePos(posRef.current, halfWidth);
      track.style.transform = `translateX(${posRef.current}px)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [paused]);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    setIsDragging(true);
    lastXRef.current = e.clientX;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;

    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;
    if (!halfWidth) return;

    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;

    posRef.current += dx;
    posRef.current = normalizePos(posRef.current, halfWidth);

    track.style.transform = `translateX(${posRef.current}px)`;
  };

  const onPointerUp = () => {
    draggingRef.current = false;
    setIsDragging(false);
  };

  return (
    <section className="w-full bg-white pt-20 pb-20">
      <div className="mx-auto max-w-7xl ">
        <div className="flex justify-center pb-8">
        <span className=" inline-flex items-center gap-2 rounded-full text-slate-600 border border-slate-200 bg-white/5 px-4 py-2 text-xs tracking-widest  backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-600" />
            OUR CUSTOMERS
          </span>
          </div>
        <h2 className="text-center text-3xl font-bold text-slate-600">
         ได้รับความไว้วางใจจากลูกค้าระดับองค์กรชั้นนำ
        </h2>
      </div>
    
     
      <div className="mt-10 mx-auto max-w-6xl px-6">
        <div
          className="relative select-none overflow-hidden rounded-2xl bg-white "
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {/* track */}
          <div
            ref={trackRef}
            className="flex items-center gap-16 will-change-transform px-10 md:px-14"
          >
            {logos.map((l, idx) => (
              <LogoItem key={`a-${idx}`} {...l} />
            ))}
            {logos.map((l, idx) => (
              <LogoItem key={`b-${idx}`} {...l} />
            ))}
          </div>

          {/* ✅ fade edges: ทำให้กว้างขึ้น + ขาวทึบขึ้นนิดนึง */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-28 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-28 bg-gradient-to-l from-white via-white/90 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function LogoItem({ src, alt }) {
  return (
    <div className="group relative flex h-20 w-40 shrink-0 items-center justify-center overflow-visible">
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="max-h-16 w-auto opacity-90 transition duration-200 ease-out group-hover:scale-110 group-hover:opacity-100"
      />

      {/* ✅ Tooltip: ขาวโปร่ง + blur */}
     <div className="pointer-events-none  absolute left-1/2 top-0 -translate-x-1  whitespace-nowrap rounded-full bg-white/70 px-5 py-1.5 text-sm  border border-slate-200 text-slate-800 shadow-sm backdrop-blur-md opacity-0 transition duration-200 group-hover:opacity-100 z-20">
  {alt}
</div>
    </div>
  );
}
