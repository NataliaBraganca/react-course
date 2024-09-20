import React from 'react';
import Footer from './Footer'
import Form from "./Form/Form"

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({nome: "Andre", idade: "30"});
  // É a mesma coisa que:
  // const ativoArray = React.useState(true);
  // const ativo = ativoArray[0];
  // const setAtivo = ativoArray[1];

  function handleClick(){
    setAtivo(!ativo);
    setDados({...dados, faculdade: "Possui faculdade"})

  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
    </div>
  );
};


export default App
