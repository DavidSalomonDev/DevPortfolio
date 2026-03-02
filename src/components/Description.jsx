import '../styles/Description.css'
import Icons from './Icons'

export default function Description() {
	return (
		<section className='Description' id='description'>
			<div className='Description-container'>
				<div className='Description-left'>
					<h2 className='Description-subtitle'>Background</h2>
					<h1 className='Description-title'>Elevating Cloud Infrastructure</h1>
					<p className='Description-text'>
						I am currently a <strong>Cloud Engineer at GBM</strong>, where I design, deploy, and support enterprise-grade cloud resources. While my primary focus is <strong>Microsoft Azure</strong>, I have extensive experience orchestrating solutions across <strong>Google Cloud, Oracle Cloud, AWS, and IBM Cloud</strong>.
					</p>
					<p className='Description-text'>
						Education drives my technical depth. I hold a <strong>Master of Project Management</strong> and am currently completing my final year as a <strong>Software Development Engineer at UES</strong>.
					</p>
				</div>
				<div className='Description-right'>
					<div className='Education-card'>
						<h3>Education & Focus</h3>
						<ul>
							<li>🎓 Master of Project Management (Completed)</li>
							<li>💻 Software Dev Engineer @ UES (Final Year)</li>
							<li>🚀 Focus: Cloud Services & Data Engineering</li>
							<li>🤖 AI & Automation Specialist</li>
						</ul>
					</div>
					<Icons />
				</div>
			</div>
		</section>
	)
}
