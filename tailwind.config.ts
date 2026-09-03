import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0A3B24",
          dark: "#032415",
          soft: "#E8E4D9",
        },
        cream: {
          DEFAULT: "#E8E4D9",
          card: "#E8E4D9",
          warm: "#CBBCA3",
        },
        tan: "#CBBCA3",
        ink: {
          DEFAULT: "#0A3B24",
          muted: "#3d4848",
          faint: "#6b7a72",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-pp-editorial)", "Georgia", "serif"],
      },
      borderRadius: {
        card: "16px",
        btn: "9999px",
      },
      maxWidth: {
        reading: "42rem",
        content: "56rem",
      },
      letterSpacing: {
        section: "0.18em",
        display: "-0.5px",
      },
      lineHeight: {
        display: "1.3",
      },
    },
  },
  plugins: [],
};

export default config;
