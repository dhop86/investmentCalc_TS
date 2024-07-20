import { GET_ELEM_BY_ID } from "./utils.js";

const isNumber = /^\d+(\.\d{1,2})?$/;

export let validate = function() : boolean {
    let isValid: boolean = false;
    let a: HTMLElement | null = GET_ELEM_BY_ID('startingInvestment');
    let b: HTMLElement | null = GET_ELEM_BY_ID('yearsToGrow');
    let c: HTMLElement | null = GET_ELEM_BY_ID('monthlyContribution');
    let d: HTMLElement | null = GET_ELEM_BY_ID('interestRate');

    
    if (a && b && c && d) {
        let a_str: string = a.toString();
        let b_str: string = b.toString();
        let c_str: string = c.toString();
        let d_str: string = d.toString();
        if (
            isNumber.test(a_str) &&
            isNumber.test(b_str) &&
            isNumber.test(c_str) &&
            isNumber.test(d_str)
        ) {
            isValid = true;
        };
    };
    return isValid;
};