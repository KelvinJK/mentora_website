import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-fira-sans)", "sans-serif"],
                display: ["var(--font-plus-jakarta-sans)", "sans-serif"],
            },
            colors: {
                fuchsia: {
                    500: '#D946EF',
                    600: '#C026D3',
                    700: '#A21CAF',
                },
                violet: {
                    600: '#8B5CF6',
                }
            },
            boxShadow: {
                'glow': '0 0 20px rgba(217, 70, 239, 0.3)',
            },
            animation: {
                "fade-in-up": "fadeInUp 0.8s ease-out forwards",
            },
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            }
        },
    },
    plugins: [],
};
export default config;
