/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			customLightgreen: '#209B6C',
  			customLightgreen2: '#E9EFEC',
  			customLightgreen3: '#456863',
  			customLightgreen4: '#CFFFE9',
  			customGreen: '#16423C',
  			customGreen2: '#21635A',
  			customAlgaegreen: '#48490F',
  			customAlgaegreen2: '#908E6C',
  			customWhite: '#F0F0F0',

			customLightyellow:"#f4f1c4",
			customYellowtext1:"#908E6C",
			customYellowtext2:"#48490F",

  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			custom: '1000px',
  			xsm: '380px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  backgroundImage: {
			'custom-gradient': 'linear-gradient(180deg, #FEFDA4 0%, #B39138 32%, #FEF99D 100%)',
			'custom-gradient2': 'linear-gradient(180deg, #FEFDA4 15%, #B39138 80%, #FEF99D 99%)',
	'custom-gradient3': 'linear-gradient(150deg, #FFF3A2 15%, #C7A84E 80%, #FEFEE0 99%)',


		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
