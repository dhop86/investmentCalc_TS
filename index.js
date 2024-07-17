"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./Modules/utils");
const My_Investment_1 = require("./Classes/My_Investment");
// Initialize the form. Add event listeners to buttons.
let init = function () {
    const reset_btn = (0, utils_1.GET_ELEM_BY_ID)('reset');
    reset_btn.onclick = reset;
    const submit_btn = (0, utils_1.GET_ELEM_BY_ID)('submit');
    submit_btn.onclick = submit;
};
// Set the starting focus
let startingFocus = function () {
    const initialFocus = (0, utils_1.GET_ELEM_BY_ID)('startingInvestment');
    initialFocus.focus();
};
// onclick of Submit, call captureFormData()
let submit = function () {
    deleteTableRows();
    let values = captureFormData();
    const futureInvestmentAmount = (0, utils_1.GET_ELEM_BY_ID)('futureInvestmentAmount');
    futureInvestmentAmount.value = values[0];
    const principle = (0, utils_1.GET_ELEM_BY_ID)('principle');
    principle.value = values[1];
    const totalInterestEarned = (0, utils_1.GET_ELEM_BY_ID)('totalInterestEarned');
    totalInterestEarned.value = values[2];
};
// Collect form data, create a new investment object, call investment.calculator()
let captureFormData = () => {
    let startingInvestment = parseFloat((0, utils_1.GET_ELEM_BY_ID)('startingInvestment').value);
    let yearsToGrow = parseFloat((0, utils_1.GET_ELEM_BY_ID)('yearsToGrow').value);
    let monthlyContribution = parseFloat((0, utils_1.GET_ELEM_BY_ID)('monthlyContribution').value);
    let interestRate = parseFloat((0, utils_1.GET_ELEM_BY_ID)('interestRate').value) / 100;
    let newInvestment = new My_Investment_1.My_Investment(startingInvestment, yearsToGrow, monthlyContribution, interestRate);
    return newInvestment.calculator();
};
// onclick of Reset, return the form to the default state
let reset = function () {
    const startingInvestment = (0, utils_1.GET_ELEM_BY_ID)('startingInvestment');
    const yearsToGrow = (0, utils_1.GET_ELEM_BY_ID)('yearsToGrow');
    const monthlyContribution = (0, utils_1.GET_ELEM_BY_ID)('monthlyContribution');
    const interestRate = (0, utils_1.GET_ELEM_BY_ID)('interestRate');
    const futureInvestmentAmount = (0, utils_1.GET_ELEM_BY_ID)('futureInvestmentAmount');
    const principle = (0, utils_1.GET_ELEM_BY_ID)('principle');
    const totalInterestEarned = (0, utils_1.GET_ELEM_BY_ID)('totalInterestEarned');
    startingInvestment.value = '';
    yearsToGrow.value = '';
    monthlyContribution.value = '';
    interestRate.value = '';
    futureInvestmentAmount.value = '';
    principle.value = '';
    totalInterestEarned.value = '';
    deleteTableRows();
    startingFocus();
};
// Delete rows from the table. Called from reset() & submit()
let deleteTableRows = function () {
    const elements = (0, utils_1.GET_ELEM_BY_CLASS)("addedRow");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
};
// Wait for page to be ready
document.onreadystatechange = () => {
    if (document.readyState === "interactive" || document.readyState === "complete") {
        init();
        startingFocus();
    }
};
//# sourceMappingURL=index.js.map
