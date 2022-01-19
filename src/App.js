import React, { useState } from "react";
import "./App.css";

import iconOne from "./icons/iconOne.png";
import logo from "./icons/relativeLogo.jpg";
import bitCoin from "./icons/BitIcon.png";
import matic from "./icons/matic.png";

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="App">
      <main className="mainObject">
        <div className="TitleForm">
          <img src={iconOne} alt="icon" />
          <h3>Create Multi User Lot</h3>
        </div>
        <form onSubmit={submit} className="formWrap">
          <section className="AllSelect">
            <div className="btcSelect">
              <label>
                <span className="token">Token 01</span>
                <div className="selectbox">
                  <img src={bitCoin} alt="bitcoin" />
                  <select
                    name="btc"
                    id="btc"
                    value={inputs.btc}
                    onChange={handleChange}
                  >
                    <option value="BTC">BTC</option>
                    <option value="DOGE">DOGE</option>
                    <option value="ETC">ETC</option>
                    <option value="ETH">ETH</option>
                  </select>
                </div>
              </label>
            </div>
            <div className="divider">
              <img src={logo} alt="logo" />
            </div>
            <div className="maticSelect">
              <label>
                <span className="token">Token 02</span>
                <div className="selectbox">
                  <img src={matic} alt="matic" />
                  <select
                    name="matic"
                    id="matic"
                    value={inputs.matic}
                    onChange={handleChange}
                  >
                    <option value="MATIC">MATIC</option>
                    <option value="METER">METER</option>
                    <option value="LOOPRING">LOOP</option>
                    <option value="FANTOM">FANTOM</option>
                  </select>
                </div>
              </label>
            </div>
          </section>
          <section className="depositInput">
            <div className="flex">
              <label>
                <span className="initialDTfont">INITIAL DEPOSIT</span>
                <input
                  type="number"
                  placeholder="0"
                  name="initialDeposit"
                  value={inputs.initialDeposit || ""}
                  onChange={handleChange}
                />
              </label>
            </div>
          </section>
          <div className="createLotSubmit">
            <button type="submit">Create lot</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
