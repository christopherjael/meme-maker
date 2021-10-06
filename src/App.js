import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');

  const [imagen, setImagen] = useState('empty-img');

  const onChangeLinea1 = (event) => {
    setLinea1(event.target.value);
  }

  const onChangeLinea2 = (event) => {
    setLinea2(event.target.value);
  }

  const onChangeImagen = (event) => {
    setImagen(event.target.value);
  }

  const onClickExport = (event) => {
    html2canvas(document.querySelector("#meme")).then(function(canvas) {
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = canvas.toDataURL("image/png")
      link.click();
  });
  }

  return (
    <div className="App">
      <label>Elige una imagen    </label>
      <select onChange={onChangeImagen}>
        <option value="fire">Case en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br/>

      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2"/><br/>
      <button onClick={onClickExport}>Exportar</button>

      <div id="meme">
        <span className="linea1">{linea1}</span><br/>
        <span className="linea2">{linea2}</span><br/>
        <img src={"/img/"+imagen+".jpg"} alt="Meme"/>
      </div>
    </div>
  );
}

export default App;
