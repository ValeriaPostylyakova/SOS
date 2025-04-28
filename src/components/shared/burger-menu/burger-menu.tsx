import { FC } from 'react'
import { BurgerMenuStyled } from './burger-menu.styles'

export interface Props {
	className?: string
}

export const BurgerMenu: FC<Props> = () => {
	return (
		<BurgerMenuStyled>
			<ul>
				<li>
					<a href='/'>main</a>
				</li>
				<li>
					<a href='/'>about</a>
				</li>
				<li>
					<a href='/'>features</a>
				</li>
				<li>
					<a href='/'>requirements</a>
				</li>
				<li>
					<a href='/'>quotes</a>
				</li>
			</ul>
		</BurgerMenuStyled>
	)
}
