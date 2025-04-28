import { FC } from 'react'
import { BackgroundImage } from '../../components/ui/background-image'
import { BackgroundWrapperGrid } from '../../components/ui/background-wrapper'
import { Flex } from '../../components/ui/flex'
import { SubTitle } from '../../components/ui/subtitle'
import { Description } from '../../components/ui/text'
import { Title } from '../../components/ui/title'
import { AboutContainer, Line, SliderImage } from './about.styles'

const About: FC = () => {
	return (
		<BackgroundWrapperGrid>
			<BackgroundImage src='/backgrounds/bg-2.jpg' alt='background' />
			<AboutContainer width='1050px'>
				<Flex direction='column' items='flex-start'>
					<SubTitle>What is SOS? </SubTitle>
					<Title align='start' mb='10px'>
						social battle royale game
					</Title>
					<Line />
					<Description>
						Each round, <b>you</b> and <b>15</b> other contestants compete to
						escape a deadly island filled with monsters. The trick is:
						<b>three</b> people can survive. Will you run solo or form
						friendships with others to escape?
					</Description>
					<Description>
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
