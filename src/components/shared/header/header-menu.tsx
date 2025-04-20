import { FC } from 'react'
import { HeaderMenuStyled } from './header.styles'

export const HeaderMenu: FC = () => {
	return (
		<nav>
			<HeaderMenuStyled>
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
			</HeaderMenuStyled>
		</nav>
	)
}
