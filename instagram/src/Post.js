import React from 'react'

export default function Post({imgSrcUsuario, usernameUsuario, imgSrcConteudo, usernameConteudo, imgSrcCurtidas, usernameCurtidas, numeroCurtidas}) {

    const [post, setPost] = React.useState(false)
    const [enjoy, setEnjoy] = React.useState(false)
    const [curtidas, setCurtidas] = React.useState(Number(Number(numeroCurtidas.replace(/\./g, ''))))
    
    function togglePost(){
        setPost(!post)
    }

    function toggleEnjoy(){
        if (enjoy) {
            setEnjoy(false);
            setCurtidas(curtidas - 1)
        } else {
            setEnjoy(true);
            setCurtidas(curtidas + 1)
        }
    }

    function curtirPostagem() {
        if (!enjoy) {
            setEnjoy(true);
            setCurtidas(curtidas + 1)
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={imgSrcUsuario} alt={usernameUsuario} />
                    {usernameUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={curtirPostagem} src={imgSrcConteudo} alt={usernameConteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon 
                            name={enjoy ? "heart" : "heart-outline"} 
                            style={{
                                color: enjoy ? 'red' : 'black'
                              }}
                            onClick={toggleEnjoy}>                           
                        </ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div onClick={togglePost}>
                        <ion-icon name={post ? "bookmark" : "bookmark-outline"}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={imgSrcCurtidas} alt={usernameCurtidas} />
                    <div class="texto">
                        Curtido por <strong>{usernameCurtidas}</strong> e <strong>outras {curtidas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}