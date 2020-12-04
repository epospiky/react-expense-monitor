import React from 'react'

const IncomeExpense = () => {
    return (
        <div className="flex justify-evenly mb-4 text-white">
            <div className="text-center inline-block bg-green-400 w-full  py-2"><span className="inline-block px-2 py bg-green-300 rounded-full">Income</span> <span className="block text-lg">$300</span></div>
            <div className="text-center inline-block bg-red-400 w-full  py-2"><span className="inline-block px-2 py bg-red-300 rounded-full">Expense</span> <span className="block text-lg">-$100</span></div>
        </div>
    )
}

export default IncomeExpense
