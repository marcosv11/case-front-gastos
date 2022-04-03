import React, { Component } from "react";
import axios from "axios";
import "./CadastroTask.css";

class CadastroTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idCategoria: "",
      description: "",
      date: "",
      value: "",
      categorys: [],
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.getAllcategorys = this.getAllcategorys.bind(this);
  }

  async componentDidMount() {
    await this.getAllcategorys();
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:3200/api/v1/lancamento", {
        idCategoria: this.state.idCategoria,
        description: this.state.description,
        date: this.state.date,
        value: Number(this.state.value),
      })
      .then((response) => {
        console.log(this.state.categorys);
        console.log(response);
         alert("Adicionado com sucesso!")
				 return window.location.href = "/gastos"	 	
      })
      .catch((error) => {
         alert("Ops algo está errado")

        console.log(error);
      });
  };

  getAllcategorys = (e) => {
    axios
      .get("http://localhost:3200/api/v1/categoria/")
      .then((response) => {
        this.setState({
          categorys: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { idCategoria, description, date, value, categorys } = this.state;

    return (
      <div className="card-post container col-6">
        <h1>Criar Task</h1>
        <hr />
        <div className="container formTask">
          <form onSubmit={this.submitHandler}>
            <div className="lineone row d-flex">
              <label className="col-4">Categoria</label>
            

              <a href="/cadastroCategoria" className="col-4">Cadastrar nova categoria</a>
            </div>
            <div className="row mt-4 mb-5 ">
                <select
                type="text"
                name="idCategoria"
                value={idCategoria}
                onChange={this.changeHandler}
                className="col-12"
              >
                {categorys.map((category2) => {
                  return (
                    <option key={category2.id} value={category2.id}>
                      {category2.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label>Descrição</label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={this.changeHandler}
              />
            </div>
            <div className="">
              <label>Data</label>
              <input
                type="text"
                name="date"
                value={date}
                onChange={this.changeHandler}
              />
            </div>
      
            <div className="">
             
                <label>Valor</label>
                <input
                  type="number"
                  name="value"
                  value={value}
                  onChange={this.changeHandler}
                />
            
            </div>
              <div className="btn-post col-3 ">
              <button type="submit" className="btn-grad" >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CadastroTask;
