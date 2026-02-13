function Button({ handleConvert, amount }) {
  return (
    <button
      className="bg-blue-700 text-white p-4 rounded-2xl font-semibold text-lg hover:bg-blue-600 active:scale-95 cursor-pointer transition-all duration-150"
      onClick={handleConvert}
      disabled={amount === "" || amount === 0 ? true : false}
    >
      Convert
    </button>
  );
}

export default Button;
