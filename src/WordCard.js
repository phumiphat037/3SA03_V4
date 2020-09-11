import React from 'react';
import './App.css'
import CharacterCard from './CharacterCard'
const activationHandler = c => { console.log(`${c} has been activated.`) }
export default function WordCard(props){
 return (
 <div>
{ 
Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler}/>)
}
 </div >
 );
}
