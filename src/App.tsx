import About from './app/about/about'
import Features from './app/features/features'
import Home from './app/home/home'
import Newsletter from './app/newsletter'
import Quotes from './app/quotes'
import Requirements from './app/requirements/requirements'
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
		</AppWrapper>
	)
}

export default App
