import "./Home.css";
import login from "./Login"
import Feed from "./feed"
import react, { createContext ,Component,useContext } from 'react';
import { UserContext } from './Contexts/auth';
import axios from "axios";



function Home() {
  const {text} = useContext(UserContext);
  function editName(){
    var input = document. querySelector("#input");
    var texto = input.value
    axios.put(`http://localhost:21262/edit`, {
      nomeatual: {text}
     },{where:{
       nome: texto
     }});
  }
  return (
    <div>
      <nav>
        {/* <input value={text} onBlur={editName} id="input"></input> */}
        <h1>Olá {text}</h1>
      </nav>
      <hr />
      <Feed/>
    </div>
  );
}

export default Home;
