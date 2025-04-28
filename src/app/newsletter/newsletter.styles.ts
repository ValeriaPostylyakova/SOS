import styled from 'styled-components'
import { Flex } from '../../components/ui/flex'

export const InputContainer = styled.div`
	position: relative;
	zindex: 20;
	border-radius: 5px;
	background-color: ${props => props.theme.colors.text};
	padding: 0 22px;
	color: ${props => props.theme.colors.tertiary};
	font-size: ${props => props.theme.fontSizes.sm};
	width: 367px;
	text-transform: lowercase;
	height: 60px;

	@media (max-width: 556px) {
		width: 300px;
		height: 55px;
	}

	label {
		position: absolute;
		left: 20px;
		top: 6px;
		color: #a7a7a7;
		font-size: 14px;
		letter-spacing: 0px;
		text-transform: lowercase;
	}

	input {
		position: absolute;
		top: 30px;
		left: 20px;
		color: ${props => props.theme.colors.tertiary};
		background-color: transparent;
		font-size: ${props => props.theme.fontSizes.sm};
	}
`

export const FormContainer = styled(Flex)`
	@media (max-width: ${props => props.theme.breakPoints.lg}) {
		flex-direction: column;
		align-items: start;
	}
`

export const Images = styled.img`
	@media (max-width: 798px) {
		max-width: 300px;
	}

	@media (max-width: 685px) {
		max-width: 250px;
	}

	@media (max-width: 630px) {
		max-width: 210px;
	}

	@media (max-width: 590px) {
		max-width: 170px;
	}

	@media (max-width: 488px) {
		display: none;
	}
`
