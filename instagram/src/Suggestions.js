import Suggestion from "./Suggestion";

export default function Suggestions() {

    const suggestions = [
        { imgSrc: "assets/bad.vibes.memes.svg", username: "bad.vibes.memes", reason:"Segue você" },
        { imgSrc: "assets/chibirdart.svg", username: "chibirdart", reason:"Segue você" },
        { imgSrc: "assets/razoesparaacreditar.svg", username: "razoesparaacreditar", reason:"Novo no Instagram" },
        { imgSrc: "assets/adorable_animals.svg", username: "adorable_animals", reason:"Segue você" },
        { imgSrc: "assets/smallcutecats.svg", username: "smallcutecats", reason:"Segue você" }
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map((suggestion, index) => (
                <Suggestion key={index} imgSrc={suggestion.imgSrc} username={suggestion.username} reason={suggestion.reason} />
            ))}
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}