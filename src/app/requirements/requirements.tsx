import { FC } from 'react'
import { BackgroundImage } from '../../components/ui/background-image'
import { Container } from '../../components/ui/container'
import { SubTitle } from '../../components/ui/subtitle'
import { Title } from '../../components/ui/title'
import { BackgroundContainer } from '../home/home.styles'
import { Flex } from '../../components/ui/flex'

const Requirements: FC = () => (
	<BackgroundContainer>
		<BackgroundImage src='/backgrounds/bg-4.jpg' alt='background' />
		<Container padding='145px 10px 0 10px'>
			<Flex items='center' content='center' direction='column'>
				<SubTitle mb='11px'>Can My Computer Run this game?</SubTitle>
				<Title mb='50px'>system requirements</Title>
			</Flex>
		</Container>
	</BackgroundContainer>
)

export default Requirements
