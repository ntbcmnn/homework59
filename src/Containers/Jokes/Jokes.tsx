import { useEffect, useState } from 'react';
import { IJoke } from '../../types';
import Joke from '../../Components/Joke/Joke.tsx';
import AddJoke from '../../Components/AddJoke/AddJoke.tsx';

const Jokes = () => {
  const [jokes, setJokes] = useState<IJoke[]>([]);
  const url: string = 'https://api.chucknorris.io/jokes/randomb';

  const fetchData = async (): Promise<void> => {
    try {
      const response: Response = await fetch(url);

      if (response.ok) {
        const data = await response.json();

        setJokes((prevState: IJoke[]) => [
          ...prevState,
          { joke: data.value }
        ]);
      } else {
        setJokes((prevState: IJoke[]) => [
          ...prevState,
          { joke: "Failed to load a joke" },
        ]);
      }
    } catch (error) {
      console.error(error);

      setJokes((prevState: IJoke[]) => [
        ...prevState,
        {joke: 'Failed to load a joke'},
      ]);
    }
  };

  useEffect((): void => {
    void fetchData();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center my-5 text-center border-black">
      <AddJoke onAdd={fetchData}/>
      {jokes.length > 0 ? (
        jokes.map((joke: IJoke, id: number) => (
          <Joke key={id} joke={joke.joke}/>
        ))
      ) : <p>No jokes found</p>
      }
    </div>
  );
};

export default Jokes;
