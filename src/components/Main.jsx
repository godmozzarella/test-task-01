
import Guy from '../assets/img/guy.svg'
import Rules from './Rules'
import Guarantees from './Guarantees'
import Payment from './Payment'
import TariffsGrid from './TariffsGrid'

const Main = (props) => {
    const { isExpired } = props;
    return (
        <main className='md:w-[80%] lg:w-[70%] w-[90%] flex flex-col gap-8 mx-auto mt-10 mb-10'>

            <h1 className=" text-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
							Выбери подходящий для себя <span className="text-[#FDB056] ">тариф</span>
						</h1>

						<section className='w-full flex flex-col items-center gap-4 lg:flex-row lg:items-start'>
								<img 
									src={Guy} 
									alt="Guy" 
									className="w-[300px] min-[425px]:w-[381px] h-auto transition-all duration-300"
								/>
							<div className='flex flex-col gap-4 items-center lg:items-start'>
								<TariffsGrid isExpired={isExpired}/>
								<Rules/>
								<Payment/>
							</div>  
						</section>

						<Guarantees/>
        </main>
    )
}

export default Main