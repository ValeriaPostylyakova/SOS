import { FC, useState } from 'react'
import { FlexContainer } from '../../ui/container'
import { Flex } from '../../ui/flex'
import {
	BurgerMenuStyled,
	MenuButtonLine,
	MenuButtonStyle,
	MenuOpenBackground,
} from '../burger-menu/burger-menu.styles'
import { HeaderMenu } from './header-menu'
import { HeaderStyled, Logo } from './header.styles'

export const Header: FC = () => {
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<HeaderStyled>
			<FlexContainer padding='21px 10px'>
				<a href='/'>
					<Logo src='/logo.svg' alt='logo' />
				</a>
				<HeaderMenu />
				<Flex gap='17px'>
					<Flex gap='17px'>
						<a href='/'>
							<img src='/social-icons/xbox.svg' alt='icons' />
						</a>
						<a href='/'>
							<img src='/social-icons/steam.svg' alt='icons' />
						</a>
					</Flex>
					<MenuButtonStyle onClick={() => setOpenMenu(!openMenu)}>
						<MenuButtonLine />
						<MenuButtonLine />
						<MenuButtonLine />
					</MenuButtonStyle>
					{openMenu && <BurgerMenuStyled />}
					{openMenu && <MenuOpenBackground />}
				</Flex>
			</FlexContainer>
		</HeaderStyled>
	)
}
