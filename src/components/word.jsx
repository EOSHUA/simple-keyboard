import React from 'react';

function Word({ myOnClick, letter, control }) {
  const width = (letter === "space") ? "850px" : "90px";

  return (
    <div id="container">
      <h1 className="word" onClick={myOnClick} access={control} style={{ width }} >
        {letter}</h1>
    </div>
  );
}
export default Word;