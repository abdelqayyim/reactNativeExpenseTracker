import axios from "axios";
const BACKEND_URL = 'https://expense-tracker-react-na-d15da-default-rtdb.firebaseio.com';
export async function storeExpense(expenseData) {
    const response = await axios.post(
        `${BACKEND_URL}/expenses.json`,
        expenseData
    );
    const id = response.data.name;
    return id;
}

export async function fetchExpenses() {
    const response = await axios.get(`${BACKEND_URL}/expenses.json`);
    const expenses = [];
    for (const key in response.data) {
        const obj = response.data[key];
        const expenseObj = {
            id: key,
            amount: obj.amount,
            date: new Date(obj.date),
            description: obj.description
        }
        expenses.push(expenseObj);
    }
    return expenses;
}

export function updateExpense(id, expenseData) {
    return axios.put( `${BACKEND_URL}/expenses/${id}.json`, expenseData);
}
export function deleteExpense(id) {
    return axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
}