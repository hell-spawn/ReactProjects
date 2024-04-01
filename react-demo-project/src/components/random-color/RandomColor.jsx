import { useState, useEffect } from 'react';

const HEX_COLORS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const RGB_COLORS = 256

const RandomColor = () => {
  
  const [color, setColor] = useState('#000000');
  const [colorType, setColorType] = useState('hex');

  const generateHEXColor = () =>{
    let color = '#';
    for (let index = 0; index < 6; index++) {
      color = color + HEX_COLORS[Math.floor(Math.random() * HEX_COLORS.length)];
    }
    setColor(color);
  }

  const generateRGBColor = () => {
    let color = 'rgb(';
    for (let index = 0; index < 3; index++) {
      color = color + Math.floor(Math.random() * RGB_COLORS) + ',';
    }
    color = color.slice(0, -1);
    color = color + ')';
    setColor(color); 
  }

  const handlerChangeTypeColor = (newTypeColor) =>{
    setColorType(newTypeColor);
  }

  const handlerGenerateColor = () => {
    if(colorType === 'hex'){
      generateHEXColor();
    }else if(colorType === 'rgb'){
      generateRGBColor();
    }
  }

  useEffect(() => {
    console.log("Mount: RandomColor");
    handlerGenerateColor();
    return () => {
      console.log("Unmount: RandomColor");
    }
  }, [colorType]);

  return (
    <>
    <div className="row">
      <div className="col col-2 offset-3">
        <button className="btn btn-primary" onClick={() => handlerChangeTypeColor('hex')}>HEX Color</button>
      </div>
      <div className="col col-2">
        <button className="btn btn-primary"onClick={() => handlerChangeTypeColor('rgb')}>RGB Color</button>
      </div>
      <div className="col col-2">
        <button className="btn btn-primary" onClick={() => handlerGenerateColor()}>Generate Color</button>
      </div>
    </div>
    <div className="row justify-content-center text-center">
      <div className="col col-4 align-content-center" style={{ backgroundColor: color, height: 200, fontSize: 32 }}>
        Color: {colorType.toUpperCase()} - {color}  
      </div>
    </div>
    </>
  );
}

export default RandomColor
