import React from "react";
import Pet from "./Pets";

function PetList({ pets, onDelete, onEdit }) {
  return (
    <>
      <div className="container grid grid--3-cols margin-bottom-md">
        {pets.map((pet, i) => (
          <Pet pet={pet} key={i} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </>
  );
}

export default PetList;
