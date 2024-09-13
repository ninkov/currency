import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.9.13/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response[currency]));
  }, [currency]);

  console.log(data);
  return data;
}

//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.9.12/v1/currencies/bgn.json
//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.9.13/v1/currencies/1inch.json
