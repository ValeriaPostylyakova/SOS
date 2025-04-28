import { FC } from 'react'
import { Flex } from '../../ui/flex'
import { Text } from '../../ui/text'
import {
	Card,
	CardContainer,
	CardUserDescription,
	TitleName,
} from './rewiev-card.styles'

export interface Props {
	alignSelf: string
}

export const RewievCard: FC<Props> = ({ alignSelf }) => {
	return (
		<Card alignSelf={alignSelf}>
			<CardContainer>
				<Flex mb='17px'>
					<img src='/avatars/avatar2.svg' alt='avatar' />
					<Flex direction='column' items='flex-start' gap='2px'>
						<TitleName fontSize='24px'>Evan Lahti</TitleName>
						<CardUserDescription>PC Gamer </CardUserDescription>
					</Flex>
					<a href='/'>
						<img src='/social-icons/twitter.svg' alt='twiiter' />
					</a>
				</Flex>
				<Text mb='14px'>
					“One of my gaming highlights of the year. One of my gaming highlights
					of the year.”
				</Text>
				<CardUserDescription fontSize='14px'>
					October 18, 2018
				</CardUserDescription>
			</CardContainer>
		</Card>
	)
}
