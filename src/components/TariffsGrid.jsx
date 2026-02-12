import { useState, useEffect } from "react";
import TariffCard from "./TariffCard";

const TariffsGrid = (props) =>{

	const { isExpired } = props;

	 const [tariffs, setTariffs] = useState([]);
	 const [loading, setLoading] = useState(true)
	 const [error, setError] = useState(null);

	 useEffect(() => {
    fetch("https://t-core.fit-hub.pro/Test/GetTariffs")
      .then(res => {
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
      })
      .then(data => setTariffs(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

	const sortedTariffs = [...tariffs].sort((a, b) => {
		if (a.is_best && !b.is_best) return -1;
		if (!a.is_best && b.is_best) return 1;
		return b.price - a.price; 
	});

  if (loading) return <p className='text-[#1D5B43]'>Загрузка...</p>;
  if (error) return <p className='text-red-600'>Ошибка: {error}</p>;


	return (
    <div className="flex flex-col gap-4 w-full lg:flex-row lg:flex-wrap lg:items-stretch">
      {sortedTariffs.map((tariff, index) => (
        <div
        // ! Пришлось прибегнуть к костылю, так как в апи есть дублирующие id у тарифов
          key={`${tariff.id}-${index}`}
          className={`
            w-full
        		lg:${index === 0 ? "w-full" : "flex-1 flex"}
          `}
        >
          <TariffCard tariff={tariff} isExpired={isExpired} />
        </div>
      ))}
    </div>
  )
}

export default TariffsGrid