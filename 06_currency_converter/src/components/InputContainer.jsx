import React, { useState } from 'react'

function InputContainer({ options, label, amount, setAmount, selectedCurrency, onCurrencyChange, amountDisable}) {





    return (
        <div>
            <form className='bg-gray-500 flex justify-around items-center my-4 h-[20vh] rounded'>
                <div className="AmountContainer flex flex-col">


                    <label htmlFor="currencyAmount" className='text-2xl font-semibold'>{label}</label>


                    <input
                        type="number"
                        id="currencyAmount"
                        className='w-28 h-10 my-2 rounded indent-2 outline-none text-md'
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                        disabled={amountDisable}
                    />

                </div>


                <div className="AmountContainer flex flex-col">
                    <label className='text-xl font-semibold' htmlFor="currencyAmount">Currency Type</label>
                    <select
                        className='w-28 h-10 my-2 indent-2 outline-none text-md rounded'
                        name="select-currency"
                        id="currencyAmount"
                        value={selectedCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    >


                        {options && options.map((currency) => (
                            <option key={currency} value={`${currency}`}>

                                {currency}

                            </option>
                        ))}


                    </select>
                </div>
            </form>
        </div>
    );

}

export default InputContainer