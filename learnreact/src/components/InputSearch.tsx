import React from 'react';
import { useState } from 'react';

interface IS {
  getstor: () => string;
}
function InputSearch(props: IS) {
  const [curValue, setCurValue] = useState(props.getstor);

  function onUpdateSearch(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    localStorage.setItem('inpVal', target.value);
    setCurValue(target.value);
  }
  return (
    <div className="search-wrap" data-testid="search">
      <input className="search" type="text" onChange={onUpdateSearch} value={curValue} />
    </div>
  );
}
export default InputSearch;
