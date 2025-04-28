import styled from 'styled-components'
import { FlexContainer } from '../../components/ui/container'
import { Flex } from '../../components/ui/flex'

export const QuotesContainer = styled(FlexContainer)`
	@media (max-width: ${props => props.theme.breakPoints.lg}) {
		flex-direction: column;
		gap: 2rem;
		align-items: flex-start;
		width: 80%;

	@media (max-width: ${props => props.theme.breakPoints.md}) {
		width: 90%; 
	}
`

export const FlexCardsContainer = styled(Flex)`
	@media (max-width: ${props => props.theme.breakPoints.lg}) {
		width: 80%;
	}

	@media (max-width: ${props => props.theme.breakPoints.sm}) {
		width: 100%;
	}
`
