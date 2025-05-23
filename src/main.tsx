import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import GlobalStyle from './styles/globals-styles.ts'
import theme from './styles/theme.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<App />
			<GlobalStyle />
		</ThemeProvider>
	</StrictMode>
)
