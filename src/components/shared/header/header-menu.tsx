import { FC } from 'react'
import { Props } from './header'
import { HeaderMenuStyled } from './header.styles'
import { MENU_ITEMS_CONFIG } from './menu'
import { triggerScrollToSection } from '../../../libs/triggerScrollToSection'

export const HeaderMenu: FC<Props> = ({ refs }) => {
	return (
		<nav>
			<HeaderMenuStyled>
				{MENU_ITEMS_CONFIG.map(menuItem => (
					<li
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
