import React from 'react'

const AddTransaction = () => {
    return (
        <form className="relative px-2" onSubmit="">
            <i className="block text-xs text-gray-600 mb-2 pl-2 pr-4">Specify the name of transaction</i>
            <input className="mb-2 px-2 py-1 w-full focus:outline-none focus:border" type="text" value="" onChange="" placeholder="Enter text..."/>
    <i className="block text-xs text-gray-600 mb-2 pl-2 pr-12">{'{'}minus(-) for expense, plus(+) for income){'}'}</i>
            <input className="mb-2 px-2 py-1 w-full focus:outline-none" type="number" value="" onChange="" placeholder="Enter amount"/>
            <button className="block bg-indigo-500 text-center w-full py-2 relative -px-2 text-gray-100 focus:outline-none hover:bg-indigo-400" type="button">Add Transaction</button>
        </form>
    )
}

export default AddTransaction
