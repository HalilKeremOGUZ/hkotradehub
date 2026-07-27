import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#081427",
        ocean: "#0B4F6C",
        copper: "#D28A45",
        sand: "#F5F1E8"
      },
      boxShadow: { soft: "0 20px 60px rgba(8,20,39,.12)" }
    }
  },
  plugins: []
} satisfies Config;
