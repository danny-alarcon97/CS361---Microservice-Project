import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

import PetList from "../components/PetList";

function PetsPage({ setPet }) {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(null);

  const navigateToAddPet = () => {
    navigate("/create", { state: { from: "/pets" } });
  };

  const loadPets = async () => {
    setLoading(true);
    try {
      console.log("Attempting to fetch pets from backend...");
      const response = await axios.get(
        "http://localhost:8000/api/pet/getAllPets"
      );
      console.log("Response received:", response);
      const fetchedPets = response.data;
      if (Array.isArray(fetchedPets)) {
        const petCollection = fetchedPets.filter((pet) =>
          ["air", "fire", "water", "earth"].includes(pet.affinity.toLowerCase())
        );
        setPets(petCollection);
      } else {
        throw new Error("Data fetched is not an array");
      }
    } catch (error) {
      console.error("Failed to fetch pets:", error);
      setLoadingError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onEditPet = (pet) => {
    setPet(pet);
    navigate("/edit", { state: { from: "/pets" } });
  };

  const onDeletePet = async (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this pet? This action is permanent and cannot be undone."
    );
    if (!confirmDelete) {
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:8000/api/pet/delete/${_id}`
      );
      if (response.status === 200) {
        loadPets(); // Refresh the list after deletion
      } else {
        throw new Error(`Failed to delete pet with ID ${_id}`);
      }
    } catch (error) {
      console.error("Deletion error:", error);
    }
  };

  useEffect(() => {
    loadPets();
  }, []);

  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">All Your Pets</span>
        <h2 className="heading-secondary">Pet Page</h2>
      </div>
      <h2>Your Creations</h2>
      <p>This page holds all of your created pets for you to observe</p>
      <button onClick={navigateToAddPet} title="Add a pet to your collection">
        <IoMdAddCircle />
        <span>ADD PET</span>
      </button>
      {loading && <p>Loading...</p>}
      {loadingError && <p>Error loading pets: {loadingError}</p>}
      {!loading && !loadingError && (
        <PetList pets={pets} onEdit={onEditPet} onDelete={onDeletePet} />
      )}
    </section>
  );
}

export default PetsPage;
