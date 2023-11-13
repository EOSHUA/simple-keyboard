import React from 'react';
import Word from './word';

const KeyboardButtons = ({ onKeyPress, onSpecialKeyPress, onDelete, onClear }) => {
  return (
    <div className='button'>
      <div className='enter'>
        <Word letter="enter" control={0} myOnClick={onSpecialKeyPress} />
      </div>
      <div className='space'>
        <Word letter="space" control={1} myOnClick={onSpecialKeyPress} />
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
