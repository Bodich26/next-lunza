import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  preflight: false,
  theme: {
    breakpoints: {
      xs: "375px",
      smPlus: "560px",
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
          50: { value: "oklch(98.5% 0.002 247.839)" },
          100: { value: "oklch(96.7% 0.003 264.542)" },
          200: { value: "oklch(92.8% 0.006 264.531)" },
          300: { value: "oklch(87.2% 0.01 258.338)" },
          400: { value: "oklch(70.7% 0.022 261.325)" },
          500: { value: "oklch(55.1% 0.027 264.364)" },
          600: { value: "oklch(44.6% 0.03 256.802)" },
          700: { value: "oklch(37.3% 0.034 259.733)" },
          800: { value: "oklch(27.8% 0.033 256.848)" },
          900: { value: "oklch(21% 0.034 264.665)" },
          950: { value: "oklch(13% 0.028 261.692)" },
        },
        whites: {
          50: { value: "#fff" },
          100: { value: "#FAFAFA" },
          200: { value: "#F5F5F5" },
          300: { value: "#F2F2F2" },
          400: { value: "#EBEBEB" },
        },
        silver: {
          50: { value: "#000" },
          100: { value: "#1c1c1c" },
          200: { value: "#242424" },
          300: { value: "#2e2e2e" },
          400: { value: "#333333" },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Основные фоны
        "bg.app": {
          value: {
            base: "{colors.whites.200}",
            _dark: "{colors.silver.100}",
          },
        },
        "bg.card": {
          value: {
            base: "{colors.whites.50}",
            _dark: "{colors.silver.200}",
          },
        },
        "bg.muted": {
          value: {
            base: "{colors.whites.300}",
            _dark: "{colors.silver.400}",
          },
        },
        "bg.subtle": {
          value: {
            base: "{colors.gray.200}",
            _dark: "{colors.whites.50}",
          },
        },
        "bg.skeleton": {
          value: {
            base: "{colors.gray.200}",
            _dark: "{colors.silver.300}",
          },
        },

        // Текст
        "text.primary": {
          value: {
            base: "{colors.silver.50}",
            _dark: "{colors.whites.50}",
          },
        },
        "text.inverse": {
          value: {
            base: "{colors.whites.50}",
            _dark: "{colors.silver.50}",
          },
        },
        "text.white": {
          value: {
            base: "{colors.whites.50}",
            _dark: "{colors.whites.50}",
          },
        },

        // Бордеры
        "border.default": {
          value: {
            base: "{colors.gray.200}",
            _dark: "{colors.whites.300}",
          },
        },

        // Акцент
        "accent.primary": {
          value: "{colors.rose.700}",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
