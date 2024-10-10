import React from "react";

interface Props {
  onAdd: () => void;
}

const AddJoke: React.FC<Props> = ({ onAdd }) => {
  return (
    <button type="button" onClick={onAdd} className="btn btn-danger mb-3">
      Get a new joke
    </button>
  );
};

export default AddJoke;
