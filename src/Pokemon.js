import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemon = ({ data }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(data.url).then((response) => setDetails(response.data));
  });

  if (details === null) return <div></div>;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>
        <b>{details.name[0].toUpperCase() + details.name.substring(1)}</b> - EXP {details.base_experience}
      </span>
      <img src={details.sprites.front_default} alt={details.name} />
    </div>
  );
};

export default Pokemon;
