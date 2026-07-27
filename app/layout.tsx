import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hkotradehub.com"), title:{default:"HKO Trade Hub",template:"%s | HKO Trade Hub"}, description:"Premium B2B trade platform connecting Türkiye and Chile.", openGraph:{title:"HKO Trade Hub",description:"Türkiye–Chile B2B trade platform",url:"https://hkotradehub.com",siteName:"HKO Trade Hub",type:"website"} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}
