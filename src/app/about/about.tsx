import { FC } from 'react'
import { Slider } from '../../components/shared/slider/slider'
import { BackgroundImage } from '../../components/ui/background-image'
import { BackgroundWrapperGrid } from '../../components/ui/background-wrapper'
import { FlexContainer } from '../../components/ui/container'
import { Flex } from '../../components/ui/flex'
import { SubTitle } from '../../components/ui/subtitle'
import { Text } from '../../components/ui/text'
import { Title } from '../../components/ui/title'
import { Line } from './about.styles'

const About: FC = () => {
	return (
		<BackgroundWrapperGrid>
			<BackgroundImage src='/backgrounds/bg-2.jpg' alt='background' />
			<FlexContainer width='1050px'>
				<Flex direction='column' items='flex-start'>
					<SubTitle>What is SOS?</SubTitle>
					<Title mb='10px'>
						social battle <br /> royale game
					</Title>
					<Line />
					<Text ml='30%'>
						Each round, <b>you</b> and <b>15</b> other contestants compete to
						escape a deadly island filled with monsters. The trick is:{' '}
						<b>three</b> people can survive. Will you run solo or form
						friendships with others to escape?
					</Text>
					<Text ml='30%'>
						Making the right decisions could be the difference between life and
						death.
					</Text>
				</Flex>
				<Slider />
			</FlexContainer>
		</BackgroundWrapperGrid>
	)
}

export default About
