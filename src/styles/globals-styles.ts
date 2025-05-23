import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
	}

	html,
	body {
			height: 100%;
			width: 100%;
			text-transform: uppercase;
			letter-spacing: 2px;
	}

	ol,
	ul {
			list-style: none;
	}

	a {
			text-decoration: none;
			color: inherit;
	}

	button, input {
			outline: none;
			border: none;
			background-color: inherit;
	}
`

export default GlobalStyle
