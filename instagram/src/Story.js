
export default function Story({ imageSrc, username }){

    return(
        <div className="story">
            <div className="imagem">
                <img src={imageSrc} alt={username} />
            </div>
            <div className="usuario">
                {username}
            </div>
        </div>
    )
}