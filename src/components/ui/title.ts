import styled from 'styled-components'

interface Props {
	mb?: string
	lineHeight?: string
}

export const Title = styled.h1<Props>`
	font-size: ${props => props.theme.fontSizes.xl};
	font-family: ${props => props.theme.fonts.secondary};
	color: ${props => props.theme.colors.primary};
	margin-bottom: ${props => props.mb || '0'};
	line-height: ${props => props.lineHeight || '1'};
`
