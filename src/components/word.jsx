import React from 'react';

function Word({myOnClick , letter}) {
  const width = (letter === "space") ? "850px" : "90px";
    return (
        <div id="contnair">
                  <h1 className="word" onClick={myOnClick}       style={{width}} >
                    {letter}</h1>
        </div>
    );
}
export default Word;