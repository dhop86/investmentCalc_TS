export interface Is_Investment {
    initialAmount: number, 
    years: number, 
    monthlyContrib: number, 
    interestRate: number,
    calculator(): string[],
    addRow(a: number[]): void,
}