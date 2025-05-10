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
	text-transform: none;
	line-height: ${props => props.lineHeight || '1.2'};
	letter-spacing: 0px;
	align-content: flex-start;
	margin-left: ${props => props.ml || '0'};

	@media (max-width: ${props => props.theme.breakPoints.lg}) {
		font-size: 16px;
	}

	@media (max-width: ${props => props.theme.breakPoints.sm}) {
		font-size: 14px;
	}
`

export const Description = styled(Text)`
	margin-left: 25%;
	margin-right: 20px;

	@media (max-width: ${props => props.theme.breakPoints.lg}) {
		margin-left: 20%;
	}

	@media (max-width: ${props => props.theme.breakPoints.md}) {
		margin-left: 5%;
	}
`
