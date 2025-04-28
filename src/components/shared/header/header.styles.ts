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

export const Logo = styled.img`
	width: 55px;

	@media (max-width: ${props => props.theme.breakPoints.sm}) {
		width: 40px;
	}

	@media (max-width: ${props => props.theme.breakPoints.xs}) {
		width: 33px;
	}
`

export const HeaderMenuStyled = styled.ul`
	display: flex;
	align-items: center;
	gap: 32px;
	flex-wrap: wrap;
	max-width: 1140px;
	padding: 0px 100px;

	li {
		transition: all 1s ease-in-out;
		a {
			position: relative;
			color: ${props => props.theme.colors.primary};
			font-size: ${props => props.theme.fontSizes.sx};
			font-family: ${props => props.theme.fonts.primary};
			font-weight: 700;
		}
	}

	a:after {
		content: '';
		display: block;
		position: absolute;
		right: 0;
		bottom: -3px;
		width: 0;
		height: 2px;
		background-color: ${props => props.theme.colors.primary};
		transition: width 0.5s;
	}

	a:hover:after {
		content: '';
		width: 100%;
		display: block;
		position: absolute;
		left: 0;
		bottom: -3px;
		height: 2px;
		background-color: ${props => props.theme.colors.primary};
		transition: width 0.5s;
	}

	@media (max-width: ${props => props.theme.breakPoints.lg}) {
		display: none;
	}
`
