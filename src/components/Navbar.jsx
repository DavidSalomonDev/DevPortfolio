import '../styles/Navbar.css'
import {Person, Mail} from '@material-ui/icons'

export default function Navbar() {
	return (
		<nav className = 'Navbar'>
				<div className = 'Navbar-contact'>
					<div className='contact-Logo' onClick={()=>{window.location.reload()}}>
						<img src="/assets/signature.png" alt="David Salomón M." />
					</div>
					<div className = 'contact-Phone'>
						<Person className = 'icon' />
						<span>+503 7036 8794</span>
					</div>
					<div className = 'contact-Email'>
						<Mail className = 'icon' />
						<span>me@davidsalomon.dev</span>
					</div>
				</div>
				<div className = 'right'>
					<div className = 'hamburger'>
						<span className = 'line1'></span>
						<span className = 'line2'></span>
						<span className = 'line3'></span>
					</div>
				</div>
		</nav>
	)
}
