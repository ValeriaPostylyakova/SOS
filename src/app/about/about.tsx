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
				.timeline()
				.fromTo(
					'#subtitle',
					{
						opacity: 0,
						x: -200,
						scrollTrigger: {
							trigger: '#about',
						},
					},
					{
						opacity: 1,
						x: 0,
						duration: 1,
					}
				)
				.fromTo(
					'#title',
					{
						opacity: 0,
					},
					{
						opacity: 1,
						duration: 1,
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
		<BackgroundWrapperGrid ref={sectionRef} id='about'>
			<BackgroundImage src='/backgrounds/bg-2.jpg' alt='background' />
			<AboutContainer width='1050px'>
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
				<SliderImage src='/slider/slider1.jpg' />
			</AboutContainer>
		</BackgroundWrapperGrid>
	)
}

export default About
