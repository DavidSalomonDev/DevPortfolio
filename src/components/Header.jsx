import '../styles/Header.css'
import {init} from 'ityped'
import {useEffect, useRef} from 'react'

export default function Header() {

	const textRef = useRef()

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: ['a Frontend Developer', 'a React Developer', 'an Apps Support Analyst']
		})
	}, [])

	return (
		<header className = 'Header'>
			<div className = 'Header-pic'>
				<div className = 'image-container'>
					<img src = 'https://buho.academy/assets/uploads/David-mentor-768x591.png' alt = 'David Salomón' />
				</div>
			</div>
			<div className = 'Header-description'>
				<h2>Hi There, I'm</h2>
				<h1>David Salomón</h1>
				<h3>
					I am <span ref = {textRef}></span>
				</h3>
			</div>
			<a href = '#description' className='Arrow-Description'>
				<img src = 'assets/down.png' alt = '' />
			</a>
		</header>
	)
}
