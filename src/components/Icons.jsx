import '../styles/Icons.css'

const iconsList = ['html', 'css', 'sass','js','reactjs', 'node', 'npm', 'git', 'firebase', 'chromeos']

const iconsImages = iconsList.map((icon, idx) =>{
	
	return (
		<div key={idx}	className='iconContainer'>
			<img 
				src={`/assets/${icon}.png`} 
				alt={`${icon}`}
				className='icon' 	
			/>
			<div className='iconHover'>{icon}</div>
		</div>
		
	)
})


export default function Icons(){
	return (
		<div className='Description-tech'>
			{iconsImages}
		</div>
		)
}
