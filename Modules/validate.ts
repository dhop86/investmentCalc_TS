import { GET_ELEM_BY_ID } from "./utils";

export let validate = function() : boolean {
    let isValid: boolean = false;
    let a: HTMLElement | null = GET_ELEM_BY_ID('startingInvestment');
    let b: HTMLElement | null = GET_ELEM_BY_ID('yearsToGrow');
    let c: HTMLElement | null = GET_ELEM_BY_ID('monthlyContribution');
    let d: HTMLElement | null = GET_ELEM_BY_ID('interestRate');
    if (a && b && c && d) {
        isValid = true;
    };
    return isValid;
};