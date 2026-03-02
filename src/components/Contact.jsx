import '../styles/Contact.css'

export default function Contact() {
	return (
		<footer className='Contact' id='contact'>
			<h1>Let's Connect</h1>
			<div className='container'>
				<div className='card'>
					<div className='avatar-container'>
						<a href='mailto:me@davidsalomon.dev' target='_blank' rel='noreferrer'>
							<img src='https://avatars.githubusercontent.com/u/57274941?v=4'
								alt='David Salomón'
								title="Reach out via email"
								className='avatar' />
						</a>
					</div>
					<div className='user-info'>
						<h2>David Salomón</h2>
						<p className='user-tagline'>Cloud Engineer | Project Manager | Data Engineering</p>
						<div id='links'>
							<a href='https://blog.davidsalomon.dev' target='_blank' rel='noreferrer' className='link'>Blog</a>
							<a href='https://github.com/davidsalomondev' target='_blank' rel='noreferrer' className='link'>GitHub</a>
							<a href='https://linkedin.com/in/davidsalomondev' target='_blank' rel='noreferrer' className='link'>LinkedIn</a>
							<a href='https://techrez.io/resume/davidsalomon' target='_blank' rel='noreferrer' className='link'>Resume</a>
							<a href='https://twitter.com/davidsalomondev' target='_blank' rel='noreferrer' className='link'>Twitter</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
