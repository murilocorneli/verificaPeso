import React, { useState } from 'react';
import './style.css'
import vaca from './assets/vaca.png';





function App() {

  const [vaca1, setVaca1] = useState(0);
  const [vaca2, setVaca2] = useState(0);
  const [vaca3, setVaca3] = useState(0);
  const [vaca4, setVaca4] = useState(0);
  const [vaca5, setVaca5] = useState(0);
  const [resultado, setResultado] = useState("none");
  const [maiorRes, setMaior] = useState(0);
  const [menorRes, setMenor] = useState(0);
  const [posicaoMaior, setPosicaoMaior] = useState();
  const [posicaoMenor, setPosicaoMenor] = useState();
  function VerificaPeso(event) {
    event.preventDefault();
    let vacas = [];
    vacas.push(vaca1, vaca2, vaca3, vaca4, vaca5);
    let maior = Math.max(...vacas);
    let menor = Math.min(...vacas);

    
     setPosicaoMaior(vacas.findIndex((vaca, index, array) => vaca == maior));
     setPosicaoMenor( vacas.findIndex((vaca, index, array) => vaca == menor));
    
    setMenor(menor);
    setMaior(maior);


    setResultado("");

  }


  return (
    <div className="Container">
      <div style={{ display: `${resultado}` }} className="resultado">
        <h3 style={{color: 'red'}} >A vaca mais pesada possui {maiorRes}KG</h3>
        <h3 style={{color: 'blue'}}>A vaca mais leve possui {menorRes}KG</h3>
        
      </div>
      <div className="Balanca">
        <div style={posicaoMaior==0&& maiorRes!=0 ? {border: 'dashed', borderColor:'red'}:{border:''}&& posicaoMenor==0? {border: 'dashed', borderColor:'blue'}:{border:''}  } className="Vaca1" >
          <h4>Vaca 1</h4>
          <img src={vaca} />
          <input placeholder="peso em kg" onChange={event => setVaca1(event.target.value)} value={vaca1} type="number" />
        </div>
        <div placeholder="peso em kg" style={posicaoMaior==1&& maiorRes!=0 ? {border: 'dashed', borderColor:'red'}:{border:''} && posicaoMenor==1? {border: 'dashed', borderColor:'blue'}:{border:''}  } className="Vaca2" >
          <h4>Vaca 2</h4>
          <img src={vaca} />
          <input placeholder="peso em kg" onChange={event => setVaca2(event.target.value)} value={vaca2} type="number" />
        </div>
        <div style={posicaoMaior==2&& maiorRes!=0 ? {border: 'dashed', borderColor:'red'}:{border:''}&& posicaoMenor==2? {border: 'dashed', borderColor:'blue'}:{border:''}  } className="Vaca3" >
          <h4>Vaca 3</h4>
          <img src={vaca} />
          <input placeholder="peso em kg" onChange={event => setVaca3(event.target.value)} value={vaca3} type="number" />
        </div>
        <div style={posicaoMaior==3&& maiorRes!=0 ? {border: 'dashed', borderColor:'red'}:{border:''}&& posicaoMenor==3? {border: 'dashed', borderColor:'blue'}:{border:''}  } className="Vaca4" >
          <h4>Vaca 4</h4>
          <img src={vaca} />
          <input placeholder="peso em kg" onChange={event => setVaca4(event.target.value)} value={vaca4} type="number" />
        </div>
        <div style={posicaoMaior==4&& maiorRes!=0 ? {border: 'dashed', borderColor:'red'}:{border:''} && posicaoMenor==4? {border: 'dashed', borderColor:'blue'}:{border:''} } className="Vaca5" >
          <h4>Vaca 5</h4>
          <img src={vaca} />
          <input placeholder="peso em kg" onChange={event => setVaca5(event.target.value)} value={vaca5} type="number" />
        </div>

      </div>
      <button onClick={VerificaPeso} className="botao">Verificar</button>


    </div>
  );
}

export default App;
