import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsLists";
import Search from "./SearchBar";
import TransactionForm from "./TransactionForm";

function Account() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Njooro/Week1.Phase2/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <TransactionForm />
      <TransactionsList transactions={transaction} />
    </div>
  );
}

export default Account;