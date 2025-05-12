import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FC } from 'react'
import { PropsScrollPage } from '../../@types/pages/smooth-scroll-page-props'
import { BackgroundWrapperGrid } from '../../components/ui/background-wrapper'
import { Button } from '../../components/ui/button'
import { FlexContainer } from '../../components/ui/container'
import { Flex } from '../../components/ui/flex'
import { SubTitle } from '../../components/ui/subtitle'
import { Text } from '../../components/ui/text'
import { Title } from '../../components/ui/title'
import { FormContainer, Images, InputContainer } from './newsletter.styles'

const Newsletter: FC<PropsScrollPage> = ({ sectionRef }) => {
	useGSAP(
		() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: sectionRef.current,
						scrub: true,
						start: '30% center',
						end: 'center center',
					},
				})
				.from('#input-container', {
					y: 400,
					duration: 1,
				})
				.from('#button', {
					delay: 0.3,
					y: 400,
					duration: 0.5,
				})
		},
		{ scope: sectionRef }
	)

	return (
		<BackgroundWrapperGrid ref={sectionRef} bgcolor='#0a0a0a' id='newsletter'>
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

					<FormContainer id='form'>
						<InputContainer id='input-container'>
							<label>Your email address</label>
							<input type='email' />
						</InputContainer>
						<Button id='button' type='submit' padding='20px 70px'>
							Subscribe now
						</Button>
					</FormContainer>
				</div>
			</FlexContainer>
		</BackgroundWrapperGrid>
	)
}

export default Newsletter
