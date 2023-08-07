/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        blue: "#007bff",
        green: "#009b55ff",
        purple: "#a200ff",
        pink: "#ff1493",
        black: {
          0: "#000000",
          50: "#1c1c1e",
          100: "#030303",
          200: "#050505",
          300: "#070707",
          400: "#090909",
          500: "#0b0b0b",
          600: "#0d0d0d",
          700: "#0f0f0f",
          800: "#1d1c20",
          900: "#18181b",
          950: "#13131A",
        },
        white: {
          0: "#ffffff",
          50: "#F9F9F9",
          100: "#F2F2F2",
          200: "#ECECEC",
          300: "#ededed",
          400: "#DFDFDF",
          500: "#D8D8D8",
          600: "#D2D2D2",
          700: "#CCCCCC",
          800: "#C6C6C6",
          900: "#BFBFBF",
        },
        gray: {
          0: "#F1F1F1",
          50: "#E8E8E8",
          100: "#E0E0E0",
          200: "#D7D7D7",
          300: "#CECECE",
          400: "#C5C5C5",
          500: "#BDBDBD",
          600: "#B4B4B4",
          700: "#ACACAC",
          800: "#9b9b9c",
          900: "#9A9A9A",
          950: "#2a2a2c",
        },
        my_border: "hsl(var(--border-box))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      dropShadow: {
        shine: "0 0 1px #fff",
      },
      boxShadow: {
        box: "var(--shadow)",
        shine: "0 0 10px rgba(255, 255, 255, 0.2)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
