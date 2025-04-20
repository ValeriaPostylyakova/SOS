import { FC } from 'react'
import { FlexContainer } from '../../ui/container'
import { Flex } from '../../ui/flex'
import { HeaderMenu } from './header-menu'
import { HeaderStyled, Logo } from './header.styles'

export const Header: FC = () => {
	return (
		<HeaderStyled>
			<FlexContainer padding='21px 10px'>
				<a href='/'>
					<Logo src='/logo.svg' alt='logo' />
				</a>
				<HeaderMenu />
				<Flex gap='17px'>
					<a href='/'>
						<img src='/social-icons/xbox.svg' alt='icons' />
					</a>
					<a href='/'>
						<img src='/social-icons/steam.svg' alt='icons' />
					</a>
				</Flex>
			</FlexContainer>
		</HeaderStyled>
	)
}
