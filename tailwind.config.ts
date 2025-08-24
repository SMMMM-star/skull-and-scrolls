import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				pirate: ['Pirata One', 'cursive'],
				royal: ['Cinzel', 'serif'],
				creepy: ['Creepster', 'cursive'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				pirate: {
					gold: 'hsl(var(--pirate-gold))',
					'gold-dark': 'hsl(var(--pirate-gold-dark))',
					brown: 'hsl(var(--pirate-brown))',
					'brown-dark': 'hsl(var(--pirate-brown-dark))',
					ocean: 'hsl(var(--pirate-ocean))',
					'ocean-dark': 'hsl(var(--pirate-ocean-dark))',
					parchment: 'hsl(var(--pirate-parchment))',
					'parchment-dark': 'hsl(var(--pirate-parchment-dark))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"pirate-treasure": "linear-gradient(135deg, hsl(var(--pirate-gold)), hsl(var(--pirate-brown)), hsl(var(--pirate-gold)))",
				"mystical-glow": "radial-gradient(circle at center, hsl(var(--pirate-gold) / 0.3), transparent 70%)",
				"treasure-shimmer": "linear-gradient(45deg, transparent 30%, hsl(var(--pirate-gold) / 0.3) 50%, transparent 70%)",
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				wave: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-10px) rotate(1deg)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				sail: {
					'0%': { transform: 'translateX(-100px)' },
					'100%': { transform: 'translateX(calc(100vw + 100px))' }
				},
				flicker: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				},
				'treasure-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)',
						transform: 'scale(1.05)'
					}
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px hsl(var(--pirate-gold) / 0.5)' },
					'50%': { boxShadow: '0 0 20px hsl(var(--pirate-gold) / 0.8), 0 0 30px hsl(var(--pirate-gold) / 0.6)' }
				},
				'mystical-rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				wave: 'wave 3s ease-in-out infinite',
				float: 'float 4s ease-in-out infinite',
				sail: 'sail 10s linear infinite',
				flicker: 'flicker 2s ease-in-out infinite',
				shimmer: 'shimmer 3s infinite',
				'treasure-glow': 'treasure-glow 4s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'mystical-rotate': 'mystical-rotate 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;