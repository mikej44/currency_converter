{

    let formCheckbox = document.querySelector(".js-formCheckbox");

    let resetCheckbox = document.querySelector(".js-resetCheckbox")

    let boxValueEUR = document.querySelector(".js-form__CheckEUR");
    let boxValueUSD = document.querySelector(".js-form__CheckUSD");
    let boxValueCHF = document.querySelector(".js-form__CheckCHF");
    let boxInput = document.querySelector(".js-form__CheckboxInput");
    let checkboxResult = document.querySelector(".js-checkboxResult");
    let resultEUR = document.querySelector(".js-checkboxResultEUR");
    let resultUSD = document.querySelector(".js-checkboxResultUSD");
    let resultCHF = document.querySelector(".js-checkboxResultCHF");
    let noResult = document.querySelector(".js-checkboxNoResult");

    const radioCalculation = (Input) => {

        const radioEUR = document.querySelector(".js-form__ItemEUR");
        const radioUSD = document.querySelector(".js-form__ItemUSD");
        const radioCHF = document.querySelector(".js-form__ItemCHF");
        const radioResult = document.querySelector(".js-radioResult");
        const EUR = 4.55;
        const USD = 3.77;
        const CHF = 4.13;

        if (radioEUR.checked) {
            let result = Input / EUR
            radioResult.innerText = `${result.toFixed(2)} EUR`;

        } else if (radioUSD.checked) {
            let result = Input / USD
            radioResult.innerText = `${result.toFixed(2)} USD`;

        } else if (radioCHF.checked) {
            let result = Input / CHF
            radioResult.innerText = `${result.toFixed(2)} CHF`;
        }
        else {
            radioResult.innerText = "Sprawdż wybór waluty!"
        }
    }

    const initRadio = () => {
        let formRadio = document.querySelector(".js-formRadio");

        formRadio.addEventListener("submit", (event) => {
            event.preventDefault()

            const radioInput = document.querySelector(".js-form__RadioInput");
            let Input = radioInput.value;

            radioCalculation(Input);
        })
    }

    initRadio();

    const RadioReset = () => {

        const resetRadio = document.querySelector(".js-resetRadio");

        resetRadio.addEventListener("click", () => {
            const radioResult = document.querySelector(".js-radioResult");
            radioResult.innerText = "";
        })
    }

    RadioReset();

    formCheckbox.addEventListener("submit", (event) => {
        event.preventDefault()

        let InputPLN = boxInput.value;
        if (boxValueEUR.checked || boxValueUSD.checked || boxValueCHF.checked) {
            if (boxValueEUR.checked) {
                let resultValueEUR = InputPLN / EUR;
                resultEUR.innerText = `${InputPLN} PLN = ${resultValueEUR.toFixed(2)} EUR`;
            }
            if (boxValueUSD.checked) {
                let resultValueUSD = InputPLN / USD;
                resultUSD.innerText = `${InputPLN} PLN = ${resultValueUSD.toFixed(2)} USD`;
            }
            if (boxValueCHF.checked) {
                let resultValueCHF = InputPLN / CHF;
                resultCHF.innerText = `${InputPLN} PLN = ${resultValueCHF.toFixed(2)} CHF`;
            }
        }
        else {
            noResult.innerText = "Wybierz przynajmniej jedną walutę!"
        }
    })


    resetCheckbox.addEventListener("click", () => {
        resultEUR.innerText = "";
        resultUSD.innerText = "";
        resultCHF.innerText = "";
        noResult.innerText = "";
    })

    let formfull = document.querySelector(".js-formFull");
    let formFull__Input = document.querySelector(".js-formFull__RadioInput");
    let radioResultFull = document.querySelector(".js-radioResultFull");
    let resetFull = document.querySelector(".js-resetFull");



    formfull.addEventListener("submit", (event) => {
        event.preventDefault();

        let input = formFull__Input.value;
        let EURUSD = EUR / USD;
        let EURCHF = EUR / CHF;
        let USDCHF = USD / CHF;
        let FormCurrRadioIn = document.querySelector(".js-ItemIn:checked");
        let FormCurrRadioOut = document.querySelector(".js-ItemOut:checked");
        let currRadioIn = FormCurrRadioIn.value;
        let currRadioOut = FormCurrRadioOut.value;

        if (currRadioIn === currRadioOut) {
            radioResultFull.innerText = "1";
        } else {
            switch (currRadioIn) {
                case "EUR":
                    switch (currRadioOut) {
                        case "USD":
                            let resultEURUSD = input * EURUSD;
                            radioResultFull.innerText = `Wynik: ${resultEURUSD.toFixed(2)} USD`;
                            break;
                        case "CHF":
                            let resultEURCHF = input * EURCHF;
                            radioResultFull.innerText = `Wynik: ${resultEURCHF.toFixed(2)} CHF`;
                            break;
                    } break;
                case "USD":
                    switch (currRadioOut) {
                        case "EUR":
                            let resultUSDEUR = input / EURUSD;
                            radioResultFull.innerText = `Wynik: ${resultUSDEUR.toFixed(2)} EUR`;
                            break;
                        case "CHF":
                            let resultUSDCHF = input * USDCHF;
                            radioResultFull.innerText = `Wynik: ${resultUSDCHF.toFixed(2)} CHF`;
                            break;
                    } break;
                case "CHF":
                    switch (currRadioOut) {
                        case "USD":
                            let resultCHFUSD = input / EURUSD;
                            radioResultFull.innerText = `Wynik: ${resultCHFUSD.toFixed(2)} USD`;
                            break;
                        case "EUR":
                            let resultCHFEUR = input / EURCHF;
                            radioResultFull.innerText = `Wynik: ${resultCHFEUR.toFixed(2)} EUR`;
                            break;
                    } break;
                default:
                    radioResultFull.innerText = "wybierz waluty";
            }
        }
    })

    resetFull.addEventListener("click", () => {
        radioResultFull.innerText = "";
    })
}


