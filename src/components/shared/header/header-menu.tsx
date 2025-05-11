import { FC } from 'react'
import { triggerScrollToSection } from '../../../libs/triggerScrollToSection'
import { Props } from './header'
import { HeaderMenuStyled } from './header.styles'
import { MENU_ITEMS_CONFIG } from './menu'

export const HeaderMenu: FC<Props> = ({ refs }) => {
	return (
		<nav>
			<HeaderMenuStyled>
				{MENU_ITEMS_CONFIG.map(menuItem => (
					<li
						id='menu-item'
						key={menuItem.text}
						onClick={() => triggerScrollToSection(refs, menuItem.refName)}
					>
						{menuItem.text}
					</li>
				))}
			</HeaderMenuStyled>
		</nav>
	)
}
