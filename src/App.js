import React, { useState } from 'react';
import './App.css';
import backgroundImage from './assets/background.jpeg'
import Header from './components/Header'

function App(){
  const [projects, setProjects] = useState(['Desenvolvimento de apps','Font-end web']);
  // useState retorna um array com duas posições 
  // primeira posição retorna a variavel com a posição inicial
  // segundo parametro é uma função para atualizar esse valor

  function handleAddProject(){
    //projects.push(`Novo Projeto ${Date.now()}`)
    setProjects([...projects,`Novo Projeto ${Date.now()}`]);
    console.log(projects);
  }
  
  return (
    <>
      <Header title="Projects"/>
      <img width={300} src={backgroundImage}/>
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject} >Adicionar Projeto</button>
    </>
  )
}


export default App;