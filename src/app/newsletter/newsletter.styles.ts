import styled from 'styled-components'

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
