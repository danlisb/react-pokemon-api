/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon
Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência
Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id
DICA:
imagem => sprites.front_default
experiência => base_experience
EXTRA: se puder ordene por nome.
*/

import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  // Ordem id (url)
  // const fetchListData = () => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon")
  //     .then((response) => setList(response.data.results));
  // };

  // Ordem alfábetica
  const fetchListData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      const sortedArray = [...response.data.results];

      sortedArray.sort((a, b) => {
        console.log({ a });
        console.log({ b });

        return a.name.localeCompare(b.name);
      });

      console.log({ sortedArray });
      setList(sortedArray);
    });
  };

  useEffect(() => {
    fetchListData();
  }, []);

  return (
    <div>
      <h3>Desafio Consumir API Pokémon</h3>
      <hr />
      {list.map((item) => (
        <Pokemon key={item.name} data={item} />
      ))}
    </div>
  );
}

export default App;
