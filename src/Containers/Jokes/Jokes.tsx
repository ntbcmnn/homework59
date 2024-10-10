import { useEffect, useState } from "react";
import { IJoke } from "../../types";
import Joke from "../../Components/Joke/Joke.tsx";
import AddJoke from "../../Components/AddJoke/AddJoke.tsx";

const Jokes = () => {
  const [jokes, setJokes] = useState<IJoke[]>([]);
  const url: string = "https://api.chucknorris.io/jokes/random";

  const fetchData = async (): Promise<void> => {
    try {
      const response: Response = await fetch(url);

      if (response.ok) {
        const data = await response.json();

        setJokes((prevState) => [
          ...prevState,
          { joke: data.value }
        ]);
      } else {
        setJokes((prevState) => [
          ...prevState,
          { joke: "Failed to load a joke" },
        ]);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    void fetchData();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center my-5 text-center border-black">
      <AddJoke onAdd={fetchData} />
      {jokes.map((joke: IJoke, id: number) => (
        <Joke key={id} joke={joke.joke} />
      ))}
    </div>
  );
};

export default Jokes;
