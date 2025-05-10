import styled from 'styled-components'

export const MenuButtonStyle = styled.button`
	width: 33px;
	height: 26px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	display: none;

	@media (max-width: ${props => props.theme.breakPoints.lg}) {
		display: flex;
	}
`

export const MenuOpenBackground = styled.div`
	position: fixed;
	top: 120px;
	left: 0;
	width: 100%;
	height: 100vh;
	backdrop-filter: blur(0px);
	z-index: 10;
`

export const MenuButtonLine = styled.span`
	width: 100%;
	height: 3px;
	background-color: ${props => props.theme.colors.primary};
	border-radius: 4px;

	&:nth-child(2) {
		width: 80%;
		margin-left: auto;
	}
`

export const BurgerMenuStyled = styled.div`
	position: fixed;
	border-radius: 15px 0px 0px 0px;
	top: 100px;
	right: 0;
	z-index: 100;
	width: 50%;
	height: 100vh;
	background-color: #131313b4;

	@media (max-width: ${props => props.theme.breakPoints.md}) {
		width: 100%;
		border-radius: 0px 0px 0px 0px;
	}
`

export const BurgerMenuList = styled.ul`
	height: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 32px;

	li {
		color: ${props => props.theme.colors.primary};
		font-family: ${props => props.theme.fonts.primary};
		font-weight: 700;
	}
`
