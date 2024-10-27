import React from "react"

export default function User(){

  const imagemInicial = "assets/catanacomics.svg"
  const [nome, setNome] = React.useState('catanacomics')
  const [avatar, setAvatar] = React.useState(imagemInicial)

  function inserirNome(){
    const nomeDigitado = prompt("Qual é seu nome?")
    setNome(nomeDigitado ? nomeDigitado : nome)
  }

  function trocarImagem(){
    const img = prompt('Passe o link')
    setAvatar(img)
  }

    return(
        <div class="usuario">
          <img src={avatar} alt="imagem de perfil" onClick={trocarImagem}/>
          <div class="texto">
            <span>
              <strong>{nome}</strong>
              <ion-icon name="pencil" onClick={inserirNome}></ion-icon>
            </span>
          </div>
        </div>
    )
}