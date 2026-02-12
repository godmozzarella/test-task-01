
import Guy from '../assets/img/guy.svg'
import Rules from './Rules'
import Guarantees from './Guarantees'
import Payment from './Payment'
import TariffsGrid from './TariffsGrid'

const Main = () => {

	

    return (
        <main className='w-[70%] flex flex-col gap-8 mx-auto mt-10 mb-40'>

            <h1 className="text-[2rem] text-white font-semibold">
							Выбери подходящий для себя <span className="text-[#FDB056]">тариф</span>
						</h1>

						<section className='w-full flex flex-row gap-4 items-start'>
							<img src={Guy} alt="Guy" />
							<div className='flex flex-col gap-4 items-start justify-start'>
								<TariffsGrid/>
								<Rules/>
								<Payment/>
							</div>	
						</section>

						<Guarantees/>
        </main>
    )
}

export default Main