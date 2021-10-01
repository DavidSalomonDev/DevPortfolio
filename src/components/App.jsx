import '../styles/App.css'
import Navbar from './Navbar'
import Header from './Header'
import Description from './Description'

function App() {
	return (
		<div className = 'App'>
			<Navbar />
			<main className='Sections-container'>
				<Header />
				<Description />
			</main>
		</div>
	)
}

export default App
