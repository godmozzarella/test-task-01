import {PriorityHighIcon} from '../assets/icons';

const Rules = () => {
	return (
		<div className='flex bg-[#2D3233] rounded-[1.25rem] py-4.5 px-5 gap-2 mb-4'>
			<PriorityHighIcon htmlColor="#FDB056"/>
			<p className='text-[clamp(0.5rem,3vw,1rem)] text-white font-normal tracking-normal'>
				Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
			</p>
		</div>
	)
}

export default Rules