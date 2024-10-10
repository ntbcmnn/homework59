import React from "react";
import { IJoke } from "../../types";

const Joke: React.FC<IJoke> = ({ joke }) => {
  return (
    <div className="my-2">
      <h5 className="text-dark-emphasis">{joke}</h5>
    </div>
  );
};

export default Joke;
