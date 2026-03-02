import '../styles/Navbar.css'
import { Person, Mail, GitHub } from '@material-ui/icons'

export default function Navbar() {
	return (
		<nav className='Navbar'>
			<div className='Navbar-content'>
				<div className='Navbar-logo' onClick={() => { window.location.reload() }}>
					<img src="/assets/signature.png" alt="David Salomón" />
				</div>
				<div className='Navbar-links'>
					<div className='contact-item'>
						<Person className='icon' />
						<span>+503 7036 8794</span>
					</div>
					<div className='contact-item'>
						<Mail className='icon' />
						<span>me@davidsalomon.dev</span>
					</div>
					<a href="https://github.com/davidsalomondev" target="_blank" rel="noreferrer" className='contact-item github'>
						<GitHub className='icon' />
						<span>davidsalomondev</span>
					</a>
				</div>
			</div>
		</nav>
	)
}
