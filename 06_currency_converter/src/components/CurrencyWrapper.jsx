import React, { useCallback, useEffect, useState } from 'react';
import InputContainer from './InputContainer';
import SwapButton from './SwapButton';
import ConvertButton from './ConvertButton';
import useCurrency from './useCurrency';

function CurrencyWrapper() {


  const [amount, setAmount] = useState(0);
  const [convertedamount, setConvertedAmount] = useState(0);

  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('PKR');







  let currencyInfo = useCurrency(from);
  // console.log(currencyInfo[from]);

  const options = Object.keys(currencyInfo);
  // console.log(options);


  function swap() {
    setFrom(to);
    setTo(from);

    setAmount(convertedamount);
    setConvertedAmount(amount);
  }

  const convert = useCallback(() => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2).toLocaleString('en-US'));

    console.log(convertedamount);


  })

  useEffect(() => {
    convert()


  }, [amount])



  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-100">
          Universal
          <span className="ml-2 text-slate-600">C</span>
          <span className="text-gray-700">u</span>
          <span className="text-slate-500">r</span>
          <span className="text-slate-600">r</span>
          <span className="text-slate-700">e</span>
          <span className="text-slate-500">n</span>
          <span className="text-slate-600">c</span>
          <span className="mr-2 text-gray-700">y</span>
          Converter <i className="fa-solid fa-coins"></i>
        </h1>
      </div>

      <div className="mx-auto my-8 py-8 px-8 w-[80vw] min-h-[70vh] bg-gray-500 bg-opacity-25 rounded-lg shadow-2xl">
        <InputContainer
          options={options}
          label='From'
          amount={amount}
          setAmount={setAmount}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectedCurrency={from}
          amountDisable={false}
        />
        <InputContainer
          options={options}
          label='To'
          amount={convertedamount}
          setAmount={setConvertedAmount}
          onCurrencyChange={(currency) => setTo(currency)}
          selectedCurrency={to}
          amountDisable={true}
        />
        <SwapButton swap={swap} />
        <ConvertButton convert={convert} />
      </div>
    </>
  );
}

export default CurrencyWrapper;
















