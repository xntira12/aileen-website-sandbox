import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import stBg from "../assets/img/home/st-bg.png";
import PMT from "../assets/img/home/productsSolutions/PMT.svg";
import RPA from "../assets/img/home/productsSolutions/RPA.svg";
import AI from "../assets/img/home/productsSolutions/AI.svg";
import LPM from "../assets/img/home/productsSolutions/LPM.svg";
import QMS from "../assets/img/home/productsSolutions/QMS.svg";
import SPC from "../assets/img/home/productsSolutions/SPC.svg";
import ERP from "../assets/img/home/productsSolutions/ERP.svg";
import cubeImg       from "../assets/img/home/cube.png";
import consultIco    from "../assets/img/home/icon/consult.svg";
import experienceIco from "../assets/img/home/icon/experience.svg";
import heartIco      from "../assets/img/home/icon/heart.svg";
import platformIco   from "../assets/img/home/icon/platform.svg";
import rapidlyIco    from "../assets/img/home/icon/rapidly.svg";
import simplifyIco   from "../assets/img/home/icon/simplify.svg";

/* ══════════════════════════════════════════
   CSS injection
══════════════════════════════════════════ */
const CSS_ID = "svs-css";
function injectCSS() {
  if (document.getElementById(CSS_ID)) return;
  const s = document.createElement("style");
  s.id = CSS_ID;
  s.textContent = `
/* ── scroll reveal ── */
@keyframes svsRv{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@keyframes svsRvL{from{opacity:0;transform:translateX(-32px)}to{opacity:1;transform:none}}
@keyframes svsRvR{from{opacity:0;transform:translateX(32px)}to{opacity:1;transform:none}}
@keyframes svsRvS{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:none}}
.svs-rv {opacity:0}.svs-rv.on {animation:svsRv  .6s cubic-bezier(.22,1,.36,1) forwards}
.svs-rvL{opacity:0}.svs-rvL.on{animation:svsRvL .6s cubic-bezier(.22,1,.36,1) forwards}
.svs-rvR{opacity:0}.svs-rvR.on{animation:svsRvR .6s cubic-bezier(.22,1,.36,1) forwards}
.svs-rvS{opacity:0}.svs-rvS.on{animation:svsRvS .7s cubic-bezier(.22,1,.36,1) forwards}

/* ── service card ── */
.svs-c{position:relative;overflow:hidden;background:rgba(255,255,255,.09);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.16);border-radius:18px;padding:26px 22px 22px;cursor:pointer;transform-style:preserve-3d;will-change:transform;transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .3s,border-color .3s}
.svs-c::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(56,224,208,.07),transparent);transition:left .55s;pointer-events:none}
.svs-c:hover{box-shadow:0 10px 36px rgba(0,0,0,.45),0 0 28px rgba(56,224,208,.18);border-color:rgba(56,224,208,.35)}
.svs-c:hover::after{left:100%}

/* icon */
.svs-ic{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;position:relative;background:rgba(56,224,208,.1);border:1px solid rgba(56,224,208,.2);transition:transform .5s cubic-bezier(.22,1,.36,1),box-shadow .4s;flex-shrink:0}
.svs-c:hover .svs-ic{transform:scale(1.08) rotate(-4deg);box-shadow:0 4px 18px rgba(56,224,208,.22)}
.svs-ir{position:absolute;inset:0;border-radius:14px;border:2px solid rgba(56,224,208,.5);opacity:0;pointer-events:none}
@keyframes svsIcR{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.1);opacity:0}}
.svs-c:hover .svs-ir{animation:svsIcR 1s ease-out}

.svs-n{position:absolute;top:14px;right:16px;font-size:2.8rem;font-weight:900;line-height:1;color:rgba(56,224,208,.08);pointer-events:none}
.svs-tg{display:inline-flex;align-items:center;padding:4px 12px;border-radius:7px;font-size:.72rem;font-weight:700;letter-spacing:.02em;background:rgba(56,224,208,.14);color:rgba(200,250,246,1);border:1px solid rgba(56,224,208,.3)}

/* mobile divider */
.svs-divider{display:none}
@media(max-width:640px){
  .svs-divider{display:flex;align-items:center;gap:12px;margin:24px 0 0}
  .svs-divider-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(56,224,208,.4),transparent)}
  .svs-divider-dot{width:6px;height:6px;border-radius:50%;background:#38e0d0;box-shadow:0 0 8px rgba(56,224,208,.9);flex-shrink:0}
}

/* group heading */
.svs-grp{display:flex;align-items:center;gap:14px;margin-bottom:24px;margin-top:52px}
.svs-grp:first-child{margin-top:0}
.svs-gl{flex:1;height:1px;background:linear-gradient(90deg,rgba(56,224,208,.22),transparent)}
.svs-gl.r{background:linear-gradient(270deg,rgba(56,224,208,.22),transparent)}
.svs-gb{display:inline-flex;align-items:center;gap:8px;padding:8px 22px;border-radius:9999px;border:1px solid rgba(56,224,208,.25);background:rgba(56,224,208,.09);font-size:.82rem;font-weight:700;letter-spacing:.07em;color:rgba(180,245,240,1);white-space:nowrap}
@keyframes svsGrp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.svs-grp-rv{opacity:0}.svs-grp-rv.on{animation:svsGrp .5s ease forwards}

/* flow */
.svs-flow{display:flex;flex-direction:column}
.svs-flow-top{position:relative;display:grid;grid-template-columns:repeat(4,1fr);margin-bottom:0}
.svs-flow-top::before{content:'';position:absolute;top:25px;left:calc(100%/8);right:calc(100%/8);height:2px;background:linear-gradient(90deg,#38e0d0,#0ea5e9,#38e0d0);box-shadow:0 0 10px rgba(56,224,208,.4);z-index:0;border-radius:1px;transform:scaleX(0);transform-origin:left;transition:transform 0s}
.svs-flow-top.on::before{transform:scaleX(1);transition:transform .8s cubic-bezier(.22,1,.36,1) .2s}
.svs-flow-node{display:flex;flex-direction:column;align-items:center;position:relative;z-index:1}
@keyframes svsNode{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:none}}
.svs-flow-node-rv{opacity:0}.svs-flow-node-rv.on{animation:svsNode .45s cubic-bezier(.34,1.56,.64,1) forwards}
.svs-flow-circle{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg, #073c4a, #0a3f4e);display:flex;align-items:center;justify-content:center;font-size:1.2rem;font-weight:800;color:#fff;position:relative;z-index:2;flex-shrink:0;box-shadow:0 0 0 4px rgba(56,224,208,.18),0 4px 20px rgba(56,224,208,.32)}
.svs-flow-stem{width:2px;height:22px;background:linear-gradient(180deg,rgba(56,224,208,.7),rgba(56,224,208,.06));margin:0 auto}
@keyframes svsStem{from{opacity:0;transform:scaleY(0)}to{opacity:1;transform:scaleY(1)}}
.svs-flow-stem-rv{opacity:0;transform-origin:top}.svs-flow-stem-rv.on{animation:svsStem .35s ease forwards}

.svs-grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.svs-grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:880px;margin:0 auto}
.svs-vline{display:none}

/* stage (service detail) */
.svs-stage{transition:opacity .3s ease;position:relative}
.svs-stage.hide{opacity:0;pointer-events:none;position:absolute;inset:0}
.svs-stage.show{opacity:1;pointer-events:auto}
@keyframes svsDL{from{opacity:0;transform:translateX(-28px)}to{opacity:1;transform:none}}
@keyframes svsDR{from{opacity:0;transform:translateX(28px)}to{opacity:1;transform:none}}
.svs-dl{animation:svsDL .5s cubic-bezier(.22,1,.36,1) forwards}
.svs-dr{animation:svsDR .5s cubic-bezier(.22,1,.36,1) forwards}
.svs-dtl{background:rgba(255,255,255,.06);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:36px 32px;position:relative;overflow:hidden}
.svs-sli{padding:10px 14px;border-radius:12px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:background .2s,border-color .2s;border:1px solid transparent}
.svs-sli:hover{background:rgba(56,224,208,.07);border-color:rgba(56,224,208,.14)}
.svs-sli.act{background:rgba(56,224,208,.12);border-color:rgba(56,224,208,.26)}
.svs-feat{display:flex;align-items:flex-start;gap:10px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.09)}.svs-feat:last-child{border-bottom:none}
.svs-np{display:inline-flex;align-items:center;gap:6px;padding:9px 20px;border-radius:9999px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);backdrop-filter:blur(6px);color:rgba(255,255,255,.82);font-size:.82rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:background .25s,border-color .25s;text-decoration:none}
.svs-np:hover{background:rgba(56,224,208,.14);border-color:rgba(56,224,208,.35);color:#fff}
.svs-np .ar{font-size:1rem;line-height:1}
.svs-mdd{display:none;position:relative;margin-bottom:16px;z-index:20}
.svs-mdd-btn{width:100%;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:14px 16px;border-radius:14px;border:1px solid rgba(56,224,208,.25);background:rgba(255,255,255,.08);backdrop-filter:blur(10px);font-size:.9rem;font-weight:600;color:rgba(180,245,240,1);cursor:pointer}
.svs-mdd-arr{font-size:.75rem;color:rgba(255,255,255,.6);transition:transform .25s}.svs-mdd-arr.op{transform:rotate(180deg)}
.svs-mdd-list{position:absolute;top:calc(100% + 6px);left:0;right:0;background:#0d2535;border-radius:14px;border:1px solid rgba(255,255,255,.1);box-shadow:0 16px 48px rgba(0,0,0,.4);overflow:hidden;max-height:0;opacity:0;transition:max-height .3s cubic-bezier(.22,1,.36,1),opacity .2s}
.svs-mdd-list.op{max-height:440px;opacity:1}
.svs-mdd-item{display:flex;align-items:center;gap:10px;padding:13px 16px;font-size:.88rem;font-weight:500;color:rgba(255,255,255,.75);cursor:pointer;transition:background .15s;border-bottom:1px solid rgba(255,255,255,.06)}
.svs-mdd-item:last-child{border-bottom:none}
.svs-mdd-item.act{background:rgba(56,224,208,.12);color:rgba(180,245,240,1)}
@keyframes svsFadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.svs-hdr{opacity:0}.svs-hdr.on{animation:svsFadeUp .6s ease forwards}
@keyframes svsSt{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.svs-st{opacity:0}.svs-st.on{animation:svsSt .5s ease forwards}
.svs-stat-sep{width:1px;height:36px;background:rgba(255,255,255,.15);align-self:center}

/* ── section divider ── */
.svs-sec-div{display:flex;align-items:center;gap:20px;margin:80px 0}
.svs-sec-div-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(56,224,208,.25),transparent)}
.svs-sec-div-icon{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,#38e0d0,#0ea5e9);box-shadow:0 0 12px rgba(56,224,208,.6);flex-shrink:0}
@keyframes svsDivLine{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.svs-sec-div-line.on{animation:svsDivLine .8s cubic-bezier(.22,1,.36,1) forwards;transform-origin:center}

/* ── strengths ── */
@keyframes stFloat{0%,100%{transform:translateY(-6px)}50%{transform:translateY(-18px)}}
@keyframes stGlow{0%,100%{filter:drop-shadow(0 0 20px rgba(56,224,208,.25)) drop-shadow(0 0 50px rgba(56,224,208,.10))}50%{filter:drop-shadow(0 0 35px rgba(56,224,208,.45)) drop-shadow(0 0 70px rgba(56,224,208,.22))}}
.st-cube-anim{animation:stFloat 4.5s ease-in-out infinite,stGlow 3.5s ease-in-out infinite}
@keyframes stPart{0%{transform:translateY(0) scale(1);opacity:0}12%{opacity:.8}80%{opacity:.5}100%{transform:translateY(-360px) scale(.2);opacity:0}}
.st-p{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(56,224,208,.75),transparent 70%);pointer-events:none;animation:stPart var(--d) ease-in-out var(--dl) infinite}
@keyframes stRing{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.2);opacity:0}}
.st-ring::after{content:'';position:absolute;inset:-4px;border-radius:50%;border:1.5px solid rgba(56,224,208,.4);animation:stRing 2.8s ease-out infinite}
@keyframes stCdL{from{opacity:0;transform:translateX(-45px) scale(.96)}to{opacity:1;transform:translateX(0) scale(1)}}
@keyframes stCdR{from{opacity:0;transform:translateX(45px) scale(.96)}to{opacity:1;transform:translateX(0) scale(1)}}
.st-cl{animation:stCdL .65s cubic-bezier(.22,1,.36,1) forwards}
.st-cr{animation:stCdR .65s cubic-bezier(.22,1,.36,1) forwards}
@keyframes stBdg{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
.st-bdg{animation:stBdg .4s ease forwards}
.st-ec{position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.08);border-radius:14px;background:rgba(255,255,255,.04);backdrop-filter:blur(10px);padding:20px 24px;display:flex;align-items:flex-start;gap:16px;transition:transform .3s,box-shadow .3s,border-color .3s;flex:1;min-height:120px}
.st-ec::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(56,224,208,.05),transparent);transition:left .55s}
.st-ec:hover{transform:translateY(-2px);box-shadow:0 6px 28px rgba(0,0,0,.25),0 0 16px rgba(56,224,208,.06);border-color:rgba(56,224,208,.2)}
.st-ec:hover::before{left:100%}
.st-ec:hover .st-ico{transform:rotateY(180deg)}
.st-ico{flex-shrink:0;width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);transition:transform .5s;transform-style:preserve-3d}
.st-ip{display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border-radius:9999px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);backdrop-filter:blur(6px);color:rgba(255,255,255,.7);font-size:.82rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:all .3s}
.st-ip:hover{background:rgba(255,255,255,.1);border-color:rgba(56,224,208,.25);color:rgba(255,255,255,.9)}
.st-ip .a{font-size:1rem;line-height:1;transition:transform .3s}
.st-ip:hover .af{transform:translateX(2px)}.st-ip:hover .ab{transform:translateX(-2px)}
.st-mTabs{border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 10px 30px rgba(0,0,0,.18)}
.st-mTab{border-radius:9999px;padding:10px 16px;font-size:.78rem;font-weight:700;letter-spacing:.06em;transition:all .25s ease;color:rgba(255,255,255,.72)}
.st-mTab:hover{color:rgba(255,255,255,.9)}
.st-mTab.is-active{color:white;background:linear-gradient(135deg,rgba(56,224,208,.18),rgba(14,165,233,.14));border:1px solid rgba(56,224,208,.22);box-shadow:0 8px 22px rgba(56,224,208,.08)}
.st-mCue{border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
@keyframes stMuUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.st-mu{opacity:0}.st-mu.on{animation:stMuUp .6s cubic-bezier(.22,1,.36,1) forwards}
.st-mCard{position:relative;border-radius:18px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);overflow:hidden}
.st-mCard::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(56,224,208,.10),rgba(14,165,233,.06),transparent 60%);pointer-events:none;opacity:.9}
.strength-stage{transition:opacity .35s ease,transform .35s ease}
.strength-stage.is-show{opacity:1;pointer-events:auto;transform:none}
.strength-stage.is-hide{opacity:0;pointer-events:none;position:absolute;inset:0;transform:translateY(10px)}

/* ══ RESPONSIVE ══ */
@media(max-width:1024px){
  .svs-grid4{grid-template-columns:repeat(2,1fr)}
  .svs-grid3{grid-template-columns:repeat(2,1fr);max-width:100%}
  .svs-flow-top{grid-template-columns:repeat(2,1fr);row-gap:20px}
  .svs-flow-top::before{display:none}
  .svs-flow-stem{display:none}
}
@media(max-width:640px){
  .svs-grid4{grid-template-columns:1fr;gap:0;max-width:100%;margin:0}
  .svs-grid3{grid-template-columns:1fr;gap:12px;max-width:100%;margin:0}
  .svs-flow-top{display:none !important}
  .svs-flow{position:static}
  .svs-vline{display:none !important}
  .svs-connector{display:flex;flex-direction:column;align-items:center;margin:2px 0}
  .svs-connector-line{width:2px;height:16px;background:linear-gradient(180deg,#38e0d0,rgba(56,224,208,.2));border-radius:2px}
  .svs-connector-dot{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,#38e0d0,#0ea5e9);box-shadow:0 0 0 3px rgba(56,224,208,.2),0 0 10px rgba(56,224,208,.5);flex-shrink:0}
  .svs-c{border-color:transparent !important;padding:18px 16px}
  .svs-c h3{font-size:1.05rem !important;padding-right:20px !important}
  .svs-grp{margin-top:28px;margin-bottom:12px;padding-left:0;justify-content:center}
  .svs-gl{display:none}
  .svs-gb{font-size:.72rem !important;padding:7px 16px !important;letter-spacing:.05em !important}
  .svs-dtl{padding:20px 16px;border-radius:16px}
  .svs-dg{grid-template-columns:1fr !important;gap:0 !important}
  .svs-sidebar-desk{display:none !important}
  .svs-mdd{display:block}
  .svs-bdg-wrap{display:none !important}
  .svs-stats-row{flex-direction:column !important;gap:16px !important}
  .svs-stat-sep{display:none}
  .svs-sec-div{margin:48px 0}
}
@media(min-width:641px){.svs-connector{display:none}}
@media(max-width:768px){.st-mobileTabsWrap{position:relative;z-index:20}.st-mobileCubeWrap{position:relative;z-index:10}}
`;
  document.head.appendChild(s);
}

/* ══════════════════════════════════════════
   useScrollReveal — triggers .on when element enters viewport
══════════════════════════════════════════ */
function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); ob.disconnect(); } }, { threshold });
    ob.observe(el);
    return () => ob.disconnect();
  }, []);
  return [ref, on];
}

/* ══════════════════════════════════════════
   Data
══════════════════════════════════════════ */
const SVC = [
  { id:"pmp", n:"", t:"Process Management Platform", ic:PMT, tags:["BPM","Process"], group:"auto",
    summary:'จัดการ "กระบวนการทำงาน" จากรูปแบบเอกสาร กระดาษหรือ Visio ให้สามารถบริหาร จัดเก็บ และปรับปรุงกระบวนการได้ผ่านระบบเดียว',
    detail:"เพื่อให้ทุกคนในองค์กรเห็นภาพการทำงานเดียวกันและสามารถพัฒนา Process ได้อย่างต่อเนื่องในอนาคต",
    features:["เปลี่ยนความซับซ้อนของแผนผังกระบวนการ ข้อมูลที่กระจัดกระจาย (Silos) เอกสาร หรือไฟล์ Visio ที่ดูยาก ให้กลายเป็นกระบวนการทำงานที่เป็นระบบ สามารถจัดการและเข้าถึงได้ง่ายขึ้น","ค้นหา เจาะลึก และควบคุมกระบวนการทำงานของคุณให้เป็นมาตรฐาน ถูกต้องตามข้อกำหนด (Compliance) ทำงานร่วมกันได้ราบรื่น พร้อมสำหรับการปรับปรุงและรองรับทุกการเปลี่ยนแปลง","รักษาประสิทธิภาพการทำงาน ลดความเสี่ยง Knowledge Loss เมื่อพนักงานลาออกหรือหยุดงานยาว","ติดตามสถานะได้แบบเรียลไทม์ ตรวจสอบได้ทันทีว่ารายการใดเผยแพร่แล้ว รอดำเนินการ หรือรอการตรวจสอบ","ใช้เป็นฐานข้อมูลสำหรับต่อยอดในการนำระบบ Automation หรือ RPA มาปรับใช้ในองค์กร"] },
  { id:"rpa", n:"", t:"Robotic Process Automation", ic:RPA, tags:["Automation","RPA"], group:"auto",
    summary:"หุ่นยนต์ซอฟต์แวร์ (Bot) ที่ช่วยทำงานซ้ำๆ บนคอมพิวเตอร์ ทำหน้าที่เป็น ผู้ช่วยส่วนตัวอัตโนมัติของเราตลอด 24 ชั่วโมง",
    detail:"สามารถทำงานตามการ คลิ๊กเมาส์ หรือ กดคีย์บอร์ด ของเราได้ ในงานที่มีรูปแบบซ้ำๆเดิมๆหรือว่างาน Routine ที่เราต้องทำประจำทุกวัน , สัปดาห์ หรือเดือน Bot สามารถช่วยเราทำได้ทุกขั้นตอนอย่างแม่นยำ และรวดเร็ว",
    features:["ดำเนินการขั้นตอน ตามเงื่อนไขเวลา และเหตุการณ์ที่กำหนดใว้ ","ดำเนินการขั้นตอนซ้ำๆ ใช้เวลานาน ให้ทำเสร็จเร็วขึ้น ","อ่านข้อมูลจากระบบต้นทาง และบันทึกข้อมูลเข้าสู่ระบบอื่นๆ","เชื่อมโยง และแลกเปลี่ยนฟิลด์ข้อมูลระหว่างหลายๆ ระบบได้ ","ช่วยแนะนำขั้นตอนการใช้งาน Application ที่ถูกต้อง (Guide Me Mode)"] },
  { id:"dsai", n:"", t:"Domain-Specific Generative AI", ic:AI, tags:["AI","Generative"], group:"auto",
    summary:"AI ที่ถูกออกแบบให้เข้าใจ บริบทเฉพาะขององค์กร โดยทำงานบนฐานข้อมูลและโครงสร้างความรู้เฉพาะทางภายในองค์กร",
    detail:"ช่วยให้องค์กรสามารถใช้ Generative AI เพื่อ วิเคราะห์ข้อมูล สรุปความรู้ และสนับสนุนการตัดสินใจ ได้อย่างมีประสิทธิภาพ และสอดคล้องกับกระบวนการทำงานจริง ",
    features:["สร้าง AI Knowledge Assistant สำหรับองค์กร ","วิเคราะห์และสรุปข้อมูลจากเอกสารจำนวนมากได้อัตโนมัติ ","ค้นหาข้อมูลจาก Knowledge Base ขององค์กรได้อย่างแม่นยำ ","ทำงานร่วมกับ Document Control และ Process Framework ","รองรับการเชื่อมต่อกับระบบองค์กร เช่น ERP, Workflow และ Database ","สร้าง AI Chat Interface สำหรับการค้นหาความรู้ภายในองค์กร "] },
  { id:"lcbo", n:"", t:"Low-Code Business Orchestrator", ic:LPM, tags:["Low-Code","Workflow"], group:"auto",
    summary:"แพลตฟอร์มสำหรับพัฒนา Application และ Workflow ภายในองค์กรได้อย่างรวดเร็ว โดยใช้การออกแบบแบบ Visual Model ",
    detail:"แทนการเขียนโค้ดจำนวนมาก ช่วยให้องค์กรสามารถสร้างระบบดิจิทัลที่สอดคล้องกับกระบวนการทำงานจริง โดยไม่ต้องพัฒนาซอฟต์แวร์แบบ Traditional ที่ใช้เวลานานและมีความซับซ้อนสูง",
    features:["ออกแบบ Workflow และ Application ด้วย Visual Process Model","สร้างฟอร์ม ระบบอนุมัติ และ Workflow Automation ได้อย่างรวดเร็ว","จัดการเอกสารและข้อมูลภายในระบบอย่างเป็นโครงสร้าง","ติดตามสถานะงาน และวิเคราะห์ข้อมูลผ่าน Dashboard","รองรับการพัฒนา Application สำหรับหน่วยงานเฉพาะทาง เช่น Quality, Safety, Risk, Audit, Maintenance เป็นต้น"] },
  { id:"qmp", n:"", t:"Quality Management Platform", ic:QMS, tags:["Quality","Compliance"], group:"ops",
    summary:"แพลตฟอร์มที่ช่วยองค์กรบริหารจัดการคุณภาพ ควบคุม และยกระดับมาตรฐานการทำงานแบบครบวงจร",
    detail:"เพื่อให้มั่นใจว่าทุกกระบวนการสอดคล้องกับมาตรฐานสากล (เช่น ISO) และข้อกำหนดทางกฎหมายอย่างถูกต้อง โดยเปลี่ยนการทำงานที่กระจัดกระจายให้เป็นระบบอัตโนมัติที่สามารถตรวจสอบได้จริง",
    features:["Version Control & History Tracking: ระบบสามารถจัดการเวอร์ชันเอกสารให้อัตโนมัติและเก็บประวัติว่าใครแก้ แก้เมื่อไหร่ เพื่อป้องกันความสับสนจากการใช้เอกสารผิดเวอร์ชั่น ","ช่่วยให้ตรวจสอบได้ว่าเอกสารหรือข้อมูลต่าง ๆ ใครเป็นผู้แก้ไขและแก้ไขเมื่อใด เพื่อป้องกันความสับสนและตรวจสอบความถูกต้องของข้อมูลได้ตลอดเวลา","Executive Dashboard & Analytics: หน้าจอสรุปผลแบบกราฟิกเรียลไทม์ เพื่อให้ผู้บริหารเห็นภาพรวมของการดำเนินงานได้ทันทีโดยไม่ต้องรอรายงานสรุปแบบเดิม ","Email & In-App Notifications: ระบบแจ้งเตือนที่รวดเร็ว เพื่อลดปัญหาคอขวดในการรอคอยงาน","Enterprise Security & SSO (Single Sign-On): รองรับการล็อกอินด้วยบัญชีเดิมของบริษัท (เช่น Microsoft 365 หรือ Active Directory) และมีการกำหนดสิทธิ์การเข้าถึงข้อมูล (Role-Based Access Control) อย่างรัดกุม "] },
  { id:"scr", n:"", t:"Supply Chain Resilience", ic:SPC, tags:["Supply Chain","Digital"], group:"ops",
    summary:"แนวทางในการออกแบบและบริหาร ห่วงโซ่อุปทานให้สามารถรับมือกับความไม่แน่นอนและความเสี่ยงได้อย่างมีประสิทธิภาพ",
    detail:"ช่วยให้องค์กรสามารถติดตามสถานะของวัตถุดิบ สินค้า และกระบวนการจัดซื้อจัดจ้างได้แบบ Real-Time",
    features:["ติดตามสถานะคำสั่งซื้อและการจัดส่งสินค้าแบบ Real-Time","บริหารจัดการ Supplier และ Vendor Performance","วิเคราะห์ความเสี่ยงใน Supply Chain","Dashboard สำหรับติดตาม Inventory และ Logistics","เชื่อมโยงข้อมูลกับระบบ ERP และระบบจัดซื้อ","แจ้งเตือนความผิดปกติในกระบวนการ Supply Chain"] },
  { id:"erp", n:"", t:"ERP Workspace", ic:ERP, tags:["ERP","Workspace"], group:"ops",
    summary:"แพลตฟอร์มสำหรับ รวมการทำงานของระบบ ERP และ Application ต่างๆ ขององค์กรไว้ในพื้นที่เดียว",
    detail:"ช่วยให้ผู้ใช้งานสามารถเข้าถึงข้อมูล กระบวนการทำงาน และระบบต่างๆ ได้จาก Interface เดียว ลดความซับซ้อนของการใช้งานหลายระบบ",
    features:["Dashboard สำหรับติดตามข้อมูลธุรกิจจากหลายระบบ","เชื่อมต่อข้อมูลจาก ERP และระบบอื่นๆ ขององค์กร","ระบบค้นหาข้อมูลและเอกสารจากหลายระบบ","กำหนดสิทธิ์การเข้าถึงข้อมูลตามบทบาทของผู้ใช้งาน","รองรับการใช้งานผ่าน Web และ Mobile"] },
];
const AUTO_GROUP = SVC.filter(s => s.group === "auto");
const OPS_GROUP  = SVC.filter(s => s.group === "ops");

/* ══════════════════════════════════════════
   Sub-components
══════════════════════════════════════════ */
function Ico({ src, size = 28, style = {} }) {
  return <img src={src} alt="" width={size} height={size} style={{ display:"block", objectFit:"contain", ...style }} />;
}

function Particles({ n = 16 }) {
  const d = useMemo(() => Array.from({ length: n }, () => ({
    l:`${Math.random()*100}%`, b:`${Math.random()*25}%`,
    d:`${7+Math.random()*7}s`, dl:`${Math.random()*5}s`, s:`${2+Math.random()*2.5}px`,
  })), [n]);
  return <>{d.map((p, i) => <div key={i} className="st-p" style={{ left:p.l, bottom:p.b, width:p.s, height:p.s, "--d":p.d, "--dl":p.dl }} />)}</>;
}

function GrpHead({ label, on, delay = 0 }) {
  return (
    <div className={`svs-grp svs-grp-rv ${on ? "on" : ""}`} style={{ animationDelay:`${delay}ms` }}>
      <div className="svs-gl" /><div className="svs-gb">{label}</div><div className="svs-gl r" />
    </div>
  );
}

function GCard({ item, idx, onClick, on }) {
  const ref = useRef(null);
  const onMv = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `perspective(700px) rotateX(${((e.clientY-r.top)/r.height-0.5)*-5}deg) rotateY(${((e.clientX-r.left)/r.width-0.5)*5}deg) translateZ(4px)`;
  }, []);
  const onLv = useCallback(() => { if (ref.current) ref.current.style.transform = ""; }, []);
  return (
    <div ref={ref} className={`svs-c svs-rv ${on ? "on" : ""}`} style={{ animationDelay:`${idx*80}ms` }}
      onClick={onClick} onMouseMove={onMv} onMouseLeave={onLv}>
      <span className="svs-n">{item.n}</span>
      <div className="svs-ic"><Ico src={item.ic} size={30} /><div className="svs-ir" /></div>
      <h3 style={{ marginTop:14, fontSize:"1.08rem", fontWeight:800, color:"#ffffff", lineHeight:1.35, paddingRight:28 }}>{item.t}</h3>
      <div style={{ display:"flex", gap:5, marginTop:10, flexWrap:"wrap" }}>
        {item.tags.map(t => <span key={t} className="svs-tg">{t}</span>)}
      </div>
      <p style={{ marginTop:11, fontSize:".9rem", lineHeight:1.7, color:"rgba(255,255,255,.65)" }}>{item.summary}</p>
      <div style={{ marginTop:14, fontSize:".8rem", fontWeight:700, background:"linear-gradient(135deg,#38e0d0,#0ea5e9)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", display:"flex", alignItems:"center", gap:4 }}>
        ดูรายละเอียด <span style={{ WebkitTextFillColor:"#38e0d0" }}>›</span>
      </div>
    </div>
  );
}

function MobDD({ items, activeId, onSelect }) {
  const [open, setOpen] = useState(false);
  const active = items.find(s => s.id === activeId);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("pointerdown", h);
    return () => document.removeEventListener("pointerdown", h);
  }, [open]);
  return (
    <div className="svs-mdd" ref={ref}>
      <button type="button" className="svs-mdd-btn" onClick={() => setOpen(o => !o)}>
        <span style={{ display:"flex", alignItems:"center", gap:8 }}>
          <Ico src={active?.ic} size={20} />
          <span style={{ color:"rgba(255,255,255,.9)" }}>{active?.t}</span>
        </span>
        <span className={`svs-mdd-arr ${open ? "op" : ""}`}>▾</span>
      </button>
      <div className={`svs-mdd-list ${open ? "op" : ""}`}>
        {items.map(s => (
          <div key={s.id} className={`svs-mdd-item ${s.id === activeId ? "act" : ""}`} onClick={() => { onSelect(s.id); setOpen(false); }}>
            <Ico src={s.ic} size={18} style={{ flexShrink:0 }} /><span>{s.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Strength card */
function EC({ item, dir = "left", dl = 0, on = false }) {
  return (
    <div className={`st-ec ${on ? (dir==="left" ? "st-cl" : "st-cr") : ""}`}
      style={{ animationDelay:`${dl}ms`, opacity:on ? undefined : 0, animationFillMode:"forwards" }}>
      <div className={`st-ico ${on ? "st-ring" : ""}`}>
        <img src={item.icon} alt="" className="h-8 w-8 select-none" draggable={false} />
      </div>
      <div>
        <div className="font-semibold text-white text-[.95rem]">{item.title}</div>
        <div className="mt-1 text-sm leading-relaxed text-white/65">{item.tooltip}</div>
      </div>
    </div>
  );
}

function MobileKeysList({ items, inV = false }) {
  return (
    <div className="md:hidden space-y-3">
      {items.map((it, idx) => (
        <div key={it.id} className={`st-mCard p-4 st-mu ${inV ? "on" : ""}`} style={{ animationDelay:`${180+idx*90}ms` }}>
          <div className="relative z-[1] flex items-start gap-3">
            <div className="mt-[2px] grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 shadow-sm">
              <img src={it.icon} alt="" className="h-5 w-5 select-none" draggable={false} />
            </div>
            <div className="min-w-0">
              <div className="text-[.95rem] font-semibold text-white/90">{it.title}</div>
              <div className="mt-1 text-sm leading-relaxed text-white/70">{it.tooltip}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function SectionServiceAndSolutions() {
  useEffect(() => { injectCSS(); }, []);

  /* ── service state ── */
  const [view, setView]   = useState("grid");
  const [vk,   setVk]     = useState(0);
  const go = useCallback(v => { setView(v); setVk(k => k+1); }, []);
  const ai = SVC.find(s => s.id === view);

  /* ── strengths state ── */
  const [stView, setStView] = useState("full");
  const [stVk,   setStVk]   = useState(0);
  const goSt = useCallback(v => { setStView(v); setStVk(k => k+1); }, []);
  const mobileView = (stView === "center" || stView === "full") ? "trust" : stView;

  const keys = useMemo(() => [
    { id:"simplicity", title:"Simplicity", icon:simplifyIco,   tooltip:"เราเชื่อในระบบที่ใช้งานง่าย ช่วยให้ผู้ใช้เข้าใจกระบวนการ และทำงานได้ด้วยตนเองอย่างมีประสิทธิภาพ" },
    { id:"rapidly",    title:"Rapidly",    icon:rapidlyIco,    tooltip:"ให้ความสำคัญและตอบรับกับการเปลี่ยนแปลงทางธุรกิจที่เป็นไปอย่างรวดเร็วในปัจจุบัน" },
    { id:"experience", title:"Experience", icon:experienceIco, tooltip:"เรานำเสนอโซลูชั่นที่มีคุณภาพ เหมาะสมกับความต้องการ ตอบโจทย์ผู้ใช้งานได้อย่างตรงจุด และคุ้มค่ากับการลงทุน" },
    { id:"platform",   title:"Platform",   icon:platformIco,   tooltip:"แพลตฟอร์มที่เชื่อถือได้และยืดหยุ่น รองรับโซลูชั่นหลากหลาย เพิ่มคุณภาพการทำงานและขยายศักยภาพทางธุรกิจ" },
    { id:"services",   title:"Services",   icon:heartIco,      tooltip:"บริการครบวงจร ครอบคลุมการบูรณาการเทคโนโลยี เพื่อยกระดับการทำงานในองค์กร และตอบโจทย์ทางธุรกิจ" },
    { id:"consulting", title:"Consulting", icon:consultIco,    tooltip:"ที่ปรึกษามืออาชีพ ให้คำแนะนำ รวมทั้งช่วยวางแผน และขับเคลื่อนกลยุทธ์ด้วยความมั่นใจ" },
  ], []);
  const trustC = useMemo(() => [keys[0], keys[1], keys[2]], [keys]);
  const provC  = useMemo(() => [keys[3], keys[4], keys[5]], [keys]);

  /* ── scroll reveals (separate observers per block) ── */
  const [svcRef,  svcOn]  = useScrollReveal(0.06);
  const [divRef,  divOn]  = useScrollReveal(0.3);
  const [stRef,   stOn]   = useScrollReveal(0.1);
  const [statRef, statOn] = useScrollReveal(0.3);

  /* ── parallax bg ── */
  const bgRef = useRef(null);
  const tgt = useRef({ x:50, y:50 });
  const cur = useRef({ x:50, y:50 });
  useEffect(() => {
    const el = bgRef.current; if (!el) return;
    let raf = 0;
    const lr = (a,b,t) => a+(b-a)*t;
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
  const onMouseMove = useCallback(e => {
    const r = e.currentTarget.getBoundingClientRect(), s = 0.35;
    tgt.current.x = 50+(((e.clientX-r.left)/r.width)*100-50)*s;
    tgt.current.y = 50+(((e.clientY-r.top)/r.height)*100-50)*s;
  }, []);

  return (
    <section className="relative isolate overflow-hidden strength-dark" style={{ contain:"paint" }} onMouseMove={onMouseMove}>
      <img src={stBg} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover opacity-60" />
      <div ref={bgRef} className="strength-dark__bg pointer-events-none absolute inset-0 -z-20" />

      {/* ════════════ SERVICES ════════════ */}
      <div ref={svcRef} style={{ position:"relative", zIndex:1, maxWidth:1180, margin:"0 auto", padding:"80px 24px 60px" }}>

        {/* Header */}
        <div className={`svs-hdr ${svcOn ? "on" : ""}`} style={{ textAlign:"center" }}>
          <span style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"7px 16px", borderRadius:9999, border:"1px solid rgba(255,255,255,.18)", background:"rgba(255,255,255,.07)", backdropFilter:"blur(6px)", fontSize:".72rem", fontWeight:400, letterSpacing:".12em", color:"rgba(255,255,255,.85)" }}>
            <span style={{ width:8, height:8, borderRadius:"50%", background:"#6ee7b7", flexShrink:0 }} />
            SERVICES &amp; SOLUTIONS
          </span>
          <h2 style={{ marginTop:20, fontSize:"clamp(1.6rem,4vw,2.5rem)", fontWeight:800, letterSpacing:"-.02em", color:"white", lineHeight:1.15 }}>
            โซลูชั่นครบวงจรเพื่อ{" "}
            <span style={{ background:"linear-gradient(to right,#7dd3fc,#6ee7b7)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>ธุรกิจยุคใหม่</span>
          </h2>
          <p style={{ marginTop:16, maxWidth:580, marginLeft:"auto", marginRight:"auto", fontSize:"clamp(.88rem,1vw,1rem)", lineHeight:1.75, color:"rgba(255,255,255,.78)" }}>
            โซลูชั่นที่ออกแบบมาเพื่อเปลี่ยนกระบวนการทำงานให้ชาญฉลาดยิ่งขึ้น ด้วย AI และ Automation ที่ตอบโจทย์ทุกความต้องการทางธุรกิจ
          </p>
        </div>

        {/* Stages */}
        <div style={{ marginTop:52, position:"relative" }}>
          {/* GRID */}
          <div className={`svs-stage ${view === "grid" ? "show" : "hide"}`}>
            <GrpHead label="TRANSFORMING PROCESSES INTO INTELLIGENT AI" on={svcOn} delay={0} />
            <div className="svs-flow">
              <div className={`svs-vline ${svcOn ? "on" : ""}`} />
              <div className={`svs-flow-top ${svcOn ? "on" : ""}`}>
                {AUTO_GROUP.map((it, i) => (
                  <div key={it.id} className="svs-flow-node">
                    <div className={`svs-flow-node-rv ${svcOn ? "on" : ""}`} style={{ animationDelay:`${i*100}ms` }}>
                      <div className="svs-flow-circle">{i+1}</div>
                    </div>
                    <div className={`svs-flow-stem svs-flow-stem-rv ${svcOn ? "on" : ""}`} style={{ animationDelay:`${i*100+180}ms` }} />
                  </div>
                ))}
              </div>
              <div className="svs-grid4">
                {AUTO_GROUP.map((it, i) => (
                  <React.Fragment key={it.id}>
                    {i > 0 && <div className="svs-connector"><div className="svs-connector-dot" /><div className="svs-connector-line" /></div>}
                    <GCard item={it} idx={i} onClick={() => go(it.id)} on={svcOn} />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className={`svs-divider svs-grp-rv ${svcOn ? "on" : ""}`} style={{ animationDelay:"250ms" }}>
              <div className="svs-divider-line" /><div className="svs-divider-dot" /><div className="svs-divider-line" />
            </div>
            <GrpHead label="ENTERPRISE OPERATIONS & PLATFORMS" on={svcOn} delay={350} />
            <div className="svs-grid3">
              {OPS_GROUP.map((it, i) => <GCard key={it.id} item={it} idx={i+4} onClick={() => go(it.id)} on={svcOn} />)}
            </div>
          </div>

          {/* DETAIL */}
          {ai && (
            <div className={`svs-stage ${view !== "grid" ? "show" : "hide"}`} key={`d-${vk}`}>
              <div className="svs-bdg-wrap" style={{ display:"flex", justifyContent:"center", marginBottom:20 }} />
              <MobDD items={SVC} activeId={ai.id} onSelect={id => go(id)} />
              <div className="svs-dg" style={{ display:"grid", gridTemplateColumns:"260px 1fr", gap:24, maxWidth:960, margin:"0 auto", alignItems:"start" }}>
                <div className="svs-dl svs-sidebar-desk" style={{ display:"flex", flexDirection:"column", gap:4 }}>
                  {SVC.map(s => (
                    <div key={s.id} className={`svs-sli ${s.id === ai.id ? "act" : ""}`} onClick={() => go(s.id)}>
                      <div style={{ width:34, height:34, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", background:s.id===ai.id?"rgba(56,224,208,.14)":"rgba(255,255,255,.07)", flexShrink:0, transition:"background .2s" }}>
                        <Ico src={s.ic} size={20} />
                      </div>
                      <div style={{ fontSize:".82rem", fontWeight:600, lineHeight:1.3, color:"#ffffff" }}>{s.t}</div>
                    </div>
                  ))}
                  <div style={{ marginTop:12 }}>
                    <button className="svs-np" onClick={() => go("grid")} type="button"><span className="ar ab">‹</span> ย้อนกลับ</button>
                  </div>
                </div>
                <div className="svs-dr svs-dtl">
                  <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                    <div style={{ width:54, height:54, borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(56,224,208,.12)", border:"1px solid rgba(56,224,208,.24)", flexShrink:0 }}>
                      <Ico src={ai.ic} size={32} />
                    </div>
                    <div>
                      <div style={{ fontSize:".68rem", fontWeight:700, background:"linear-gradient(135deg,#38e0d0,#0ea5e9)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", letterSpacing:".07em", textTransform:"uppercase" }}>Service {ai.n}</div>
                      <h3 style={{ fontSize:"clamp(1.05rem,2.5vw,1.28rem)", fontWeight:800, color:"#ffffff", lineHeight:1.3, marginTop:3 }}>{ai.t}</h3>
                    </div>
                  </div>
                  <div style={{ display:"flex", gap:6, marginTop:14, flexWrap:"wrap" }}>
                    {ai.tags.map(t => <span key={t} className="svs-tg">{t}</span>)}
                  </div>
                  <p style={{ marginTop:16, fontSize:"clamp(.9rem,.95vw,.96rem)", fontWeight:400, lineHeight:1.85, color:"#ffffffa1" }}>{ai.summary} {ai.detail}</p>
                  <div style={{ height:1, background:"linear-gradient(90deg,transparent,rgba(56,224,208,.18),rgba(14,165,233,.12),transparent)", margin:"20px 0" }} />
                  <div style={{ fontSize:".72rem", fontWeight:700, background:"linear-gradient(135deg,#38e0d0,#0ea5e9)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", letterSpacing:".06em", textTransform:"uppercase", marginBottom:10 }}>Key Features</div>
                  <div>
                    {ai.features.map((f, i) => (
                      <div key={i} className="svs-feat">
                        <div style={{ width:24, height:24, borderRadius:7, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(56,224,208,.12)", color:"rgba(180,245,240,1)", fontSize:".7rem", fontWeight:800, flexShrink:0, marginTop:1, border:"1px solid rgba(56,224,208,.22)" }}>{String(i+1).padStart(2,"0")}</div>
                        <div style={{ fontSize:".9rem", color:"#ffffff", lineHeight:1.65, fontWeight:500 }}>{f}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        {view === "grid" && (
          <div ref={statRef} className="svs-stats-row" style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:0, marginTop:68, flexWrap:"wrap" }}>
            {[{ v:"10+", l:"Solutions" }, { v:"10+", l:"Enterprise Clients" }, { v:"50+", l:"Enterprise Projects" }].map((st, i) => (
              <React.Fragment key={st.l}>
                {i > 0 && <div className="svs-stat-sep" />}
                <div className={`svs-st ${statOn ? "on" : ""}`} style={{ textAlign:"center", padding:"0 48px", animationDelay:`${0.8+i*0.12}s` }}>
                  <div style={{ fontSize:"clamp(1.5rem,3vw,2rem)", fontWeight:800, background:"linear-gradient(135deg,#38e0d0,#0ea5e9)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{st.v}</div>
                  <div style={{ fontSize:".82rem", color:"rgba(255,255,255,.6)", marginTop:4, fontWeight:500, letterSpacing:".04em" }}>{st.l}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* ════════════ DIVIDER ════════════ */}
      <div ref={divRef} style={{ maxWidth:1180, margin:"0 auto", padding:"0 24px" }}>
        <div className="svs-sec-div">
          <div className={`svs-sec-div-line ${divOn ? "on" : ""}`} />
          <div className="svs-sec-div-icon" />
          <div className={`svs-sec-div-line ${divOn ? "on" : ""}`} style={{ animationDelay:"0.05s" }} />
        </div>
      </div>

      {/* ════════════ STRENGTHS ════════════ */}
      <div ref={stRef} style={{ position:"relative", zIndex:1, maxWidth:1180, margin:"0 auto", padding:"0 24px 100px" }}>
        {stOn && <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"><Particles /></div>}

        {/* Header */}
        <div className="flex flex-col items-center text-center"
          style={{ opacity:stOn?1:0, transform:stOn?"translateY(0)":"translateY(24px)", transition:"opacity .7s ease, transform .7s ease" }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-widest text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />OUR STRENGTHS
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Why Businesses Choose{" "}
            <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Aileen Solutions</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            6 Keys to Value — เราเชื่อมั่นในสิ่งที่ทำ และมุ่งส่งมอบคุณค่าให้กับองค์กร ผ่านโซลูชั่น แพลตฟอร์ม บริการ และการให้คำปรึกษาที่เชื่อถือได้
          </p>
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden mt-8 flex justify-center st-mobileTabsWrap">
          <div className="st-mTabs inline-flex rounded-full p-1">
            <button type="button" onClick={() => goSt("trust")}   className={`st-mTab ${mobileView==="trust"?"is-active":""}`}>Trust By</button>
            <button type="button" onClick={() => goSt("provide")} className={`st-mTab ${mobileView==="provide"?"is-active":""}`}>Provide To</button>
          </div>
        </div>

        {/* Stages */}
        <div className="mt-10 md:mt-14 relative">
          {/* Mobile */}
          <div className="md:hidden">
            <div className="flex justify-center mb-5">
              {mobileView==="trust"
                ? <span className="st-mCue inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/80"><span className="h-2 w-2 rounded-full bg-emerald-300"/>Trust By — สิ่งที่เรายึดมั่น</span>
                : <span className="st-mCue inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/80"><span className="h-2 w-2 rounded-full bg-sky-300"/>Provide To — สิ่งที่เราส่งมอบ</span>}
            </div>
            {mobileView==="trust"
              ? <MobileKeysList key="m-trust"   items={trustC} inV={stOn} />
              : <MobileKeysList key="m-provide" items={provC}  inV={stOn} />}
          </div>

          {/* Desktop: Full */}
          <div className={`strength-stage hidden md:block ${stView==="full"?"is-show":"is-hide"}`}>
            <div className="relative mx-auto max-w-6xl" key={`f${stVk}`}>
              <div className="grid md:grid-cols-[1fr_280px_1fr] gap-8 mb-6">
                <div className={`flex justify-center svs-rv ${stOn?"on":""}`} style={{ animationDelay:"0ms" }}>
                  <span className="st-bdg inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/>Trust By — สิ่งที่เรายึดมั่น
                  </span>
                </div>
                <div />
                <div className={`flex justify-center svs-rv ${stOn?"on":""}`} style={{ animationDelay:"100ms" }}>
                  <span className="st-bdg inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-5 py-2 text-sm font-medium text-sky-300 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse"/>Provide To — สิ่งที่เราส่งมอบ
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-[1fr_280px_1fr] items-stretch gap-8">
                <div className="flex flex-col gap-4">{trustC.map((it,i) => <EC key={it.id} item={it} dir="left"  dl={i*120} on={stView==="full"} />)}</div>
                <div className={`flex items-center justify-center svs-rvS ${stOn?"on":""}`} style={{ minHeight:340, animationDelay:"200ms" }}>
                  <img src={cubeImg} alt="Cube" className={`w-[240px] select-none ${stOn?"st-cube-anim":""}`} draggable={false} style={{ filter:"drop-shadow(0 0 24px rgba(56,224,208,.25))" }} />
                </div>
                <div className="flex flex-col gap-4">{provC.map((it,i) => <EC key={it.id} item={it} dir="right" dl={i*120} on={stView==="full"} />)}</div>
              </div>
              <div className={`flex justify-center items-center gap-3 mt-10 svs-rv ${stOn?"on":""}`} style={{ animationDelay:"400ms" }}>
                <button className="st-ip" onClick={() => goSt("trust")}   type="button"><span className="a ab">‹</span> Trust By</button>
                <button className="st-ip" onClick={() => goSt("provide")} type="button">Provide To <span className="a af">›</span></button>
              </div>
            </div>
          </div>

          {/* Desktop: Trust */}
          <div className={`strength-stage hidden md:block ${stView==="trust"?"is-show":"is-hide"}`}>
            {stView==="trust" && (
              <div className="flex justify-center mb-8">
                <span className="st-bdg inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/>Trust By — สิ่งที่เรายึดมั่น
                </span>
              </div>
            )}
            <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2" key={`t${stVk}`}>
              <div className="space-y-4">{trustC.map((it,i) => <EC key={it.id} item={it} dir="left" dl={i*140} on={stView==="trust"} />)}</div>
              <div className="relative flex flex-col items-center gap-8">
                <img src={cubeImg} alt="Cube" className={`w-[300px] select-none ${stOn?"st-cube-anim":""}`} draggable={false} style={{ filter:"drop-shadow(0 0 24px rgba(56,224,208,.25))" }} />
                <div className="flex items-center gap-3">
                  <button className="st-ip" onClick={() => goSt("full")}    type="button"><span style={{ fontSize:"1rem",marginRight:"2px" }}>↩</span> Return</button>
                  <button className="st-ip" onClick={() => goSt("provide")} type="button">Provide To <span className="a af">›</span></button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Provide */}
          <div className={`strength-stage hidden md:block ${stView==="provide"?"is-show":"is-hide"}`}>
            {stView==="provide" && (
              <div className="flex justify-center mb-8">
                <span className="st-bdg inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-5 py-2 text-sm font-medium text-sky-300 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse"/>Provide To — สิ่งที่เราส่งมอบ
                </span>
              </div>
            )}
            <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2" key={`p${stVk}`}>
              <div className="relative flex flex-col items-center gap-8">
                <img src={cubeImg} alt="Cube" className={`w-[300px] select-none ${stOn?"st-cube-anim":""}`} draggable={false} style={{ filter:"drop-shadow(0 0 24px rgba(56,224,208,.25))" }} />
                <div className="flex items-center gap-3">
                  <button className="st-ip" onClick={() => goSt("trust")} type="button"><span className="a ab">‹</span> Trust By</button>
                  <button className="st-ip" onClick={() => goSt("full")}  type="button"><span style={{ fontSize:"1rem",marginRight:"2px" }}>↩</span> Return</button>
                </div>
              </div>
              <div className="space-y-4">{provC.map((it,i) => <EC key={it.id} item={it} dir="right" dl={i*140} on={stView==="provide"} />)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}