import { useState } from "react";
import axios, { Axios } from "axios";

import useCurrencyInfo from "./hooks/useCurrencyInfo";
import MainContainer from "./components/MainContainer";

export function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  function handleConvert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  function handleSwap() {
    setFrom(to);
    setTo(from);
  }
  return (
    <div
      className="w-full min-h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat p-4"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <MainContainer
        currencyOptions={currencyOptions}
        amount={amount}
        setAmount={setAmount}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
        convertedAmount={convertedAmount}
        handleConvert={handleConvert}
        handleSwap={handleSwap}
      />
    </div>
  );
}
