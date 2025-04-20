import styled from 'styled-components'

export const Input = styled.input`
	position: relative;
	border-radius: 5px;
	background-color: ${props => props.theme.colors.text};
	padding: 0 22px;
	color: ${props => props.theme.colors.tertiary};
	font-size: ${props => props.theme.fontSizes.sm};
	max-width: 367px;
	text-transform: lowercase;
	height: 60px;
`
