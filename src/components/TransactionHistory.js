import React from 'react'

const TransactionHistory = () => {
    return (
        <div className="mb-4">
            <h4 className="py-2 pl-2 font-semibold">Recent Transactions</h4>
            <hr className="text-black pb-2"/>
            <ul>
                <li className="trans-item flex justify-between px-2 py-1 mb-1  border-r-4 border-red-400 bg-white rounded shadow-sm"><span className="trans-text">Paper</span><span className="trans-amount">-$50</span></li>
                <li className="trans-item flex justify-between px-2 py-1 mb-1 border-r-4 border-red-400 bg-white rounded shadow-sm"><span className="trans-text">Wage</span><span className="trans-amount">$350</span></li>
                <li className="trans-item flex justify-between px-2 py-1 mb-1 border-r-4 border-red-400 bg-white rounded shadow-sm"><span className="trans-text">Paper</span><span className="trans-amount">-$50</span></li>
            </ul>
        </div>
    )
}

export default TransactionHistory
