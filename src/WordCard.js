import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
// import { useState, useEffect } from '../node_modules/react/cjs/react.production.min';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}
export default function WordCard(props) {
    // const activationHandler = c => { console.log(${c} has been activated.) }
    const [state, setState] = useState({
        word: '',
        chars: '',
        attempt: 1,
        guess: '',
        completed: false
    })
    useEffect(() => {
        let data = prepareStateFromWord(props.value);
        setState({
            ...state,
            word: data.word,
            chars: data.chars,
            attempt: data.attempt,
            guess: data.guess,
            completed: data.completed
        })
    },[])
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({...state, guess})
        if(guess.length == state.word.length){
        if(guess == state.word){
        console.log('yeah!')
        setState({...state, guess: '', completed: true})
        }else{
        console.log('reset')
        setState({...state, guess: '', attempt: state.attempt + 1})
        }
        }
        }
    return (
        <div>
            {Array.from(state.chars).map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler}
            attempt={state.attempt} />)}
            {/* <CharacterCard value={c} key={i} activationHandler={activationHandler}/> */}
        </div>
    );
}