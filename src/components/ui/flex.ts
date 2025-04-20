import styled from 'styled-components'

interface Props {
	items?: string
	content?: string
	direction?: string
	gap?: string
	width?: string
	mb?: string
}

export const Flex = styled.div<Props>`
	display: flex;
	width: ${props => props.width || 'auto'};
	align-items: ${props => props.items || 'center'};
	flex-direction: ${props => props.direction || 'row'};
	gap: ${props => props.gap || '1rem'};
	justify-content: ${props => props.content || 'space-between'};
	margin-bottom: ${props => props.mb || '0'};
`
