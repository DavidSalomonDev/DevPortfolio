import projectsList from "../services/projects"
import '../styles/Projects.css'

export default function Projects() {

	const projectsArray = projectsList.map(project => {
		return (
			<div className='Project-element' key={project.id}>
				<div className='project'>
					<img src={project.preview} alt={project.name} />
					<div className='project-links'>
						<a href={project.demo} target='_blank' rel='noreferrer'>Demo</a>
						<a href={project.github} target='_blank' rel='noreferrer'>Repo</a>
					</div>
				</div>
				<h3 >{project.name}</h3>

			</div>
		)
	})


	return (
		<section className='Projects' id='projects'>
			<h1>Selected Projects</h1>
			<div className='Projects-list'>
				{projectsArray}
			</div>
		</section>
	)
}
