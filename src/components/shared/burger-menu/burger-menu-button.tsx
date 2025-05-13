import gsap from 'gsap'
import { FC, useLayoutEffect, useRef } from 'react'
import { MenuButtonLine, MenuButtonStyle } from './burger-menu.styles'

export interface Props {
	setOpenMenu: (open: boolean) => void
	openMenu: boolean | undefined
}

export const BurgerMenuButton: FC<Props> = ({ setOpenMenu, openMenu }) => {
	const scopeRef = useRef<HTMLButtonElement | null>(null)
	const tlRef = useRef<gsap.core.Timeline | null>(null)
	useLayoutEffect(() => {
		gsap.defaults({ duration: 0.3 })

		if (openMenu) {
			tlRef.current = gsap
				.timeline()
				.fromTo('#line2', { scaleX: 1 }, { scaleX: 0 })
				.to('#line3', { rotate: 45 })
				.to('#line1', { rotate: -45 })
				.to('#line3', { y: -11 })
				.to('#line1', { y: 11 })
		} else if (openMenu === false && tlRef.current) {
			tlRef.current.reverse()
		} else {
			gsap
				.timeline()
				.fromTo('#line1', { scaleX: 0 }, { scaleX: 1 })
				.fromTo('#line2', { scaleX: 0 }, { scaleX: 1 })
				.fromTo('#line3', { scaleX: 0 }, { scaleX: 1 })
		}
	}, [openMenu])

	return (
		<MenuButtonStyle ref={scopeRef} onClick={() => setOpenMenu(!openMenu)}>
			<MenuButtonLine id='line1' />
			<MenuButtonLine id='line2' />
			<MenuButtonLine id='line3' />
		</MenuButtonStyle>
	)
}
