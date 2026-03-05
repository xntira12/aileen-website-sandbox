import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import stBg from "../assets/img/home/st-bg.png";
import PMT from "../assets/img/home/productsSolutions/PMT.svg";
import RPA from "../assets/img/home/productsSolutions/RPA.svg";
import AI from "../assets/img/home/productsSolutions/AI.svg";
import LPM from "../assets/img/home/productsSolutions/LPM.svg";
import QMS from "../assets/img/home/productsSolutions/QMS.svg";
import SPC from "../assets/img/home/productsSolutions/SPC.svg";
import ERP from "../assets/img/home/productsSolutions/ERP.svg";

const CSS_ID = "svs-css";
function injectCSS() {
  if (document.getElementById(CSS_ID)) return;
  const s = document.createElement("style");
  s.id = CSS_ID;
  s.textContent = `
/* particles (same keyframe name as st-p but scoped to svs) */
@keyframes svsPartUp{0%{transform:translateY(0) scale(1);opacity:0}12%{opacity:.7}80%{opacity:.4}100%{transform:translateY(-320px) scale(.2);opacity:0}}
.svs-part{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(56,224,208,.7),transparent 70%);pointer-events:none;animation:svsPartUp var(--d) ease-in-out var(--dl) infinite}

/* mouse-follow glow */
.svs-mglow{position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(56,224,208,.04),transparent 60%);pointer-events:none;transform:translate(-50%,-50%);transition:left .5s ease-out,top .5s ease-out;z-index:0}

/* ── card ── */
.svs-c{position:relative;overflow:hidden;background:rgba(255,255,255,.05);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px 20px 20px;cursor:pointer;transform-style:preserve-3d;will-change:transform;transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .35s,border-color .3s}
.svs-c::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#38e0d0,#0ea5e9);opacity:.4;transition:opacity .3s}
.svs-c::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(56,224,208,.05),transparent);transition:left .55s;pointer-events:none}
.svs-c:hover{box-shadow:0 10px 36px rgba(0,0,0,.35),0 0 22px rgba(56,224,208,.1);border-color:rgba(56,224,208,.22)}
.svs-c:hover::before{opacity:1}
.svs-c:hover::after{left:100%}

/* icon */
.svs-ic{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;position:relative;background:rgba(56,224,208,.08);border:1px solid rgba(56,224,208,.14);transition:transform .5s cubic-bezier(.22,1,.36,1),box-shadow .4s;flex-shrink:0}
.svs-c:hover .svs-ic{transform:scale(1.08) rotate(-4deg);box-shadow:0 4px 18px rgba(56,224,208,.18)}
.svs-ir{position:absolute;inset:0;border-radius:14px;border:2px solid rgba(56,224,208,.5);opacity:0;pointer-events:none}
@keyframes svsIcR{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.1);opacity:0}}
.svs-c:hover .svs-ir{animation:svsIcR 1s ease-out}

/* number ghost */
.svs-n{position:absolute;top:14px;right:16px;font-size:2.8rem;font-weight:900;line-height:1;color:rgba(56,224,208,.07);pointer-events:none;transition:color .4s}
.svs-c:hover .svs-n{color:rgba(56,224,208,.12)}

/* tag */
.svs-tg{display:inline-flex;align-items:center;padding:2px 9px;border-radius:7px;font-size:.66rem;font-weight:600;letter-spacing:.02em;background:rgba(56,224,208,.08);color:rgba(56,224,208,.82);border:1px solid rgba(56,224,208,.14)}

/* reveal */
@keyframes svsRv{from{opacity:0;transform:translateY(38px) scale(.97);filter:blur(2px)}to{opacity:1;transform:none;filter:none}}
.svs-rv{opacity:0}.svs-rv.on{animation:svsRv .65s cubic-bezier(.22,1,.36,1) forwards}

/* group heading */
.svs-grp{display:flex;align-items:center;gap:14px;margin-bottom:24px;margin-top:52px}
.svs-grp:first-child{margin-top:0}
.svs-gl{flex:1;height:1px;background:linear-gradient(90deg,rgba(56,224,208,.22),transparent)}
.svs-gl.r{background:linear-gradient(270deg,rgba(56,224,208,.22),transparent)}
.svs-gb{display:inline-flex;align-items:center;gap:8px;padding:6px 18px;border-radius:9999px;border:1px solid rgba(56,224,208,.2);background:rgba(56,224,208,.07);font-size:.73rem;font-weight:700;letter-spacing:.07em;color:rgba(56,224,208,.88);white-space:nowrap}

/* flow connector */
.svs-flow{display:flex;flex-direction:column}
.svs-flow-top{position:relative;display:grid;grid-template-columns:repeat(4,1fr);margin-bottom:0}
.svs-flow-top::before{content:'';position:absolute;top:25px;left:calc(100%/8);right:calc(100%/8);height:2px;background:linear-gradient(90deg,#38e0d0,#0ea5e9,#38e0d0);box-shadow:0 0 12px rgba(56,224,208,.45);z-index:0;border-radius:1px}
.svs-flow-node{display:flex;flex-direction:column;align-items:center;position:relative;z-index:1}
.svs-flow-circle{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#38e0d0,#0ea5e9);display:flex;align-items:center;justify-content:center;font-size:1.15rem;font-weight:800;color:#0a1f2e;position:relative;z-index:2;flex-shrink:0}
@keyframes svsRing{0%,100%{box-shadow:0 0 0 4px rgba(56,224,208,.15),0 4px 20px rgba(56,224,208,.3)}50%{box-shadow:0 0 0 9px rgba(56,224,208,.07),0 4px 28px rgba(56,224,208,.5)}}
.svs-flow-circle{animation:svsRing 2.8s ease-in-out infinite}
.svs-flow-stem{width:2px;height:22px;background:linear-gradient(180deg,rgba(56,224,208,.7),rgba(56,224,208,.06));margin:0 auto}
.svs-flow-arrows{position:absolute;top:14px;left:calc(100%/8 + 26px);right:calc(100%/8 + 26px);display:flex;justify-content:space-between;pointer-events:none;z-index:3}

/* grids */
.svs-grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.svs-grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:880px;margin:0 auto}

/* stage transitions */
.svs-stage{transition:opacity .35s ease,transform .35s ease;position:relative}
.svs-stage.hide{opacity:0;pointer-events:none;position:absolute;inset:0;transform:translateY(14px)}
.svs-stage.show{opacity:1;pointer-events:auto;transform:translateY(0)}

/* detail view */
@keyframes svsDL{from{opacity:0;transform:translateX(-44px) scale(.97)}to{opacity:1;transform:none}}
@keyframes svsDR{from{opacity:0;transform:translateX(44px) scale(.97)}to{opacity:1;transform:none}}
.svs-dl{animation:svsDL .65s cubic-bezier(.22,1,.36,1) forwards}
.svs-dr{animation:svsDR .65s cubic-bezier(.22,1,.36,1) forwards}
@keyframes svsBdg{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
.svs-bdg-anim{animation:svsBdg .4s ease forwards}

.svs-dtl{background:rgba(255,255,255,.05);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:36px 32px;position:relative;overflow:hidden}
.svs-dtl::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent 5%,#38e0d0 35%,#0ea5e9 65%,transparent 95%)}
.svs-sli{padding:10px 14px;border-radius:12px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .25s ease;border:1px solid transparent}
.svs-sli:hover{background:rgba(56,224,208,.05);border-color:rgba(56,224,208,.1)}
.svs-sli.act{background:rgba(56,224,208,.1);border-color:rgba(56,224,208,.22)}
.svs-feat{display:flex;align-items:flex-start;gap:10px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.07)}.svs-feat:last-child{border-bottom:none}

/* nav pill */
.svs-np{display:inline-flex;align-items:center;gap:6px;padding:9px 20px;border-radius:9999px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);backdrop-filter:blur(6px);color:rgba(255,255,255,.65);font-size:.82rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:all .3s}
.svs-np:hover{background:rgba(56,224,208,.12);border-color:rgba(56,224,208,.3);color:rgba(255,255,255,.95)}
.svs-np .ar{font-size:1rem;line-height:1;transition:transform .3s}
.svs-np:hover .af{transform:translateX(2px)}.svs-np:hover .ab{transform:translateX(-2px)}

/* mobile dropdown */
.svs-mdd{display:none;position:relative;margin-bottom:16px;z-index:20}
.svs-mdd-btn{width:100%;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:14px 16px;border-radius:14px;border:1px solid rgba(56,224,208,.2);background:rgba(255,255,255,.06);backdrop-filter:blur(10px);font-size:.9rem;font-weight:600;color:rgba(56,224,208,.9);cursor:pointer}
.svs-mdd-arr{font-size:.75rem;color:rgba(255,255,255,.5);transition:transform .3s}.svs-mdd-arr.op{transform:rotate(180deg)}
.svs-mdd-list{position:absolute;top:calc(100% + 6px);left:0;right:0;background:#0d2535;border-radius:14px;border:1px solid rgba(255,255,255,.08);box-shadow:0 16px 48px rgba(0,0,0,.4);overflow:hidden;max-height:0;opacity:0;transition:max-height .35s cubic-bezier(.22,1,.36,1),opacity .25s}
.svs-mdd-list.op{max-height:440px;opacity:1}
.svs-mdd-item{display:flex;align-items:center;gap:10px;padding:13px 16px;font-size:.88rem;font-weight:500;color:rgba(255,255,255,.65);cursor:pointer;transition:background .2s;border-bottom:1px solid rgba(255,255,255,.05)}
.svs-mdd-item:last-child{border-bottom:none}
.svs-mdd-item.act,.svs-mdd-item:active{background:rgba(56,224,208,.1);color:rgba(56,224,208,.9)}

/* header fade-up */
@keyframes svsFadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
.svs-hdr{opacity:0}.svs-hdr.on{animation:svsFadeUp .7s ease forwards}

/* stats */
@keyframes svsSt{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.svs-st{opacity:0}.svs-st.on{animation:svsSt .6s cubic-bezier(.22,1,.36,1) forwards}
.svs-stat-sep{width:1px;height:36px;background:rgba(255,255,255,.1);align-self:center}

/* responsive */
@media(max-width:1024px){
  .svs-grid4{grid-template-columns:repeat(2,1fr)}
  .svs-grid3{grid-template-columns:repeat(2,1fr);max-width:100%}
  .svs-flow-top{grid-template-columns:repeat(2,1fr);row-gap:20px}
  .svs-flow-top::before,.svs-flow-arrows{display:none}
  .svs-flow-stem{display:none}
}
@media(max-width:768px){
  .svs-grid4,.svs-grid3{grid-template-columns:1fr;gap:12px;max-width:100%;margin:0}
  .svs-flow-top{grid-template-columns:1fr}
  .svs-c{padding:18px 16px}
  .svs-dtl{padding:24px 18px;border-radius:16px}
  .svs-dg{grid-template-columns:1fr!important;gap:0!important}
  .svs-sidebar-desk{display:none!important}
  .svs-mdd{display:block}
  .svs-bdg-wrap{display:none!important}
}
`;
  document.head.appendChild(s);
}

/* ── Data ── */
const SVC = [
  {
    id: "pmp",
    n: "03",
    t: "Process Management Platform",
    ic: PMT,
    tags: ["BPM", "Process"],
    group: "auto",
    summary:
      'การบริหารจัดการ "กระบวนการทำงาน" เปลี่ยนจากกระดาษหรือ Visio (เช่น BPMN, SOP)',
    detail:
      'ช่วยจัดการ "กระบวนการทำงาน" จากรูปแบบเอกสาร กระดาษหรือ Visio (เช่น BPMN,SOP) ให้สามารถบริหาร จัดเก็บ และปรับปรุงกระบวนการได้ผ่านระบบเดียว เพื่อให้ทุกคนในองค์กรเห็นภาพการทำงานเดียวกันและสามารถพัฒนา Process ได้อย่างต่อเนื่องในอนาคต',
    features: [
      "เปลี่ยนความซับซ้อนของแผนผังกระบวนการ ข้อมูลที่กระจัดกระจาย (Silos) เอกสาร หรือไฟล์ Visio ให้กลายเป็น Workflow ที่จัดการและเข้าใจได้ง่ายๆ",
      "ค้นหา เจาะลึก และควบคุมกระบวนการทำงานของคุณให้เป็นมาตรฐาน ถูกต้องตามข้อกำหนด (Compliance) ทำงานร่วมกันได้ราบรื่น พร้อมสำหรับการปรับปรุงและรองรับทุกการเปลี่ยนแปลง",
      "รักษาประสิทธิภาพการทำงาน ลดความเสี่ยง Knowledge Loss เมื่อพนักงานลาออกหรือหยุดงานยาว",
      "ติดตามสถานะได้แบบเรียลไทม์ ตรวจสอบได้ทันทีว่ารายการใดเผยแพร่แล้ว รอดำเนินการ หรือรอการตรวจสอบ",
      "ใช้เป็นฐานข้อมูลสำหรับทำ Automation / RPA ต่อได้",
    ],
  },
  {
    id: "rpa",
    n: "04",
    t: "Robotic Process Automation",
    ic: RPA,
    tags: ["Automation", "RPA"],
    group: "auto",
    summary:
      "หุ่นยนต์ซอฟต์แวร์ (Robot) ที่ทำหน้าที่เป็นผู้ช่วยส่วนตัว สำหรับงานซ้ำซ้อนที่มีรูปแบบแน่นอน",
    detail:
      "สามารถทำงานได้ 24/7 เช่น การคัดลอก กรอกข้อมูล การตรวจสอบและรวบรวมข้อมูล รวมถึงการบันทึกข้อมูลเข้าสู่ระบบ",
    features: [
      "ทำงานอัตโนมัติ 24/7",
      "คัด ลอก กรอก และบันทึกข้อมูล",
      "ตรวจสอบและรวบรวมข้อมูลอัตโนมัติ",
      "ลดข้อผิดพลาดจากคน",
    ],
  },
  {
    id: "dsai",
    n: "05",
    t: "Domain-Specific Generative AI",
    ic: AI,
    tags: ["AI", "Generative"],
    group: "auto",
    summary:
      "ก้าวสู่อนาคตของธุรกิจด้วย AI ที่เข้าใจบริบทของภาษาไทย ยกระดับการค้นหา การสื่อสาร",
    detail:
      "การบริการ และวิเคราะห์ข้อมูล ตอบโจทย์การทำงานเฉพาะองค์กร ลดภาระงาน ลดเวลา และทรัพยากรในการทำงาน",
    features: [
      "AI เข้าใจบริบทภาษาไทย",
      "วิเคราะห์ข้อมูลเชิงลึก",
      "ตอบโจทย์เฉพาะองค์กร",
      "ลดภาระงานและเวลา",
    ],
  },
  {
    id: "lcbo",
    n: "02",
    t: "Low-Code Business Orchestrator",
    ic: LPM,
    tags: ["Low-Code", "Workflow"],
    group: "auto",
    summary:
      "แพลตฟอร์มพัฒนาระบบงานในรูปแบบ Low-Code ช่วยให้ IT และ Users สามารถทำงานร่วมกัน",
    detail:
      "สร้าง Business Workflow ในองค์กรได้รวดเร็วยิ่งขึ้น บริหารการทำงานและตรวจสอบได้ Real-time พัฒนา Workflow ได้เร็วขึ้น 3–5 เท่า",
    features: [
      "พัฒนา Workflow เร็วขึ้น 3-5 เท่า",
      "IT และ Users ร่วมสร้างระบบ",
      "บริหารและตรวจสอบ Real-time",
      "ลดต้นทุนการพัฒนาซอฟต์แวร์",
    ],
  },
  {
    id: "qmp",
    n: "01",
    t: "Quality Management Platform",
    ic: QMS,
    tags: ["Quality", "Compliance"],
    group: "ops",
    summary:
      "ระบบจัดการคุณภาพที่ใช้รายงาน ควบคุม ตรวจสอบ และดำเนินการพัฒนาคุณภาพขององค์กร",
    detail:
      "แพลตฟอร์มที่ช่วยองค์กรบริหารจัดการคุณภาพ ควบคุม และยกระดับมาตรฐานการทำงานแบบครบวงจร เพื่อให้มั่นใจว่าทุกกระบวนการสอดคล้องกับมาตรฐานสากล (เช่น ISO) และข้อกำหนดทางกฎหมายอย่างถูกต้อง โดยเปลี่ยนการทำงานที่กระจัดกระจายให้เป็นระบบอัตโนมัติที่สามารถตรวจสอบได้จริง ",
    features: [
      "รายงานและควบคุมคุณภาพแบบ Real-time",
      "ตรวจสอบย้อนกลับทุกขั้นตอน",
      "ลดข้อผิดพลาดจากกระบวนการซ้ำซ้อน",
      "ยกระดับมาตรฐานองค์กร",
    ],
  },
  {
    id: "scr",
    n: "06",
    t: "Supply Chain Resilience",
    ic: SPC,
    tags: ["Supply Chain", "Digital"],
    group: "ops",
    summary:
      "แพลตฟอร์มห่วงโซ่อุปทานดิจิทัลแบบครบวงจร ที่ผสานรวมคำสั่งซื้อ สินค้า คงคลัง",
    detail:
      "คลังสินค้า การขนส่ง และการจัดการทางการเงิน ได้อย่างราบรื่น ลดความเสี่ยง รวดเร็วและมีประสิทธิภาพ",
    features: [
      "รวมทุกขั้นตอนของ Supply Chain",
      "จัดการคำสั่งซื้อแบบ Real-time",
      "ลดความเสี่ยงด้าน Logistics",
      "ตอบสนองตลาดได้รวดเร็ว",
    ],
  },
  {
    id: "erp",
    n: "07",
    t: "ERP Workspace",
    ic: ERP,
    tags: ["ERP", "Workspace"],
    group: "ops",
    summary:
      "แพลตฟอร์มบริหารจัดการธุรกิจแบบบูรณาการ ช่วยจัดระเบียบ Workflow ที่ซับซ้อนให้ง่ายขึ้น",
    detail:
      "ติดตามสถานะการดำเนินงานได้แบบ Real-time พร้อมเครื่องมือครบครันที่ช่วยขับเคลื่อนธุรกิจอย่างมั่นคง",
    features: [
      "บริหารจัดการแบบบูรณาการ",
      "ติดตามสถานะ Real-time",
      "เครื่องมือครบครัน",
      "ขับเคลื่อนธุรกิจอย่างมั่นคง",
    ],
  },
];
const AUTO_GROUP = SVC.filter((s) => s.group === "auto");
const OPS_GROUP = SVC.filter((s) => s.group === "ops");

/* ── Particles ── */
function Particles({ n = 14 }) {
  const d = useMemo(
    () =>
      Array.from({ length: n }, () => ({
        l: `${Math.random() * 100}%`,
        b: `${Math.random() * 25}%`,
        d: `${7 + Math.random() * 7}s`,
        dl: `${Math.random() * 5}s`,
        s: `${2 + Math.random() * 2.5}px`,
      })),
    [n],
  );
  return (
    <>
      {d.map((p, i) => (
        <div
          key={i}
          className="svs-part"
          style={{
            left: p.l,
            bottom: p.b,
            width: p.s,
            height: p.s,
            "--d": p.d,
            "--dl": p.dl,
          }}
        />
      ))}
    </>
  );
}

function Ico({ src, size = 28, style = {} }) {
  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      style={{ display: "block", objectFit: "contain", ...style }}
    />
  );
}

function GrpHead({ label }) {
  return (
    <div className="svs-grp">
      <div className="svs-gl" />
      <div className="svs-gb">{label}</div>
      <div className="svs-gl r" />
    </div>
  );
}

function GCard({ item, idx, onClick, inView }) {
  const ref = useRef(null);
  const onMv = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `perspective(700px) rotateX(${((e.clientY - r.top) / r.height - 0.5) * -5}deg) rotateY(${((e.clientX - r.left) / r.width - 0.5) * 5}deg) translateZ(4px)`;
  }, []);
  const onLv = useCallback(() => {
    if (ref.current) ref.current.style.transform = "";
  }, []);
  return (
    <div
      ref={ref}
      className={`svs-c svs-rv ${inView ? "on" : ""}`}
      style={{ animationDelay: `${idx * 100}ms` }}
      onClick={onClick}
      onMouseMove={onMv}
      onMouseLeave={onLv}
    >
      <span className="svs-n">{item.n}</span>
      <div className="svs-ic">
        <Ico src={item.ic} size={30} />
        <div className="svs-ir" />
      </div>
      <h3
        style={{
          marginTop: 14,
          fontSize: "1.02rem",
          fontWeight: 700,
          color: "rgba(255,255,255,.9)",
          lineHeight: 1.35,
          paddingRight: 28,
        }}
      >
        {item.t}
      </h3>
      <div style={{ display: "flex", gap: 5, marginTop: 10, flexWrap: "wrap" }}>
        {item.tags.map((t) => (
          <span key={t} className="svs-tg">
            {t}
          </span>
        ))}
      </div>
      <p
        style={{
          marginTop: 11,
          fontSize: ".84rem",
          lineHeight: 1.65,
          color: "rgba(255,255,255,.5)",
        }}
      >
        {item.summary}
      </p>
      <div
        style={{
          marginTop: 13,
          fontSize: ".76rem",
          fontWeight: 600,
          background: "linear-gradient(135deg,#38e0d0,#0ea5e9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        ดูรายละเอียด <span style={{ WebkitTextFillColor: "#38e0d0" }}>›</span>
      </div>
    </div>
  );
}

function MobDD({ items, activeId, onSelect }) {
  const [open, setOpen] = useState(false);
  const active = items.find((s) => s.id === activeId);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", h);
    return () => document.removeEventListener("pointerdown", h);
  }, [open]);
  return (
    <div className="svs-mdd" ref={ref}>
      <button
        type="button"
        className="svs-mdd-btn"
        onClick={() => setOpen((o) => !o)}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Ico src={active?.ic} size={20} />
          <span style={{ color: "rgba(255,255,255,.85)" }}>{active?.t}</span>
        </span>
        <span className={`svs-mdd-arr ${open ? "op" : ""}`}>▾</span>
      </button>
      <div className={`svs-mdd-list ${open ? "op" : ""}`}>
        {items.map((s) => (
          <div
            key={s.id}
            className={`svs-mdd-item ${s.id === activeId ? "act" : ""}`}
            onClick={() => {
              onSelect(s.id);
              setOpen(false);
            }}
          >
            <Ico src={s.ic} size={18} style={{ flexShrink: 0 }} />
            <span>{s.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SectionServices — standalone, same bg as SectionStrengths
════════════════════════════════════════════ */
export default function SectionServices() {
  useEffect(() => {
    injectCSS();
  }, []);

  const [view, setView] = useState("grid");
  const [vk, setVk] = useState(0);
  const [inView, setInView] = useState(false);
  const secRef = useRef(null);
  const bgRef = useRef(null);
  const glowRef = useRef(null);
  const tgt = useRef({ x: 50, y: 50 });
  const cur = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.06 },
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  /* mouse-follow parallax — identical to SectionStrengths */
  const onMouseMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect(),
      s = 0.35;
    tgt.current.x = 50 + (((e.clientX - r.left) / r.width) * 100 - 50) * s;
    tgt.current.y = 50 + (((e.clientY - r.top) / r.height) * 100 - 50) * s;
    if (glowRef.current) {
      glowRef.current.style.left = `${e.clientX - r.left}px`;
      glowRef.current.style.top = `${e.clientY - r.top}px`;
    }
  }, []);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    let raf = 0;
    const lr = (a, b, t) => a + (b - a) * t;
    const tk = () => {
      cur.current.x = lr(cur.current.x, tgt.current.x, 0.08);
      cur.current.y = lr(cur.current.y, tgt.current.y, 0.08);
      el.style.setProperty("--mx", `${cur.current.x}%`);
      el.style.setProperty("--my", `${cur.current.y}%`);
      raf = requestAnimationFrame(tk);
    };
    raf = requestAnimationFrame(tk);
    return () => cancelAnimationFrame(raf);
  }, []);

  const go = useCallback((v) => {
    setView(v);
    setVk((k) => k + 1);
  }, []);
  const ai = SVC.find((s) => s.id === view);

  return (
    <section
      ref={secRef}
      className="relative isolate overflow-hidden strength-dark"
      onMouseMove={onMouseMove}
    >
      {/* ── Background — identical to SectionStrengths ── */}
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
      {inView && (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Particles />
        </div>
      )}
      <div ref={glowRef} className="svs-mglow" />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1180,
          margin: "0 auto",
          padding: "80px 24px 100px",
        }}
      >
        {/* Header */}
        <div
          className={`svs-hdr ${inView ? "on" : ""}`}
          style={{ textAlign: "center" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 16px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,.15)",
              background: "rgba(255,255,255,.05)",
              backdropFilter: "blur(6px)",
              fontSize: ".72rem",
              fontWeight: 700,
              letterSpacing: ".12em",
              color: "rgba(255,255,255,.7)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#6ee7b7",
                flexShrink: 0,
              }}
            />
            SERVICES &amp; SOLUTIONS
          </span>
          <h2
            style={{
              marginTop: 20,
              fontSize: "clamp(1.6rem,4vw,2.5rem)",
              fontWeight: 800,
              letterSpacing: "-.02em",
              color: "white",
              lineHeight: 1.15,
            }}
          >
            โซลูชันครบวงจรเพื่อ{" "}
            <span
              style={{
                background: "linear-gradient(to right,#7dd3fc,#6ee7b7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ธุรกิจยุคใหม่
            </span>
          </h2>
          <p
            style={{
              marginTop: 16,
              maxWidth: 580,
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "clamp(.85rem,1vw,1rem)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,.68)",
            }}
          >
            โซลูชันที่ออกแบบมาเพื่อเปลี่ยนกระบวนการทำงานให้ชาญฉลาดยิ่งขึ้น ด้วย
            AI และ Automation ที่ตอบโจทย์ทุกความต้องการทางธุรกิจ
          </p>
        </div>

        {/* Stages */}
        <div style={{ marginTop: 52, position: "relative" }}>
          {/* ═ GRID ═ */}
          <div className={`svs-stage ${view === "grid" ? "show" : "hide"}`}>
            <GrpHead label="TRANSFORMING PROCESSES INTO INTELLIGENT AI" />
            <div className="svs-flow">
              <div className="svs-flow-top">
                <div className="svs-flow-arrows">
                  {[0, 1, 2].map((i) => (
                    <svg
                      key={i}
                      width="38"
                      height="22"
                      viewBox="0 0 38 22"
                      fill="none"
                    >
                      <defs>
                        <linearGradient
                          id={`svsA${i}`}
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#38e0d0" />
                          <stop offset="100%" stopColor="#0ea5e9" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M2 11h30M26 4l9 7-9 7"
                        stroke={`url(#svsA${i})`}
                        strokeWidth="2.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ))}
                </div>
                {AUTO_GROUP.map((it, i) => (
                  <div key={it.id} className="svs-flow-node">
                    <div className="svs-flow-circle">{i + 1}</div>
                    <div className="svs-flow-stem" />
                  </div>
                ))}
              </div>
              <div className="svs-grid4">
                {AUTO_GROUP.map((it, i) => (
                  <GCard
                    key={it.id}
                    item={it}
                    idx={i}
                    onClick={() => go(it.id)}
                    inView={inView}
                  />
                ))}
              </div>
            </div>

            <GrpHead label="ENTERPRISE OPERATIONS & PLATFORMS" />
            <div className="svs-grid3">
              {OPS_GROUP.map((it, i) => (
                <GCard
                  key={it.id}
                  item={it}
                  idx={i + 4}
                  onClick={() => go(it.id)}
                  inView={inView}
                />
              ))}
            </div>
          </div>

          {/* ═ DETAIL ═ */}
          {ai && (
            <div
              className={`svs-stage ${view !== "grid" ? "show" : "hide"}`}
              key={`d-${vk}`}
            >
              <div
                className="svs-bdg-wrap"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <div
                  className="svs-bdg-anim"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "7px 20px",
                    borderRadius: 9999,
                    background: "rgba(56,224,208,.08)",
                    color: "rgba(56,224,208,.9)",
                    fontSize: ".82rem",
                    fontWeight: 600,
                    border: "1px solid rgba(56,224,208,.2)",
                  }}
                >
                  <Ico src={ai.ic} size={20} />
                  {ai.t}
                </div>
              </div>

              <MobDD items={SVC} activeId={ai.id} onSelect={(id) => go(id)} />

              <div
                className="svs-dg"
                style={{
                  display: "grid",
                  gridTemplateColumns: "260px 1fr",
                  gap: 24,
                  maxWidth: 960,
                  margin: "0 auto",
                  alignItems: "start",
                }}
              >
                {/* sidebar */}
                <div
                  className="svs-dl svs-sidebar-desk"
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  {SVC.map((s) => (
                    <div
                      key={s.id}
                      className={`svs-sli ${s.id === ai.id ? "act" : ""}`}
                      onClick={() => go(s.id)}
                    >
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: 10,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            s.id === ai.id
                              ? "rgba(56,224,208,.12)"
                              : "rgba(255,255,255,.05)",
                          flexShrink: 0,
                          transition: "background .25s",
                        }}
                      >
                        <Ico src={s.ic} size={20} />
                      </div>
                      <div
                        style={{
                          fontSize: ".82rem",
                          fontWeight: 600,
                          lineHeight: 1.3,
                          color:
                            s.id === ai.id
                              ? "rgba(56,224,208,.9)"
                              : "rgba(255,255,255,.58)",
                          transition: "color .25s",
                        }}
                      >
                        {s.t}
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: 12 }}>
                    <button
                      className="svs-np"
                      onClick={() => go("grid")}
                      type="button"
                    >
                      <span className="ar ab">‹</span> กลับหน้ารวม
                    </button>
                  </div>
                </div>

                {/* detail panel */}
                <div className="svs-dr svs-dtl">
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 14 }}
                  >
                    <div
                      style={{
                        width: 54,
                        height: 54,
                        borderRadius: 14,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(56,224,208,.1)",
                        border: "1px solid rgba(56,224,208,.2)",
                        flexShrink: 0,
                      }}
                    >
                      <Ico src={ai.ic} size={32} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: ".68rem",
                          fontWeight: 700,
                          background: "linear-gradient(135deg,#38e0d0,#0ea5e9)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          letterSpacing: ".07em",
                          textTransform: "uppercase",
                        }}
                      >
                        Service {ai.n}
                      </div>
                      <h3
                        style={{
                          fontSize: "clamp(1rem,2.5vw,1.22rem)",
                          fontWeight: 800,
                          color: "rgba(255,255,255,.92)",
                          lineHeight: 1.3,
                          marginTop: 3,
                        }}
                      >
                        {ai.t}
                      </h3>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      marginTop: 14,
                      flexWrap: "wrap",
                    }}
                  >
                    {ai.tags.map((t) => (
                      <span key={t} className="svs-tg">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      marginTop: 16,
                      fontSize: "clamp(.84rem,.9vw,.9rem)",
                      lineHeight: 1.82,
                      color: "rgba(255,255,255,.55)",
                    }}
                  >
                    {ai.summary} {ai.detail}
                  </p>
                  <div
                    style={{
                      height: 1,
                      background:
                        "linear-gradient(90deg,transparent,rgba(56,224,208,.15),rgba(14,165,233,.1),transparent)",
                      margin: "20px 0",
                    }}
                  />
                  <div
                    style={{
                      fontSize: ".72rem",
                      fontWeight: 700,
                      background: "linear-gradient(135deg,#38e0d0,#0ea5e9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      letterSpacing: ".06em",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    }}
                  >
                    Key Features
                  </div>
                  <div>
                    {ai.features.map((f, i) => (
                      <div key={i} className="svs-feat">
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 7,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(56,224,208,.1)",
                            color: "rgba(56,224,208,.9)",
                            fontSize: ".7rem",
                            fontWeight: 800,
                            flexShrink: 0,
                            marginTop: 1,
                            border: "1px solid rgba(56,224,208,.18)",
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div
                          style={{
                            fontSize: ".87rem",
                            color: "rgba(255,255,255,.65)",
                            lineHeight: 1.6,
                            fontWeight: 500,
                          }}
                        >
                          {f}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ textAlign: "center", marginTop: 24 }}>
                    <a
                      href={`/services/${ai.id}`}
                      className="svs-np"
                      style={{
                        padding: "10px 32px",
                        fontSize: ".88rem",
                        fontWeight: 600,
                      }}
                    >
                      รายละเอียด <span className="ar af">›</span>
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "center", marginTop: 18 }}>
                <button
                  type="button"
                  className="svs-np"
                  onClick={() => go("grid")}
                >
                  <span className="ar ab">‹</span> ย้อนกลับ
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        {view === "grid" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 0,
              marginTop: 68,
              flexWrap: "wrap",
            }}
          >
            {[
              { v: "7+", l: "Solutions" },
              { v: "100+", l: "Enterprise Clients" },
              { v: "24/7", l: "Expert Support" },
            ].map((st, i) => (
              <React.Fragment key={st.l}>
                {i > 0 && <div className="svs-stat-sep" />}
                <div
                  className={`svs-st ${inView ? "on" : ""}`}
                  style={{
                    textAlign: "center",
                    padding: "0 48px",
                    animationDelay: `${0.9 + i * 0.15}s`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.5rem,3vw,2rem)",
                      fontWeight: 800,
                      background: "linear-gradient(135deg,#38e0d0,#0ea5e9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {st.v}
                  </div>
                  <div
                    style={{
                      fontSize: ".8rem",
                      color: "rgba(255,255,255,.42)",
                      marginTop: 4,
                      fontWeight: 500,
                      letterSpacing: ".04em",
                    }}
                  >
                    {st.l}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
