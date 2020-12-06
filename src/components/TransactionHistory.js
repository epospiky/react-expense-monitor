import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import TransactionItem from './TransactionItem';

const TransactionHistory = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <div className="mb-4">
            <h4 className="py-2 pl-2 font-semibold">Recent Transactions</h4>
            <hr className="text-black pb-2"/>
            <ul className="relative">
                {  
                transactions.map(transaction => (<TransactionItem key={transaction.id} transaction={transaction}/>))
                }
            </ul>
        </div>
    )
}

export default TransactionHistory
