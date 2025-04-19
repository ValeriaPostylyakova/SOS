import { FC } from 'react'
import { Header } from '../../components/shared/header/header'
import { BackgroundImage } from '../../components/ui/background-image'
import { Button } from '../../components/ui/button'
import { Flex } from '../../components/ui/flex'
import { SubTitle } from '../../components/ui/subtitle'
import { Title } from '../../components/ui/title'
import {
	BackgroundContainer,
	ButtonLine,
	ContentContainer,
} from './home.styles'

const Home: FC = () => {
	return (
		<BackgroundContainer>
			<BackgroundImage src='/backgrounds/bg-1.jpg' alt='' />
			<ContentContainer>
				<Header />
				<Flex items='center' content='center' direction='column'>
					<Title lineHeight='0.6'>SURVIVE AT ALL COSTS</Title>
					<SubTitle mb='20px'>
						Experience new social battle royale game
					</SubTitle>
					<Button>
						<Flex>
							<p>Buy Now on Steam</p>
							<ButtonLine />
							<p>$14.99</p>
						</Flex>
					</Button>
				</Flex>
			</ContentContainer>
		</BackgroundContainer>
	)
}

export default Home
