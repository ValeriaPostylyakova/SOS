import { RefObject } from 'react'

export interface PropsScrollPage {
	sectionRef: RefObject<HTMLDivElement | null>
}

export type SectionName = {
	homeRef: RefObject<HTMLDivElement | null>
	aboutRef: RefObject<HTMLDivElement | null>
	featuresRef: RefObject<HTMLDivElement | null>
	requirementsRef: RefObject<HTMLDivElement | null>
	quotesRef: RefObject<HTMLDivElement | null>
	newsletterRef: RefObject<HTMLDivElement | null>
}

export interface PropsListScrollPage extends PropsScrollPage {
	sectionsRefs: SectionName
}
