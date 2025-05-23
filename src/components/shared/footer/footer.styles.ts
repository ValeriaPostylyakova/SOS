import styled from 'styled-components'
import { FlexContainer } from '../../ui/container'

export const FooterStyles = styled.footer`
	padding: 20px 0px;
	background-color: ${props => props.theme.colors.secondary};
`

export const Logo = styled.img`
	width: 90px;

	@media (max-width: ${props => props.theme.breakPoints.md}) {
		width: 70px;
	}

	@media (max-width: ${props => props.theme.breakPoints.sm}) {
		width: 60px;
	}

	@media (max-width: ${props => props.theme.breakPoints.xs}) {
		width: 50px;
	}
`

export const FooterContainerTop = styled(FlexContainer)`
	border-bottom: 1.5px solid #5c5c5c;
	padding-bottom: 30px;
`

export const FooterContainerBottom = styled(FlexContainer)`
	padding: 22px 0px 47px 0px;
	text-align: center;

	@media (max-width: ${props => props.theme.breakPoints.md}) {
		flex-direction: column;
		gap: 2rem;
	}
`

export const FooterList = styled.ul`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: 0px 10px;
	max-width: 65%;

	li {
		font-family: ${props => props.theme.fonts.primary};
		color: ${props => props.theme.colors.primary};
		font-size: ${props => props.theme.fontSizes.sx};
		letter-spacing: 0;
		font-weight: 700;
		letter-spacing: 10%;
	}

	li::after {
		content: '|';
		margin: 0 10px;
		color: ${props => props.theme.colors.primary};
	}

	li:last-child::after {
		content: none;
	}

	@media (max-width: ${props => props.theme.breakPoints.sm}) {
		flex-direction: column;
		gap: 1rem;
	}
`
