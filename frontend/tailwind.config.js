/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindPlugin from "@tailwindcss/typography";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        title: [
          "49px",
          {
            lineHeight: "120%",
            letterSpacing: "0%",
          },
        ],

        h1: [
          "35px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.04em",
            fontWeight: "bold",
          },
        ],
        h2: [
          "28px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.04em",
          },
        ],
        body: [
          "20px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.04em",
          },
        ],
        button: [
          "16px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.04em",
          },
        ],
        link: [
          "14px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.04em",
          },
        ],
        caption1: [
          "13px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.04em",
          },
        ],
        caption2: [
          "13px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.04em",
          },
        ],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        primary: {
          base: "#255E3B",
          background: "#2A3C76",
          border: "#2171E2",
          hover: "#B3B3B3",
          pressed: "#1C1C1C",
          bgText: "#2d3748",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          base: "#3A3F7C",
          background: "#2A6B3A",
          border: "#6ABD45",
          hover: "#FDC700 ",
          pressed: "#EF2A4E",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        neutral: {
          white: "#FFFFFF",
          orange: "#FFA319",
          leaf: "#5DA945",
          mint: "#EDFCEB",
          yellow: "#FFD600",
          blue: "#3B82F6",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindPlugin, tailwindcssAnimate],
};
