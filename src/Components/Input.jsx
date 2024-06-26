
import React, { useRef } from 'react';

const Input = (props) => {
  const showErr = useRef(null);

  const changeHandler = () => {
    const inp = showErr.current;
    if (inp.value.length < 4) {
		console.log(inp.value);
      inp.style.border = "1px solid red";
    } else {
      inp.style.border = "1px solid black";
    }
  };

 
  

  return (
    <input
      ref={showErr}
      onChange={changeHandler}
      className="border border-zinc-300 outline-none"
      {...props}
    />
  );
};

export default Input;
