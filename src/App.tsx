import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import About from './app/about/about'
import Features from './app/features/features'
import Home from './app/home/home'
import Newsletter from './app/newsletter/newsletter'
import Quotes from './app/quotes/quotes'
import Requirements from './app/requirements/requirements'
import { Footer } from './components/shared/footer/footer'
import { AppWrapper } from './components/ui/app-wrapper'

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const App = () => {
	const homeRef = useRef<HTMLDivElement | null>(null)
	const aboutRef = useRef<HTMLDivElement | null>(null)
	const featuresRef = useRef<HTMLDivElement | null>(null)
	const requirementsRef = useRef<HTMLDivElement | null>(null)
	const quotesRef = useRef<HTMLDivElement | null>(null)
	const newsletterRef = useRef<HTMLDivElement | null>(null)

	return (
		<AppWrapper>
			<Home
				sectionRef={homeRef}
				sectionsRefs={{
					homeRef,
					aboutRef,
					featuresRef,
					requirementsRef,
					quotesRef,
					newsletterRef,
				}}
			/>
			<About sectionRef={aboutRef} />
			<Features sectionRef={featuresRef} />
			<Requirements sectionRef={requirementsRef} />
			<Quotes sectionRef={quotesRef} />
			<Newsletter sectionRef={newsletterRef} />
			<Footer />
		</AppWrapper>
	)
}

export default App
