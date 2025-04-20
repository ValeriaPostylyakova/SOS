import { FC } from 'react'
import { Flex } from '../../ui/flex'
import { HeaderMenu } from '../header/header-menu'
import { CardUserDescription } from '../rewiev-card/rewiev-card.styles'
import {
	FooterContainerBottom,
	FooterContainerTop,
	FooterList,
	FooterStyles,
} from './footer.styles'

export interface Props {
	class?: string
}

export const Footer: FC<Props> = () => {
	return (
		<FooterStyles>
			<FooterContainerTop>
				<a href='/'>
					<img width={90} src='/logo.svg' alt='logo' />
				</a>
				<HeaderMenu />
				<Flex gap='54px'>
					<a href='/'>
						<img src='/social-icons/facebook.svg' alt='icon' />
					</a>
					<a href='/'>
						<img src='/social-icons/twitter.svg' alt='icon' />
					</a>
					<a href='/'>
						<img src='/social-icons/youtube.svg' alt='icon' />
					</a>
					<a href='/'>
						<img src='/social-icons/twitch.svg' alt='icon' />
					</a>
				</Flex>
			</FooterContainerTop>
			<FooterContainerBottom>
				<CardUserDescription fontSize='14px'>
					© 2025 Outpost Games, Inc. All Rights Reserved
				</CardUserDescription>
				<FooterList>
					<li>
						<a href='/'>Privacy Policy</a>
					</li>
					<li>
						<a href='/'>Terms of Services</a>
					</li>
					<li>
						<a href='/'>Code of Conduct</a>
					</li>
				</FooterList>
			</FooterContainerBottom>
		</FooterStyles>
	)
}
