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

	@media (max-width: ${props => props.theme.breakPoints.lg}) {
		font-size: 66px;
	}

	@media (max-width: ${props => props.theme.breakPoints.md}) {
		font-size: 50px;
	}

	@media (max-width: ${props => props.theme.breakPoints.sm}) {
		font-size: 40px;
	}

	@media (max-width: ${props => props.theme.breakPoints.xs}) {
		font-size: 33px;
	}
`
