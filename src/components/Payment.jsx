import Agreement from "./Agreement";
import Button from "./Button";
import { useState } from "react";

const Payment = () => {

	const [isAgreementChecked, setIsAgreementChecked] = useState(false);
	const [showError, setShowError] = useState(false);

	const handleBuyClick = () => {
		if (isAgreementChecked) {
			setShowError(false);
		} else {
			setShowError(true);
		}
	}
	return (
		<>
			<Agreement 
				isAgreementChecked={isAgreementChecked}
				setIsAgreementChecked={setIsAgreementChecked}
				showError={showError}
			/>
			<Button
				id="buy-button"
				text="Купить"
				onClick={handleBuyClick}
				className='bg-[#FDB056] px-12 py-5 gap-2.5 rounded-[1.25rem] w-full min-[425px]:w-88 font-bold text-[1.25rem] animate-blinking'
			/>
			<p className='text-[clamp(0.2rem,3vw,0.875rem)] text-[#9B9B9B] font-normal'>Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.</p>
		</>
	)
}

export default Payment