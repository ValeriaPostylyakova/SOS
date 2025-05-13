import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FC } from 'react'
import { PropsScrollPage } from '../../@types/pages/smooth-scroll-page-props'
import { BackgroundImage } from '../../components/ui/background-image'
import { BackgroundWrapperGrid } from '../../components/ui/background-wrapper'
import { Flex } from '../../components/ui/flex'
import { SubTitle } from '../../components/ui/subtitle'
import { Description } from '../../components/ui/text'
import { Title } from '../../components/ui/title'
import { AboutContainer, Line, SliderImage } from './about.styles'

const About: FC<PropsScrollPage> = ({ sectionRef }) => {
	useGSAP(
		() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: '#subtitle',
						toggleActions: 'restart none restart none',
					},
				})
				.fromTo(
					'#subtitle',
					{
						x: -200,
						opacity: 0,
						scale: 3,
					},
					{
						opacity: 1,
						rotate: 360,
						x: 0,
						scale: 1,
						duration: 1.3,
					},
					0
				)
				.fromTo(
					'#slide-images',
					{
						x: 800,
					},
					{
						x: 0,
						rotate: 360,
						duration: 1,
					},
					0
				)
				.fromTo(
					'#title',
					{
						opacity: 0,
					},
					{
						opacity: 1,
						duration: 0.6,
					}
				)
				.fromTo(
					'#text',
					{
						opacity: 0,
						y: -40,
					},
					{
						y: 0,
						opacity: 1,
					}
				)
		},
		{
			scope: sectionRef,
		}
	)

	return (
		<BackgroundWrapperGrid ref={sectionRef}>
			<BackgroundImage src='/SOS/backgrounds/bg-2.jpg' alt='background' />
			<AboutContainer width='1050px' id='about'>
				<Flex direction='column' items='flex-start'>
					<SubTitle id='subtitle'>What is SOS? </SubTitle>
					<Title id='title' align='start' mb='10px'>
						social battle royale game
					</Title>
					<Line />
					<Description id='text'>
						Each round, <b>you</b> and <b>15</b> other contestants compete to
						escape a deadly island filled with monsters. The trick is:
						<b>three</b> people can survive. Will you run solo or form
						friendships with others to escape?
					</Description>
					<Description id='text'>
						Making the right decisions could be the difference between life and
						death.
					</Description>
				</Flex>
				<SliderImage src='/SOS/slider/slider1.jpg' id='slide-images' />
			</AboutContainer>
		</BackgroundWrapperGrid>
	)
}

export default About
