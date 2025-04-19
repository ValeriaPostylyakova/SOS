import { FC } from 'react'
import { timelineItems } from '../../components/shared/time-line/time-line'
import { TimeLine } from '../../components/shared/time-line/timeLine'
import { BackgroundImage } from '../../components/ui/background-image'
import { Container } from '../../components/ui/container'
import { SubTitle } from '../../components/ui/subtitle'
import { Title } from '../../components/ui/title'
import { BackgroundContainer } from '../home/home.styles'
import { ContentContainer } from './features.styles'

const Features: FC = () => {
	return (
		<BackgroundContainer>
			<BackgroundImage src='/backgrounds/bg-3.jpg' alt='background' />
			<Container content='flex-end'>
				<ContentContainer>
					<SubTitle mb='11px'>What’s so special?</SubTitle>
					<Title mb='50px'>features</Title>
					<TimeLine items={timelineItems} />
				</ContentContainer>
			</Container>
		</BackgroundContainer>
	)
}

export default Features
