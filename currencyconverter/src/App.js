import { useState } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components/index';
import Button from 'react-bootstrap/Button'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo) /// extrack the keys from the object 

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div className="App" style={{ minWidth: "100vh" }}>
      <h1>Currency Convertor</h1>

      <div>
        <div>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>

            <div>
              <InputBox
                label="from"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectedCurrency={from}

              />
            </div>

            <div>
              <InputBox
                label="to"
                amount={convertedAmount}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectedCurrency={to}
                amountDisabled={true}

              />
            </div>
            <Button variant="primary" type='submit'> Convert {from.toUpperCase()} to {to.toUpperCase()}</Button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
