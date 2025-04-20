import styled from 'styled-components'

export const Line = styled.div`
	background-color: ${props => props.theme.colors.primary};
	width: 120%;
	border-radius: 4px;
	height: 3px;
	position: relative;
	zindex: 70;
	margin-bottom: 20px;
`

export const SliderImage = styled.img`
	max-width: 500px;
	height: auto;
	border-radius: 4px;
`
