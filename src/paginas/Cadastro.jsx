import React, { Component } from 'react'
import "./Cadastro.css";
import axios from 'axios'


class Cadastro extends Component {	
	constructor(props) {
	super(props)
	this.state = {
			name: ''
		}
	}


	changeHandler = e => {
		
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:3200/api/v1/categoria', this.state)
			.then(response => {
					 alert("Categoria criada com sucesso")
					 return window.location.href = "/cadastro"	 	
			})
			.catch(error => {
			 alert("Erro ao criar categoria")
			
				console.log(error)
			})
	}


	render() {
		
		const { name } = this.state
		
		return (
			

       <main>
          <div className="card-post">
            <h1>Criar categoria</h1>
            <hr />

              	<div className="card-body-bategoria">
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							required
							type="text"
							name="name"
							value={name}
							onChange={this.changeHandler}
						/>
					</div>
		 
		 
					  <div className="btn-post">
                <button type="submit" className="btn-grad">
                  Cadastrar
                </button>
              </div>
				</form>
			</div>
          </div>
      </main>
		
		)
	}
}

export default Cadastro