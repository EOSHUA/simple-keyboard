import React from 'react';

    function Screen({currentText,style }) {
        return (
            <div className="screen" style={style}>
                 <textarea  value={currentText}  />
            </div>
        );
    }
    
    
    export default Screen;