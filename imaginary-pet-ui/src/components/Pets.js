import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

// Capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  if (!string) return ""; // Return an empty string if input is falsy (e.g., undefined, '')
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Pet({ pet, onEdit, onDelete }) {
  return (
    <div className="meal">
      <img src="./img/pets/quetzal.jpg" className="meal-img" alt="pet" />
      <div className="meal-content">
        <div className="meal-tags">
          <span className={`tag tag--${pet.affinity}`}>
            {capitalizeFirstLetter(pet.affinity) || "Other"}
          </span>
        </div>
        <p className="meal-title">{capitalizeFirstLetter(pet.name)}</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <span>
              <strong>Appearance:</strong>{" "}
              {capitalizeFirstLetter(pet.appearance)}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>Strength:</strong> {pet.strength}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>Agility:</strong> {pet.agility}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>intelligence:</strong> {pet.intelligence}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>stamina:</strong> {pet.stamin}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>Health:</strong> {pet.health}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>Charisma:</strong> {pet.charisma}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>Luck:</strong> {pet.luck}
            </span>
          </li>
          <li className="meal-attribute meal-attribute-icons">
            <FaRegEdit
              onClick={() => onEdit(pet)}
              title="Edit Item"
              className="meal-icon"
            />
            <FaTrashCan
              onClick={() => onDelete(pet._id)}
              title="Delete Item"
              className="meal-icon"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pet;
