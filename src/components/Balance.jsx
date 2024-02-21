import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const balance = useSelector((state) => state.transactions.balance);

  return (
    <div>
      <h2>Balance: {balance}</h2>
    </div>
  );
};

export default Balance;