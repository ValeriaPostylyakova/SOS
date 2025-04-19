import styled from 'styled-components'

export interface Props {
	mb?: string
	lineHeight?: string
	self?: string
	ml?: string
}

export const Text = styled.p<Props>`
	font-size: ${props => props.theme.fontSizes.sm};
	text-align: ${props => props.self || 'left'};
	max-width: 500px;
	font-family: ${props => props.theme.fonts.primary};
	color: ${props => props.theme.colors.primary};
	margin-bottom: ${props => props.mb || '0'};
	text-transform: lowercase;
	line-height: ${props => props.lineHeight || '1.2'};
	letter-spacing: 0px;
	align-content: flex-start;
	margin-left: ${props => props.ml || '0'};
`
