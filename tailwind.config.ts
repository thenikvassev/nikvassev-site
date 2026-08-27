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
        // Storyline Pros kit tokens (exact)
        forest: {
          DEFAULT: "#0A3B24", // --color-kit-dark: primary green text + button fills
          dark: "#032415", // --color-kit-key1: inverted spotlight panels
          soft: "#E8E4D9", // reuse cream wash for soft hover/section tint
        },
        cream: {
          DEFAULT: "#E8E4D9", // --color-kit-light: cream section bg
          card: "#FFFFFF",
          warm: "#CBBCA3", // --color-kit-key2: tan dividers/highlights
        },
        tan: "#CBBCA3",
        ink: {
          DEFAULT: "#0A3B24", // body text = Storyline dark green
          muted: "#3d4848",
          faint: "#6b7a72",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
      },
      borderRadius: {
        card: "16px",
        panel: "24px",
        btn: "9999px",
      },
      maxWidth: {
        reading: "40rem",
        measure: "35rem",
        narrow: "30rem",
        content: "56rem",
        wide: "75rem",
      },
      letterSpacing: {
        section: "0.18em",
        display: "-0.02em",
      },
      lineHeight: {
        display: "1.2",
      },
      boxShadow: {
        lift: "0 12px 32px rgba(3, 36, 21, 0.10)",
        rest: "0 2px 12px rgba(3, 36, 21, 0.04)",
      },
      transitionTimingFunction: {
        editorial: "ease-out",
      },
      transitionDuration: {
        editorial: "140ms",
      },
      spacing: {
        section: "6rem",
      },
    },
  },
  plugins: [],
};

export default config;
