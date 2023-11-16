import React from "react";
import Account from "./components/Account"

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>Flatiron Bank</h2>
      </div>
      <Account />
    </div>
  );
}

export default App;