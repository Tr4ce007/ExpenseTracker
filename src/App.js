import Expenses  from "./components/Expenses/Expenses";
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
let DUMMY_EXPENSE =[
  {
    id:        'e1',
    title:     'KFC',
    amount:    250,
    date :     new Date(2019,7,6)
  },
  {
    id:        'e2',
    title:     'Treat',
    amount:    6500,
    date :     new Date(2022,7,2)
  },
  {
    id:        'e3',
    title:     'Ipo',
    amount:    10000,
    date :     new Date(2023,6,26)
  },
  {
    id:        'e4',
    title:     'Bike',
    amount:    80000,
    date :     new Date(2024,8,6)
  }
];

const  App = () => {

  const[expenses,setExpenses]=useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };

  return (
    <div>
    <h2 >Expense Tracker By Tr4ce007</h2>
    <NewExpense onAddExpense = {addExpenseHandler}/>
    <Expenses items={expenses}/>
    </div>
  );
}

export default App;