import React from "react";
import Pet from "./Pet";

function PetList({ pets, onDelete, onEdit }) {
  return (
    <div className="container grid grid--3-cols margin-bottom-md">
      {pets.map((pet) => (
        <Pet pet={pet} key={pet._id} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default PetList;
