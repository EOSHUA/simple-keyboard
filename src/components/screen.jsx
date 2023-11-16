// import React from 'react';

<<<<<<< HEAD
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
=======
function Screen({ currentText, textColor}) {
    const textStyle = {
        color: textColor,
    };
    return (
        <div className="screen">
            <textarea value={currentText} style={textStyle}

            />
        </div>
    );
}


export default Screen;
>>>>>>> a6d2d056437432ad656e150874e2507b101bfc48
