import styled from 'styled-components'

export type Props = {
	isActive?: boolean
	isOpen?: boolean
}

export const TimelineContainer = styled.div`
	width: 100%;
`

export const TimelineItemContainer = styled.div<Props>`
	margin-bottom: 1rem;
	position: relative;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		top: 29px;
		left: 0;
		width: 2px;
		height: 100%;
		background-color: ${props => props.theme.colors.primary};
	}

	&:last-child::before {
		content: none;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0.5rem;
		left: -0.4rem;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: 2px solid ${props => props.theme.colors.primary};
		background-color: ${props =>
			props.isActive ? props.theme.colors.primary : 'transparent'};
	}
`

export const ItemContainer = styled.div`
	margin-bottom: 27px;
`

export const TimelineContent = styled.div<Props>`
	overflow: hidden;
	max-height: ${props => (props.isOpen ? '500px' : '0')};
	transition: max-height 0.5s ease-in-out;
`
