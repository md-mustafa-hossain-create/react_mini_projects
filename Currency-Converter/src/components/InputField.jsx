function InputField({
  label,
  currencyOptions = [],
  amount,
  onCurrencyChange,
  selectCurrency,
  onAmountChange,
  amountDisable = false,
}) {
  return (
    <div className="bg-white w-full rounded-2xl flex flex-col md:flex-row justify-between p-4 md:p-6 gap-4">
      <div className="flex flex-col w-full md:w-1/2 gap-2">
        <label className="text-sm text-gray-500 font-semibold">{label}</label>
        <input
          type="number"
          className="bg-white border-2 border-gray-400 rounded-lg h-10 px-3 text-lg font-semibold hover:border-blue-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange &&
            onAmountChange(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:items-end gap-2">
        <p className="text-gray-500 text-sm font-semibold">Currency Type</p>

        <div className="flex justify-end rounded-lg px-1 py-1 cursor-pointer outline-none h-8 items-center w-full">
          <img
            src={`https://flagsapi.com/${selectCurrency.slice(0, 2).toUpperCase()}/flat/64.png`}
            alt={`${selectCurrency} flag`}
            className="w-8 h-8 mr-2 ml-1"
          />
          <select
            className="bg-white border-2 border-gray-300 rounded-lg px-3 py-1 text-lg font-semibold cursor-pointer hover:border-blue-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputField;
