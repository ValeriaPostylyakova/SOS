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
	backdrop-filter: blur(4px);
	z-index: 10;
`

export const MenuButtonLine = styled.span`
	width: 100%;
	height: 3px;
	background-color: ${props => props.theme.colors.primary};
	border-radius: 4px;
`

export const BurgerMenuStyled = styled.div`
	position: fixed;
	top: 120px;
	right: 0;
	z-index: 100;
	width: 50%;
	height: 100vh;
	background-color: #040404ff;

	@media (max-width: ${props => props.theme.breakPoints.md}) {
		width: 70%;
	}

	@media (max-width: ${props => props.theme.breakPoints.sm}) {
		width: 100%;
	}
`

export const BurgerMenuList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 32px;
`
