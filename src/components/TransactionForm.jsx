import React, { useState } from "react";

function TransactionForm({ transactions, setTransactions }) {
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    setNewTransaction({
      date: "",
      description: "",
      category: "",
      amount: 0,
    });
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={newTransaction.date}
            onChange={handleInputChange}
          />
        </div>
        <br />

        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newTransaction.description}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={newTransaction.category}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={newTransaction.amount}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
