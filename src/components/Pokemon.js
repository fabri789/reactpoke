import React, { useEffect } from "react";
import { useParams } from "react-router";
import Mostrarpokemon from "./servicios/mostrarpokemon";

const Pokemon = ({ selectTab }) => {
  const { id } = useParams();
  console.log(id);
  // useEffect(() => {
  //   selectTab(null);
  // });

  return (
    <div>
      <Mostrarpokemon id={id}></Mostrarpokemon>
    </div>
  );
};

export default Pokemon;
