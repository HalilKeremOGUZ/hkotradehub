import { ImageResponse } from "next/og";

export const alt = "HKO Trade Hub — Türkiye ve Şili arasında güvenilir B2B ticaret";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{display:"flex",width:"100%",height:"100%",padding:72,background:"linear-gradient(135deg,#081427 0%,#124c66 65%,#2b9d98 100%)",color:"white",fontFamily:"Arial",flexDirection:"column",justifyContent:"space-between"}}>
      <div style={{display:"flex",fontSize:30,fontWeight:700,letterSpacing:2}}>HKO TRADE HUB</div>
      <div style={{display:"flex",flexDirection:"column",maxWidth:960}}>
        <div style={{display:"flex",fontSize:68,fontWeight:700,lineHeight:1.08}}>Trusted cross-border trade.</div>
        <div style={{display:"flex",marginTop:24,fontSize:30,color:"#b9eee9"}}>Türkiye ⇄ Chile · Global B2B sourcing</div>
      </div>
      <div style={{display:"flex",fontSize:24,color:"rgba(255,255,255,.72)"}}>www.hkotradehub.com</div>
    </div>,
    size,
  );
}
