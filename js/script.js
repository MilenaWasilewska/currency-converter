{
    const welcome = () => {
        console.log("Cześć!");
    };

    const getOutputCurrencyCode = () => {
        const eurCurrencyElement = document.querySelector(".js-eurCurrency");
        const usdCurrencyElement = document.querySelector(".js-usdCurrency");

        switch (true) {
            case
                eurCurrencyElement.checked:
                return "EUR";
            case
                usdCurrencyElement.checked:
                return "USD";
            default:
                return "CHF";
        };
    };

    const getExchange = () => {
        const eurCurrencyElement = document.querySelector(".js-eurCurrency");
        const usdCurrencyElement = document.querySelector(".js-usdCurrency");

        switch (true) {
            case
                eurCurrencyElement.checked:
                return 4.71;
            case
                usdCurrencyElement.checked:
                return 4.55;
            default:
                return 4.77;
        };
    };

    let selectCurrency = () => {
        const selectionFormElement = document.querySelector(".js-selectionForm");

        selectionFormElement.addEventListener("input", () => {
            const exchangeElement = document.querySelector(".js-exchange");
            exchange = getExchange();
            currency = getOutputCurrencyCode();
            exchangeElement.value = exchange;
        });
    };

    const getAmount = () => {
        const amountElement = document.querySelector(".js-amount");

        return +amountElement.value;
    };

    const changeResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        const resultCurrencyElement = document.querySelector(".js-resultCurrency");

        currency = getOutputCurrencyCode();

        resultCurrencyElement.innerText = `Kwota ${currency}: `;
        resultElement.innerText = `${result.toFixed(2)}`;
    };

    let calculateResult = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            amount = getAmount();
            exchange = getExchange();

            result = amount / exchange;

            changeResultText(result);
        });
    };

    const init = () => {
        selectCurrency();

        calculateResult();

        welcome();
    };

    init();
}