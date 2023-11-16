// import React from 'react';

// function Screen({ currentText, charColors}) {

//   return (
//     <div className="screen">
      
//       {currentText.split('').map((char, i) => (
//         <span className='span' style={{color: charColors[i]}}>{char}</span>  
//       ))}
      
//     </div>
//   );

// }

// export default Screen;


import React, { useState } from 'react';

function Screen({ currentText, charColors, setCurrentText }) {
  const [enterPressed, setEnterPressed] = useState(false);

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setCurrentText(e.target.value);
      setEnterPressed(true);
    }
  }

  return (
    <div className="screen">
      
        <div className="colored-text">
          {currentText.split('').map((char, i) => (
            <span key={i} style={{ color: charColors[i] }}>
              {char}
            </span>
          ))}
        </div>
      </div>
  
  );
}

export default Screen;
