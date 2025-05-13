import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { FC } from 'react'
import { PropsScrollPage } from '../../@types/pages/smooth-scroll-page-props'
import { timelineItems } from '../../components/shared/time-line/time-line'
import { TimeLine } from '../../components/shared/time-line/timeLine'
import { BackgroundImage } from '../../components/ui/background-image'
import { BackgroundWrapperGrid } from '../../components/ui/background-wrapper'
import { FlexContainer } from '../../components/ui/container'
import { SubTitle } from '../../components/ui/subtitle'
import { Title } from '../../components/ui/title'
import { ContentContainer } from './features.styles'

const Features: FC<PropsScrollPage> = ({ sectionRef }) => {
	useGSAP(
		() => {
			const subtitle = new SplitText('#subtitle', {
				type: 'chars, words,lines',
			})
			const title = new SplitText('#title', { type: 'chars, words, lines' })
			gsap
				.timeline({
					scrollTrigger: {
						trigger: subtitle.elements,
						toggleActions: 'restart none restart none',
					},
				})
				.fromTo(
					subtitle.chars,
					{
						opacity: 0,
						y: -20,
					},
					{
						duration: 0.3,
						opacity: 1,
						y: 0,
						stagger: 0.1,
					}
				)
				.fromTo(
					title.chars,
					{
						opacity: 0,
					},
					{
						duration: 0.6,
						opacity: 1,
						stagger: 0.1,
					}
				)
				.from('#timeline-block', { opacity: 0, duration: 0.5 })
		},
		{ scope: sectionRef }
	)

	return (
		<BackgroundWrapperGrid ref={sectionRef} id='features'>
			<BackgroundImage src='/SOS/backgrounds/bg-3.jpg' alt='background' />
			<FlexContainer content='flex-end'>
				<ContentContainer>
					<SubTitle mb='11px' id='subtitle'>
						What’s so special?
					</SubTitle>
					<Title id='title' align='start' mb='50px'>
						features
					</Title>
					<TimeLine id='timeline-block' items={timelineItems} />
				</ContentContainer>
			</FlexContainer>
		</BackgroundWrapperGrid>
	)
}

export default Features
