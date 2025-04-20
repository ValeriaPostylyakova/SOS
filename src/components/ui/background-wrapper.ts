import styled from 'styled-components'

interface Props {
	bgcolor?: string
}

export const BackgroundWrapper = styled.div<Props>`
	position: relative;
	min-height: 100vh;
	overflow: hidden;
	background-color: ${props => props.bgcolor};
`

export const BackgroundWrapperGrid = styled(BackgroundWrapper)`
	display: grid;
	place-items: center;
`
