
 import './App.css';
 import Keys from './components/keys'
 import Screen from './components/screen';
 import Word from './components/word';
 import React, { useState } from "react";


  function App() {

    let keyboard;
    let keyboardNumber="0( 9) 8* 7& 6^ %5 $4 #3 @2 !1 / * - + =".split(" ");

    const [isEnglish, setLangeuge] = useState(true);
    const [currentLetters, setCurrentLetters] = useState("")

    if (isEnglish){
      keyboard =  "[ ] p o i u y t r e w q l k j h g f d a m n b v c x z".split(" ");

    }
    else{
      keyboard = "אבגדהוזחטיכךלמנסעפףצץקרשת".split("");
    }
    return(
      
      <div className="App">
        
           <Screen currentText={currentLetters} />

           <Keys>
            <div className="numberKeys">
           {keyboardNumber.map((item, index) => (
             <Word key={index} letter={item} myOnClick={()=>setCurrentLetters(currentLetters +item)}/>
             

            ))}
            </div>
            <br></br>
            
            <div className="letterKeys">
             {keyboard.map((item, index) => (
             <Word key={index} letter={item} myOnClick={()=>setCurrentLetters(currentLetters +item)}/>
             

            ))}
            </div>
            
             <div className='space'>
                 <Word  letter="space"  myOnClick={() => setCurrentLetters(currentLetters + " ")} />
             </div>
            
                <button id="changLanguage"  onClick={() => setLangeuge(!isEnglish)}>to change language</button>
                
           </Keys>

      </div>
    )
  }
  export default App;


