import Button from "./Button";

const Guarantees = () =>{
	return (
		<section className='flex flex-col gap-4 border border-[#484D4E] rounded-[1.875rem] items-start p-5'>

			<Button
				id="guarantees-button"
				text="гарантия возврата 30 дней"
				className='bg-[#2D3233] px-7.5 py-4 border border-[#81FE95] rounded-[1.875rem] text-[#81FE95] text-[clamp(0.8rem, 3vw, 1.5rem)]'
			/>

			<p className="text-[#DCDCDC] text-[clamp(0.8rem, 3vw, 1.5rem)] font-normal">Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых результатов.</p>
		</section>
	)
}

export default Guarantees