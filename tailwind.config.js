/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
        extend: {
        // Add custom animations
        animation: {
            "fade-in": "fadeIn 0.5s ease-in-out",
            "slide-up": "slideUp 0.4s ease-out",
        },
        keyframes: {
            fadeIn: {
            "0%":   { opacity: "0" },
            "100%": { opacity: "1" },
            },
            slideUp: {
            "0%":   { opacity: "0", transform: "translateY(20px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
            },
        },
        },
    },
    safelist: [
        {
            pattern: /^(text|bg|border|shadow|from|to)-(amber|emerald|red)-(100|200|300|400|500|600|700|800|900|950)$/,
            variants: ["hover", "focus", "active"],
        },
        "bg-emerald-500", "bg-amber-500", "bg-red-500", "bg-cyan-500", "bg-purple-500",
    ],
    plugins: [],
};