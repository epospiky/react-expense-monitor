import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const Balance = () => {
    const {transactions} =  useContext(GlobalContext)
    const amounts = transactions.map(transactions => transactions.amount);
    const total = amounts.reduce((acc, item) => acc+item, 0).toFixed(2)
    return (
        <div className="bg-blue-500 px-4 py-4 text-sm text-center font-semibold">
            <span className="bg-blue-400 py-1 px-2 inline-block text-gray-200 rounded-full">BALANCE</span>
            <span className="block text-2xl font-bold text-gray-100">${total}</span>
        </div>
    )
}

export default Balance
