import styled from 'styled-components'
import { SubTitle } from './subtitle'

export const SubtitleOrange = styled(SubTitle)`
	color: ${props => props.theme.colors.tertiary};
	font-size: ${props => props.theme.fontSizes.lg};
`
