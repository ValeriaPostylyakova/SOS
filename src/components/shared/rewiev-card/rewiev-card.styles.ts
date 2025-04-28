import styled from 'styled-components'
import { SubtitleOrange } from '../../ui/subtitle-orange'

interface Props {
	fontSize?: string
}

interface CardProps {
	alignSelf: string
}

export const Card = styled.div<CardProps>`
	border-radius: 10px;
	background-color: ${props => props.theme.colors.text};
	align-self: ${props => props.alignSelf};
`

export const CardContainer = styled.div`
	padding: 17px 26px;
`

export const CardUserDescription = styled.div<Props>`
	font-size: ${props => props.theme.fontSizes.sm} || ${props => props.fontSize};
	font-family: ${props => props.theme.fonts.primary};
	color: #959595;
	line-height: 1.2;
	text-transform: lowercase;
	letter-spacing: 0px;
`

export const TitleName = styled(SubtitleOrange)`
	white-space: nowrap;
`
