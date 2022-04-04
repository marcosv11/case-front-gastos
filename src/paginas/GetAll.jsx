import { React, useState, useEffect } from "react";

import "./GetAll.css";
import axios from "axios";
import Loading from "./Loading";

const GetAll = () => {
  const [itens, setItens] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3200/api/v1/lancamento")
      .then((response) => {
        setItens(response.data);
      })
      .catch(() => {
        console.log("loser1");
      });
  }, []);

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3200/api/v1/categoria/")
      .then((response) => {
        setCategorys(response.data);
         setisLoading(false);
      })
      .catch(() => {
        console.log("erro aqui");
        <Loading/>
      });
  }, []);

  const setCategory = (idCategoria) => {
    const findId = categorys.filter((object) => {
      return object.id === idCategoria;
    });
    const [objectt] = findId;
    console.log(objectt);
    return objectt.name;
  };

  if(isLoading) return <Loading/>
  return (
    <div className="container">
      <div className="row titulo-principal container">
        <div className="">
          <h1>gastos</h1>
        </div>
      </div>

<hr />

      <div className="container">
        <div className="d-flex p-3 cardzinho ">
          <div className="quadrado1 d-flex">
            <div className="row container">
              <div className="col s12 m6 l6">
                <h1>descrição</h1>
              </div>
              <div className="col s12 m6 l6">
                <h1>valor</h1>
              </div>
              <div className="col s12 m12 l6">
                <h1>data</h1>
              </div>
              <div className="col s12 m l6">
                <h1>categoria</h1>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="row d-flex">
          {itens.map((item, key) => {
            return (
              <div className="d-flex p-3 cardzinho   ">
                <div className="quadrado d-flex">
                  <div className="row container">
                    <div className="col s12 m12 l6">
                      <h1>{item.description}</h1>
                    </div>
                    <div className="col s12 m12 l6">
                      <h1>{item.value}</h1>
                    </div>
                    <div className="col s12 m12 l6">
                      <h1>{item.date}</h1>
                    </div>
                    <div className="col s12 m12 l6">
                      <h1>{setCategory(item.idCategoria)}</h1>
                    </div>
                  </div>
                </div>
                
              </div>
              
            );
          })}
   <div className="linha"></div>

        </div>
   <div className="linha"></div>

      </div>
   <div className="linha mb-5"></div>

    </div>
  );
};

export default GetAll;
