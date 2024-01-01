import React from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "", }) => {

    return (
        <div>
            <div class={`form-group ${className}`}>
                <label htmlfor="currency">{label}</label>
                <input id='currency'
                    type="number"
                    class="form-control"
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange
                        (Number(e.target.value))}
                />
            </div>
            <div>
                <p> Currency Type</p>
                <select class="form-control"
                    disabled={currencyDisabled}
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange
                        (e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency.value} value={currency.value}>
                            {currency.label}
                        </option>
                    ))}
                </select>    
            </div>

        </div>
    )

}

export default InputBox