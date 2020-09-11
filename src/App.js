import React from 'react';
import './App.css';
import WordCard from './WordCard';
function App() {
  const word = "Hello";
  return (
    <div className="App">
      <div>
        {
          <WordCard value="hello"/>
        }
      </div>
    </div>
  );
}
export default App;