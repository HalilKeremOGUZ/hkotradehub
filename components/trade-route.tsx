"use client";
import { motion } from "framer-motion";
import { Anchor, Building2, Ship, Warehouse } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const labels={
 tr:{istanbul:"İstanbul",valparaiso:"Valparaíso",santiago:"Santiago",export:"İhracat merkezi",port:"Pasifik geçidi",market:"Pazar operasyonları"},
 en:{istanbul:"Istanbul",valparaiso:"Valparaíso",santiago:"Santiago",export:"Export hub",port:"Pacific gateway",market:"Market operations"},
 es:{istanbul:"Estambul",valparaiso:"Valparaíso",santiago:"Santiago",export:"Centro exportador",port:"Puerta del Pacífico",market:"Operaciones de mercado"}
};
export function TradeRoute({locale}:{locale:Locale}){const l=labels[locale];return <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#071629] p-6 text-white shadow-2xl shadow-ink/25 sm:p-10">
  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:26px_26px]"/>
  <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-ocean/40 blur-3xl"/><div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-aqua/20 blur-3xl"/>
  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 420" fill="none" preserveAspectRatio="none" aria-hidden="true"><path d="M130 215 C 300 75, 520 350, 760 190" stroke="rgba(81,214,203,.48)" strokeWidth="2" strokeDasharray="7 10"/><motion.circle r="6" fill="#51D6CB" initial={{offsetDistance:"0%"}} animate={{offsetDistance:"100%"}} transition={{duration:7,repeat:Infinity,ease:"linear"}} style={{offsetPath:"path('M130 215 C 300 75, 520 350, 760 190')"}}/></svg>
  <div className="relative grid min-h-[350px] grid-cols-1 items-center gap-8 sm:grid-cols-3">
    <Node icon={Building2} title={l.istanbul} text={l.export}/>
    <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-aqua/30 bg-aqua/10 backdrop-blur"><Ship className="text-aqua" size={34}/></div>
    <div className="space-y-5"><Node icon={Anchor} title={l.valparaiso} text={l.port}/><Node icon={Warehouse} title={l.santiago} text={l.market}/></div>
  </div>
</div>}
function Node({icon:Icon,title,text}:{icon:any,title:string,text:string}){return <div className="relative rounded-2xl border border-white/10 bg-white/[.06] p-5 backdrop-blur-md"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-aqua"><Icon size={20}/></span><div><b className="block text-sm">{title}</b><small className="text-white/45">{text}</small></div></div></div>}
