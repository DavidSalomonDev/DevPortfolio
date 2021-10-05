import '../styles/App.css'
import Navbar from './Navbar'
import Header from './Header'
import Description from './Description'
import Projects from './Projects'

function App() {
	return (
		<div className = 'App'>
			<Navbar />
			<main className='Sections-container'>
				<Header />
				<Description />
				<Projects />
			</main>
		</div>
	)
}

export default App
