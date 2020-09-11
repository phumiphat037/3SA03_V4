import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
function App() {
  const word = "Hello";
  return (
    <div className="App">
      <div>
        {
          Array.from(word).map((c, i) => <CharacterCard value={c} key={i} />)
        }
      </div>
    </div>
  );
}
export default App;