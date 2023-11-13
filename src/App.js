import './App.css';
import Keys from './components/keys';
import Screen from './components/screen';
import Word from './components/word';
import React, { useState } from "react";

function App() {
  const [isEnglish, setLanguage] = useState(true);
  const [currentLetters, setCurrentLetters] = useState(" ");

  let keyboard;
  let keyboardNumber = "1234567890-=+*/`".split("");

  if (isEnglish) {
    keyboard = "[]poiuytrewqlkjhgfdamnbvcxz".split("");
  } else {
    keyboard = "פםןוטארק'ףךלחיעכגדשץתצמנהבסז".split("");
  }

  return (
    <div className="App">
      <Screen currentText={currentLetters} />
      <Keys>
        <div className="numberKeys">
          {keyboardNumber.map((item, index) => (
            <Word key={index} letter={item} myOnClick={() => setCurrentLetters(currentLetters + item)} />
          ))}
        </div>
        <br></br>

        <div className="letterKeys">
          {keyboard.map((item, index) => (
            <Word key={index} letter={item} myOnClick={() => setCurrentLetters(currentLetters + item)} />
          ))}
        </div>
        <div className='button'>


          <div className='enter'>
            <Word letter="enter" myOnClick={() => setCurrentLetters(currentLetters + '\n')} />
          </div>
          <div className='space'>
            <Word letter="space" myOnClick={() => setCurrentLetters(currentLetters + '\u00A0')} />
          </div>

          <div className='delete'>
            <Word letter="delete" myOnClick={() => setCurrentLetters(currentLetters.slice(0, -1))} />
          </div>

          <div className='clear'>
            <Word letter="clear" myOnClick={() => setCurrentLetters("")} />
          </div>
        </div>

        <button id="changLanguage" onClick={() => setLanguage(!isEnglish)}> {(!isEnglish ? " change to english" : "החלף לעברית")}</button>
      </Keys>
    </div>
  );
}

export default App;
