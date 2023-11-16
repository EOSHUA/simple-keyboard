import './App.css';
import Keys from './components/keys';
import Screen from './components/screen';
import Word from './components/word';
import KeyboardButtons from './components/KeyboardButtons';
import React, { useState } from "react";

<<<<<<< HEAD
import Screen from "./components/screen";
import Keys from "./components/Keys";
import Word from "./components/Word";
import KeyboardButtons from "./components/KeyboardButtons";
import React, { useState } from "react";
function App() {
  const [isEnglish, setLanguage] = useState(true);
  const [currentLetters, setCurrentLetters] = useState("");
  const [charColors, setCharColors] = useState([]);
  const [currentTextColor, setCurrentTextColor] = useState("black");

  let keyboard;
  let keyboardNumber = "1234567890-=+*/`".split("");

=======
function App() {
  const [isEnglish, setLanguage] = useState(true);
  const [currentLetters, setCurrentLetters] = useState(" ");
  const [currentTextColor, setCurrentTextColor] = useState("black");
  let keyboard;
  let keyboardNumber = "1234567890-=+*/`".split("");

>>>>>>> a6d2d056437432ad656e150874e2507b101bfc48
  if (isEnglish) {
    keyboard = "[]poiuytrewqlkjhgfdamnbvcxz".split("");
  } else {
    keyboard = "פםןוטארקףךלחיעכגדשץתצמנהבסז".split("");
  }
<<<<<<< HEAD
=======
  const controls = ['\n', '\u00A0'];
  const onKeyPress = (event) => { setCurrentLetters(currentLetters + event.target.innerHTML); }
  const onSpecialKeyPress = (event) => { setCurrentLetters(currentLetters + controls[event.target.getAttribute("access")]); }

  const onDelete = () => { setCurrentLetters(currentLetters.slice(0, -1)); }
  const onClear = () => { setCurrentLetters(""); }
  const onTextColorChange = () => { setCurrentTextColor(currentTextColor === "black" ? "red" : "black"); }
>>>>>>> a6d2d056437432ad656e150874e2507b101bfc48

  const controls = ['\n', '\u00A0'];

<<<<<<< HEAD
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
=======
  return (
    <div className="App">
      <Screen currentText={currentLetters}  textColor={currentTextColor}/>

>>>>>>> a6d2d056437432ad656e150874e2507b101bfc48
      <Keys>
        <div className="numberKeys">
          {keyboardNumber.map((item, index) => (
            <Word key={index} letter={item} myOnClick={onKeyPress} />
          ))}
<<<<<<< HEAD
        </div>
        <br></br>
=======

        </div>

        <br></br>

>>>>>>> a6d2d056437432ad656e150874e2507b101bfc48
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
<<<<<<< HEAD
          onChangeTextColor={onChangeTextColor}
          currentText={currentLetters} 
          charColors={charColors}

        />
        <button id="changLanguage" onClick={() => setLanguage(!isEnglish)}>
          {!isEnglish ? " change to english" : "החלף לעברית"}
        </button>
=======
          onTextColorChange={onTextColorChange}
          
        />


        <button id="changLanguage" onClick={() => setLanguage(!isEnglish)}> {(!isEnglish ? " change to english" : "החלף לעברית")}</button>
>>>>>>> a6d2d056437432ad656e150874e2507b101bfc48
      </Keys>
    </div>
  );
}

export default App;
