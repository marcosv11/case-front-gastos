import React from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';



const NotFound = () => {

const navigate = useNavigate()

  return (
    <div className="container">
      <div className="row mt-5 hero d-flx">
        <div className="col-6 s12 m12">
          <h1 className="overlay__title">OPS! ESTÁ PAGINA NÃO EXISTE ...</h1>
          <div className="row">
            <div className="d-flex">
              <div className="btn-post">
                <button type="submit" className="btn-grad" onClick={() => navigate('/home')}>
                  voltar para home
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6  img">
          <img
            src="https://i.ibb.co/NTtBQ8n/fogg-page-not-found-1.png"
            alt="aa"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
