import "./App.css";
import { useState } from "react";
import Movies from "./Containers/Movies/Movies.tsx";
import Jokes from "./Containers/Jokes/Jokes.tsx";

const App = () => {
  const [page, setPage] = useState<boolean>(false);
  return (
    <div className="container m-4">
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => setPage(!page)}
      >
        Change page
      </button>
      {page ? <Jokes /> : <Movies />}
    </div>
  );
};

export default App;
