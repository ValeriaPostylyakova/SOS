import styled from 'styled-components'

interface Props {
	mb?: string
	lineHeight?: string
}

export const SubTitle = styled.h1<Props>`
	font-size: ${props => props.theme.fontSizes.md};
	font-family: ${props => props.theme.fonts.secondary};
	color: ${props => props.theme.colors.primary};
	margin-bottom: ${props => props.mb || '0'};
	line-height: ${props => props.lineHeight || '1'};
	max-width: 80%;
	text-align: center;

	@media (max-width: ${props => props.theme.breakPoints.sm}) {
		font-size: 16px;
	}

	@media (max-width: ${props => props.theme.breakPoints.xs}) {
		font-size: 14px;
	}
`
