
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="flex place-content-center">
        <div className=" bg-gray-100 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl">
          <Header />
          <Balance />
          <IncomeExpense/>
          <TransactionHistory/>
          <AddTransaction/>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
