import styled from 'styled-components'
import { FlexContainer } from '../../components/ui/container'

export const Line = styled.div`
	background-color: ${props => props.theme.colors.primary};
	width: 120%;
	border-radius: 4px;
	height: 3px;
	position: relative;
	zindex: 7000000;
	margin-bottom: 20px;
`

export const SliderImage = styled.img`
	width: 500px;
	height: auto;
	border-radius: 4px;

	@media (max-width: ${props => props.theme.breakPoints.lg}) {
		width: 450px;
	}

	@media (max-width: ${props => props.theme.breakPoints.md}) {
		width: 380px;
	}

	@media (max-width: ${props => props.theme.breakPoints.sm}) {
		width: 300px;
	}
`

export const AboutContainer = styled(FlexContainer)`
	padding: 40px 20px;
	@media (max-width: ${props => props.theme.breakPoints.lg}) {
		flex-direction: column;
		gap: 2rem;
	}
`
