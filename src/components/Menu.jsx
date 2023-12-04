import React from 'react';
import {useState} from 'react';
import "./Menu.css"
import img1 from './img1.png'; 
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.jpg';

function Zer() {
  const [result, setResult] = useState(null);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setResult(randomNumber);
  };

  const renderDice = () => {
    switch (result) {
      case 1:
        return <img src={img1} alt="1" onClick={handleClick} />;
      case 2:
        return <img src={img2} alt="2" onClick={handleClick} />;
      case 3:
        return <img src={img3} alt="3" onClick={handleClick} />;
      case 4:
        return <img src={img4} alt="4" onClick={handleClick} />;
      case 5:
        return <img src={img5} alt="5" onClick={handleClick} />;
      case 6:
        return <img src={img6} alt="6" onClick={handleClick} />;
      default:
        return <div onClick={handleClick}>Click it!</div>;
    }
  };

  return (
    <div id= "zer">
      {renderDice()}
    </div>
  );
}

export default Zer;

