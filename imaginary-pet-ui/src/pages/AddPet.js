import React, { useState } from "react";
import axios from "axios";

function AddPet() {
  const [petData, setPetData] = useState({
    name: "",
    affinity: "",
    appearance: "",
    strength: 5,
    agility: 5,
    intelligence: 5,
    stamina: 5,
    health: 75,
    charisma: 5,
    luck: 5,
  });

  const [error, setError] = useState("");

  const calculateTotalStats = () => {
    const { strength, agility, intelligence, stamina, charisma, luck, health } =
      petData;
    return (
      strength + agility + intelligence + stamina + charisma + luck + health
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value, 10);
    if (!isNaN(intValue)) {
      setPetData((prevState) => ({
        ...prevState,
        [name]: intValue,
      }));
    }
  };

  const validateStats = () => {
    const totalStats = calculateTotalStats();

    if (totalStats > 150) {
      setError(
        "The total of all stats (including health) must not exceed 150."
      );
      return false;
    }

    const { health, strength, agility, intelligence, stamina, charisma, luck } =
      petData;

    if (health < 75 || health > 100) {
      setError("Health must be between 75 and 100.");
      return false;
    }

    if (
      strength < 5 ||
      strength > 25 ||
      agility < 5 ||
      agility > 25 ||
      intelligence < 5 ||
      intelligence > 25 ||
      stamina < 5 ||
      stamina > 25 ||
      charisma < 5 ||
      charisma > 25 ||
      luck < 5 ||
      luck > 25
    ) {
      setError("All stats (excluding health) must be between 5 and 25.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStats()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/pet/create",
        petData
      );
      console.log("Pet created:", response.data);
      // Optionally reset the form or handle further logic upon success
      setPetData({
        name: "",
        affinity: "",
        appearance: "",
        strength: 5,
        agility: 5,
        intelligence: 5,
        stamina: 5,
        health: 75,
        charisma: 5,
        luck: 5,
      });
    } catch (error) {
      console.error("Error creating pet:", error);
    }
  };

  const totalStats = calculateTotalStats();

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
            onChange={(e) => setPetData({ ...petData, name: e.target.value })}
            required
          />
        </label>
        <label>
          Affinity:
          <input
            type="text"
            name="affinity"
            value={petData.affinity}
            onChange={(e) =>
              setPetData({ ...petData, affinity: e.target.value })
            }
            required
          />
        </label>
        <label>
          Appearance:
          <input
            type="text"
            name="appearance"
            value={petData.appearance}
            onChange={(e) =>
              setPetData({ ...petData, appearance: e.target.value })
            }
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
            min="5"
            max="25"
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
            min="5"
            max="25"
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
            min="5"
            max="25"
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
            min="5"
            max="25"
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
            min="75"
            max="100"
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
            min="5"
            max="25"
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
            min="5"
            max="25"
            required
          />
        </label>
        <p>Total Stats: {totalStats}</p>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Create Pet</button>
      </form>
      <h1>Once your pet has been created, you can edit or delete it!</h1>
      <h1>Be careful! Deleting a pet is permanent!!!</h1>
      <h1>Go to the "PETS" page to see your created pets!</h1>
    </>
  );
}

export default AddPet;
