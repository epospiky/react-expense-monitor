import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div className="flex place-content-center">
      <div className="bg-gray-100">
        <Header />
        <Balance />
        <IncomeExpense/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
