import React from "react";
import { gql, useQuery } from "@apollo/client";
import "../estilos/PokemonCard.css";

const MOSTRARPOKEMON = gql`
  query mostrarpokemon($id: String!) {
    pokemon(id: $id) {
      id
      name
      number
      image
      maxHP
      types
      resistant
      weaknesses
      evolutions {
        id
        name
        image
      }
    }
  }
`;

const Mostrarpokemon = ({ id }) => {
  const { data, loading, error } = useQuery(MOSTRARPOKEMON, {
    variables: { id },
  });
  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  console.log(data);
  const pokemon = data.pokemon;
  console.log(pokemon);

  return (
    <div className="pokemon-Card">
      <header className="pokemon-title">
        #{pokemon.number}:{pokemon.name}
      </header>
      <div className="image-card">
        <img src={pokemon.image}></img>
      </div>
      <div className="pokemon-container">
        Tipo :
        {pokemon.types.map((elemento) => (
          <p>{elemento}</p>
        ))}
      </div>
      <div className="pokemon-container">
        Vida Maxima: <span>{pokemon.maxHP}</span>
      </div>
      <div className="pokemon-container">
        Resistencias :
        {pokemon.resistant.map((elemento) => (
          <p>{elemento}</p>
        ))}
      </div>
      <div className="pokemon-container">
        Debilidades :
        {pokemon.weaknesses.map((elemento) => (
          <p>{elemento}</p>
        ))}
      </div>
      <div className="pokemon-container">
        Evoluciones :
        {pokemon.evolution && pokemon.evolution.length
          ? pokemon.evolution.map((elemento) => <p>{elemento.name}</p>)
          : null}
      </div>
    </div>
  );
};

export default Mostrarpokemon;
