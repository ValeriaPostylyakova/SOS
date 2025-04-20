import About from './app/about/about'
import Features from './app/features/features'
import Home from './app/home/home'
import Newsletter from './app/newsletter/newsletter'
import Quotes from './app/quotes/quotes'
import Requirements from './app/requirements/requirements'
import { Footer } from './components/shared/footer/footer'
import { AppWrapper } from './components/ui/app-wrapper'

const App = () => {
	return (
		<AppWrapper>
			<Home />
			<About />
			<Features />
			<Requirements />
			<Quotes />
			<Newsletter />
			<Footer />
		</AppWrapper>
	)
}

export default App
