
class BudgetTracker {
    constructor() {
        this.totalIncome = 0;  // Initialize total income to zero.
        this.totalExpense = 0;  // Initialize total expense to zero.
        this.balance = 0;  // Initialize balance to zero.
        this.bindEventListeners();  // Call a method to bind event listeners to UI elements.
        this.updateDisplay();  // Update the display with the initial values.
    }

    // Method to bind click events to buttons.
    bindEventListeners() {
        // When the 'Calculate' button is clicked, call the calculateIncome method.
        document.getElementById('Calculate').addEventListener('click', () => this.calculateIncome());
        // When the 'Add Expense' button is clicked, call the addExpense method.
        document.getElementById('add-expense').addEventListener('click', () => this.addExpense());
    }

    // Method to calculate and update income.
    calculateIncome() {
        // Get the income amount from the input field and convert it to a float.
        const incomeInput = document.getElementById('income-amount');
        const incomeAmount = parseFloat(incomeInput.value); // parses a value as a string and returns the first number.

        // Validate the income amount to ensure it's a number and greater than zero.
        if (!isNaN(incomeAmount) && incomeAmount > 0) {
            this.totalIncome += incomeAmount;  // Add valid income amount to total income.
            this.updateDisplay();  // Update the display with the new total.
        }
        incomeInput.value = '';  // Reset the income input field for new entry.
    }

    // Method to add a new expense.
    addExpense() {
        // Get the expense name and amount from the input fields.
        const expenseNameInput = document.getElementById('expense-name');
        const expenseAmountInput = document.getElementById('expense-amount');
        const expenseName = expenseNameInput.value;
        const expenseAmount = parseFloat(expenseAmountInput.value);

        // Validate the expense name and amount.
        if (!isNaN(expenseAmount) && expenseAmount > 0 && expenseName !== '') {
            this.totalExpense += expenseAmount;  // Add valid expense amount to total expenses.
            this.updateDisplay();  // Update the display with the new totals.
            this.addToHistory(expenseName, expenseAmount);  // Add the expense to the history.
        }
        expenseNameInput.value = '';  // Reset the expense name input field.
        expenseAmountInput.value = '';  // Reset the expense amount input field.
    }

    // Method to add an expense to the history 
    addToHistory(name, amount) {
        // Select the history container 
        const historyContainer = document.querySelector('.history');
        // Create a new div for the history 
        const entry = document.createElement('div');
        entry.className = 'history-entry';  // 
        // Set the innerHTML of the entry with the expense name and amount.
        entry.innerHTML = `<span class="history-name">${name}</span> <span class="history-amount">$${amount.toFixed(2)}</span>`;
        historyContainer.appendChild(entry);  // Append the new entry to the history container.
    }

    // Method to update the display 
    updateDisplay() {
        this.balance = this.totalIncome - this.totalExpense;  // Calculate the balance.
        // Update the balance, income, and expense elements 
        document.getElementById('balance').textContent = `$${this.balance.toFixed(2)}`;
        document.getElementById('income').textContent = `$${this.totalIncome.toFixed(2)}`;
        document.getElementById('expense').textContent = `$${this.totalExpense.toFixed(2)}`;
    }
}
//creating new instance 
new BudgetTracker();
