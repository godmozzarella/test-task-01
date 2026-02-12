

const TariffCard = (props) => {

	const { 
		tariff
	} = props;
	
	return (
		<div className={`
      flex relative items-center gap-6 bg-[#313637] border-2 border-[#484D4E] rounded-[1.875rem] transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg hover:shadow-[#FDB056]/20 ${tariff.is_best ? "border-[#FDB056] pt-7.5 pb-6.5 pr-20 pl-4.75" : "pt-17.5 pb-6.5 px-5.25 flex-col flex-1"}`}>
				
			{tariff.full_price && (
				<span className="absolute top-0 left-8 px-2 py-1.5 bg-[#FD5656] text-white font-medium rounded-b-lg">
					{/*//! Непонятно по какой формуле высчитывается процент выгоды у тарифа, это нигде не описано, поэтому я взял формулу ((full_price - price) / full_price) * 100, как вычисление выгоды взять со скидкой относительно полной цены */}
					{Math.round(((tariff.full_price - tariff.price) / tariff.full_price) * 100)}% 
				</span>
			)}
			{tariff.is_best && (
				<span className="absolute top-2 right-4 text-[#FDB056] font-medium text-[1.375rem]">
					xит!
				</span>
			)}
			<div className='flex flex-col flex-1 items-center'>
					<h2 className='text-white text-[1.625rem] font-medium'>{tariff.period}</h2>
					<div className="flex flex-col items-center gap-0.5">
						<p className={`font-semibold text-[3.125rem] m-0 ${tariff.is_best ? 'text-[#FDB056]' : 'text-white'}`}>{tariff.price} &#8381;</p>
						<p className='ml-auto text-2xl text-[#919191] text-left font-normal line-through'>{tariff.full_price} &#8381;</p>
					</div>
			</div>
			<p className='text-white font-normal text-[1rem] flex-1'>
				{tariff.text}
			</p>
		</div>
	)
}

export default TariffCard