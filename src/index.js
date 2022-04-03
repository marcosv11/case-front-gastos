import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/NavBar';

ReactDOM.render(
  <React.StrictMode>
   
    <Navbar/>
    <App/>
    
  </React.StrictMode>,
  document.getElementById('root')
);


