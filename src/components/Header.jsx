
import { useState, useEffect } from 'react'
import Star from '../assets/img/star.svg'

const Header = () => {

	const [secondsLeft, setSecondsLeft] = useState(120) 

  useEffect(() => {
    if (secondsLeft <= 0) return

    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [secondsLeft])

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const isWarning = secondsLeft <= 30
  const blinkClass = isWarning ? 'animate-pulse text-red-500' : ''
	
    return (
        <header className='fixed top-0 w-full mx-auto bg-[#1D5B43] py-2 flex flex-col items-center'>
            <h1 className='text-[1.5rem] text-white font-semibold m-0'>Успейте открыть пробную неделю</h1>
						<div className="flex items-center gap-2 font-[Raleway] font-bold text-[2.5rem]">
							<img src={Star} alt="star" width={14} />
							<span className={`text-[#FFBB00] ${blinkClass}`}>
								   {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
								</span>
							<img src={Star} alt="star" width={14} />
						</div>
        </header>
    )
}

export default Header