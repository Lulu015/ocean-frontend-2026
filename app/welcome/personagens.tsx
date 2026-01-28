import { Personagem } from "./components/personagem";
import { Titulo } from "./components/titulo";

const personagens = [
  {
    nome: "Rick Sanchez",
    imagem: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    especie: "Human",
    vida: "Alive"
  },
  {
    nome: "Morty Smith",
    imagem: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    especie: "Human",
    vida: "Alive"
  },
  {
    nome: "Summer Smith",
    imagem: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    especie: "Human",
    vida: "Alive"
  }
];

export function Personagens() {
  return (
    <>
      <Titulo />
      <div className="personagens">
        {
          // Aqui percorremos a lista de personagems
          personagens.map((
            personagem
            // Acesso à variavel que corresponde ao item da lista que está percorrendo
          ) => {
            return (
              // Retorna o componente do meu personagem com os dados do personagem
              <Personagem 
                nome={personagem.nome}
                imagem={personagem.imagem}
                especie={personagem.especie}
                vida={personagem.vida}
              />
            )
          })
        }
      </div>
    </>
  );
}