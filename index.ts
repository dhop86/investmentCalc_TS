import { GET_ELEM_BY_ID, GET_ELEM_BY_CLASS,} from "./Modules/utils.js";
import { My_Investment } from "./Classes/My_Investment.js";
import { validate } from "./Modules/validate.js";

// Initialize the form. Add event listeners to buttons.
let init = function() : void {
    const reset_btn = GET_ELEM_BY_ID('reset') as HTMLInputElement;
    reset_btn.onclick = reset;

    const submit_btn = GET_ELEM_BY_ID('submit') as HTMLInputElement;
    submit_btn.onclick = submit;
};

// Set the starting focus
let startingFocus = function () : void {
    const initialFocus = GET_ELEM_BY_ID('startingInvestment') as HTMLInputElement;
    initialFocus.focus();
};

// onclick of Submit, call captureFormData()
let submit = function() : void {
    clearTable();
    if(validate()){
        let values = captureFormData();
        const futureInvestmentAmount = GET_ELEM_BY_ID('futureInvestmentAmount') as HTMLInputElement;
        futureInvestmentAmount.value = values[0];
        const principle = GET_ELEM_BY_ID('principle') as HTMLInputElement;
        principle.value = values[1];
        const totalInterestEarned = GET_ELEM_BY_ID('totalInterestEarned') as HTMLInputElement;
        totalInterestEarned.value = values[2];
    };
};

// Collect form data, create a new investment object, call investment.calculator()
let captureFormData = () : string[] => {
    let startingInvestment: number = parseFloat((GET_ELEM_BY_ID('startingInvestment') as HTMLInputElement).value);
    let yearsToGrow: number = parseFloat((GET_ELEM_BY_ID('yearsToGrow') as HTMLInputElement).value);
    let monthlyContribution: number = parseFloat((GET_ELEM_BY_ID('monthlyContribution') as HTMLInputElement).value);
    let interestRate: number = parseFloat((GET_ELEM_BY_ID('interestRate') as HTMLInputElement).value) / 100;
    let newInvestment = new My_Investment(startingInvestment, yearsToGrow, monthlyContribution, interestRate);
    return newInvestment.calculator();
};

// onclick of Reset, return the form to the default state
let reset = function() : void {
    const startingInvestment = GET_ELEM_BY_ID('startingInvestment') as HTMLInputElement;
    const yearsToGrow  = GET_ELEM_BY_ID('yearsToGrow') as HTMLInputElement;
    const monthlyContribution = GET_ELEM_BY_ID('monthlyContribution') as HTMLInputElement;
    const interestRate = GET_ELEM_BY_ID('interestRate') as HTMLInputElement;
    const futureInvestmentAmount = GET_ELEM_BY_ID('futureInvestmentAmount') as HTMLInputElement;
    const principle = GET_ELEM_BY_ID('principle') as HTMLInputElement;
    const totalInterestEarned = GET_ELEM_BY_ID('totalInterestEarned') as HTMLInputElement;
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
let clearTable = function() : void {
    const elements = GET_ELEM_BY_CLASS("addedRow");
    if (elements && elements[0].parentNode) {
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        };
    };
};

// Wait for page to be ready
document.onreadystatechange = () : void => {
    if (document.readyState === "interactive" || document.readyState === "complete") {
      init();
      startingFocus();
    };
  };