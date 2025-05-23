import styled from 'styled-components'

interface Props {
	width?: string
	items?: string
	content?: string
	padding?: string
}

export const FlexContainer = styled.div<Props>`
	max-width: ${props => props.width || '1300px'};
	width: 100%;
	margin: 0 auto;
	padding: ${props => props.padding || '0 10px'};
	display: flex;
	align-items: ${props => props.items || 'center'};
	justify-content: ${props => props.content || 'space-between'};
`
export const Container = styled.div<Props>`
	max-width: ${props => props.width || '1300px'};
	margin: 0 auto;
	padding: ${props => props.padding || '0 10px'};
`
