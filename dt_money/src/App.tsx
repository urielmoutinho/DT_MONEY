import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import Header from "./components/Header";

import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div className="App">
      <Header onOpenNewTransacionalModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpenProp={isNewTransactionModalOpen}
        onRequestCloseProp={handleCloseNewTransactionModal}
       
      />

      <GlobalStyle />
    </div>
  );
}

export default App;
