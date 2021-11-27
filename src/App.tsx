import React from 'react';
import './App.scss';
import Options from './pages/entry/Options';
import SummaryForm from './pages/summary/SummaryForm';

function App() {
  return (
    <>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <SummaryForm />
    </>
  );
}

export default App;
