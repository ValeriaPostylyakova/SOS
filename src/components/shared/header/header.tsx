import { FC } from 'react'
import { Container } from '../../ui/container'
import { HeaderMenu, HeaderStyled } from './header.styles'
import { Flex } from '../../ui/flex'

export const Header: FC = () => {
	return (
		<HeaderStyled>
			<Container padding='21px 10px'>
				<a href='/'>
					<img src='/logo.svg' alt='logo' />
				</a>
				<nav>
					<HeaderMenu>
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
					</HeaderMenu>
				</nav>
				<Flex gap='17px'>
					<img src='/social-icons/xbox.svg' alt='icons' />
					<img src='/social-icons/steam.svg' alt='icons' />
				</Flex>
			</Container>
		</HeaderStyled>
	)
}
