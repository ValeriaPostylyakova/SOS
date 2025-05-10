export const enum MenuItemRefName {
	HOME = 'homeRef',
	ABOUT = 'aboutRef',
	FEATURES = 'featuresRef',
	REQUIREMENTS = 'requirementsRef',
	QUOTES = 'quotesRef',
	NEWSLETTER = 'newsletterRef',
}

export type Menu = {
	text: string
	refName: MenuItemRefName
}
