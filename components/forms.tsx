"use client";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const copy={
 tr:{name:"Ad Soyad",company:"Firma",email:"E-posta",phone:"Telefon",country:"Ülke",quantity:"Miktar",subject:"Konu",message:"İhtiyacınızı açıklayın",send:"Gönder",sending:"Gönderiliyor...",success:"Talebiniz başarıyla alındı.",error:"Bir sorun oluştu. Lütfen tekrar deneyin."},
 en:{name:"Name",company:"Company",email:"Email",phone:"Phone",country:"Country",quantity:"Quantity",subject:"Subject",message:"Tell us about your requirement",send:"Submit",sending:"Sending...",success:"Your request has been received successfully.",error:"Something went wrong. Please try again."},
 es:{name:"Nombre",company:"Empresa",email:"Correo electrónico",phone:"Teléfono",country:"País",quantity:"Cantidad",subject:"Asunto",message:"Cuéntenos sobre su necesidad",send:"Enviar",sending:"Enviando...",success:"Su solicitud fue recibida correctamente.",error:"Ocurrió un problema. Inténtelo nuevamente."}
} as const;

export function LeadForm({type="CONTACT",productSlug,locale}:{type?:string,productSlug?:string,locale:Locale}){
 const [state,setState]=useState<"idle"|"loading"|"success"|"error">("idle"); const t=copy[locale];
 async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setState("loading");const data=Object.fromEntries(new FormData(e.currentTarget));const res=await fetch(type==="QUOTE"?"/api/quotes":"/api/inquiries",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...data,type,productSlug,locale})});setState(res.ok?"success":"error");if(res.ok)e.currentTarget.reset()}
 const field=(name:string,label:string,type="text",required=false)=><label className="grid gap-2 text-sm font-medium text-ink/70"><span>{label}</span><input aria-label={label} name={name} required={required} type={type} placeholder={label} className="input"/></label>;
 return <form onSubmit={submit} className="card grid gap-4 p-7 lg:p-9">
  <div className="grid gap-4 sm:grid-cols-2">{field("name",t.name,"text",true)}{field("company",t.company,"text",true)}</div>
  <div className="grid gap-4 sm:grid-cols-2">{field("email",t.email,"email",true)}{field("phone",t.phone)}</div>
  <div className="grid gap-4 sm:grid-cols-2">{field("country",t.country,"text",true)}{type==="QUOTE"?field("quantity",t.quantity):field("subject",t.subject)}</div>
  <label className="grid gap-2 text-sm font-medium text-ink/70"><span>{t.message}</span><textarea aria-label={t.message} name="message" required rows={6} placeholder={t.message} className="input resize-none"/></label>
  <button disabled={state==="loading"} className="btn-primary">{state==="loading"?t.sending:t.send}</button>
  {state==="success"&&<p role="status" className="text-sm text-emerald-700">{t.success}</p>}{state==="error"&&<p role="alert" className="text-sm text-red-700">{t.error}</p>}
 </form>
}
