import './App.css';
import Keys from './components/keys';
import Screen from './components/screen';
import Word from './components/word';
import KeyboardButtons from './components/KeyboardButtons';
import React, { useState } from "react";

function App() {
  const [isEnglish, setLanguage] = useState(true);
  const [currentLetters, setCurrentLetters] = useState("");
  const [charColors, setCharColors] = useState([]);
  const [currentTextColor, setCurrentTextColor] = useState("black");

  
  let keyboardNumber = "1234567890-=+*/`".split("");
  const controls = ['\n', '\u00A0'];

  
  const keyboard = isEnglish
    ? "[]poiuytrewqlkjhgfdamnbvcxz".split("")
    : "פםןוטארקףךלחיעכגדשץתצמנהבסז".split("");

  const onKeyPress = (event) => {
    const char = event.target.innerHTML;
    setCharColors([...charColors, currentTextColor]);
    setCurrentLetters(currentLetters + char);
  }

  const onSpecialKeyPress = (event) => {
    setCurrentLetters(currentLetters + controls[event.target.getAttribute("access")]);
    setCharColors([...charColors, currentTextColor]);
  };

  const onDelete = () => {
    setCurrentLetters(currentLetters.slice(0, -1));
    setCharColors(charColors.slice(0, -1));
  };

  const onClear = () => {
    setCurrentLetters("");
    setCharColors([]);
  };

  const onChangeTextColor = (color) => {
    setCurrentTextColor(color);
  };



  return (
    <div className="App">
      <Screen currentText={currentLetters}  charColors={charColors} />
      <Keys>
        <div className="numberKeys">
          {keyboardNumber.map((item, index) => (
            <Word key={index} letter={item} myOnClick={onKeyPress} />
          ))}
        </div>
       <br />
        <div className="letterKeys">
          {keyboard.map((item, index) => (
            <Word key={index} letter={item} myOnClick={onKeyPress} />
          ))}
        </div>
        <KeyboardButtons
          onKeyPress={onKeyPress}
          onSpecialKeyPress={onSpecialKeyPress}
          onDelete={onDelete}
          onClear={onClear}
          onChangeTextColor={onChangeTextColor}
          currentText={currentLetters} 
          charColors={charColors}

        />
        <button id="changLanguage" onClick={() => setLanguage(!isEnglish)}>
          {!isEnglish ? " change to english" : "החלף לעברית"}
        </button>
      </Keys>
    </div>
  );
}

export default App;
