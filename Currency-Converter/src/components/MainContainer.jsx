import InputField from "./InputField";
import { ArrowUpDown, FolderMinus } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

function MainContainer({
  currencyOptions,
  amount,
  setAmount,
  from,
  setFrom,
  to,
  setTo,
  convertedAmount,
  handleConvert,
  handleSwap,
}) {
  const [isRotate, setIsRotate] = useState(false);
  const onSwapClick = () => {
    handleSwap();
    setIsRotate(!isRotate);
  };
  return (
    <div className="w-full max-w-lg mx-4 border border-gray-300 rounded-lg p-4 md:p-8 backdrop-blur-sm bg-white/30 shadow-lg flex flex-col gap-4">
      <div className="w-full flex flex-col items-center  gap-3 relative">
        <InputField
          label="From"
          currencyOptions={currencyOptions}
          amount={amount}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
        />
        <button
          onClick={onSwapClick}
          className={`absolute top-[50%] translate-y-[-50%] bg-blue-950 rounded-full p-2 hover:bg-blue-800 ${isRotate ? "rotate-180" : "rotate-0"} active:scale-95 transition-all duration-300 cursor-pointer`}
        >
          <ArrowUpDown color="white" />
        </button>
        <InputField
          label="To"
          currencyOptions={currencyOptions}
          amount={convertedAmount}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisable // (We will add this prop support next)
        />
      </div>
      <Button handleConvert={handleConvert} amount={amount} />
    </div>
  );
}

export default MainContainer;
