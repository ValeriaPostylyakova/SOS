import { FC } from 'react'
import { RewievCard } from '../../components/shared/rewiev-card/rewiev-card'
import { BackgroundImage } from '../../components/ui/background-image'
import { BackgroundWrapperGrid } from '../../components/ui/background-wrapper'
import { Button } from '../../components/ui/button'
import { FlexContainer } from '../../components/ui/container'
import { Flex } from '../../components/ui/flex'
import { SubTitle } from '../../components/ui/subtitle'
import { Text } from '../../components/ui/text'
import { Title } from '../../components/ui/title'

const Quotes: FC = () => {
	return (
		<BackgroundWrapperGrid>
			<BackgroundImage src='/backgrounds/bg-5.jpg' alt='background' />
			<FlexContainer>
				<Flex direction='column' items='flex-start' gap='37px'>
					<Flex direction='column' items='flex-start' gap='10px'>
						<SubTitle>What people think?</SubTitle>
						<Title>Press quotes</Title>
					</Flex>
					<Text mb='20px'>
						Our goal is to create a product and service that you’re satisfied
						with and use it every day. This is why we’re constantly working on
						our services to make it better every day and really listen to what
						our users has to say.
					</Text>
					<Button padding='20px 35px'>Read more testimonials</Button>
				</Flex>
				<Flex direction='column' width='40%' gap='30px'>
					<RewievCard alignSelf='flex-end' />
					<RewievCard alignSelf='flex-start' />
					<RewievCard alignSelf='flex-end' />
				</Flex>
			</FlexContainer>
		</BackgroundWrapperGrid>
	)
}

export default Quotes
