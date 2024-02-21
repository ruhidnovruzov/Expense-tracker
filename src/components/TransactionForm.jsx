
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../store/features';

const TransactionForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction({ name, amount: Number(amount) }));
    setName('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Transaction Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
