import React, { useEffect, useRef, useState, useCallback } from "react";
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
.svs-c{position:relative;overflow:hidden;background:rgba(255,255,255,.09);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.16);border-radius:18px;padding:26px 22px 22px;cursor:pointer;transform-style:preserve-3d;will-change:transform;transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .3s,border-color .3s}
.svs-c::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(56,224,208,.07),transparent);transition:left .55s;pointer-events:none}

.svs-c:hover::after{left:100%}

/* icon */
.svs-ic{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;position:relative;background:rgba(56,224,208,.1);border:1px solid rgba(56,224,208,.2);transition:transform .5s cubic-bezier(.22,1,.36,1),box-shadow .4s;flex-shrink:0}
.svs-c:hover .svs-ic{transform:scale(1.08) rotate(-4deg);box-shadow:0 4px 18px rgba(56,224,208,.22)}
.svs-ir{position:absolute;inset:0;border-radius:14px;border:2px solid rgba(56,224,208,.5);opacity:0;pointer-events:none}
@keyframes svsIcR{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.1);opacity:0}}
.svs-c:hover .svs-ir{animation:svsIcR 1s ease-out}

/* number ghost */
.svs-n{position:absolute;top:14px;right:16px;font-size:2.8rem;font-weight:900;line-height:1;color:rgba(56,224,208,.08);pointer-events:none}

/* tag */
.svs-tg{display:inline-flex;align-items:center;padding:4px 12px;border-radius:7px;font-size:.72rem;font-weight:700;letter-spacing:.02em;background:rgba(56,224,208,.14);color:rgba(200,250,246,1);border:1px solid rgba(56,224,208,.3)}

/* reveal — เบาลง: แค่ fade, ไม่มี blur/scale */
@keyframes svsRv{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.svs-rv{opacity:0}.svs-rv.on{animation:svsRv .5s ease forwards}

/* ── section divider — mobile only ── */
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
.svs-flow-top::before{
  content:'';position:absolute;top:25px;
  left:calc(100%/8);right:calc(100%/8);
  height:2px;
  background:linear-gradient(90deg,#38e0d0,#0ea5e9,#38e0d0);
  box-shadow:0 0 10px rgba(56,224,208,.4);
  z-index:0;border-radius:1px;
  transform:scaleX(0);transform-origin:left;transition:transform 0s;
}
.svs-flow-top.on::before{transform:scaleX(1);transition:transform .8s cubic-bezier(.22,1,.36,1) .2s}
.svs-flow-node{display:flex;flex-direction:column;align-items:center;position:relative;z-index:1}

@keyframes svsNode{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:none}}
.svs-flow-node-rv{opacity:0}.svs-flow-node-rv.on{animation:svsNode .45s cubic-bezier(.34,1.56,.64,1) forwards}

.svs-flow-circle{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#ffffff,#0b8b93);display:flex;align-items:center;justify-content:center;font-size:1.2rem;font-weight:800;color:#154d66;position:relative;z-index:2;flex-shrink:0;box-shadow:0 0 0 4px rgba(56,224,208,.18),0 4px 20px rgba(56,224,208,.32)}
.svs-flow-stem{width:2px;height:22px;background:linear-gradient(180deg,rgba(56,224,208,.7),rgba(56,224,208,.06));margin:0 auto}

@keyframes svsStem{from{opacity:0;transform:scaleY(0)}to{opacity:1;transform:scaleY(1)}}
.svs-flow-stem-rv{opacity:0;transform-origin:top}.svs-flow-stem-rv.on{animation:svsStem .35s ease forwards}

.svs-grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.svs-grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:880px;margin:0 auto}
.svs-vline{display:none}

/* stage */
.svs-stage{transition:opacity .3s ease;position:relative}
.svs-stage.hide{opacity:0;pointer-events:none;position:absolute;inset:0}
.svs-stage.show{opacity:1;pointer-events:auto}

/* detail */
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
}
@media(min-width:641px){.svs-connector{display:none}}
`;
  document.head.appendChild(s);
}

/* ── Data ── */
const SVC = [
  {
    id: "pmp",
    n: "",
    t: "Process Management Platform",
    ic: PMT,
    tags: ["BPM", "Process"],
    group: "auto",
    summary:
      'จัดการ "กระบวนการทำงาน" จากรูปแบบเอกสาร กระดาษหรือ Visio ให้สามารถบริหาร จัดเก็บ และปรับปรุงกระบวนการได้ผ่านระบบเดียว',
    detail:
      "เพื่อให้ทุกคนในองค์กรเห็นภาพการทำงานเดียวกันและสามารถพัฒนา Process ได้อย่างต่อเนื่องในอนาคต",
    features: [
      "เปลี่ยนความซับซ้อนของแผนผังกระบวนการ ข้อมูลที่กระจัดกระจาย (Silos) เอกสาร หรือไฟล์ Visio ที่ดูยาก ให้กลายเป็นกระบวนการทำงานที่เป็นระบบ สามารถจัดการและเข้าถึงได้ง่ายขึ้น",
      "ค้นหา เจาะลึก และควบคุมกระบวนการทำงานของคุณให้เป็นมาตรฐาน ถูกต้องตามข้อกำหนด (Compliance) ทำงานร่วมกันได้ราบรื่น พร้อมสำหรับการปรับปรุงและรองรับทุกการเปลี่ยนแปลง",
      "รักษาประสิทธิภาพการทำงาน ลดความเสี่ยง Knowledge Loss เมื่อพนักงานลาออกหรือหยุดงานยาว",
      "ติดตามสถานะได้แบบเรียลไทม์ ตรวจสอบได้ทันทีว่ารายการใดเผยแพร่แล้ว รอดำเนินการ หรือรอการตรวจสอบ",
      "ใช้เป็นฐานข้อมูลสำหรับต่อยอดในการนำระบบ Automation หรือ RPA มาปรับใช้ในองค์กร",
    ],
  },
  {
    id: "rpa",
    n: "",
    t: "Robotic Process Automation",
    ic: RPA,
    tags: ["Automation", "RPA"],
    group: "auto",
    summary:
      "หุ่นยนต์ซอฟต์แวร์ (Bot) ที่ช่วยทำงานซ้ำๆ บนคอมพิวเตอร์ ทำหน้าที่เป็น ผู้ช่วยส่วนตัวอัตโนมัติของเราตลอด 24 ชั่วโมง",
    detail:
      "สามารถทำงานตามการ คลิ๊กเมาส์ หรือ กดคีย์บอร์ด ของเราได้ ในงานที่มีรูปแบบซ้ำๆเดิมๆหรือว่างาน Routine ที่เราต้องทำประจำทุกวัน , สัปดาห์ หรือเดือน Bot สามารถช่วยเราทำได้ทุกขั้นตอนอย่างแม่นยำ และรวดเร็ว",
    features: [
      "ดำเนินการขั้นตอน ตามเงื่อนไขเวลา และเหตุการณ์ที่กำหนดใว้ ",
      "ดำเนินการขั้นตอนซ้ำๆ ใช้เวลานาน ให้ทำเสร็จเร็วขึ้น ",
      "อ่านข้อมูลจากระบบต้นทาง และบันทึกข้อมูลเข้าสู่ระบบอื่นๆ",
      "เชื่อมโยง และแลกเปลี่ยนฟิลด์ข้อมูลระหว่างหลายๆ ระบบได้ ",
      "ช่วยแนะนำขั้นตอนการใช้งาน Application ที่ถูกต้อง (Guide Me Mode)",
    ],
  },
  {
    id: "dsai",
    n: "",
    t: "Domain-Specific Generative AI",
    ic: AI,
    tags: ["AI", "Generative"],
    group: "auto",
    summary:
      "AI ที่ถูกออกแบบให้เข้าใจ บริบทเฉพาะขององค์กร โดยทำงานบนฐานข้อมูลและโครงสร้างความรู้เฉพาะทางภายในองค์กร",
    detail:
      "ช่วยให้องค์กรสามารถใช้ Generative AI เพื่อ วิเคราะห์ข้อมูล สรุปความรู้ และสนับสนุนการตัดสินใจ ได้อย่างมีประสิทธิภาพ และสอดคล้องกับกระบวนการทำงานจริง ",
    features: [
      "สร้าง AI Knowledge Assistant สำหรับองค์กร ",
      "วิเคราะห์และสรุปข้อมูลจากเอกสารจำนวนมากได้อัตโนมัติ ",
      "ค้นหาข้อมูลจาก Knowledge Base ขององค์กรได้อย่างแม่นยำ ",
      "ทำงานร่วมกับ Document Control และ Process Framework ",
      "รองรับการเชื่อมต่อกับระบบองค์กร เช่น ERP, Workflow และ Database ",
      "สร้าง AI Chat Interface สำหรับการค้นหาความรู้ภายในองค์กร ",
    ],
  },
  {
    id: "lcbo",
    n: "",
    t: "Low-Code Business Orchestrator",
    ic: LPM,
    tags: ["Low-Code", "Workflow"],
    group: "auto",
    summary:
      "แพลตฟอร์มสำหรับพัฒนา Application และ Workflow ภายในองค์กรได้อย่างรวดเร็ว โดยใช้การออกแบบแบบ Visual Model ",
    detail:
      "แทนการเขียนโค้ดจำนวนมาก ช่วยให้องค์กรสามารถสร้างระบบดิจิทัลที่สอดคล้องกับกระบวนการทำงานจริง โดยไม่ต้องพัฒนาซอฟต์แวร์แบบ Traditional ที่ใช้เวลานานและมีความซับซ้อนสูง Low-Code Platform ช่วยให้ Business Unit และ IT สามารถทำงานร่วมกัน เพื่อออกแบบและพัฒนาระบบที่ตอบโจทย์องค์กรได้รวดเร็วและยืดหยุ่นมากขึ้น",
    features: [
      "ออกแบบ Workflow และ Application ด้วย Visual Process Model",
      "สร้างฟอร์ม ระบบอนุมัติ และ Workflow Automation ได้อย่างรวดเร็ว",
      "จัดการเอกสารและข้อมูลภายในระบบอย่างเป็นโครงสร้าง",
      "ติดตามสถานะงาน และวิเคราะห์ข้อมูลผ่าน Dashboard",
      "รองรับการพัฒนา Application สำหรับหน่วยงานเฉพาะทาง เช่น Quality, Safety, Risk, Audit, Maintenance เป็นต้น",
    ],
  },
  {
    id: "qmp",
    n: "",
    t: "Quality Management Platform",
    ic: QMS,
    tags: ["Quality", "Compliance"],
    group: "ops",
    summary:
      "แพลตฟอร์มที่ช่วยองค์กรบริหารจัดการคุณภาพ ควบคุม และยกระดับมาตรฐานการทำงานแบบครบวงจร",
    detail:
      "เพื่อให้มั่นใจว่าทุกกระบวนการสอดคล้องกับมาตรฐานสากล (เช่น ISO) และข้อกำหนดทางกฎหมายอย่างถูกต้อง โดยเปลี่ยนการทำงานที่กระจัดกระจายให้เป็นระบบอัตโนมัติที่สามารถตรวจสอบได้จริง",
    features: [
      "Version Control & History Tracking: ระบบสามารถจัดการเวอร์ชันเอกสารให้อัตโนมัติและเก็บประวัติว่าใครแก้ แก้เมื่อไหร่ เพื่อป้องกันความสับสนจากการใช้เอกสารผิดเวอร์ชั่น ",
      "ช่่วยให้ตรวจสอบได้ว่าเอกสารหรือข้อมูลต่าง ๆ ใครเป็นผู้แก้ไขและแก้ไขเมื่อใด เพื่อป้องกันความสับสนและตรวจสอบความถูกต้องของข้อมูลได้ตลอดเวลา",
      "Executive Dashboard & Analytics: หน้าจอสรุปผลแบบกราฟิกเรียลไทม์ เพื่อให้ผู้บริหารเห็นภาพรวมของการดำเนินงานได้ทันทีโดยไม่ต้องรอรายงานสรุปแบบเดิม ",
      "Email & In-App Notifications: ระบบแจ้งเตือนที่รวดเร็ว เพื่อลดปัญหาคอขวดในการรอคอยงานในการรออนุมัติหรือดำเนินงาน ทำให้กระบวนการบริหารจัดการไม่สะดุด",
      "Enterprise Security & SSO (Single Sign-On): รองรับการล็อกอินด้วยบัญชีเดิมของบริษัท (เช่น Microsoft 365 หรือ Active Directory) และมีการกำหนดสิทธิ์การเข้าถึงข้อมูล (Role-Based Access Control) อย่างรัดกุม ",
    ],
  },
  {
    id: "scr",
    n: "",
    t: "Supply Chain Resilience",
    ic: SPC,
    tags: ["Supply Chain", "Digital"],
    group: "ops",
    summary:
      "แนวทางในการออกแบบและบริหาร ห่วงโซ่อุปทานให้สามารถรับมือกับความไม่แน่นอนและความเสี่ยงได้อย่างมีประสิทธิภาพ",
    detail:
      "ช่วยให้องค์กรสามารถติดตามสถานะของวัตถุดิบ สินค้า และกระบวนการจัดซื้อจัดจ้างได้แบบ Real-Time ทำให้สามารถตอบสนองต่อเหตุการณ์ที่ไม่คาดคิด เช่น ความล่าช้าในการจัดส่ง การขาดแคลนวัตถุดิบ หรือความผันผวนของตลาดได้อย่างรวดเร็ว",
    features: [
      "ติดตามสถานะคำสั่งซื้อและการจัดส่งสินค้าแบบ Real-Time",
      "บริหารจัดการ Supplier และ Vendor Performance",
      "วิเคราะห์ความเสี่ยงใน Supply Chain",
      "Dashboard สำหรับติดตาม Inventory และ Logistics",
      "เชื่อมโยงข้อมูลกับระบบ ERP และระบบจัดซื้อ",
      "แจ้งเตือนความผิดปกติในกระบวนการ Supply Chain",
    ],
  },
  {
    id: "erp",
    n: "",
    t: "ERP Workspace",
    ic: ERP,
    tags: ["ERP", "Workspace"],
    group: "ops",
    summary:
      "แพลตฟอร์มสำหรับ รวมการทำงานของระบบ ERP และ Application ต่างๆ ขององค์กรไว้ในพื้นที่เดียว",
    detail:
      "ช่วยให้ผู้ใช้งานสามารถเข้าถึงข้อมูล กระบวนการทำงาน และระบบต่างๆ ได้จาก Interface เดียวลดความซับซ้อนของการใช้งานหลายระบบ และช่วยให้การทำงานระหว่างหน่วยงานมีประสิทธิภาพมากขึ้น ERP Workspace ช่วยให้การบริหารข้อมูลธุรกิจ การติดตามงาน และการตัดสินใจเชิงบริหารทำได้สะดวกและรวดเร็ว",
    features: [
      "Dashboard สำหรับติดตามข้อมูลธุรกิจจากหลายระบบ",
      "เชื่อมต่อข้อมูลจาก ERP และระบบอื่นๆ ขององค์กร",
      "ระบบค้นหาข้อมูลและเอกสารจากหลายระบบ",
      "กำหนดสิทธิ์การเข้าถึงข้อมูลตามบทบาทของผู้ใช้งาน",
      "รองรับการใช้งานผ่าน Web และ Mobile",
    ],
  },
];
const AUTO_GROUP = SVC.filter((s) => s.group === "auto");
const OPS_GROUP = SVC.filter((s) => s.group === "ops");

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

function GrpHead({ label, inView, delay = 0 }) {
  return (
    <div
      className={`svs-grp svs-grp-rv ${inView ? "on" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
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
      style={{ animationDelay: `${idx * 80}ms` }}
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
          fontSize: "1.08rem",
          fontWeight: 800,
          color: "#ffffff",
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
          fontSize: ".9rem",
          lineHeight: 1.7,
          color: "rgba(255,255,255,.65)",
        }}
      >
        {item.summary}
      </p>
      <div
        style={{
          marginTop: 14,
          fontSize: ".8rem",
          fontWeight: 700,
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
          <span style={{ color: "rgba(255,255,255,.9)" }}>{active?.t}</span>
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

export default function SectionServices() {
  useEffect(() => {
    injectCSS();
  }, []);

  const [view, setView] = useState("grid");
  const [vk, setVk] = useState(0);
  const [inView, setInView] = useState(false);
  const secRef = useRef(null);

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

  const go = useCallback((v) => {
    setView(v);
    setVk((k) => k + 1);
  }, []);
  const ai = SVC.find((s) => s.id === view);

  return (
    <section
      ref={secRef}
      className="relative isolate overflow-hidden strength-dark pt-20 pb-20"
      style={{ contain: "paint" }}
    >
      <img
        src={stBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover opacity-60"
      />
      <div className="strength-dark__bg pointer-events-none absolute inset-0 -z-20" />

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
              border: "1px solid rgba(255,255,255,.18)",
              background: "rgba(255,255,255,.07)",
              backdropFilter: "blur(6px)",
              fontSize: ".72rem",
              fontWeight: 400,
              letterSpacing: ".12em",
              color: "rgba(255,255,255,.85)",
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
            โซลูชั่นครบวงจรเพื่อ{" "}
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
              fontSize: "clamp(.88rem,1vw,1rem)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,.78)",
            }}
          >
            โซลูชั่นที่ออกแบบมาเพื่อเปลี่ยนกระบวนการทำงานให้ชาญฉลาดยิ่งขึ้น ด้วย
            AI และ Automation ที่ตอบโจทย์ทุกความต้องการทางธุรกิจ
          </p>
        </div>

        {/* Stages */}
        <div style={{ marginTop: 52, position: "relative" }}>
          {/* GRID */}
          <div className={`svs-stage ${view === "grid" ? "show" : "hide"}`}>
            <GrpHead
              label="TRANSFORMING PROCESSES INTO INTELLIGENT AI"
              inView={inView}
              delay={0}
            />
            <div className="svs-flow">
              <div className={`svs-vline ${inView ? "on" : ""}`} />
              <div className={`svs-flow-top ${inView ? "on" : ""}`}>
                {AUTO_GROUP.map((it, i) => (
                  <div key={it.id} className="svs-flow-node">
                    <div
                      className={`svs-flow-node-rv ${inView ? "on" : ""}`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="svs-flow-circle">{i + 1}</div>
                    </div>
                    <div
                      className={`svs-flow-stem svs-flow-stem-rv ${inView ? "on" : ""}`}
                      style={{ animationDelay: `${i * 100 + 180}ms` }}
                    />
                  </div>
                ))}
              </div>
              <div className="svs-grid4">
                {AUTO_GROUP.map((it, i) => (
                  <React.Fragment key={it.id}>
                    {i > 0 && (
                      <div className="svs-connector">
                        <div className="svs-connector-dot" />
                        <div className="svs-connector-line" />
                      </div>
                    )}
                    <GCard
                      item={it}
                      idx={i}
                      onClick={() => go(it.id)}
                      inView={inView}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div
              className={`svs-divider svs-grp-rv ${inView ? "on" : ""}`}
              style={{ animationDelay: "250ms" }}
            >
              <div className="svs-divider-line" />
              <div className="svs-divider-dot" />
              <div className="svs-divider-line" />
            </div>

            <GrpHead
              label="ENTERPRISE OPERATIONS & PLATFORMS"
              inView={inView}
              delay={350}
            />
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

          {/* DETAIL */}
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
              />
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
                              ? "rgba(56,224,208,.14)"
                              : "rgba(255,255,255,.07)",
                          flexShrink: 0,
                          transition: "background .2s",
                        }}
                      >
                        <Ico src={s.ic} size={20} />
                      </div>
                      <div
                        style={{
                          fontSize: ".82rem",
                          fontWeight: 600,
                          lineHeight: 1.3,
                          color: "#ffffff",
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
                      <span className="ar ab">‹</span> ย้อนกลับ
                    </button>
                  </div>
                </div>
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
                        background: "rgba(56,224,208,.12)",
                        border: "1px solid rgba(56,224,208,.24)",
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
                          fontSize: "clamp(1.05rem,2.5vw,1.28rem)",
                          fontWeight: 800,
                          color: "#ffffff",
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
                      fontSize: "clamp(.9rem,.95vw,.96rem)",
                      fontWeight: 400,
                      lineHeight: 1.85,
                      color: "#ffffffa1",
                    }}
                  >
                    {ai.summary} {ai.detail}
                  </p>
                  <div
                    style={{
                      height: 1,
                      background:
                        "linear-gradient(90deg,transparent,rgba(56,224,208,.18),rgba(14,165,233,.12),transparent)",
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
                            background: "rgba(56,224,208,.12)",
                            color: "rgba(180,245,240,1)",
                            fontSize: ".7rem",
                            fontWeight: 800,
                            flexShrink: 0,
                            marginTop: 1,
                            border: "1px solid rgba(56,224,208,.22)",
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div
                          style={{
                            fontSize: ".9rem",
                            color: "#ffffff",
                            lineHeight: 1.65,
                            fontWeight: 500,
                          }}
                        >
                          {f}
                        </div>
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
          <div
            className="svs-stats-row"
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
              { v: "10+", l: "Solutions" },
              { v: "10+", l: "Enterprise Clients" },
              { v: "50+", l: "Enterprise Projects" },
            ].map((st, i) => (
              <React.Fragment key={st.l}>
                {i > 0 && <div className="svs-stat-sep" />}
                <div
                  className={`svs-st ${inView ? "on" : ""}`}
                  style={{
                    textAlign: "center",
                    padding: "0 48px",
                    animationDelay: `${0.8 + i * 0.12}s`,
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
                      fontSize: ".82rem",
                      color: "rgba(255,255,255,.6)",
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
