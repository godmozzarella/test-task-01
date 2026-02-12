
import Star from '../assets/img/star.svg'

const Header = (props) => {

	const { 
    secondsLeft,
    isExpired
   } = props;
 
  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const isWarning = secondsLeft <= 30
  const blinkClass = isWarning ? 'animate-pulse text-red-500' : ''
	
    return (
        <header className='fixed -top-1 w-full mx-auto bg-[#1D5B43] py-2 flex flex-col items-center z-100'>
            <h1 className='text-white font-semibold m-0 text-[clamp(1.2rem,3vw,1.5rem)] leading-tight text-center'>Успейте открыть пробную неделю</h1>
						<div className="flex items-center gap-2 font-[Raleway] font-bold text-[clamp(2rem,5vw,2.5rem)]">
							<img src={Star} alt="star" width={14} />
              {
                isExpired ? <span className="text-[#FFBB00]">Время вышло :(</span> 
                : 
                <span className={`text-[#FFBB00] ${blinkClass}`}>
								   {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
								</span>
              }
							
							<img src={Star} alt="star" width={14} />
						</div>
        </header>
    )
}

export default Header