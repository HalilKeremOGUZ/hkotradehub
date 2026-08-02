import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {extend: {colors: {ink:"#081427",ocean:"#0B4F6C",copper:"#D28A45",sand:"#F5F1E8",aqua:"#51D6CB",mist:"#F3F7F8"},boxShadow:{soft:"0 20px 60px rgba(8,20,39,.10)"},backgroundImage:{"hero-glow":"radial-gradient(circle at 75% 25%, rgba(81,214,203,.22), transparent 32%), radial-gradient(circle at 20% 80%, rgba(210,138,69,.16), transparent 26%)"}}},plugins: []
} satisfies Config;
