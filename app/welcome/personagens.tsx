import { useEffect, useState } from "react";
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
  const [personagens, setPersonagens] = useState<{
    name: string;
    image: string;
    species: string;
    status: string;
  }[]>([])

useEffect(() => {
  async function buscarPersonagens(){
    //Busca dados da API de Rick and Morty
    const resposta = await fetch("https://rickandmortyapi.com/api/character")
    //Converte para dados JSON
    const resultado = await resposta.json()
    //Salva os dados na variável de estado 'personagens'
    setPersonagens(resultado.results)
  }

  buscarPersonagens()
}, [])

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
                nome={personagem.name}
                imagem={personagem.image}
                especie={personagem.species}
                vida={personagem.status}
              />
            )
          })
        }
      </div>
    </>
  );
}