import React from 'react';

    function Screen({currentText }) {
        return (
            <div className="screen">
                 <textarea value={currentText}  />
            </div>
        );
    }
    
    
    export default Screen;