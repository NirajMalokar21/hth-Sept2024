import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
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
                background: {
                    "400": "#CFCFC9",
                    "500": "#D8D8D4",
                    "700": "#E2E2DF",
                    "800": "#ECECEA",
                    "850": "#F5F5F4",
                    "900": "#FFFFFF",
                },
                primary: {
                    "100": "#87C08F",
                    "500": "#54A05F",
                    "600": "#4D9358",
                },
                dark: {
                    "100": "#000000",
                    "200": "#0F1117",
                    "300": "#151821",
                    "400": "#212734",
                    "500": "#101012",
                },
                light: {
                    "400": "#858EAD",
                    "500": "#7B8EC8",
                    "700": "#DCE3F1",
                    "800": "#F4F6F8",
                    "850": "#FDFDFD",
                    "900": "#FFFFFF",
                },
                "accent-blue": "#1DA1F2",
            },
            keyframes: {
                "accordion-down": {
                    from: {
                        height: "0",
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)",
                    },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: {
                        height: "0",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
