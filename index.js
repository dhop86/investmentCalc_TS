import { GET_ELEM_BY_ID, GET_ELEM_BY_CLASS, } from "./Modules/utils";
import { My_Investment } from "./Classes/My_Investment";
import { validate } from "./Modules/validate";
// Initialize the form. Add event listeners to buttons.
let init = function () {
    const reset_btn = GET_ELEM_BY_ID('reset');
    reset_btn.onclick = reset;
    const submit_btn = GET_ELEM_BY_ID('submit');
    submit_btn.onclick = submit;
};
// Set the starting focus
let startingFocus = function () {
    const initialFocus = GET_ELEM_BY_ID('startingInvestment');
    initialFocus.focus();
};
// onclick of Submit, call captureFormData()
let submit = function () {
    clearTable();
    if (validate()) {
        let values = captureFormData();
        const futureInvestmentAmount = GET_ELEM_BY_ID('futureInvestmentAmount');
        futureInvestmentAmount.value = values[0];
        const principle = GET_ELEM_BY_ID('principle');
        principle.value = values[1];
        const totalInterestEarned = GET_ELEM_BY_ID('totalInterestEarned');
        totalInterestEarned.value = values[2];
    }
    ;
};
// Collect form data, create a new investment object, call investment.calculator()
let captureFormData = () => {
    let startingInvestment = parseFloat(GET_ELEM_BY_ID('startingInvestment').value);
    let yearsToGrow = parseFloat(GET_ELEM_BY_ID('yearsToGrow').value);
    let monthlyContribution = parseFloat(GET_ELEM_BY_ID('monthlyContribution').value);
    let interestRate = parseFloat(GET_ELEM_BY_ID('interestRate').value) / 100;
    let newInvestment = new My_Investment(startingInvestment, yearsToGrow, monthlyContribution, interestRate);
    return newInvestment.calculator();
};
// onclick of Reset, return the form to the default state
let reset = function () {
    const startingInvestment = GET_ELEM_BY_ID('startingInvestment');
    const yearsToGrow = GET_ELEM_BY_ID('yearsToGrow');
    const monthlyContribution = GET_ELEM_BY_ID('monthlyContribution');
    const interestRate = GET_ELEM_BY_ID('interestRate');
    const futureInvestmentAmount = GET_ELEM_BY_ID('futureInvestmentAmount');
    const principle = GET_ELEM_BY_ID('principle');
    const totalInterestEarned = GET_ELEM_BY_ID('totalInterestEarned');
    startingInvestment.value = '';
    yearsToGrow.value = '';
    monthlyContribution.value = '';
    interestRate.value = '';
    futureInvestmentAmount.value = '';
    principle.value = '';
    totalInterestEarned.value = '';
    clearTable();
    startingFocus();
};
// Delete rows from the table. Called from reset() & submit()
let clearTable = function () {
    const elements = GET_ELEM_BY_CLASS("addedRow");
    if (elements && elements[0].parentNode) {
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
        ;
    }
    ;
};
// Wait for page to be ready
document.onreadystatechange = () => {
    if (document.readyState === "interactive" || document.readyState === "complete") {
        init();
        startingFocus();
    }
};
//# sourceMappingURL=index.js.map