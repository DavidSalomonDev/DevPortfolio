import '../styles/Icons.css'

const cloudIcons = [
	{ name: 'Azure', img: 'https://cdn.simpleicons.org/microsoftazure' },
	{ name: 'Google Cloud', img: 'https://cdn.simpleicons.org/googlecloud' },
	{ name: 'AWS', img: 'https://cdn.simpleicons.org/amazonservices' },
	{ name: 'Oracle', img: 'https://cdn.simpleicons.org/oracle' },
	{ name: 'IBM', img: 'https://cdn.simpleicons.org/ibm' },
	{ name: 'Python', img: 'https://cdn.simpleicons.org/python' },
	{ name: 'Docker', img: 'https://cdn.simpleicons.org/docker' },
	{ name: 'Kubernetes', img: 'https://cdn.simpleicons.org/kubernetes' },
	{ name: 'Terraform', img: 'https://cdn.simpleicons.org/terraform' },
	{ name: 'React', img: 'https://cdn.simpleicons.org/react' },
]

export default function Icons() {
	return (
		<div className='Description-tech'>
			{cloudIcons.map((icon, idx) => (
				<div key={idx} className='iconContainer'>
					<img
						src={icon.img}
						alt={icon.name}
						className='icon'
					/>
					<div className='iconHover'>{icon.name}</div>
				</div>
			))}
		</div>
	)
}
