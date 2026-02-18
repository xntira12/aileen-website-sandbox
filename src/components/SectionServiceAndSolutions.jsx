import React,{useEffect,useMemo,useRef,useState,useCallback} from"react";
const CSS_ID="svc-x-css";
function injectCSS(){if(document.getElementById(CSS_ID))return;const s=document.createElement("style");s.id=CSS_ID;s.textContent=`
.svx{--t:#1a2e3b;--m:#5d7b8a;--acc:#0d9488;--acc2:#0ea5e9;--abg:#ecfeff;--abg2:#f0fdfa;position:relative;overflow:hidden;background:linear-gradient(165deg,#f6fafb 0%,#eef5f7 40%,#f0f4f8 100%);padding:100px 0 110px}
@keyframes xbA{0%,100%{border-radius:42% 58% 64% 36%/47% 34% 66% 53%;transform:translate(0,0)}33%{border-radius:58% 42% 36% 64%/34% 66% 34% 66%;transform:translate(35px,-45px)}66%{border-radius:36% 64% 50% 50%/60% 40% 60% 40%;transform:translate(-25px,30px)}}
@keyframes xbB{0%,100%{border-radius:58% 42% 48% 52%/38% 62% 42% 58%;transform:translate(0,0)}50%{border-radius:42% 58% 52% 48%/62% 38% 58% 42%;transform:translate(-45px,-25px)}}
@keyframes xbC{0%,100%{border-radius:60% 40% 48% 52%/40% 60% 52% 48%;transform:translate(0,0)}50%{border-radius:40% 60% 52% 48%/60% 40% 48% 52%;transform:translate(25px,35px)}}
.svx-blob{position:absolute;pointer-events:none;filter:blur(90px);opacity:.35;will-change:transform,border-radius}
.svx-b1{width:480px;height:480px;background:radial-gradient(circle,rgba(13,148,136,.22),transparent 70%);top:-6%;left:-6%;animation:xbA 20s ease-in-out infinite}
.svx-b2{width:400px;height:400px;background:radial-gradient(circle,rgba(14,165,233,.18),transparent 70%);top:35%;right:-8%;animation:xbB 26s ease-in-out infinite}
.svx-b3{width:360px;height:360px;background:radial-gradient(circle,rgba(13,148,136,.16),transparent 70%);bottom:-8%;left:20%;animation:xbC 23s ease-in-out infinite}
@keyframes xSpk{0%,100%{transform:translateY(0) scale(1);opacity:.25}50%{transform:translateY(-16px) scale(1.3);opacity:.55}}
.svx-spk{position:absolute;border-radius:50%;pointer-events:none;animation:xSpk var(--d,5s) ease-in-out var(--dl,0s) infinite}
.svx-glow{position:absolute;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(13,148,136,.05),transparent 60%);pointer-events:none;transform:translate(-50%,-50%);transition:left .4s ease-out,top .4s ease-out;z-index:0}
@keyframes xHL{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.svx-hl{transform:scaleX(0);transform-origin:center}.svx-hl.on{animation:xHL .8s cubic-bezier(.22,1,.36,1) .3s forwards}
.svx-c{position:relative;background:rgba(255,255,255,.68);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-radius:20px;padding:28px 24px 24px;cursor:pointer;overflow:visible;transform-style:preserve-3d;will-change:transform;transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .35s ease}
.svx-c:hover{box-shadow:0 14px 44px rgba(0,50,70,.07)}
.svx-c::before,.svx-c::after{content:'';position:absolute;inset:-1px;border-radius:20px;pointer-events:none}
.svx-c::before{border:1px solid rgba(0,50,70,.06);transition:border-color .3s}
.svx-c:hover::before{border-color:transparent}
.svx-c::after{background:conic-gradient(from var(--border-angle,0deg),transparent 0%,#0d9488 5%,#0ea5e9 10%,transparent 20%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;padding:1.5px;opacity:0;transition:opacity .35s;animation:xBS 3s linear infinite}
.svx-c:hover::after{opacity:1}
@keyframes xBS{to{--border-angle:360deg}}
@property --border-angle{syntax:'<angle>';initial-value:0deg;inherits:false}
.svx-ic{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;position:relative;background:linear-gradient(135deg,var(--abg2),var(--abg));transition:transform .5s cubic-bezier(.22,1,.36,1),box-shadow .4s}
.svx-c:hover .svx-ic{transform:scale(1.1) rotate(-4deg);box-shadow:0 4px 18px rgba(13,148,136,.16)}
@keyframes xIcR{0%{transform:scale(1);opacity:.45}100%{transform:scale(2.2);opacity:0}}
.svx-ir{position:absolute;inset:0;border-radius:14px;border:2px solid var(--acc);opacity:0;pointer-events:none}.svx-c:hover .svx-ir{animation:xIcR 1s ease-out}
.svx-n{position:absolute;top:14px;right:18px;font-size:3rem;font-weight:900;line-height:1;background:linear-gradient(135deg,rgba(13,148,136,.06),rgba(14,165,233,.02));-webkit-background-clip:text;-webkit-text-fill-color:transparent;pointer-events:none;transition:all .4s}
.svx-c:hover .svx-n{background:linear-gradient(135deg,rgba(13,148,136,.12),rgba(14,165,233,.06));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.svx-tg{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:8px;font-size:.68rem;font-weight:600;letter-spacing:.02em;background:linear-gradient(135deg,#f0fdfa,#ecfeff);color:#0d9488}
.svx-grid{display:grid;gap:22px;grid-template-columns:repeat(4,1fr)}
.svx-grid3{display:grid;gap:22px;grid-template-columns:repeat(3,1fr);max-width:840px;margin:22px auto 0}
@keyframes xRv{from{opacity:0;transform:translateY(45px) scale(.96);filter:blur(3px)}to{opacity:1;transform:none;filter:none}}
.svx-rv{opacity:0}.svx-rv.on{animation:xRv .7s cubic-bezier(.22,1,.36,1) forwards}
.svx-stage{transition:opacity .35s ease,transform .35s ease;position:relative}
.svx-stage.hide{opacity:0;pointer-events:none;position:absolute;inset:0;transform:translateY(16px)}
.svx-stage.show{opacity:1;pointer-events:auto;transform:translateY(0)}
@keyframes xDL{from{opacity:0;transform:translateX(-50px) scale(.96)}to{opacity:1;transform:none}}
@keyframes xDR{from{opacity:0;transform:translateX(50px) scale(.96)}to{opacity:1;transform:none}}
.svx-dl{animation:xDL .65s cubic-bezier(.22,1,.36,1) forwards}
.svx-dr{animation:xDR .65s cubic-bezier(.22,1,.36,1) forwards}
@keyframes xBdg{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
.svx-bdg{animation:xBdg .4s ease forwards}
.svx-dtl{background:rgba(255,255,255,.75);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(13,148,136,.08);border-radius:22px;padding:36px 32px;position:relative;overflow:hidden}
.svx-dtl::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent 5%,#0d9488 35%,#0ea5e9 65%,transparent 95%)}
.svx-pill{display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border-radius:9999px;border:1px solid rgba(13,148,136,.12);background:rgba(255,255,255,.7);backdrop-filter:blur(6px);color:var(--m);font-size:.82rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:all .3s}
.svx-pill:hover{background:rgba(255,255,255,.9);border-color:rgba(13,148,136,.25);color:var(--acc)}
.svx-pill .ar{font-size:1rem;line-height:1;transition:transform .3s}
.svx-pill:hover .af{transform:translateX(2px)}.svx-pill:hover .ab{transform:translateX(-2px)}
.svx-sli{padding:10px 14px;border-radius:12px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .25s ease;border:1px solid transparent}
.svx-sli:hover{background:rgba(13,148,136,.03);border-color:rgba(13,148,136,.06)}
.svx-sli.act{background:linear-gradient(135deg,rgba(13,148,136,.06),rgba(14,165,233,.04));border-color:rgba(13,148,136,.14)}
.svx-feat{display:flex;align-items:flex-start;gap:10px;padding:12px 0;border-bottom:1px solid rgba(13,148,136,.06)}.svx-feat:last-child{border-bottom:none}
@keyframes xSt{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.svx-st{opacity:0}.svx-st.on{animation:xSt .6s cubic-bezier(.22,1,.36,1) forwards}
/* mobile dropdown */
.svx-mdd{display:none;position:relative;margin-bottom:16px;z-index:20}
.svx-mdd-btn{width:100%;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:14px 16px;border-radius:16px;border:1px solid rgba(13,148,136,.15);background:rgba(255,255,255,.85);backdrop-filter:blur(10px);font-size:.9rem;font-weight:600;color:#0d9488;cursor:pointer;transition:all .25s}
.svx-mdd-btn:active{background:rgba(13,148,136,.06)}
.svx-mdd-arr{font-size:.75rem;transition:transform .3s}.svx-mdd-arr.op{transform:rotate(180deg)}
.svx-mdd-list{position:absolute;top:calc(100% + 6px);left:0;right:0;background:white;border-radius:16px;border:1px solid rgba(0,50,70,.06);box-shadow:0 12px 40px rgba(0,50,70,.1);overflow:hidden;max-height:0;opacity:0;transition:max-height .35s cubic-bezier(.22,1,.36,1),opacity .25s}
.svx-mdd-list.op{max-height:420px;opacity:1}
.svx-mdd-item{display:flex;align-items:center;gap:10px;padding:13px 16px;font-size:.88rem;font-weight:500;color:var(--t);cursor:pointer;transition:background .2s;border-bottom:1px solid rgba(0,50,70,.04)}
.svx-mdd-item:last-child{border-bottom:none}
.svx-mdd-item:active,.svx-mdd-item.act{background:rgba(13,148,136,.06);color:#0d9488}
/* mobile nav */

@media(max-width:1024px){.svx{padding:80px 0 90px}.svx-grid{grid-template-columns:repeat(2,1fr)}.svx-grid3{grid-template-columns:repeat(2,1fr);max-width:100%}}
@media(max-width:768px){
.svx{padding:56px 0 64px}
.svx-grid,.svx-grid3{grid-template-columns:1fr;gap:14px;max-width:100%;margin-top:14px}
.svx-c{padding:22px 20px 20px;border-radius:16px}
.svx-n{font-size:2.2rem;top:12px;right:14px}
.svx-ic{width:44px;height:44px;font-size:1.2rem;border-radius:12px}
.svx-dg{grid-template-columns:1fr!important;gap:0!important}
.svx-sidebar-desk{display:none!important}
.svx-mdd{display:block}
.svx-dtl{padding:24px 20px;border-radius:16px}
.svx-bdg-wrap{display:none!important}
.svx-stats{gap:24px!important;margin-top:40px!important}
}
@media(max-width:400px){.svx{padding:40px 0 48px}.svx-c{padding:18px 16px 16px}.svx-dtl{padding:20px 16px}}
`;document.head.appendChild(s);}

const SVC=[
{id:"qmp",n:"01",t:"Quality Management Platform",ic:"\u{1F6E1}\u{FE0F}",tags:["Quality","Compliance"],summary:"\u0E23\u0E30\u0E1A\u0E1A\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19 \u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A \u0E41\u0E25\u0E30\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E02\u0E2D\u0E07\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23",detail:"\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E0B\u0E49\u0E33\u0E0B\u0E49\u0E2D\u0E19 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E17\u0E38\u0E01\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19 \u0E0A\u0E48\u0E27\u0E22\u0E22\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27",features:["\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E41\u0E1A\u0E1A Real-time","\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E17\u0E38\u0E01\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19","\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E0B\u0E49\u0E33\u0E0B\u0E49\u0E2D\u0E19","\u0E22\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23"]},
{id:"lcbo",n:"02",t:"Low-Code Business Orchestrator",ic:"\u26A1",tags:["Low-Code","Workflow"],summary:"\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E07\u0E32\u0E19\u0E43\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A Low-Code \u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49 IT \u0E41\u0E25\u0E30 Users \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E33\u0E07\u0E32\u0E19\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19",detail:"\u0E2A\u0E23\u0E49\u0E32\u0E07 Business Workflow \u0E43\u0E19\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23\u0E44\u0E14\u0E49\u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27\u0E22\u0E34\u0E48\u0E07\u0E02\u0E36\u0E49\u0E19 \u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E44\u0E14\u0E49 Real-time \u0E1E\u0E31\u0E12\u0E19\u0E32 Workflow \u0E44\u0E14\u0E49\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19 3\u20135 \u0E40\u0E17\u0E48\u0E32",features:["\u0E1E\u0E31\u0E12\u0E19\u0E32 Workflow \u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19 3-5 \u0E40\u0E17\u0E48\u0E32","IT \u0E41\u0E25\u0E30 Users \u0E23\u0E48\u0E27\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E30\u0E1A\u0E1A","\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A Real-time","\u0E25\u0E14\u0E15\u0E49\u0E19\u0E17\u0E38\u0E19\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E0B\u0E2D\u0E1F\u0E15\u0E4C\u0E41\u0E27\u0E23\u0E4C"]},
{id:"pmp",n:"03",t:"Process Management Platform",ic:"\u{1F504}",tags:["BPM","Process"],summary:"\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 \"\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\" \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E2B\u0E23\u0E37\u0E2D Visio (\u0E40\u0E0A\u0E48\u0E19 BPMN, SOP)",detail:"\u0E22\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E21\u0E35\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E04\u0E49\u0E19\u0E2B\u0E32 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A \u0E41\u0E01\u0E49\u0E44\u0E02\u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23",features:["\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19 Paper-based \u0E40\u0E1B\u0E47\u0E19 Digital","\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23","\u0E04\u0E49\u0E19\u0E2B\u0E32 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A \u0E41\u0E01\u0E49\u0E44\u0E02\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35","\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A BPMN \u0E41\u0E25\u0E30 SOP"]},
{id:"rpa",n:"04",t:"Robotic Process Automation",ic:"\u{1F916}",tags:["Automation","RPA"],summary:"\u0E2B\u0E38\u0E48\u0E19\u0E22\u0E19\u0E15\u0E4C\u0E0B\u0E2D\u0E1F\u0E15\u0E4C\u0E41\u0E27\u0E23\u0E4C (Robot) \u0E17\u0E35\u0E48\u0E17\u0E33\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E07\u0E32\u0E19\u0E0B\u0E49\u0E33\u0E0B\u0E49\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E41\u0E19\u0E48\u0E19\u0E2D\u0E19",detail:"\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E33\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49 24/7 \u0E40\u0E0A\u0E48\u0E19 \u0E01\u0E32\u0E23\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01 \u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E23\u0E27\u0E21\u0E16\u0E36\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",features:["\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 24/7","\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01 \u0E01\u0E23\u0E2D\u0E01 \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25","\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34","\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E08\u0E32\u0E01\u0E04\u0E19"]},
{id:"dsai",n:"05",t:"Domain-Specific Generative AI",ic:"\u{1F9E0}",tags:["AI","Generative"],summary:"\u0E01\u0E49\u0E32\u0E27\u0E2A\u0E39\u0E48\u0E2D\u0E19\u0E32\u0E04\u0E15\u0E02\u0E2D\u0E07\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E14\u0E49\u0E27\u0E22 AI \u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E1A\u0E23\u0E34\u0E1A\u0E17\u0E02\u0E2D\u0E07\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22 \u0E22\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32 \u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23",detail:"\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E15\u0E2D\u0E1A\u0E42\u0E08\u0E17\u0E22\u0E4C\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23 \u0E25\u0E14\u0E20\u0E32\u0E23\u0E30\u0E07\u0E32\u0E19 \u0E25\u0E14\u0E40\u0E27\u0E25\u0E32 \u0E41\u0E25\u0E30\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E32\u0E01\u0E23\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19",features:["AI \u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E1A\u0E23\u0E34\u0E1A\u0E17\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22","\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E0A\u0E34\u0E07\u0E25\u0E36\u0E01","\u0E15\u0E2D\u0E1A\u0E42\u0E08\u0E17\u0E22\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23","\u0E25\u0E14\u0E20\u0E32\u0E23\u0E30\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E40\u0E27\u0E25\u0E32"]},
{id:"scr",n:"06",t:"Supply Chain Resilience",ic:"\u{1F69B}",tags:["Supply Chain","Digital"],summary:"\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E2B\u0E48\u0E27\u0E07\u0E42\u0E0B\u0E48\u0E2D\u0E38\u0E1B\u0E17\u0E32\u0E19\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25\u0E41\u0E1A\u0E1A\u0E04\u0E23\u0E1A\u0E27\u0E07\u0E08\u0E23 \u0E17\u0E35\u0E48\u0E1C\u0E2A\u0E32\u0E19\u0E23\u0E27\u0E21\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D \u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 \u0E04\u0E07\u0E04\u0E25\u0E31\u0E07",detail:"\u0E04\u0E25\u0E31\u0E07\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E02\u0E19\u0E2A\u0E48\u0E07 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19 \u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E32\u0E1A\u0E23\u0E37\u0E48\u0E19 \u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E48\u0E22\u0E07 \u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27\u0E41\u0E25\u0E30\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E",features:["\u0E23\u0E27\u0E21\u0E17\u0E38\u0E01\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E02\u0E2D\u0E07 Supply Chain","\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E41\u0E1A\u0E1A Real-time","\u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E48\u0E22\u0E07\u0E14\u0E49\u0E32\u0E19 Logistics","\u0E15\u0E2D\u0E1A\u0E2A\u0E19\u0E2D\u0E07\u0E15\u0E25\u0E32\u0E14\u0E44\u0E14\u0E49\u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27"]},
{id:"erp",n:"07",t:"ERP Workspace",ic:"\u{1F3E2}",tags:["ERP","Workspace"],summary:"\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E41\u0E1A\u0E1A\u0E1A\u0E39\u0E23\u0E13\u0E32\u0E01\u0E32\u0E23 \u0E0A\u0E48\u0E27\u0E22\u0E08\u0E31\u0E14\u0E23\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E1A Workflow \u0E17\u0E35\u0E48\u0E0B\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E43\u0E2B\u0E49\u0E07\u0E48\u0E32\u0E22\u0E02\u0E36\u0E49\u0E19",detail:"\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E41\u0E1A\u0E1A Real-time \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E04\u0E23\u0E1A\u0E04\u0E23\u0E31\u0E19\u0E17\u0E35\u0E48\u0E0A\u0E48\u0E27\u0E22\u0E02\u0E31\u0E1A\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E31\u0E48\u0E19\u0E04\u0E07",features:["\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E1A\u0E1A\u0E1A\u0E39\u0E23\u0E13\u0E32\u0E01\u0E32\u0E23","\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E2A\u0E16\u0E32\u0E19\u0E30 Real-time","\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E04\u0E23\u0E1A\u0E04\u0E23\u0E31\u0E19","\u0E02\u0E31\u0E1A\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E31\u0E48\u0E19\u0E04\u0E07"]},
];

function Specks(){const p=useMemo(()=>Array.from({length:14},(_,i)=>({w:3+Math.random()*5,x:Math.random()*100,y:Math.random()*100,d:`${3.5+Math.random()*5}s`,dl:`${Math.random()*4}s`,c:i%2===0?"rgba(13,148,136,.2)":"rgba(14,165,233,.18)"})),[]);return<>{p.map((v,i)=><div key={i} className="svx-spk" style={{width:v.w,height:v.w,left:`${v.x}%`,top:`${v.y}%`,background:v.c,"--d":v.d,"--dl":v.dl}}/>)}</>;}

function GCard({item,idx,onClick,inView}){const ref=useRef(null);const onM=useCallback(e=>{const el=ref.current;if(!el)return;const r=el.getBoundingClientRect();el.style.transform=`perspective(700px) rotateX(${((e.clientY-r.top)/r.height-.5)*-6}deg) rotateY(${((e.clientX-r.left)/r.width-.5)*6}deg) translateZ(4px)`;},[]);const onL=useCallback(()=>{if(ref.current)ref.current.style.transform="none";},[]);return(
<div ref={ref} className={`svx-c svx-rv ${inView?"on":""}`} style={{animationDelay:`${idx*100}ms`}} onClick={onClick} onMouseMove={onM} onMouseLeave={onL}>
<span className="svx-n">{item.n}</span>
<div className="svx-ic">{item.ic}<div className="svx-ir"/></div>
<h3 style={{marginTop:14,fontSize:"1.05rem",fontWeight:700,color:"var(--t)",lineHeight:1.35,paddingRight:32}}>{item.t}</h3>
<div style={{display:"flex",gap:6,marginTop:10,flexWrap:"wrap"}}>{item.tags.map(t=><span key={t} className="svx-tg">{t}</span>)}</div>
<p style={{marginTop:12,fontSize:".86rem",lineHeight:1.65,color:"var(--m)"}}>{item.summary}</p>
<div style={{marginTop:14,fontSize:".78rem",fontWeight:600,background:"linear-gradient(135deg,#0d9488,#0ea5e9)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",display:"flex",alignItems:"center",gap:4}}>ดูรายละเอียด <span style={{fontSize:"1rem",WebkitTextFillColor:"#0d9488"}}>›</span></div>
</div>);}

function MobDD({items,activeId,onSelect}){const[open,setOpen]=useState(false);const active=items.find(s=>s.id===activeId);const ref=useRef(null);
useEffect(()=>{if(!open)return;const c=e=>{if(ref.current&&!ref.current.contains(e.target))setOpen(false)};document.addEventListener("pointerdown",c);return()=>document.removeEventListener("pointerdown",c)},[open]);
return(<div className="svx-mdd" ref={ref}>
<button type="button" className="svx-mdd-btn" onClick={()=>setOpen(o=>!o)}>
<span style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:"1.1rem"}}>{active?.ic}</span><span>{active?.t}</span></span>
<span className={`svx-mdd-arr ${open?"op":""}`}>▾</span>
</button>
<div className={`svx-mdd-list ${open?"op":""}`}>
{items.map(s=><div key={s.id} className={`svx-mdd-item ${s.id===activeId?"act":""}`} onClick={()=>{onSelect(s.id);setOpen(false)}}>
<span style={{fontSize:"1rem",width:24,textAlign:"center"}}>{s.ic}</span><span>{s.t}</span>
</div>)}
</div></div>);}

export default function SectionServices(){
const[view,setView]=useState("grid");const[vk,setVk]=useState(0);const[inView,setInView]=useState(false);const secRef=useRef(null);const glowRef=useRef(null);
useEffect(()=>{injectCSS()},[]);
useEffect(()=>{const el=secRef.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setInView(true)},{threshold:.08});o.observe(el);return()=>o.disconnect()},[]);
const onM=useCallback(e=>{const g=glowRef.current;if(!g)return;const r=secRef.current.getBoundingClientRect();g.style.left=`${e.clientX-r.left}px`;g.style.top=`${e.clientY-r.top}px`},[]);
const go=useCallback(v=>{setView(v);setVk(k=>k+1)},[]);
const ai=SVC.find(s=>s.id===view);const ax=SVC.findIndex(s=>s.id===view);


return(
<section ref={secRef} className="svx" onMouseMove={onM}>
<div className="svx-b1 svx-blob"/><div className="svx-b2 svx-blob"/><div className="svx-b3 svx-blob"/>
{inView&&<Specks/>}<div ref={glowRef} className="svx-glow"/>
<div style={{position:"relative",zIndex:1,maxWidth:1180,margin:"0 auto",padding:"0 24px"}}>
{/* Header */}
<div style={{textAlign:"center",opacity:inView?1:0,transform:inView?"translateY(0)":"translateY(28px)",transition:"opacity .7s ease, transform .7s ease"}}>
<span style={{display:"inline-flex",alignItems:"center",gap:8,padding:"7px 18px",borderRadius:9999,background:"rgba(13,148,136,.08)",color:"var(--acc)",fontSize:".73rem",fontWeight:700,letterSpacing:".08em"}}><span style={{width:7,height:7,borderRadius:"50%",background:"linear-gradient(135deg,#0d9488,#0ea5e9)"}}/>SERVICES &amp; SOLUTIONS</span>
<h2 style={{marginTop:20,fontSize:"clamp(1.5rem,4vw,2.5rem)",fontWeight:800,color:"var(--t)",lineHeight:1.2}}>โซลูชันครบวงจรเพื่อ{" "}<span style={{background:"linear-gradient(135deg,#0d9488,#0ea5e9)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>ธุรกิจยุคใหม่</span></h2>
<p style={{marginTop:14,maxWidth:580,marginLeft:"auto",marginRight:"auto",fontSize:"clamp(.84rem,.9vw,.92rem)",lineHeight:1.7,color:"var(--m)"}}>ออกแบบมาเพื่อตอบโจทย์ทุกความต้องการทางธุรกิจ ยกระดับประสิทธิภาพและสร้างความได้เปรียบทางการแข่งขัน</p>
<div style={{display:"flex",justifyContent:"center",marginTop:24}}>{inView&&<div className="svx-hl on" style={{width:72,height:3,borderRadius:2,background:"linear-gradient(90deg,#0d9488,#0ea5e9)"}}/>}</div>
</div>
{/* STAGES */}
<div style={{marginTop:52,position:"relative"}}>
{/* GRID */}
<div className={`svx-stage ${view==="grid"?"show":"hide"}`}>
<div className="svx-grid">{SVC.slice(0,4).map((it,i)=><GCard key={it.id} item={it} idx={i} onClick={()=>go(it.id)} inView={inView}/>)}</div>
<div className="svx-grid3">{SVC.slice(4).map((it,i)=><GCard key={it.id} item={it} idx={i+4} onClick={()=>go(it.id)} inView={inView}/>)}</div>
</div>
{/* DETAIL */}
{ai&&(
<div className={`svx-stage ${view!=="grid"?"show":"hide"}`} key={`d-${vk}`}>
{/* Desktop badge */}
<div className="svx-bdg-wrap" style={{display:"flex",justifyContent:"center",marginBottom:20}}>
<span className="svx-bdg" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"7px 20px",borderRadius:9999,background:"rgba(13,148,136,.06)",color:"#0d9488",fontSize:".82rem",fontWeight:600,border:"1px solid rgba(13,148,136,.14)"}}><span style={{fontSize:"1.1rem"}}>{ai.ic}</span>{ai.t}</span>
</div>
{/* Mobile dropdown */}
<MobDD items={SVC} activeId={ai.id} onSelect={id=>go(id)}/>
<div className="svx-dg" style={{display:"grid",gridTemplateColumns:"280px 1fr",gap:28,maxWidth:960,margin:"0 auto",alignItems:"start"}}>
{/* Desktop sidebar */}
<div className="svx-dl svx-sidebar-desk" style={{display:"flex",flexDirection:"column",gap:4}}>
{SVC.map(s=><div key={s.id} className={`svx-sli ${s.id===ai.id?"act":""}`} onClick={()=>go(s.id)}>
<div style={{width:36,height:36,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",background:s.id===ai.id?"linear-gradient(135deg,#f0fdfa,#ecfeff)":"rgba(0,50,70,.03)",fontSize:"1.1rem",flexShrink:0,transition:"background .25s"}}>{s.ic}</div>
<div style={{fontSize:".82rem",fontWeight:600,lineHeight:1.3,color:s.id===ai.id?"#0d9488":"var(--t)",transition:"color .25s"}}>{s.t}</div>
</div>)}
<div style={{marginTop:12}}><button className="svx-pill" onClick={()=>go("grid")} type="button"><span className="ar ab">‹</span> กลับหน้ารวม</button></div>
</div>
{/* Detail card */}
<div className="svx-dr svx-dtl">
<div style={{display:"flex",alignItems:"center",gap:14}}>
<div style={{width:56,height:56,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg,#f0fdfa,#ecfeff)",fontSize:"1.6rem",boxShadow:"0 4px 20px rgba(13,148,136,.12)",flexShrink:0}}>{ai.ic}</div>
<div style={{minWidth:0}}>
<div style={{fontSize:".7rem",fontWeight:700,background:"linear-gradient(135deg,#0d9488,#0ea5e9)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:".06em",textTransform:"uppercase"}}>Service {ai.n}</div>
<h3 style={{fontSize:"clamp(1rem,2.5vw,1.25rem)",fontWeight:800,color:"var(--t)",lineHeight:1.3,marginTop:2}}>{ai.t}</h3>
</div></div>
<div style={{display:"flex",gap:6,marginTop:16,flexWrap:"wrap"}}>{ai.tags.map(t=><span key={t} className="svx-tg">{t}</span>)}</div>
<p style={{marginTop:18,fontSize:"clamp(.84rem,.9vw,.92rem)",lineHeight:1.75,color:"var(--m)"}}>{ai.summary} {ai.detail}</p>
<div style={{height:1,background:"linear-gradient(90deg, transparent, rgba(13,148,136,.12), rgba(14,165,233,.08), transparent)",margin:"20px 0"}}/>
<div style={{fontSize:".78rem",fontWeight:700,background:"linear-gradient(135deg,#0d9488,#0ea5e9)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:".05em",textTransform:"uppercase",marginBottom:8}}>Key Features</div>
<div>{ai.features.map((f,i)=><div key={i} className="svx-feat">
<div style={{width:24,height:24,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg,#f0fdfa,#ecfeff)",color:"#0d9488",fontSize:".72rem",fontWeight:800,flexShrink:0,marginTop:1}}>{String(i+1).padStart(2,"0")}</div>
<div style={{fontSize:".88rem",color:"var(--t)",lineHeight:1.5,fontWeight:500}}>{f}</div>
</div>)}</div>
{/* "รายละเอียด" button inside white card, centered */}
<div style={{textAlign:"center",marginTop:24}}>
<a href={`/services/${ai.id}`} className="svx-pill" style={{padding:"10px 32px",fontSize:".88rem",fontWeight:600,color:"#0d9488",borderColor:"rgba(13,148,136,.18)",background:"linear-gradient(135deg,rgba(13,148,136,.06),rgba(14,165,233,.03))"}}>รายละเอียด</a>
</div>
</div></div>
{/* "ย้อนกลับ" button OUTSIDE white card */}
<div style={{textAlign:"center",marginTop:20}}>
<button type="button" className="svx-pill" onClick={()=>go("grid")} style={{padding:"10px 28px",fontSize:".86rem",color:"var(--m)"}}><span className="ar ab">‹</span> ย้อนกลับ</button>
</div>
</div>)}
</div>
{/* Stats */}
{view==="grid"&&(
<div className="svx-stats" style={{display:"flex",justifyContent:"center",gap:56,marginTop:64,flexWrap:"wrap"}}>
{[{v:"7+",l:"Solutions"},{v:"100+",l:"Enterprise Clients"},{v:"24/7",l:"Expert Support"}].map((st,i)=>
<div key={st.l} className={`svx-st ${inView?"on":""}`} style={{textAlign:"center",animationDelay:`${.9+i*.15}s`}}>
<div style={{fontSize:"clamp(1.5rem,3vw,2rem)",fontWeight:800,background:"linear-gradient(135deg,#0d9488,#0ea5e9)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{st.v}</div>
<div style={{fontSize:".8rem",color:"var(--m)",marginTop:4,fontWeight:500}}>{st.l}</div>
</div>)}
</div>)}
</div></section>);}