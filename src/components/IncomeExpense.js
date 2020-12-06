import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


const IncomeExpense = () => {
    const {transactions} =  useContext(GlobalContext)
    const amounts = transactions.map(transactions => transactions.amount);
    const income = amounts.filter(item =>item > 0).reduce((acc, item) => acc+=item, 0).toFixed(2)
    const expense =amounts.filter(item =>item < 0).reduce((acc, item) => acc+=item, 0) 
    return (
        <div className="flex justify-evenly mb-4 text-white">
            <div className="text-center inline-block bg-green-400 w-full  py-2"><span className="inline-block px-2 py bg-green-300 rounded-full">Income</span> <span className="block text-lg">${income}</span></div>
            <div className="text-center inline-block bg-red-400 w-full  py-2"><span className="inline-block px-2 py bg-red-300 rounded-full">Expense</span> <span className="block text-lg">-${Math.abs(expense).toFixed(2)}</span></div>
        </div>
    )
}

export default IncomeExpense
