import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditPet() {
  const { id } = useParams(); // Get pet ID from URL parameters
  const navigate = useNavigate();
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the existing pet data
  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/pet/${id}`);
        setPetData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

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
      const response = await axios.put(
        `http://localhost:8000/api/pet/update/${id}`,
        petData
      );
      console.log("Pet updated:", response.data);
      navigate("/pets");
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading pet: {error}</p>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Edit Pet</h2>
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
        <button type="submit">Update Pet</button>
      </form>
      <h1>Once your pet has been updated, you can edit or delete it again!</h1>
      <h1>Be careful! Deleting a pet is permanent!!!</h1>
      <h1>Go to the "PETS" page to see your updated pets!</h1>
    </>
  );
}

export default EditPet;
