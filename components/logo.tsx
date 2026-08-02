import Link from "next/link";

export function Logo({locale="tr", inverse=false}:{locale?:string; inverse?:boolean}){
  const home=locale==="tr"?"HKO Trade Hub ana sayfa":locale==="es"?"Página principal de HKO Trade Hub":"HKO Trade Hub home";
  const subtitle=locale==="tr"?"Küresel B2B Platformu":locale==="es"?"Plataforma B2B Global":"Global B2B Platform";
  return <Link href={`/${locale}`} className="group flex items-center gap-3" aria-label={home}>
    <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-[14px] bg-gradient-to-br from-ocean to-ink text-[13px] font-extrabold tracking-.04em text-white shadow-lg shadow-ocean/20">
      <span className="absolute -right-3 -top-3 h-7 w-7 rounded-full border border-white/30" />
      HKO
    </span>
    <span>
      <b className={`block text-[15px] leading-none tracking-tight ${inverse?"text-white":"text-ink"}`}>Trade Hub</b>
      <small className={`mt-1 block text-[9px] font-semibold uppercase tracking-[.22em] ${inverse?"text-white/45":"text-ink/45"}`}>{subtitle}</small>
    </span>
  </Link>
}
