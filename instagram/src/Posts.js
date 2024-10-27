import Post from "./Post";

export default function Posts(){

    const posts = [
        {imgSrcUsuario: "assets/meowed.svg", usernameUsuario: "meowed", imgSrcConteudo: "assets/gato-telefone.svg", usernameConteudo: "gato-telefone", imgSrcCurtidas: "assets/respondeai.svg", usernameCurtidas: "respondeai", numeroCurtidas: "101.523"},
        {imgSrcUsuario: "assets/barked.svg", usernameUsuario: "barked", imgSrcConteudo: "assets/dog.svg", usernameConteudo: "dog", imgSrcCurtidas: "assets/adorable_animals.svg", usernameCurtidas: "adorable_animals", numeroCurtidas: "99.159"},
        {imgSrcUsuario: "assets/meowed.svg", usernameUsuario: "meowed", imgSrcConteudo: "assets/gato-telefone.svg", usernameConteudo: "gato-telefone", imgSrcCurtidas: "assets/respondeai.svg", usernameCurtidas: "respondeai", numeroCurtidas: "101.523"}
    ]

    return(
        <div className="posts">
            {posts.map((post, index) => (
                <Post 
                    key={index} 
                    imgSrcUsuario={post.imgSrcUsuario} 
                    imgSrcConteudo={post.imgSrcConteudo} 
                    imgSrcCurtidas={post.imgSrcCurtidas} 
                    usernameUsuario={post.usernameUsuario} 
                    usernameConteudo={post.usernameConteudo} 
                    usernameCurtidas={post.usernameCurtidas} 
                    numeroCurtidas={post.numeroCurtidas}
                />
            ))}
        </div>
    )
}
