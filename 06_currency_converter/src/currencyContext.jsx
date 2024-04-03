import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const useCurrencyContext = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState([]);

  return (
    <CurrencyContext.Provider value={{ currencies, setCurrencies }}>
      {children}
    </CurrencyContext.Provider>
  );
};
