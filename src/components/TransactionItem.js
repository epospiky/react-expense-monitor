import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


const TransactionItem = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-':'+'; 
    return ( 
    <li   className={transaction.amount < 0 ? 'inline-block flex justify-between px-2 py-2 mb-1  border-r-4 bg-white rounded shadow-sm border-red-500':'inline-block flex justify-between px-2 py-2 mb-1  border-r-4 bg-white rounded shadow-sm border-green-500'}><span className="trans-text">{transaction.name}</span><span style={{color:transaction.amount< 0 ? "red":"green"}}>{sign}${Math.abs(transaction.amount)}</span>
    <button className=" absolute -mr-8 right-2 text-lg focus:outline-none" onClick={()=>deleteTransaction(transaction.id)}><span className="fa fa-trash"></span></button></li>
    
    )
}

export default TransactionItem
