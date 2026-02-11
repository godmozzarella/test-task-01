import Button from "./Button";

const Payment = () => {
	return (
		<>
			<Button
				id="buy-button"
				text="Купить"
				onClick={() => {}}
				className='bg-[#FDB056] px-12 py-5 gap-2.5 rounded-[1.25rem] w-88 font-bold text-[1.25rem]'
			/>
			<p className='text-[0.875rem] text-[#9B9B9B] font-normal'>Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.</p>
		</>
	)
}

export default Payment