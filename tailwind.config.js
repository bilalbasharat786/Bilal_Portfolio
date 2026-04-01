/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"]
            },
            colors: {
                background: "hsl(222.2 84% 4.9%)",
                foreground: "hsl(210 40% 98%)",
                card: "hsl(222.2 84% 4.9% / 0.8)",
                "card-foreground": "hsl(210 40% 98%)",
                popover: "hsl(222.2 84% 4.9%)",
                "popover-foreground": "hsl(210 40% 98%)",
                primary: "hsl(217.2 91.2% 59.8%)",
                "primary-foreground": "hsl(222.2 47.4% 11.2%)",
                secondary: "hsl(217.2 32.6% 17.5%)",
                "secondary-foreground": "hsl(210 40% 98%)",
                muted: "hsl(217.2 32.6% 17.5%)",
                "muted-foreground": "hsl(215.4 16.3% 56.9%)",
                accent: "hsl(217.2 32.6% 17.5%)",
                "accent-foreground": "hsl(210 40% 98%)",
                destructive: "hsl(0 62.8% 30.6%)",
                "destructive-foreground": "hsl(210 40% 98%)",
                border: "hsl(217.2 32.6% 17.5%)",
                input: "hsl(217.2 32.6% 17.5%)",
                ring: "hsl(224.3 76.3% 48%)",
                chart: {
                    1: "hsl(221.2 83.2% 53.3%)",
                    2: "hsl(212 95% 68%)",
                    3: "hsl(216 92% 60%)",
                    4: "hsl(210 98% 78%)",
                    5: "hsl(212 97% 87%)",
                },
            },
            borderRadius: {
                lg: "0.5rem",
                md: "calc(0.5rem - 2px)",
                sm: "calc(0.5rem - 4px)",
            },
            boxShadow: {
                "glow-accent": "0 0 30px rgba(37, 99, 235, 0.35)"
            }
        }
    },
    plugins: []
};
