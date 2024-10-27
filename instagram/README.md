# Projeto Instagram Clone

Este projeto foi desenvolvido como parte de um curso para praticar e aprimorar habilidades com **React**. A aplicação simula a interface básica do Instagram, com funcionalidades e componentes principais, usando um layout organizado e componentizado para facilitar a manutenção e reutilização do código.

## Objetivo

A principal finalidade deste projeto é estudar e aplicar conceitos do React, incluindo componentização, gerenciamento de estados, eventos, e uso de `props`. Durante o desenvolvimento, foram utilizadas boas práticas de estruturação de código e versionamento de mudanças.

## Estrutura de Componentes

O projeto foi dividido em componentes que representam seções específicas da interface. Abaixo está a lista dos componentes e suas funções:

- **App**: Componente principal que organiza a estrutura da página. Ele integra os componentes `Navbar` e `Body`.
- **Navbar**: Componente responsável pelo cabeçalho da aplicação, incluindo ícones e um campo de pesquisa.
- **Body**: Estrutura principal do conteúdo, contendo `Stories`, `Posts` e `SideBar`.
- **SideBar**: Componente que exibe o perfil do usuário (`User`) e sugestões de contas para seguir (`Suggestions`).
- **User**: Permite que o usuário visualize e edite seu nome e imagem de perfil.
- **Stories**: Exibe uma lista de stories, onde cada story é representado pelo componente `Story`.
- **Story**: Representa cada story individual, com imagem e nome de usuário.
- **Posts**: Lista de postagens, onde cada item é representado pelo componente `Post`.
- **Post**: Componente que representa uma postagem com imagem, curtidas, e ações de curtida/salvamento.
- **Suggestions**: Exibe uma lista de sugestões de contas para seguir, onde cada sugestão é representada pelo componente `Suggestion`.
- **Suggestion**: Componente individual que representa uma conta sugerida, com informações de imagem, nome de usuário e razão para a sugestão.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **CSS**: Utilizado para estilização dos componentes.
- **npm**: Gerenciador de pacotes para instalação de dependências.

## Funcionalidades

- **Edição de Perfil**: Permite ao usuário alterar seu nome e foto de perfil ao clicar nos elementos apropriados.
- **Curtidas**: O usuário pode curtir postagens clicando no ícone de coração ou na própria imagem da postagem.
- **Navegação de Stories**: Os stories são exibidos com uma navegação simples e amigável.
- **Sugestões**: Exibição de sugestões dinâmicas de contas para seguir.

## Instalação e Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/AndreiCSantos/react-instagram.git

2. Acesse a pasta do projeto:
   cd nome-do-projeto

3. Instale as dependências:
   npm install

4. Inicie o projeto:
   npm start
   
5. Acesse a aplicação no navegador pelo endereço http://localhost:3000.

Contribuições

Contribuições são bem-vindas! Para isso, siga estes passos:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (git checkout -b minha-feature).
3. Faça o commit de suas mudanças (git commit -m 'Adicionar nova feature').
4. Envie para a branch principal (git push origin minha-feature).
5. Abra um Pull Request.

Licença

Este projeto é apenas para fins de estudo e prática. Todos os direitos sobre o layout e a marca Instagram pertencem aos seus respectivos proprietários.


Essa estrutura de `README.md` descreve os componentes, as funcionalidades e inclui instruções detalhadas para instalação e execução do projeto.


