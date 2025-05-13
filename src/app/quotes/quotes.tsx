import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
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
	useGSAP(
		() => {
			gsap
				.timeline({
					scrollTrigger: {
						scrub: true,
						trigger: sectionRef.current,
						start: 'top center',
						end: 'center center',
					},
				})

				.from('#title', {
					opacity: 0,
					duration: 1.2,
				})
				.from('#subtitle', {
					opacity: 0,
					duration: 1.2,
				})
				.from('#text', {
					opacity: 0,
					duration: 1.2,
				})
				.from('#button', {
					opacity: 0,
					duration: 1.2,
				})
				.from('#card-1', {
					opacity: 0,
					x: 1000,
					duration: 1,
				})
				.from('#card-2', {
					opacity: 0,
					x: 1000,
					duration: 1,
				})
				.from('#card-3', {
					opacity: 0,
					x: 1000,
					duration: 1,
				})
		},
		{ scope: sectionRef }
	)

	return (
		<BackgroundWrapperGrid ref={sectionRef} id='quotes'>
			<BackgroundImage src='/SOS/backgrounds/bg-5.jpg' alt='background' />
			<QuotesContainer>
				<Flex direction='column' items='flex-start' gap='37px'>
					<Flex direction='column' items='flex-start' gap='10px'>
						<SubTitle id='subtitle'>What people think?</SubTitle>
						<Title id='title' align='start'>
							Press quotes{' '}
						</Title>
					</Flex>
					<Text mb='20px' id='text'>
						Our goal is to create a product and service that you’re satisfied
						with and use it every day. This is why we’re constantly working on
						our services to make it better every day and really listen to what
						our users has to say.
					</Text>
					<Button id='button' padding='20px 35px'>
						Read more testimonials
					</Button>
				</Flex>
				<FlexCardsContainer direction='column' width='50%' gap='30px'>
					<RewievCard id='card-1' alignSelf='flex-end' />
					<RewievCard id='card-2' alignSelf='flex-start' />
					<RewievCard id='card-3' alignSelf='flex-end' />
				</FlexCardsContainer>
			</QuotesContainer>
		</BackgroundWrapperGrid>
	)
}

export default Quotes
