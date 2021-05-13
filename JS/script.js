{
    //PLN convertion into the one chosen currency
    //declared const currencies' values are used in the other ways of convertions, that's why they are declared globaly    
    const EUR = 4.55;
    const USD = 3.77;
    const CHF = 4.15;

    const radioCalculate = (input) => {

        const radioCurr = document.querySelector(".js-form__item:checked").value;

        switch (radioCurr) {
            case "EUR":
                return input / EUR;
            case "USD":
                return input / USD;
            case "CHF":
                return input / CHF;
        }
    }

    /* if (radioEUR.checked) {
         let result = input / EUR
         radioResult.innerText = `${result.toFixed(2)} EUR`;

     } else if (radioUSD.checked) {
         let result = input / USD
         radioResult.innerText = `${result.toFixed(2)} USD`;

     } else if (radioCHF.checked) {
         let result = input / CHF
         radioResult.innerText = `${result.toFixed(2)} CHF`;
     }
     else {
         radioResult.innerText = "Sprawdż wybór waluty!"
     }
 } */

    const initRadio = () => {
        const formRadio = document.querySelector(".js-formRadio");

        formRadio.addEventListener("submit", (event) => {
            event.preventDefault()

            const radioInput = document.querySelector(".js-form__radioInput");
            const input = radioInput.value;
            const radioResult = document.querySelector(".js-radioResult");
            const radioCurr = document.querySelector(".js-form__item:checked").value;

            let radioCalculationResult = radioCalculate(input);
            radioResult.innerText = `${radioCalculationResult.toFixed(2)} ${radioCurr}`;
        })
    }

    initRadio();

    const resetRadio = () => {

        const resetRadio = document.querySelector(".js-resetRadio");

        resetRadio.addEventListener("click", () => {
            const radioResult = document.querySelector(".js-radioResult");
            radioResult.innerText = "";
        })
    }

    resetRadio();

    //PLN convertion into a few chosen currencies
    //const "result" is used in both calculation and reset, that's why it's declared globaly   
    const noResult = document.querySelector(".js-checkboxNoResult");
    const resultEUR = document.querySelector(".js-checkboxResultEUR");
    const resultUSD = document.querySelector(".js-checkboxResultUSD");
    const resultCHF = document.querySelector(".js-checkboxResultCHF");

    const checkboxCalculate = (inputPLN) => {

        const boxValueEUR = document.querySelector(".js-form__CheckEUR");
        const boxValueUSD = document.querySelector(".js-form__CheckUSD");
        const boxValueCHF = document.querySelector(".js-form__CheckCHF");

        if (boxValueEUR.checked || boxValueUSD.checked || boxValueCHF.checked) {
            if (boxValueEUR.checked) {
                let resultValueEUR = inputPLN / EUR;
                resultEUR.innerText = `${inputPLN} PLN = ${resultValueEUR.toFixed(2)} EUR`;
            }
            if (boxValueUSD.checked) {
                let resultValueUSD = inputPLN / USD;
                resultUSD.innerText = `${inputPLN} PLN = ${resultValueUSD.toFixed(2)} USD`;
            }
            if (boxValueCHF.checked) {
                let resultValueCHF = inputPLN / CHF;
                resultCHF.innerText = `${inputPLN} PLN = ${resultValueCHF.toFixed(2)} CHF`;
            }
        }
        else {
            noResult.innerText = "Wybierz przynajmniej jedną walutę!"
        }
    }

    const resetCheckbox = () => {

        const resetCheckbox = document.querySelector(".js-resetCheckbox");

        resetCheckbox.addEventListener("click", () => {
            resultEUR.innerText = "";
            resultUSD.innerText = "";
            resultCHF.innerText = "";
            noResult.innerText = "";
        })
    }

    resetCheckbox();

    const initCheckbox = () => {

        const formCheckbox = document.querySelector(".js-formCheckbox");

        formCheckbox.addEventListener("submit", (event) => {
            event.preventDefault()

            const boxInput = document.querySelector(".js-form__CheckboxInput");
            let inputPLN = boxInput.value;

            checkboxCalculate(inputPLN);
        })
    }

    initCheckbox();

    //chosen currency calculation into a chosen currency

    const radioResultFull = document.querySelector(".js-radioResultFull")

    const calculationFull = (inputFull) => {

        const EURUSD = EUR / USD;
        const EURCHF = EUR / CHF;
        const USDCHF = USD / CHF;
        const FormCurrRadioIn = document.querySelector(".js-itemIn:checked");
        const currRadioIn = FormCurrRadioIn.value;
        const formCurrRadioOut = document.querySelector(".js-itemOut:checked");
        const currRadioOut = formCurrRadioOut.value;

        if (currRadioIn === currRadioOut) {
            radioResultFull.innerText = `${inputFull} ${currRadioOut}`;
        } else {
            switch (currRadioIn) {
                case "EUR":
                    switch (currRadioOut) {
                        case "USD":
                            return inputFull * EURUSD;
                        case "CHF":
                            return inputFull * EURCHF;
                    } break;
                case "USD":
                    switch (currRadioOut) {
                        case "EUR":
                            return inputFull / EURUSD;
                        case "CHF":
                            return inputFull * USDCHF;
                    } break;
                case "CHF":
                    switch (currRadioOut) {
                        case "USD":
                            return inputFull / USDCHF;
                        case "EUR":
                            return inputFull / EURCHF;
                    } break;
            }
        }
    }

    const initFull = () => {
        const formFull = document.querySelector(".js-formFull");

        formFull.addEventListener("submit", (event) => {
            event.preventDefault();

            const formFull__input = document.querySelector(".js-formFull__radioInput");
            const inputFull = formFull__input.value;
            const formCurrRadioOut = document.querySelector(".js-itemOut:checked");
            const currRadioOut = formCurrRadioOut.value;

            const finalResult = calculationFull(inputFull);

            radioResultFull.innerText = `Wynik: ${finalResult.toFixed(2)} ${currRadioOut}`;
        })
    }

    initFull();

    const resetFull = () => {
        const resetFull = document.querySelector(".js-resetFull");

        resetFull.addEventListener("click", () => {
            radioResultFull.innerText = "";
        })
    }

    resetFull();
}