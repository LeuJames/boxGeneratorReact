import React, {useState} from 'react';
import './App.css';

function App() {
  const [blocks, setBlocks] = useState([]);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlock = { "color" : color, "size" : size}
    setBlocks([...blocks, newBlock]);
    setColor('');
    setSize('');
  }


  return (
    <div className="App">
        <form onSubmit = {handleSubmit}>
            <label>Color:</label>
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
            <label>Pixel size:</label>
            <input type="text" value={size} onChange={(e) => setSize(e.target.value)}/>
            <input type="submit" value="Create Box"/>
        </form>
        <button onClick={() => setBlocks([])}>Clear</button>
        <div>
        {
          blocks.map((block, i) =>
            <div
              key = {i}
              style= {{backgroundColor: block.color , width: block.size+'px', height: block.size+'px', margin: "10px", display: "inline-block", flexWrap: "wrap"}}
            > 
            </div>
          )
        }
        </div>
    </div>
  );
}

export default App;
