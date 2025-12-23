import React, { useEffect, useMemo, useRef, useState } from "react";
import cubeImg from "../assets/img/home/cube.png";
import stBg from "../assets/img/home/st-bg.png";

function KeyDot({ item, posClass, onClick, tooltipSide = "right" }) {
  return (
    <button
      onClick={onClick}
      className={`strength-dot group absolute ${posClass}`}
    >
      <div className="strength-dot__icon">
        <span className="text-lg">💡</span>
      </div>

      <div className="mt-2 font-semibold text-white/85">{item.title}</div>

      <div
        className={`strength-tooltip ${
          tooltipSide === "left"
            ? "strength-tooltip--right"
            : "strength-tooltip--left"
        }`}
      >
        {item.tooltip}
      </div>
    </button>
  );
}

function Card({ item }) {
  return (
    <div className="strength-card group">
      <div className="strength-card__icon">
        <span className="text-xl">💡</span>
      </div>
      <div className="text-left">
        <div className=" font-semibold text-white">{item.title}</div>
        <div className="mt-1 leading-relaxed text-white/70">{item.tooltip}</div>
      </div>
    </div>
  );
}

export default function SectionStrengths() {
  // view: "center" (ภาพ1) | "trust" (ภาพ2) | "provide" (ภาพ3)
  const [view, setView] = useState("center");

  // BG follow mouse (smooth)
  const layerRef = useRef(null);
  const target = useRef({ x: 50, y: 50 });
  const current = useRef({ x: 50, y: 50 });

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    const my = ((e.clientY - r.top) / r.height) * 100;

    const strength = 0.35; // อยากให้ขยับมาก/น้อย ปรับตรงนี้
    target.current.x = 50 + (mx - 50) * strength;
    target.current.y = 50 + (my - 50) * strength;
  };

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;

    let raf = 0;
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      const t = 0.08;
      current.current.x = lerp(current.current.x, target.current.x, t);
      current.current.y = lerp(current.current.y, target.current.y, t);

      el.style.setProperty("--mx", `${current.current.x}%`);
      el.style.setProperty("--my", `${current.current.y}%`);

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // 6 Keys (ตามเว็บเดิม)
  const keys = useMemo(
    () => [
      {
        id: "simplicity",
        title: "Simplicity",
        tooltip:
          "เราเชื่อในระบบที่ใช้งานง่าย ช่วยให้ผู้ใช้เข้าใจ กระบวนการ และทำงานได้ด้วยตนเอง อย่างมีประสิทธิภาพ",
      },
      {
        id: "rapidly",
        title: "Rapidly",
        tooltip:
          "ให้ความสำคัญและตอบรับกับการเปลี่ยนแปลง ทางธุรกิจที่เป็นไปอย่างรวดเร็วในปัจจุบัน",
      },
      {
        id: "experience",
        title: "Experience",
        tooltip:
          "เรานำเสนอโซลูชั่น ที่มีคุณภาพ เหมาะสมกับความต้องการ ตอบโจทย์ผู้ใช้งานได้อย่างตรงจุด และคุ้มค่า กับการลงทุน",
      },
      {
        id: "platform",
        title: "Platform",
        tooltip:
          "แพลตฟอร์มที่เชื่อถือได้และยืดหยุ่น รองรับโซลูชั่นหลากหลาย เพิ่มคุณภาพการทำงานและขยายศักยภาพทางธุรกิจ",
      },
      {
        id: "services",
        title: "Services",
        tooltip:
          "บริการครบวงจร ครอบคลุมการบูรณาการเทคโนโลยี เพื่อยกระดับการทำงานในองค์กร และตอบโจทย์ ทางธุรกิจ",
      },
      {
        id: "consulting",
        title: "Consulting",
        tooltip:
          "ที่ปรึกษามืออาชีพ ให้คำแนะนำ รวมทั้งช่วยวางแผน และขับเคลื่อน กลยุทธ์ด้วยความมั่นใจ",
      },
    ],
    []
  );

  // การ์ด 3 ใบ “Trust By” (ตัวอย่างตามภาพ)
  const trustCards = useMemo(
    () => [
      keys[0], // Simplicity
      keys[1], // Rapidly
      keys[2], // Experience
    ],
    [keys]
  );

  // การ์ด 3 ใบ “Provide To” (ตัวอย่าง)
  const provideCards = useMemo(
    () => [
      keys[3], // Platform
      keys[4], // Services
      keys[5], // Consulting
    ],
    [keys]
  );

  return (
    <section
      className="relative isolate overflow-hidden py-20 strength-dark"
      onMouseMove={handleMove}
    >
      {/* ✅ Background image */}
      <img
        src={stBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover opacity-60 "
      />

      {/* ✅ Cursor-follow glow (ทับแบบเบาๆ) */}
      <div
        ref={layerRef}
        className="strength-dark__bg pointer-events-none absolute inset-0 -z-20"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 mt-20 mb-20">
        {/* Header (center) */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-widest text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            OUR STRENGTHS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Why Businesses Choose{" "}
            <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Aileen Solutions
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            6 Keys to Value — เราเชื่อมั่นในสิ่งที่ทำ
            และมุ่งส่งมอบคุณค่าให้กับองค์กร ผ่านโซลูชัน แพลตฟอร์ม บริการ
            และการให้คำปรึกษาที่เชื่อถือได้
          </p>
        </div>

        {/* Stage */}
        <div className="mt-14 relative">
          {/* view: CENTER (ภาพ1) */}
          <div
            className={`strength-stage ${
              view === "center" ? "is-show" : "is-hide"
            }`}
          >
            <div className="relative mx-auto h-[520px] max-w-5xl">
              {/* cube center */}
              <div className="strength-cube mt-5">
                <img
                  src={cubeImg}
                  alt="Cube"
                  className="w-[250px] select-none"
                  draggable={false}
                />
              </div>

              {/* pills left/right of cube */}
              <button
                className="strength-pill strength-pill--left "
                onClick={() => setView("trust")}
                type="button"
              >
                <span className="strength-pill__arrow rotate-180">›</span>Trust
                By
              </button>

              <button
                className="strength-pill strength-pill--right"
                onClick={() => setView("provide")}
                type="button"
              >
                Provide To <span className="strength-pill__arrow">›</span>
              </button>

              {/* 6 dots around */}
              <KeyDot
                item={keys[0]}
                posClass="top-[230px] left-[90px]"
                tooltipSide="right"
                onClick={() => setView("trust")}
              />

              <KeyDot
                item={keys[1]}
                posClass="top-[50px] left-[200px]"
                tooltipSide="right"
                onClick={() => setView("trust")}
              />

              <KeyDot
                item={keys[2]}
                posClass="top-[50px] right-[200px]"
                tooltipSide="left"
                onClick={() => setView("trust")}
              />

              <KeyDot
                item={keys[3]}
                posClass="top-[230px] right-[90px]"
                tooltipSide="left"
                onClick={() => setView("provide")}
              />

              <KeyDot
                item={keys[4]}
                posClass="bottom-[30px] right-[200px]"
                tooltipSide="left"
                onClick={() => setView("provide")}
              />

              <KeyDot
                item={keys[5]}
                posClass="bottom-[30px] left-[200px]"
                tooltipSide="right"
                onClick={() => setView("provide")}
              />
            </div>
          </div>

          {/* view: TRUST (ภาพ2) */}
          <div
            className={`strength-stage ${
              view === "trust" ? "is-show" : "is-hide"
            }`}
          >
            <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
              {/* cards left */}
              <div className="space-y-5">
                {trustCards.map((it) => (
                  <Card key={it.id} item={it} />
                ))}
              </div>

              {/* cube right */}
              <div className="relative flex justify-center">
                <img
                  src={cubeImg}
                  alt="Cube"
                  className="w-[320px] select-none"
                  draggable={false}
                />
                <button
                  className="strength-pill strength-pill--top"
                  onClick={() => setView("center")}
                  type="button"
                >
                  <span className="strength-pill__arrow">‹</span> Trust By
                </button>
                <button
                  className="strength-pill strength-pill--right"
                  onClick={() => setView("provide")}
                  type="button"
                >
                  Provide To <span className="strength-pill__arrow">›</span>
                </button>
              </div>
            </div>
          </div>

          {/* view: PROVIDE (ภาพ3) */}
          <div
            className={`strength-stage ${
              view === "provide" ? "is-show" : "is-hide"
            }`}
          >
            <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
              {/* cube left */}
              <div className="relative flex justify-center">
                <img
                  src={cubeImg}
                  alt="Cube"
                  className="w-[320px] select-none"
                  draggable={false}
                />
                <button
                  className="strength-pill strength-pill--left"
                  onClick={() => setView("trust")}
                  type="button"
                >
                  <span className="strength-pill__arrow">‹</span> Trust By
                </button>
                <button
                  className="strength-pill strength-pill--top"
                  onClick={() => setView("center")}
                  type="button"
                >
                  Provide To <span className="strength-pill__arrow">›</span>
                </button>
              </div>

              {/* cards right */}
              <div className="space-y-5">
                {provideCards.map((it) => (
                  <Card key={it.id} item={it} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* end stage */}
      </div>
    </section>
  );
}
