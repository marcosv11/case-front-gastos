import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

const navigate = useNavigate()


  return (


    
 <div className="container">
    <div className="row mt-5 hero d-flx">
      <div className="col-6  ">
        <h1 className="overlay__title">BEM VINDO AO SEU GERENCIADOR DE GASTOS.</h1>
     

          {/* <p className="mt-5 overlay__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </p> */}
          
        <div className="row">
          <div className="d-flex">
              <div className="btn-post">
                <button type="submit" className="btn-grad" onClick={() => navigate('/cadastro')}>
                  começe a usar
                </button>
              </div>
               <div className="btn-post">
                <button type="submit" className="btn-grad" onClick={() => navigate('/gastos')}>
                  ver os gastos
                </button>
              </div>
        
          </div>
          
        </div>
         
   
      </div>
      <div className="col-6  img">
        <img src="https://i.ibb.co/kDWHZZj/hugo-internet-security.png" alt="aa" className="img-fluid"/>
      </div>


      </div>
 </div>
  )
}

export default Home