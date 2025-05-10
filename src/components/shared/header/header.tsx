import { FC, useState } from 'react'
import { SectionName } from '../../../@types/pages/smooth-scroll-page-props'
import { FlexContainer } from '../../ui/container'
import { Flex } from '../../ui/flex'
import { BurgerMenu } from '../burger-menu/burger-menu'
import {
	MenuButtonLine,
	MenuButtonStyle,
	MenuOpenBackground,
} from '../burger-menu/burger-menu.styles'
import { HeaderMenu } from './header-menu'
import { HeaderStyled, Logo } from './header.styles'

export interface Props {
	refs: SectionName
}

export const Header: FC<Props> = ({ refs }) => {
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<HeaderStyled>
			<FlexContainer padding='21px 10px'>
				<a href='/'>
					<Logo src='/logo.svg' alt='logo' />
				</a>
				<HeaderMenu refs={refs} />
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
					{openMenu && <BurgerMenu refs={refs} setOpen={setOpenMenu} />}
					{openMenu && <MenuOpenBackground />}
				</Flex>
			</FlexContainer>
		</HeaderStyled>
	)
}
