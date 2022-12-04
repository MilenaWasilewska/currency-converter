console.log("Cześć!");

let formElement = document.querySelector(".js-form");
let selectionFormElement = document.querySelector(".js-selectionForm");
let eurCurrencyElement = document.querySelector(".js-eurCurrency");
let usdCurrencyElement = document.querySelector(".js-usdCurrency");
let chfCurrencyElement = document.querySelector(".js-chfCurrency");
let amountElement = document.querySelector(".js-amount");
let exchangeElement = document.querySelector(".js-exchange");
let resultElement = document.querySelector(".js-result");
let resultCurrencyElement = document.querySelector(".js-resultCurrency");
let currency = "EUR";
let exchange = 4.71;

selectionFormElement.addEventListener("input", () => {
    if (eurCurrencyElement.checked == true) {
        exchange = 4.71;
        currency = "EUR";
    }
    else if (usdCurrencyElement.checked == true) {
        exchange = 4.55;
        currency = "USD";
    } else {
        exchange = 4.77;
        currency = "CHF";
    }
    
    exchangeElement.value = exchange;
});



formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = +amountElement.value;
    let exchange =exchangeElement.value;
    let result = amount / exchange;
    resultCurrencyElement.innerText = `Kwota ${currency}: `;
    resultElement.innerText = `${result.toFixed(2)}`;
});


