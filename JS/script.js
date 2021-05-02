{
    //kalkulacja kwoty PLN na wybraną walutę
    //zadeklarowane waluty wykorzystuję również w pozostałych sposobach kalkulacji, dlatego są zadeklarowane globalnie    
    const EUR = 4.55;
    const USD = 3.77;
    const CHF = 4.13;

    const radioCalculation = (Input) => {

        const radioEUR = document.querySelector(".js-form__ItemEUR");
        const radioUSD = document.querySelector(".js-form__ItemUSD");
        const radioCHF = document.querySelector(".js-form__ItemCHF");
        const radioResult = document.querySelector(".js-radioResult");

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
            const Input = radioInput.value;

            radioCalculation(Input);
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

    //kalkulacja kwoty PLN na wybrane kilka walut 
    //stałe "result" wykorzystuje zarówno w kalkulacji, jak i w resecie, dlatego są zadeklarowane globalnie   
    const noResult = document.querySelector(".js-checkboxNoResult");
    const resultEUR = document.querySelector(".js-checkboxResultEUR");
    const resultUSD = document.querySelector(".js-checkboxResultUSD");
    const resultCHF = document.querySelector(".js-checkboxResultCHF");

    const checkboxCalculate = (InputPLN) => {

        const boxValueEUR = document.querySelector(".js-form__CheckEUR");
        const boxValueUSD = document.querySelector(".js-form__CheckUSD");
        const boxValueCHF = document.querySelector(".js-form__CheckCHF");

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
            let InputPLN = boxInput.value;

            checkboxCalculate(InputPLN);
        })
    }

    initCheckbox();

    //kalkulacja wybranej waluty na wybraną walutę

    const radioResultFull = document.querySelector(".js-radioResultFull")

    const calculationFull = (input) => {

        const EURUSD = EUR / USD;
        const EURCHF = EUR / CHF;
        const USDCHF = USD / CHF;
        const FormCurrRadioIn = document.querySelector(".js-ItemIn:checked");
        const currRadioIn = FormCurrRadioIn.value;
        const FormCurrRadioOut = document.querySelector(".js-ItemOut:checked");
        const currRadioOut = FormCurrRadioOut.value;

        if (currRadioIn === currRadioOut) {
            radioResultFull.innerText = `1 ${currRadioOut}`;
        } else {
            switch (currRadioIn) {
                case "EUR":
                    switch (currRadioOut) {
                        case "USD":
                            return input * EURUSD;
                        case "CHF":
                            return input * EURCHF;
                    } break;
                case "USD":
                    switch (currRadioOut) {
                        case "EUR":
                            return input / EURUSD;
                        case "CHF":
                            return input * USDCHF;
                    } break;
                case "CHF":
                    switch (currRadioOut) {
                        case "USD":
                            return input / EURUSD;
                        case "EUR":
                            return input / EURCHF;
                    } break;
            }
        }
    }

    const initFull = () => {
        const formfull = document.querySelector(".js-formFull");

        formfull.addEventListener("submit", (event) => {
            event.preventDefault();

            const formFull__Input = document.querySelector(".js-formFull__RadioInput");
            const input = formFull__Input.value;
            const FormCurrRadioOut = document.querySelector(".js-ItemOut:checked");
            const currRadioOut = FormCurrRadioOut.value;

            let finalResult = calculationFull(input);

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


