import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const AddTransaction = () => {


    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    function handleSubmit(){
       // e.preventDefault()
        const addNewTransaction = {
            id: Math.floor(Math.random() * 100000000),
            name,
            amount:+amount
        }
         // console.log('how are you')
        addTransaction(addNewTransaction)
        setName('');
        setAmount(0)
      
    }


    return (
        <form className="relative px-2" >
            <i className="block text-xs text-gray-600 mb-2 pl-2 pr-4">Specify the name of transaction</i>
            <input className="mb-2 px-2 py-1 w-full focus:outline-none focus:border" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter text..."/>
            <i className="block text-xs text-gray-600 mb-2 pl-2 pr-12">{'{'}minus(-) for expense, plus(+) for income){'}'}</i>
            <input className="mb-2 px-2 py-1 w-full focus:outline-none" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount"/>
            <button onClick={handleSubmit} className="block bg-indigo-500 text-center w-full py-2 relative -px-2 text-gray-100 focus:outline-none hover:bg-indigo-400" type="button">Add Transaction</button>
        </form>
    )
}

export default AddTransaction
