const GET_ELEM_BY_ID = (id: string) => {
    return document.getElementById(id) as HTMLElement;
};

const GET_ELEM_BY_CLASS = (id: string)/* : unknown*/ => {
    return document.getElementsByClassName(id);
};

class My_Investment {
    constructor(private initialAmount: number, private years: number, 
        private monthlyContrib: number, private interestRate: number,) {
        
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
            addRow(values);
            i++;
        };
        let totals: number[] = [futureAmount, principle, totalInterestEarned,];
        let str_totals: string[] = [];
        for (let i: number = 0; i < totals.length;) {
            totals[i] = parseFloat(totals[i].toFixed(2)),
            str_totals[i] = String(totals[i]);
            i++;
        }
        return str_totals;
    };
};

// Initialize the form. Add event listeners to buttons.
let init = function() {
    const reset_btn = (<HTMLInputElement>GET_ELEM_BY_ID('reset'));
    reset_btn.onclick = reset;

    const submit_btn = (<HTMLInputElement>GET_ELEM_BY_ID('submit'));
    submit_btn.onclick = submit;
};

// Set the starting focus
let startingFocus = function (){
    const initFocus = (<HTMLInputElement>GET_ELEM_BY_ID('startingInvestment'));
    initFocus.focus();
};

// onclick of Submit, call captureFormData()
let submit = function(){
    deleteTableRows();
    let values = captureFormData();
    const futureInvestmentAmount = (<HTMLInputElement>GET_ELEM_BY_ID('futureInvestmentAmount'));
    futureInvestmentAmount.value = values[0];
    const principle = (<HTMLInputElement>GET_ELEM_BY_ID('principle'));
    principle.value = values[1];
    const totalInterestEarned = (<HTMLInputElement>GET_ELEM_BY_ID('totalInterestEarned'));
    totalInterestEarned.value = values[2];
};

// Collect form data, create a new investment object, call investment.calculator()
let captureFormData = () => {
    let startingInvestment: number = parseFloat((<HTMLInputElement>GET_ELEM_BY_ID('startingInvestment')).value);
    let yearsToGrow: number = parseFloat((<HTMLInputElement>GET_ELEM_BY_ID('yearsToGrow')).value);
    let monthlyContribution: number = parseFloat((<HTMLInputElement>GET_ELEM_BY_ID('monthlyContribution')).value);
    let interestRate: number = parseFloat((<HTMLInputElement>GET_ELEM_BY_ID('interestRate')).value) / 100;
    let newInvestment = new My_Investment(startingInvestment, yearsToGrow, monthlyContribution, interestRate);
    return newInvestment.calculator();
};

// Add a row to the table
let addRow = function(totals: number[]){
    let values: number[] = [totals[0], totals[1], totals[2], totals[3]];
    for (let i: number = 0; i < values.length;) {
        values[i] = parseFloat(values[i].toFixed(2));
        i++;
    }
    let table = GET_ELEM_BY_ID('tableData');
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
    table?.appendChild(tr);
};

// onclick of Reset, return the form to the default state
let reset = function(){
    const startingInvestment = GET_ELEM_BY_ID('startingInvestment') as HTMLInputElement;
    startingInvestment.value = '';
    
    const yearsToGrow  = GET_ELEM_BY_ID('yearsToGrow') as HTMLInputElement;
    yearsToGrow.value = '';
   
    const monthlyContribution = GET_ELEM_BY_ID('monthlyContribution') as HTMLInputElement;
    monthlyContribution.value = '';
    
    const interestRate = GET_ELEM_BY_ID('interestRate') as HTMLInputElement;
    interestRate.value = '';
    
    const futureInvestmentAmount = GET_ELEM_BY_ID('futureInvestmentAmount') as HTMLInputElement;
    futureInvestmentAmount.value = '';

    const principle = GET_ELEM_BY_ID('principle') as HTMLInputElement;
    principle.value = '';

    const totalInterestEarned = GET_ELEM_BY_ID('totalInterestEarned') as HTMLInputElement;
    totalInterestEarned.value = '';

    deleteTableRows();
    startingFocus();
};

// Delete rows from the table. Called from reset() & submit()
let deleteTableRows = function(){
    const elements = GET_ELEM_BY_CLASS("addedRow");
    while(elements.length > 0){
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