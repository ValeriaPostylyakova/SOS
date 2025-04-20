import styled from 'styled-components'
import { SubTitle } from './subtitle'

interface Props {
	fontSize?: string
}

export const SubtitleOrange = styled(SubTitle)<Props>`
	color: ${props => props.theme.colors.tertiary};
	font-size: ${props => props.theme.fontSizes.lg} || ${props => props.fontSize};
`
