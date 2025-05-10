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
			gsap.fromTo(
				'#title',
				{
					opacity: 0,
					direction: 40,
					delay: 4,
					y: 500,
					scrollTrigger: {
						trigger: '#title',
					},
				},
				{ opacity: 1, y: 0 }
			)
		},
		{
			scope: container,
		}
	)
	return (
		<BackgroundWrapperGrid ref={sectionRef} id='home'>
			<BackgroundImage src='/backgrounds/bg-1.jpg' alt='' />
			<ContentContainer ref={container}>
				<Header refs={sectionsRefs} />
				<Flex items='center' content='center' direction='column'>
					<Title id='title' lineHeight='0.6'>
						SURVIVE AT ALL COSTS
					</Title>
					<SubTitle className='subtitle' mb='20px'>
						Experience new social battle royale game
					</SubTitle>
					<Button>
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
