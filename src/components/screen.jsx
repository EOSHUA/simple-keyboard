import React from 'react';

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