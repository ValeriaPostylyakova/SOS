import { FC } from 'react'
import { PropsScrollPage } from '../../@types/pages/smooth-scroll-page-props'
import { RewievCard } from '../../components/shared/rewiev-card/rewiev-card'
import { BackgroundImage } from '../../components/ui/background-image'
import { BackgroundWrapperGrid } from '../../components/ui/background-wrapper'
import { Button } from '../../components/ui/button'
import { Flex } from '../../components/ui/flex'
import { SubTitle } from '../../components/ui/subtitle'
import { Text } from '../../components/ui/text'
import { Title } from '../../components/ui/title'
import { FlexCardsContainer, QuotesContainer } from './quotes.styles'

const Quotes: FC<PropsScrollPage> = ({ sectionRef }) => {
	return (
		<BackgroundWrapperGrid ref={sectionRef} id='quotes'>
			<BackgroundImage src='/backgrounds/bg-5.jpg' alt='background' />
			<QuotesContainer>
				<Flex direction='column' items='flex-start' gap='37px'>
					<Flex direction='column' items='flex-start' gap='10px'>
						<SubTitle>What people think?</SubTitle>
						<Title align='start'>Press quotes </Title>
					</Flex>
					<Text mb='20px'>
						Our goal is to create a product and service that you’re satisfied
						with and use it every day. This is why we’re constantly working on
						our services to make it better every day and really listen to what
						our users has to say.
					</Text>
					<Button padding='20px 35px'>Read more testimonials</Button>
				</Flex>
				<FlexCardsContainer direction='column' width='40%' gap='30px'>
					<RewievCard alignSelf='flex-end' />
					<RewievCard alignSelf='flex-start' />
					<RewievCard alignSelf='flex-end' />
				</FlexCardsContainer>
			</QuotesContainer>
		</BackgroundWrapperGrid>
	)
}

export default Quotes
