import React, { useState } from "react";
import axios from "axios";

function AddPet() {
  const [petData, setPetData] = useState({
    name: "",
    affinity: "",
    appearance: "",
    strength: 0,
    agility: 0,
    intelligence: 0,
    stamina: 0,
    health: 0,
    charisma: 0,
    luck: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/pet/create", // Corrected the URL
        petData
      );
      console.log("Pet created:", response.data);
      // Optionally reset the form or handle further logic upon success
      setPetData({
        name: "",
        affinity: "",
        appearance: "",
        strength: 0,
        agility: 0,
        intelligence: 0,
        stamina: 0,
        health: 0,
        charisma: 0,
        luck: 0,
      });
    } catch (error) {
      console.error("Error creating pet:", error);
    }
  };

  // Handler for generating a random pet
  const handleRandomPet = () => {
    const randomPetData = {
      name: "Random Name",
      affinity: ["air", "fire", "water", "earth"][
        Math.floor(Math.random() * 4)
      ],
      appearance: "Random Appearance",
      strength: Math.floor(Math.random() * 11),
      agility: Math.floor(Math.random() * 11),
      intelligence: Math.floor(Math.random() * 11),
      stamina: Math.floor(Math.random() * 11),
      health: Math.floor(Math.random() * 11),
      charisma: Math.floor(Math.random() * 11),
      luck: Math.floor(Math.random() * 11),
    };
    setPetData(randomPetData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create Pet</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={petData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Affinity:
          <input
            type="text"
            name="affinity"
            value={petData.affinity}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Appearance:
          <input
            type="text"
            name="appearance"
            value={petData.appearance}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Strength:
          <input
            type="number"
            name="strength"
            value={petData.strength}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Agility:
          <input
            type="number"
            name="agility"
            value={petData.agility}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Intelligence:
          <input
            type="number"
            name="intelligence"
            value={petData.intelligence}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Stamina:
          <input
            type="number"
            name="stamina"
            value={petData.stamina}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Health:
          <input
            type="number"
            name="health"
            value={petData.health}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Charisma:
          <input
            type="number"
            name="charisma"
            value={petData.charisma}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Luck:
          <input
            type="number"
            name="luck"
            value={petData.luck}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create Pet</button>
        <button type="button" onClick={handleRandomPet}>
          Generate Random Pet
        </button>
      </form>
      <h1>Once your pet has been created, you can edit or delete it!</h1>
      <h1>Be careful! Deleting a pet is permanent!!!</h1>
      <h1>Go to the "PETS" page to see your created pets!</h1>
    </>
  );
}

export default AddPet;
