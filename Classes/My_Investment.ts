import { Is_Investment } from "../Interfaces/Is_Investment";
import { GET_ELEM_BY_ID } from "../Modules/utils.js";

export class My_Investment implements Is_Investment {
    constructor(
        public initialAmount: number, 
        public years: number, 
        public monthlyContrib: number, 
        public interestRate: number,
    ) {
        this.initialAmount = initialAmount;
        this.years = years;
        this.monthlyContrib = monthlyContrib;
        this.interestRate = interestRate;
    };

    calculator(): string[] {
        const monthsPerYear: number = 12;
        let totalInterestEarned: number = 0;
        let principle: number = this.initialAmount;
        let futureAmount: number = this.initialAmount;
        for (let i: number = 0; i < this.years;){
            for (let j: number = 0; j < monthsPerYear;){
                totalInterestEarned += principle * (this.interestRate / monthsPerYear);
                principle += this.monthlyContrib;
                j++;
            };
            futureAmount = (principle + totalInterestEarned);
            let values: number[] = [(i + 1), futureAmount, principle, totalInterestEarned,];
            this.addRow(values);
            i++;
        };
        let totals: number[] = [futureAmount, principle, totalInterestEarned,];
        let str_totals: string[] = [];
        for (let i: number = 0; i < totals.length;) {
            totals[i] = parseFloat(totals[i].toFixed(2)),
            str_totals[i] = String(totals[i]);
            i++;
        };
        return str_totals;
    };

    addRow(a: number[]) : void {
        let values: number[] = [a[0], a[1], a[2], a[3]];
        for (let i: number = 0; i < values.length;) {
            values[i] = parseFloat(values[i].toFixed(2));
            i++;
        };
        let table: HTMLElement;
        let tableID: HTMLElement | null = GET_ELEM_BY_ID('dataTable');
        if (tableID) {
            table = tableID;
            let tr = document.createElement("tr");
            tr.className = "addedRow";
            // Create a '<td>' column for the year
            let td_Year = document.createElement("td");
            td_Year.innerHTML = "Year " + values[0];
            // Create a '<td>' column for the future amount
            let td_TotalInvestment = document.createElement("td");
            td_TotalInvestment.innerHTML = "$" + values[1];
            // Create a '<td>' column for the principle amount
            let td_Principle = document.createElement("td");
            td_Principle.innerHTML = "$" + values[2];
            // Create a '<td>' column for the interest earned
            let td_Interest = document.createElement("td");
            td_Interest.innerHTML = "$" + values[3];
            tr.appendChild(td_Year);
            tr.appendChild(td_Principle);
            tr.appendChild(td_Interest);
            tr.appendChild(td_TotalInvestment);
            table.appendChild(tr);
        };
    };
};