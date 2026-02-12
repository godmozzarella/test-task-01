const TariffCard = (props) => {
  const { tariff, isExpired } = props;

  return (
    <div className={`
      flex flex-row relative items-center gap-6 bg-[#313637] border-2 border-[#484D4E] rounded-[1.875rem] transition-all duration-300 ease-in-out
      hover:scale-102 hover:shadow-lg hover:shadow-[#FDB056]/20 flex-1 w-full lg:flex-col 

      ${tariff.is_best && !isExpired ? "border-[#FDB056] pt-7.5 pb-6.5 lg:pr-20 px-4.75 lg:flex-row" : "lg:pt-17.5 lg:pb-6.5 lg:px-5.25 flex-col pt-7.5 pb-6.5 px-4.75"}

    `}>
      {tariff.full_price && (
        <span className={`
          absolute  top-0 right-20 px-2 py-1.5 bg-[#FD5656] text-white font-medium rounded-b-lg transition-all duration-300 ease-in-out
          ${isExpired ? '-translate-y-2 opacity-0' : ''}
          text-[clamp(0.75rem,2vw,1rem)]

					lg:left-8 lg:right-auto
        `}>
          {Math.round(((tariff.full_price - tariff.price) / tariff.full_price) * 100)}%
        </span>
      )}

      {tariff.is_best && (
        <span className={`
          absolute top-2 right-4 text-[#FDB056] font-medium transition-opacity duration-300 ease-in-out
          ${isExpired ? 'opacity-0' : ''}
          text-[clamp(1rem,2.5vw,1.375rem)]
        `}>
          xит!
        </span>
      )}

      <div className='flex flex-col flex-1 items-center'>
        <h2 className='text-white font-medium text-[clamp(1rem,2.5vw,1.625rem)]'>
          {tariff.period}
        </h2>

        <div className="flex flex-col items-center gap-0.5">
          <p className={`
            font-semibold m-0 transition-all duration-500
            text-[clamp(2rem,5vw,3.125rem)]
            ${tariff.is_best ? 'text-[#FDB056]' : 'text-white'}
            ${isExpired ? 'text-white' : ''}
          `}>
            {isExpired ? tariff.full_price : tariff.price} &#8381;
          </p>

          <p className={`
            ml-auto text-[#919191] text-left font-normal line-through transition-all duration-500
            text-[clamp(1rem,2vw,2rem)]
            ${isExpired ? 'translate-y-2 opacity-0 hidden' : ''}
          `}>
            {tariff.full_price} &#8381;
          </p>
        </div>
      </div>

      <p className='text-white font-normal flex-1 text-[clamp(0.875rem,2vw,1rem)]'>
				<span className="hidden md:inline">
					{tariff.text} 
				</span>

				{/*//! В данных тарифов нету короткого текста, а по хорошему он должен быть, поэтому это я оставил так */}
				<span >
					Короткий текст 
				</span>
      </p>
    </div>
  )
}

export default TariffCard