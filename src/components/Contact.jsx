import '../styles/Contact.css'

export default function Contact(){
	return (
		<footer className= 'Contact'>
			<h1>Contact me</h1>
			<div class="container">
    <main class="card">
        <div>
            <a href="mailto:me@davidsalomon.dev" target="_blank" rel='noreferrer'>
                <img src="https://avatars.githubusercontent.com/u/57274941?v=4" alt="DavidSalomonDev" title="It's me, send me an email"   class="avatar" />
            </a>
        </div>
        <div class="user-info">
            <h2>David Salomón M.</h2>
            <div id="links">
            	<a href="https://blog.davidsalomon.dev" target="_blank" rel='noreferrer' class="link">Blog</a>
            	<a href="https://david-salomon.com" target="_blank"  rel='noreferrer' class="link">English Teaching Site</a>
            	<a href="https://github.com/DavidSalomonDev" target="_blank" rel='noreferrer' class="link">Github</a>
            	<a href="https://twitter.com/DavidSalomonDev" target="_blank" rel='noreferrer' class="link">Twitter</a>
           		<a href="https://linkedin.com/in/DavidSalomonDev" target="_blank" rel='noreferrer' class="link">LinkedIn</a>
            </div>
        </div>
    </main>
</div>
		</footer>
	)
}