import React from 'react';
import './components.css'

function Keys({children}) {
    return(
        <div className='Keys'>
                 <div className='LetterKeyboard'>
                 <p>{children}</p>
         </div>


  </div> 
    );
}
export default  Keys;