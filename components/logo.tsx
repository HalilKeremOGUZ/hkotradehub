import Link from "next/link";

export function Logo({locale="tr", inverse=false}:{locale?:string; inverse?:boolean}){
  const home=locale==="tr"?"HKO Trade Hub ana sayfa":locale==="es"?"Página principal de HKO Trade Hub":"HKO Trade Hub home";
  return <Link href={`/${locale}`} className="group block" aria-label={home}>
    <img src="/hko-trade-hub-logo.png" alt="HKO Trade Hub" className="h-20 w-auto max-w-[360px] object-contain object-left sm:h-[5.5rem] sm:max-w-[400px]" />
  </Link>
}
