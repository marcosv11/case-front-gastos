# case-front-gastos

Aplicação em ReactJs, para resolução de um case. Faz o front end de uma aplicação que gerência os seus gastos. Possui cadastro de categorias e lançamentos de gastos e a visuação deles.

Essa aplicação é feita com as seguintes bibliotecas do ReactJs : axios, boostrap e react-router-dom.

## Back-End

Para deixar a aplicação funcional seguir este tutorial e subir a API : https://github.com/adelbs/it-api-case


## Arquitetura

<h1 align="center">
    <img alt="arc" title="arc" src="https://github.com/marcosv11/case-front-gastos/blob/main/img/arquitetura.png?raw=true" />
</h1>


## Pré Requisitos 

* NodeJS: Você encontra o node em https://nodejs.org/ (recomendável instalar a versão LTS).
* Git: Se você não tem instalado, sugerimos que dê uma olhada em: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git. Existem também diversos sites que ensinam passo a passo como instalar.

## Como Rodar


1) Instalar o Docker

3) Abra o terminal (CMD, bash, GitBash ou qualquer terminal de sua preferência)

```bash
docker pull mavinja/react-case:1.0
```
Depois que der pull na imagem

```bash
docker run -d -p 3000:3000 mavinja/react-case:1.0
```

A aplicação vai subir na porta http://localhost:3000/

link Docker Hub: https://hub.docker.com/r/mavinja/react-case

<br>


## Metodo 2

Abra o terminal (CMD, bash, GitBash ou qualquer terminal de sua preferência)

1) Baixe o repositório:

```bash
git clone https://github.com/marcosv11/case-front-gastos.git
```

2) Entre na pasta

```bash
cd case-front-gastos
```

3) Instalar

```bash
npm install
```

4) Rodar

```bash
npm start
```

A aplicação vai subir na porta padrão, http://localhost:3000/

```
Compiled successfully!

You can now view my-app in the browser.
  Local:            http://localhost:3000             
```

### Página Home da Aplicação

<p>Nesta sessão é possivel acessar a lista de gastos disponiveis no projeto e acessar as funcionalidades.</p>
<h1 align="center">
    <img alt="home" title="home" src="https://github.com/marcosv11/case-front-gastos/blob/main/img/img.png?raw=true" />
</h1>

<br>

## Sistema de cadastro

- Acesse: /cadastro

<h1 align="center">
    <img alt="cadastro" title="cadastro" src="https://github.com/marcosv11/case-front-gastos/blob/main/img/cadastro.png?raw=true" />
</h1>

<br>
 
## Ver os todos os gastos cadastrados


- Acesse: /gastos

<h1 align="center">
    <img alt="gastos" title="gastos" src="https://github.com/marcosv11/case-front-gastos/blob/main/img/verTodos.png?raw=true" />
</h1>

