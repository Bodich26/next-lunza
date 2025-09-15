import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  preflight: false,
  theme: {
    breakpoints: {
      xs: "375px",
    },
    tokens: {
      colors: {
        rose: {
          50: { value: "#fff1f2" },
          100: { value: "#ffe4e6" },
          200: { value: "#fecdd3" },
          300: { value: "#fda4af" },
          400: { value: "#fb7185" },
          500: { value: "#f43f5e" },
          600: { value: "#e11d48" },
          700: { value: "#be123c" },
          800: { value: "#9f1239" },
          900: { value: "#881337" },
          950: { value: "#4c051f" },
        },
        gray: {
          200: { value: "#e5e7eb" },
        },
        white: { value: "#fff" },
        black: { value: "#000" },
        shadow: { value: "#242424" },
        light: { value: "#F2F0F1" },
        dark: { value: "#1c1c1c" },
        border: {
          light: { value: "#DDDDE0" },
        },
      },
    },
    semanticTokens: {
      colors: {
        borderColors: {
          value: {
            base: "{colors.border.light}",
            _dark: "{colors.border.light}",
          },
        },
        backgroundPrimary: {
          value: {
            base: "{colors.light}",
            _dark: "{colors.dark}",
          },
        },
        textPrimary: {
          value: {
            base: "{colors.black}",
            _dark: "{colors.white}",
          },
        },
        textWhite: {
          value: {
            base: "{colors.white}",
            _dark: "{colors.white}",
          },
        },
        cardBackground: {
          value: {
            base: "{colors.white}",
            _dark: "{colors.shadow}",
          },
        },
        accentColor: {
          value: "{colors.rose.700}",
        },
        buttonColor: {
          value: {
            base: "{colors.shadow}",
            _dark: "{colors.white}",
          },
        },
        buttonText: {
          value: {
            base: "{colors.white}",
            _dark: "{colors.black}",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
