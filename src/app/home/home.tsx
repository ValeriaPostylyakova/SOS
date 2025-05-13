import { FC, useRef } from 'react'
import { Header } from '../../components/shared/header/header'
import { BackgroundImage } from '../../components/ui/background-image'
import { BackgroundWrapperGrid } from '../../components/ui/background-wrapper'
import { Button } from '../../components/ui/button'
import { Flex } from '../../components/ui/flex'
import { SubTitle } from '../../components/ui/subtitle'
import { Title } from '../../components/ui/title'
import { ButtonLine, ContentContainer } from './home.styles'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { PropsListScrollPage } from '../../@types/pages/smooth-scroll-page-props'

const Home: FC<PropsListScrollPage> = ({ sectionRef, sectionsRefs }) => {
	const container = useRef<HTMLDivElement | null>(null)

	useGSAP(
		() => {
			gsap
				.timeline()
				.fromTo(
					'#title',
					{
						scale: 0.4,
					},
					{
						scale: 1,
						duration: 1,
					}
				)
				.fromTo(
					'#subtitle',
					{
						opacity: 0,
						y: 30,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.5,
					}
				)
				.fromTo('#button', { opacity: 0 }, { opacity: 1, duration: 0.8 })
		},
		{
			scope: container,
		}
	)
	return (
		<BackgroundWrapperGrid ref={sectionRef} id='home'>
			<BackgroundImage src='/SOS/backgrounds/bg-1.jpg' alt='' />
			<ContentContainer id='content-container' ref={container}>
				<Header refs={sectionsRefs} />
				<Flex items='center' content='center' direction='column'>
					<Title id='title' lineHeight='0.6'>
						SURVIVE AT ALL COSTS
					</Title>
					<SubTitle id='subtitle' mb='20px'>
						Experience new social battle royale game
					</SubTitle>
					<Button id='button'>
						<Flex>
							<p>Buy Now on Steam </p>
							<ButtonLine />
							<p>$14.99</p>
						</Flex>
					</Button>
				</Flex>
			</ContentContainer>
		</BackgroundWrapperGrid>
	)
}

export default Home
