

export default function Suggestion({imgSrc, username, reason}){

    return(
        <div class="sugestao">
            <div class="usuario">
              <img src={imgSrc} alt={username}/>
              <div class="texto">
                <div class="nome">{username}</div>
                <div class="razao">{reason}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
    )
}