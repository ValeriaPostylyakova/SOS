import styled from 'styled-components'

export interface Props {
	col?: string
}

export const TitleContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ListTable = styled.ul`
	max-width: 573px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto auto;
	color: ${props => props.theme.colors.primary};
	box-shadow: 0 0 0 0.6px #979797;
`

export const ListItem = styled.li<Props>`
	border: 1px solid #979797;
	padding: 15px 20px 50px 15px;
	display: flex;
	flex-direction: column;
	font-weight: 400;
	gap: 6px;
	grid-column: ${props => props.col || 'auto'};
	box-shadow: 0 0 0 0.6px #979797;
`
