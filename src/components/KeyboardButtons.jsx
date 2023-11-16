import React from 'react';
import Word from './Word';

const KeyboardButtons = ({ onSpecialKeyPress, onDelete, onClear, onChangeTextColor }) => {
  return (
    <div className='button'>
     
     <div className='color' onClick={() => onChangeTextColor('red')}>
        <Word letter="red" color="red"  />
      </div>
      <div className='color' onClick={() => onChangeTextColor('black')}>
        <Word letter="black" color="black" />
      </div>
      <div className='color' onClick={() => onChangeTextColor('blue')}>
        <Word letter="blue" color="blue" />
      </div>

     
      <div className='space'>
        <Word letter="space" control={1} myOnClick={onSpecialKeyPress} />
      </div>
      <div className='enter'>
        <Word letter="enter" control={0} myOnClick={onSpecialKeyPress} />
      </div>
      <div className='delete'>
        <Word letter="delete" myOnClick={onDelete} />
      </div>
      <div className='clear'>
        <Word letter="clear" myOnClick={onClear} />
      </div>
    </div>
  );
}

export default KeyboardButtons;
