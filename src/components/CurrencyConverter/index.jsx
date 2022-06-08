import React, { useState } from "react";

// import './styles.css' global

import CurrencyStyles from './styles.module.css' // importancion con modulo

export const CurrencyConverter = () => {

  // ahora los styles son un objeto
  // console.log(CurrencyStyles)
  
  const {container, title, input, input_container, titleSecondary} = CurrencyStyles

  const [pesos, setPesos] = useState(0);
  const [dolar, setDolar] = useState(0);

  const dblue = 203
  
  return (
    <div className={container}>
      <h2 className={title}>Currency Converter</h2>
      <h3 className={titleSecondary}>Titulo secundario con camelCase</h3>
      <div className={input_container}>
        <label htmlFor="pesos">Pesos</label>
        <input
          type="number"
          className="input"
          name="pesos"
          id="pesos"
          value={pesos}
          onChange={(e) => {
            setPesos(e.target.value);
            setDolar(parseFloat(e.target.value / dblue).toFixed(2));
          }}
        />
      </div>
      <div className={input_container}>
        <label htmlFor="dolar">Dolar</label>
        <input
          type="number"
          name="dolar"
          id="dolar"
          className="input"
          value={dolar}
          onChange={(e) => {
            setDolar(e.target.value);
            setPesos(parseFloat(e.target.value * dblue).toFixed(2));
          }}
        />
      </div>
    </div>
  );
};
