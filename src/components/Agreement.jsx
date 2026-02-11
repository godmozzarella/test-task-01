

const Agreement = () => {
	return (
		<div className="flex items-center gap-2 max-w-[649px]">
			<input className="
				w-8 aspect-square appearance-none border border-[#606566] rounded 
				bg-[#232829] cursor-pointer
				checked:bg-[url('/src/assets/img/check.svg')]
				checked:bg-center checked:bg-no-repeat checked:bg-contain"
			id="agreement" type="checkbox" />

			<label className='m-0 font-normal
				text-[1rem tracking-normal text-[#CDCDCD]'
				for="agreement">Я согласен с <a className="underline" href="#">Офертой рекуррентных платежей</a> и <a className="underline" href="#">Политикой конфиденциальности</a></label>
		</div>
	)
}

export default Agreement