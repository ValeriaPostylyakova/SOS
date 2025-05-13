import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FC } from 'react'
import { PropsScrollPage } from '../../@types/pages/smooth-scroll-page-props'
import { BackgroundImage } from '../../components/ui/background-image'
import { BackgroundWrapper } from '../../components/ui/background-wrapper'
import { Container } from '../../components/ui/container'
import { Flex } from '../../components/ui/flex'
import { SubTitle } from '../../components/ui/subtitle'
import { SubtitleOrange } from '../../components/ui/subtitle-orange'
import { Text } from '../../components/ui/text'
import { Title } from '../../components/ui/title'
import { ListItem, ListTable } from './requirements.styles'

const Requirements: FC<PropsScrollPage> = ({ sectionRef }) => {
	useGSAP(
		() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: sectionRef.current,
						start: 'top center',
						end: 'top 15%',
						scrub: true,
						toggleActions: 'play none none reverse',
					},
				})
				.from('#subtitle', {
					opacity: 0,
					y: 100,
					duration: 1,
				})
				.from(
					'#title',
					{
						opacity: 0,
						y: -300,
						duration: 0.8,
					},
					'<'
				)
		},
		{ scope: sectionRef }
	)

	return (
		<BackgroundWrapper ref={sectionRef} id='requirements'>
			<BackgroundImage src='/SOS/backgrounds/bg-4.jpg' alt='background' />
			<Container padding='145px 10px 0 10px'>
				<Flex
					width='100%'
					items='center'
					content='center'
					direction='column'
					gap='10px'
					mb='133px'
				>
					<SubTitle id='subtitle'>Can My Computer Run this game?</SubTitle>
					<Title id='title'>system requirements </Title>
				</Flex>
				<ListTable>
					<ListItem>
						<SubtitleOrange fontSize='24px'>OS:</SubtitleOrange>
						<Text>Windows 7 64-bit only (No OSX support at this time)</Text>
					</ListItem>
					<ListItem>
						<SubtitleOrange fontSize='24px'>pROCESSOR:</SubtitleOrange>
						<Text>Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ</Text>
					</ListItem>
					<ListItem>
						<SubtitleOrange fontSize='24px'>mEMORY:</SubtitleOrange>
						<Text>8 GB RAM</Text>
					</ListItem>
					<ListItem>
						<SubtitleOrange fontSize='24px'>storage:</SubtitleOrange>
						<Text>8 GB available space</Text>
					</ListItem>
					<ListItem col='1 / span 2'>
						<SubtitleOrange fontSize='24px'>GRAPHICS:</SubtitleOrange>
						<Text>
							NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11
							(Shader Model 5)
						</Text>
					</ListItem>
				</ListTable>
			</Container>
		</BackgroundWrapper>
	)
}

export default Requirements
