import styled from 'styled-components'

interface Props {
	items?: string
	content?: string
	direction?: string
	gap?: string
}

export const Flex = styled.div<Props>`
	display: flex;
	align-items: ${props => props.items || 'center'};
	flex-direction: ${props => props.direction || 'row'};
	gap: ${props => props.gap || '1rem'};
	justify-content: ${props => props.content || 'space-between'};
`
