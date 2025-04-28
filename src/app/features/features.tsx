import { FC } from 'react'
import { timelineItems } from '../../components/shared/time-line/time-line'
import { TimeLine } from '../../components/shared/time-line/timeLine'
import { BackgroundImage } from '../../components/ui/background-image'
import { BackgroundWrapperGrid } from '../../components/ui/background-wrapper'
import { FlexContainer } from '../../components/ui/container'
import { SubTitle } from '../../components/ui/subtitle'
import { Title } from '../../components/ui/title'
import { ContentContainer } from './features.styles'

const Features: FC = () => {
	return (
		<BackgroundWrapperGrid>
			<BackgroundImage src='/backgrounds/bg-3.jpg' alt='background' />
			<FlexContainer content='flex-end'>
				<ContentContainer>
					<SubTitle mb='11px'>What’s so special?</SubTitle>
					<Title align='start' mb='50px'>
						features
					</Title>
					<TimeLine items={timelineItems} />
				</ContentContainer>
			</FlexContainer>
		</BackgroundWrapperGrid>
	)
}

export default Features
