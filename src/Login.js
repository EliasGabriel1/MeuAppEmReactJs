import "./login.css";
import react, { Component, useState, useContext , createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import axios from "axios";
import {UserContext} from './Contexts/auth'

var caminho = "/Home/";
// function nome() {

//   if (document.getElementById("name").value == "" || document.getElementById("name").value == null || document.getElementById("name").value == 0) {
//     alert("Digite o usuario")
//     caminho = "/Login/";
//     return ;
//   }
// }

const initialValue = {
  nome: "",
};

const LoginForm = () => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function Change(ev) {
    const { name, value } = ev.target;

    // Se caso usar mais que um input:
    setValues({ ...values, [name]: value });

    // setValues({ nome: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    axios
      .post("http://localhost:21262/add/" + values.nome)
      .then((response) => {
        history.push("/Home");
      })
      .catch((error) =>
      alert("Api não está respondendo, "+ "Erro: "+error)
      );

  }

  const { text, setText } = useContext(UserContext);

  return (
    <div>
      <form onSubmit={onSubmit} className="group-welcome">
        <div className="titulo">
          <h1 className="text">Seja Bem vindo</h1>
        </div>
        <div className="group-input">
          <label htmlFor="nome" className="hidden">Nome: </label>
          <input

            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            onChange={Change}
            onBlur={(e)=>setText(e.target.value)}
          />
        </div>
        <div className="group-button">
          <button type="submit" id="entrar">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
// onClick={nome}
