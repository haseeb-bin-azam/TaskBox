import React from 'react';
import InboxScreen from './components/InboxScreen';
import NewTask from './components/NewTask/NewTask'


import './App.css';

function App() {
  return (
    <div>
      <NewTask />
      <InboxScreen />
    </div>
  );
}

export default App;

//took some help in this project from this github repo https://github.com/mutahirriaz/TaskBox-Mutahir
