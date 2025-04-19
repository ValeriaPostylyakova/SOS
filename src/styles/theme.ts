export interface ITheme {
	colors: {
		primary: string
		secondary: string
		tertiary: string
	}
	fonts: {
		primary: string
		secondary: string
	}
	fontSizes: {
		sx: string
		sm: string
		md: string
		lg: string
		xl: string
	}
	breakPoints: {
		xs: string
		sm: string
		md: string
		lg: string
		xl: string
	}
}

const theme: ITheme = {
	colors: {
		primary: '#ffffff',
		secondary: '#000000',
		tertiary: '#FFB548',
	},
	fonts: {
		primary: 'Open Sans, sans-serif',
		secondary: 'Bebas Neue, sans-serif',
	},
	fontSizes: {
		sx: '12px',
		sm: '18px',
		md: '24px',
		lg: '36px',
		xl: '80px',
	},
	breakPoints: {
		xs: '320px',
		sm: '576px',
		md: '768px',
		lg: '992px',
		xl: '1200px',
	},
}

export default theme
