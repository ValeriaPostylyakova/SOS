import gsap from 'gsap'
import { MenuItemRefName } from '../@types/menu/menu'
import { SectionName } from '../@types/pages/smooth-scroll-page-props'

export const triggerScrollToSection = (
	refs: SectionName | null,
	targetRefKey: MenuItemRefName,
	setOpen?: (open: boolean) => void
) => {
	if (!refs) {
		return
	}
	const targetElementRef = refs[targetRefKey]

	if (targetElementRef && targetElementRef.current) {
		gsap.to(window, { duration: 1, scrollTo: targetElementRef.current })
	}

	if (setOpen) {
		setOpen(false)
	}
}
