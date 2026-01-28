export function Welcome() {
  const titulo = "Hello Zelda!!";

  return (
    <>
      <div className="header">
        <h1>Rick and Morty</h1>
      </div>
      <div className="personagens">
        <div className="personagem">
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
          <p>
            Rick Sanchez
          </p>
          <p>
            Human
          </p>
          <span>
            Alive
          </span>
        </div>
      </div>
    </>
  );
}