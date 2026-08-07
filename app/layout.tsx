import type { Metadata } from "next";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";
export const metadata: Metadata = {
 metadataBase:new URL(SITE_URL),
 title:{default:"HKO Trade Hub | Global B2B Trade Platform",template:"%s | HKO Trade Hub"},
 description:"A trusted global B2B platform specialized in Turkey–Chile trade, supplier connections, market intelligence, logistics coordination and cross-border growth.",
 keywords:["B2B trade platform","Turkey Chile trade","global suppliers","international sourcing","import export","trade facilitation"],
 openGraph:{title:"HKO Trade Hub | Global B2B Trade Platform",description:"Connecting global markets with trusted trade solutions.",url:SITE_URL,siteName:"HKO Trade Hub",type:"website",locale:"en_US"},
 twitter:{card:"summary_large_image",title:"HKO Trade Hub",description:"Connecting global markets with trusted trade solutions."},
 alternates:{canonical:SITE_URL},
 robots:{index:true,follow:true}
};
export default async function RootLayout({children}:{children:React.ReactNode}){
 const locale=(await headers()).get("x-hko-locale") || "tr";
 const structuredData = [
  {"@context":"https://schema.org","@type":"Organization",name:"HKO Trade Hub",url:SITE_URL,logo:`${SITE_URL}/hko-trade-hub-logo.png`,description:"Global B2B trade platform specialized in Turkey–Chile trade."},
  {"@context":"https://schema.org","@type":"WebSite",name:"HKO Trade Hub",url:SITE_URL,inLanguage:["tr","en","es"],publisher:{"@type":"Organization",name:"HKO Trade Hub",url:SITE_URL}},
 ];
 return <html lang={locale}><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}}/>{children}</body></html>;
}
