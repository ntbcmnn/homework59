import "./App.css";
import { useState } from "react";
import Movies from "./Containers/Movies/Movies.tsx";
import Jokes from "./Containers/Jokes/Jokes.tsx";

const App = () => {
  const [page, setPage] = useState<boolean>(false);
  return (
    <div className="container my-4">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-dark mb-4"
          onClick={() => setPage(!page)}
        >
          Change page
        </button>
      </div>
      <hr />
      {page ? <Jokes /> : <Movies />}
    </div>
  );
};

export default App;
