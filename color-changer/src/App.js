import React, { useState } from 'react';

const App = () => {
  const [bg, setBg] = useState("#282c34");

  const changeColor = () => {
    setBg(`#${Math.floor(Math.random()*16777215).toString(16)}`);
  };

  return (
    <div style={{ backgroundColor: bg, height: "100vh" }}>
      <button onClick={changeColor} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        test
      </button>
    </div>
  );
};

export default App;