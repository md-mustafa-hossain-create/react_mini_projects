import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyInfo(currency) {
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
      )
      .then((res) => setCurrencyData(res.data[currency]))
      .catch((error) => {});
  }, [currency]);

  return currencyData;
}

export default useCurrencyInfo;
