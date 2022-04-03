import React from "react";
import Cadastro from "./paginas/Cadastro";
import GetAll from "./paginas/GetAll";
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import CadastroTask from "./paginas/CadastroTask";
import Home from "./paginas/Home";
import NotFound from "./paginas/NotFound";


const App = () => {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/cadastro" element={<CadastroTask/>}/>
          <Route exact path="/cadastroCategoria" element={<Cadastro/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/gastos" element={<GetAll/>}/>


        </Routes>
    
    </BrowserRouter>
  );
};

export default App;

