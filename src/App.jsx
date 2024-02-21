import React from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";

function App (){
  
  return (
   <div>
    <TransactionForm/>
    <TransactionList/>
    <Balance/>
   </div>
  );
};

export default App