import { FC, useState } from 'react'
import { SectionName } from '../../../@types/pages/smooth-scroll-page-props'
import { FlexContainer } from '../../ui/container'
import { Flex } from '../../ui/flex'
import { BurgerMenu } from '../burger-menu/burger-menu'
import { BurgerMenuButton } from '../burger-menu/burger-menu-button'
import { MenuOpenBackground } from '../burger-menu/burger-menu.styles'
import { HeaderMenu } from './header-menu'
import { HeaderStyled, Logo } from './header.styles'

export interface Props {
	refs: SectionName
}

export const Header: FC<Props> = ({ refs }) => {
	const [openMenu, setOpenMenu] = useState<boolean | undefined>()

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
					<BurgerMenuButton setOpenMenu={setOpenMenu} openMenu={openMenu} />
					{openMenu && (
						<BurgerMenu refs={refs} open={openMenu} setOpen={setOpenMenu} />
					)}
					{openMenu && <MenuOpenBackground />}
				</Flex>
			</FlexContainer>
		</HeaderStyled>
	)
}
