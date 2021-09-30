import '../styles/App.css'
import Navbar from './Navbar'
import Header from './Header'

function App() {
	return (
		<div className = 'App'>
			<Navbar />
			<main className='Sections-container'>
				<Header />
			</main>
		</div>
	)
}

export default App
