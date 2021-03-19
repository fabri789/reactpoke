import { gql, useQuery } from "@apollo/client";
import "../estilos/Card.css";
import { Link, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";

const MOSTRARLISTA = gql`
  query mostrar_lista {
    pokemons(first: 10) {
      id
      name
      number
      image
    }
  }
`;

const MostrarLista = () => {
  const [valor, setValor] = useState("");
  const [pokemones, setFiltro] = useState([]);

  const filtro = (valor) => {
    const lista = data.pokemons.filter(({ name, id }) => name.includes(valor));
    setFiltro(lista);
    console.log(lista);
  };
  const { data, loading, error } = useQuery(MOSTRARLISTA);
  useEffect(() => {
    if (data && data.pokemons) {
      setFiltro((e) => [...e, ...data.pokemons]);
    }

    // setData(data);
    // setLoading(loading);
    // setError(error);
  }, [data]);

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  console.log(data);

  return (
    <React.Fragment>
      <div className="container">
        <div className="card-container">
          <input
            type="text"
            placeholder="Buscar Pokemon..."
            value={valor}
            onChange={(event) => {
              setValor(event.target.value);
              filtro(event.target.value);
            }}
          ></input>
          {/* <button onClick={() => filtro(valor)}>Iniciar Busqueda</button> */}
        </div>
      </div>
      {pokemones.map(({ id, name, image, number }) => (
        <div className="container" key={id}>
          <div className="card-container">
            <Link to={`/Pokemon/${id}`}>
              <span className="boton">
                #{number}: {name}
              </span>
            </Link>
            <div className="image-container">
              <img src={image}></img>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default MostrarLista;
