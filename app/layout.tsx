import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
export const metadata: Metadata = {
 metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hkotradehub.com"),
 title:{default:"HKO Trade Hub | Global B2B Trade Platform",template:"%s | HKO Trade Hub"},
 description:"A trusted global B2B platform specialized in Türkiye–Chile trade, supplier connections, market intelligence, logistics coordination and cross-border growth.",
 keywords:["B2B trade platform","Türkiye Chile trade","global suppliers","international sourcing","import export","trade facilitation"],
 openGraph:{title:"HKO Trade Hub | Global B2B Trade Platform",description:"Connecting global markets with trusted trade solutions.",url:"https://hkotradehub.com",siteName:"HKO Trade Hub",type:"website",locale:"en_US"},
 twitter:{card:"summary_large_image",title:"HKO Trade Hub",description:"Connecting global markets with trusted trade solutions."},
 alternates:{canonical:"https://hkotradehub.com"},
 robots:{index:true,follow:true}
};
export default async function RootLayout({children}:{children:React.ReactNode}){
 const locale=(await headers()).get("x-hko-locale") || "tr";
 return <html lang={locale}><body>{children}</body></html>;
}
