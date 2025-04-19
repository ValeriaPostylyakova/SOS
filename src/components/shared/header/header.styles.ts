import styled from 'styled-components'

export const HeaderStyled = styled.header`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	background-color: transparent;
	min-height: 140px;
`

export const HeaderMenu = styled.ul`
	display: flex;
	align-items: center;
	gap: 32px;

	li {
		a {
			color: ${props => props.theme.colors.primary};
			font-size: ${props => props.theme.fontSizes.sx};
			font-family: ${props => props.theme.fonts.primary};
			font-weight: 700;
		}
	}
`
