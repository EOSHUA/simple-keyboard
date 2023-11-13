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
  const controls = ['\n', '\u00A0'];
  const onKeyPress = (event) => { setCurrentLetters(currentLetters + event.target.innerHTML); }
  const onSpecialKeyPress = (event) => { setCurrentLetters(currentLetters + controls[event.target.getAttribute("access")]); }
  //setCurrentLetters(currentLetters + event.target.value); }

  return (
    <div className="App">
      <Screen currentText={currentLetters} />
      <Keys>
        <div className="numberKeys">
          {keyboardNumber.map((item, index) => (
            <Word key={index} letter={item} myOnClick={onKeyPress} />
          ))}
        </div>
        <br></br>

        <div className="letterKeys">
          {keyboard.map((item, index) => (
            <Word key={index} letter={item} myOnClick={onKeyPress} />
          ))}
        </div>

        <div className='button'>


          <div className='enter'>
            <Word letter="enter" control={0} myOnClick={onSpecialKeyPress} />
          </div>
          <div className='space'>
            <Word letter="space" control={1} myOnClick={onSpecialKeyPress} />
          </div>

          <div className='delete'>
            <Word letter="delete" myOnClick={() => setCurrentLetters(currentLetters.slice(0, -1))} />
          </div>

          <div className='clear'>
            <Word letter="clear" myOnClick={() => setCurrentLetters("")} />
          </div>
          <div className='changefont'>
            <Word letter="changefont" />
          </div>
        </div>

        <button id="changLanguage" onClick={() => setLanguage(!isEnglish)}> {(!isEnglish ? " change to english" : "החלף לעברית")}</button>
      </Keys>
    </div>
  );
}

export default App;
