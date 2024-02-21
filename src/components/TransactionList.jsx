
import React from 'react';
import { useSelector } from 'react-redux';

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.name} - {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
