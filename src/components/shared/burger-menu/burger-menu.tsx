import { FC } from 'react'
import { SectionName } from '../../../@types/pages/smooth-scroll-page-props'
import { triggerScrollToSection } from '../../../libs/triggerScrollToSection'
import { MENU_ITEMS_CONFIG } from '../header/menu'
import { BurgerMenuList, BurgerMenuStyled } from './burger-menu.styles'

export interface Props {
	refs: SectionName
	setOpen: (open: boolean) => void
}

export const BurgerMenu: FC<Props> = ({ refs, setOpen }) => {
	return (
		<BurgerMenuStyled>
			<BurgerMenuList>
				{MENU_ITEMS_CONFIG.map(menuItem => (
					<li
						key={menuItem.text}
						onClick={() =>
							triggerScrollToSection(refs, menuItem.refName, setOpen)
						}
					>
						{menuItem.text}
					</li>
				))}
			</BurgerMenuList>
		</BurgerMenuStyled>
	)
}
