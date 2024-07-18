"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_element_id_js_1 = require("./Modules/get_element_id.js");
const get_elem_class_js_1 = require("./Modules/get_elem_class.js");
const My_Investment_js_1 = require("./Classes/My_Investment.js");
// Initialize the form. Add event listeners to buttons.
let init = function () {
    const reset_btn = //(<HTMLInputElement>GET_ELEM_BY_ID('reset'));
     (0, get_element_id_js_1.GET_ELEM_BY_ID)('reset');
    reset_btn.onclick = reset;
    const submit_btn = //(<HTMLInputElement>GET_ELEM_BY_ID('submit'));
     (0, get_element_id_js_1.GET_ELEM_BY_ID)('submit');
    submit_btn.onclick = submit;
};
// Set the starting focus
let startingFocus = function () {
    const initFocus = //(<HTMLInputElement>GET_ELEM_BY_ID('startingInvestment'));
     (0, get_element_id_js_1.GET_ELEM_BY_ID)('startingInvestment');
    initFocus.focus();
};
// onclick of Submit, call captureFormData()
let submit = function () {
    deleteTableRows();
    let values = captureFormData();
    const futureInvestmentAmount = //(<HTMLInputElement>GET_ELEM_BY_ID('futureInvestmentAmount'));
     (0, get_element_id_js_1.GET_ELEM_BY_ID)('futureInvestmentAmount');
    futureInvestmentAmount.value = values[0];
    const principle = //(<HTMLInputElement>GET_ELEM_BY_ID('principle'));
     (0, get_element_id_js_1.GET_ELEM_BY_ID)('principle');
    principle.value = values[1];
    const totalInterestEarned = //(<HTMLInputElement>GET_ELEM_BY_ID('totalInterestEarned'));
     (0, get_element_id_js_1.GET_ELEM_BY_ID)('totalInterestEarned');
    totalInterestEarned.value = values[2];
};
// Collect form data, create a new investment object, call investment.calculator()
let captureFormData = () => {
    let startingInvestment = parseFloat(/*<HTMLInputElement>*/ (0, get_element_id_js_1.GET_ELEM_BY_ID)('startingInvestment').value);
    let yearsToGrow = parseFloat(/*<HTMLInputElement>*/ (0, get_element_id_js_1.GET_ELEM_BY_ID)('yearsToGrow').value);
    let monthlyContribution = parseFloat(/*<HTMLInputElement>*/ (0, get_element_id_js_1.GET_ELEM_BY_ID)('monthlyContribution').value);
    let interestRate = parseFloat(/*<HTMLInputElement>*/ (0, get_element_id_js_1.GET_ELEM_BY_ID)('interestRate').value) / 100;
    let newInvestment = new My_Investment_js_1.My_Investment(startingInvestment, yearsToGrow, monthlyContribution, interestRate);
    return newInvestment.calculator();
};
// onclick of Reset, return the form to the default state
let reset = function () {
    const startingInvestment = (0, get_element_id_js_1.GET_ELEM_BY_ID)('startingInvestment');
    startingInvestment.value = '';
    const yearsToGrow = (0, get_element_id_js_1.GET_ELEM_BY_ID)('yearsToGrow');
    yearsToGrow.value = '';
    const monthlyContribution = (0, get_element_id_js_1.GET_ELEM_BY_ID)('monthlyContribution');
    monthlyContribution.value = '';
    const interestRate = (0, get_element_id_js_1.GET_ELEM_BY_ID)('interestRate');
    interestRate.value = '';
    const futureInvestmentAmount = (0, get_element_id_js_1.GET_ELEM_BY_ID)('futureInvestmentAmount');
    futureInvestmentAmount.value = '';
    const principle = (0, get_element_id_js_1.GET_ELEM_BY_ID)('principle');
    principle.value = '';
    const totalInterestEarned = (0, get_element_id_js_1.GET_ELEM_BY_ID)('totalInterestEarned');
    totalInterestEarned.value = '';
    deleteTableRows();
    startingFocus();
};
// Delete rows from the table. Called from reset() & submit()
let deleteTableRows = function () {
    const elements = (0, get_elem_class_js_1.GET_ELEM_BY_CLASS)("addedRow");
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