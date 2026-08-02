type MailInput={to:string|string[];subject:string;html:string;replyTo?:string};
const from=()=>process.env.RESEND_FROM_EMAIL||"satis@hkotradehub.com";
export async function sendEmail(input:MailInput){const key=process.env.RESEND_API_KEY;if(!key)return false;const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from:from(),...input})});if(!response.ok){console.error("Resend error",await response.text());return false}return true}
export async function notifyTeam(subject:string,html:string,replyTo?:string){const to=process.env.RESEND_TO_EMAIL;if(!to)return false;return sendEmail({to,subject,html,replyTo})}
