import projectsList from "../services/projects"
import '../styles/Projects.css'

export default function Projects(){

	const projectsArray = projectsList.map(project =>{
		return (
			<div className='Project-element'>
				<div className='project' key={project.id}>
					<img src={project.preview} alt={project.name}/>
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
		<section className='Projects'>
			<h1>My projects</h1>
			<div className='Projects-list'>
				{projectsArray}
			</div>
		</section>
	)
}