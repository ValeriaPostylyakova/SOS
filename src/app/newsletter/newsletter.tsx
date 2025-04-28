import { FC } from 'react'
import { BackgroundWrapperGrid } from '../../components/ui/background-wrapper'
import { Button } from '../../components/ui/button'
import { FlexContainer } from '../../components/ui/container'
import { Flex } from '../../components/ui/flex'
import { SubTitle } from '../../components/ui/subtitle'
import { Text } from '../../components/ui/text'
import { Title } from '../../components/ui/title'
import { FormContainer, Images, InputContainer } from './newsletter.styles'

const Newsletter: FC = () => {
	return (
		<BackgroundWrapperGrid bgcolor='#0a0a0a'>
			<FlexContainer>
				<Images src='/image.png' alt='bg' />
				<div>
					<Flex direction='column' items='flex-start' gap='10px' mb='45px'>
						<SubTitle>Want to stay in touch?</SubTitle>
						<Title align='start'>newsletter SUBSCRIBE</Title>
					</Flex>
					<Text mb='45px'>
						In order to start receiving our news, all you have to do is enter
						your email address. Everything else will be taken care of by us. We
						will send you emails containing information about game. We don’t
						spam.
					</Text>
					<form>
						<FormContainer>
							<InputContainer>
								<label>Your email address</label>
								<input type='email' />
							</InputContainer>
							<Button type='submit' padding='20px 70px'>
								Subscribe now
							</Button>
						</FormContainer>
					</form>
				</div>
			</FlexContainer>
		</BackgroundWrapperGrid>
	)
}

export default Newsletter
