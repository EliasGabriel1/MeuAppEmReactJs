import "./Home.css";
import "./App.css";
import axios from "axios";
import api from "./api";
import { Component } from "react";

var sectionStyle = {
  width: "40.625em",
  height: "31.25em",
};

// Valor inicial da quantidade de curtidas
var numero = 0;
var x = true;
function carregar() {}

function like() {
  if (x) {
    numero += 1;
    x = false;
    document.getElementById("numero").innerHTML = numero + " likes";
  } else {
    numero -= 1;
    x = true;
    document.getElementById("numero").innerHTML = numero + " likes";
    
  }
}

class feed extends Component {
  state = {
    dados: [],
  };
  async componentDidMount() {
    const apiPicOfTheDay = axios
      .get("https://api.nasa.gov/planetary/apod?", {
        params: {
          api_key: api,
        },
      })
      .then((response) => {
        var data = {
          descricao: response.data.explanation,
          data: response.data.date,
        };
        this.setState({ dados: response.data });
      });
  }

  render() {
    const { dados } = this.state;
    //falta um tratamento pra se caso a pessoa entrar duas vezes no dia não guardar toda vez que ela entrar
    function atualizarlikes(){
      axios.put(`http://localhost:21262/edit/Fotos/`, {
        likes: numero 
       },{where:{
         url: dados["url"]
       }});
    }
    function like() {
      if (x) {
        numero += 1;
        x = false;
        document.getElementById("numero").innerHTML = numero + " likes";
        atualizarlikes()
      } else {
        numero -= 1;
        x = true;
        document.getElementById("numero").innerHTML = numero + " likes";
        atualizarlikes()
      }
    }
    axios
    .post("http://localhost:21262/addFotos",{
      Data: dados["date"],
      Copyright: dados["copyright"],
      url: dados["url"],
      descricao: dados["explanation"],
      likes: numero,
    })
    .catch((error) =>
    alert("Api não está respondendo, "+ "Erro: "+error)
    );
    return (
      <div className="feed">
        <div className="Item-feed">
          <div className="group">
            <div className="img-group">
              <div>
                <img
                  className="img"
                  style={sectionStyle}
                  src={dados["url"]}
                ></img>
              </div>
            </div>
            <div className="likes">
              <button className="like" onClick={like}>
                Like
              </button>
              <label className="numero" id="numero">
                {numero} likes
              </label>
            </div>
          </div>
          <div className="dados">
            <div className="titulo">
              <h3>
                {dados["copyright"]} -{dados["date"]}
              </h3>
            </div>
            <div className="texto-imagem">
              <p>{dados["explanation"]}</p>
            </div>
          </div>
        </div>

        <div className="hidden DivCarregar">
          <button className="Carregar" onClick={carregar}>
            Carregar mais itens +
          </button>
        </div>

        <div className="hidden Item-feed">
          <div className="group">
            <div className="img-group">
              <div>
                <img
                  className="img"
                  style={sectionStyle}
                  src={dados["url"]}
                ></img>
              </div>
            </div>
            <div className="likes">
              <button className="like" onClick={like}>
                Like
              </button>
              <label className="numero" id="numero">
                {numero} likes
              </label>
            </div>
          </div>
          <div className="dados">
            <div className="titulo">
              <h3>
              {dados["title"]}:{dados["copyright"]} -{dados["date"]}
              </h3>
            </div>
            <div className="texto-imagem">
              <p>{dados["explanation"]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default feed;
