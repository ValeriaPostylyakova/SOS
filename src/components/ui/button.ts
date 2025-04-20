import styled from 'styled-components'

interface Props {
	padding?: string
	fontSize?: string
	radius?: string
}

export const Button = styled.button<Props>`
	cursor: pointer;
	padding: ${props => props.padding || '17px 20px'};
	color: ${props => props.theme.colors.secondary};
	background-color: ${props => props.theme.colors.tertiary};
	font-size: ${props => props.fontSize || '16px'};
	font-family: ${props => props.theme.fonts.primary};
	border-radius: ${props => props.radius || '4px'};
	font-weight: 700;
	transition: background-color 0.5s ease;

	&:hover {
		background-color: ${props => props.theme.colors.primary};
	}

	@media (max-width: ${props => props.theme.breakPoints.xs}) {
		padding: 10px 13px;
	}

	@media (max-width: ${props => props.theme.breakPoints.sm}) {
		padding: 12px 15px;
	}
`
