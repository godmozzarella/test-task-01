import Guy from '../assets/img/guy.svg'

const Main = () => {
    return (
        <main className='w-[70%] flex flex-col gap-8 mx-auto mt-10 mb-40'>
            <h1 className="text-[2rem] text-white font-semibold">
							Выбери подходящий для себя <span className="text-[#FDB056]">тариф</span>
						</h1>

						<section className='w-full flex flex-row gap-4 items-center'>
							<img src={Guy} alt="Guy" />

							{/*//TODO блок с тарифами */}
							<div className='flex flex-col gap-4'>
									<div className="grid grid-cols-2 gap-4">
										<div className='bg-[#313637] border-2 border-[#484D4E] rounded-[1.875rem] p-4 hover:border-[#FDB056]'>
											<h2>Навсегда</h2>
											<p>5990 &#8381;</p>
											<p>18 990 &#8381;</p>
										</div>
										<div className='bg-[#313637] border-2 border-[#484D4E] rounded-[1.875rem] p-4 hover:border-[#FDB056]'>
											<h2>Навсегда</h2>
											<p>5990 &#8381;</p>
											<p>18 990 &#8381;</p>
										</div>
								</div>

								{/*//TODO правила */}
								<div className='bg-[#2D3233] rounded-[1.25rem] p-4'>
									<img src="" alt="" />
									<p>
										Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
									</p>
								</div>

								{/*//TODO чекбокс */}
								<div className="flex items-center gap-2">
									<input id="agreement" type="checkbox" />
									<label htmlFor="agreement">Я согласен с <a href="#">офертой рекуррентных платежей</a> и <a href="#">Политикой конфиденциальности</a></label>
								</div>
								
								{/*//TODO оплата */}
								<button id="buy-button">Купить</button>
								<label htmlFor="buy-button">Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.</label>

							</div>	
						</section>

						{/*//TODO гарантии */}
						<section className='flex flex-col gap-4 border border-[#484D4E] rounded-[1.875rem] p-4'>
							<h2>гарантия возврата 30 дней</h2>
							<p>Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых результатов.</p>
						</section>
        </main>
    )
}

export default Main