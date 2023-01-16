{
    welcome = () => {
        console.log("Cześć!");
    };

    const exchangeValue = (exchange) => {
        const exchangeElement = document.querySelector(".js-exchange");
        exchangeElement.value = exchange;
    }

    const calculateResult = (amount, exchange) => {
        return amount / exchange;
    }

    const changeResultText = (result, currency) => {

        const resultElement = document.querySelector(".js-result");
        const resultCurrencyElement = document.querySelector(".js-resultCurrency");

        resultCurrencyElement.innerText = `Kwota ${currency}: `;
        resultElement.innerText = `${result.toFixed(2)}`;
    };

    const init = () => {

        const formElement = document.querySelector(".js-form");
        const selectionFormElement = document.querySelector(".js-selectionForm");

        selectionFormElement.addEventListener("input", () => {

            const eurCurrencyElement = document.querySelector(".js-eurCurrency");
            const usdCurrencyElement = document.querySelector(".js-usdCurrency");

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

            exchangeValue(exchange);
        });

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
    
            const amountElement = document.querySelector(".js-amount");
            const amount = +amountElement.value;
    
            let result = calculateResult(amount, exchange);
    
            changeResultText(result, currency);
    
        });
        
        welcome();
    };

    init();
}