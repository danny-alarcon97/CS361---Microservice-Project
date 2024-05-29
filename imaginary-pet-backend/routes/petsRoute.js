// import express from "express";
// import {
//   fetch,
//   fetchPet, // Import the controller function for fetching a single pet by ID
//   create,
//   update,
//   deletePet,
// } from "../controller/petsController.js";

// const route = express.Router();

// route.post("/create", create);
// route.get("/getAllPets", fetch);
// route.get("/:id", fetchPet); // Add this route to fetch a specific pet by ID
// route.put("/update/:id", update);
// route.delete("/delete/:id", deletePet);

// export default route;

import express from "express";
import {
  fetch,
  fetchPet,
  create,
  update,
  deletePet,
} from "../controller/petsController.js"; // Ensure this path is correct

const router = express.Router();

// Route to create a new pet
router.post("/create", create);

// Route to get all pets
router.get("/getAllPets", fetch);

// Route to get a specific pet by ID
router.get("/:id", fetchPet);

// Route to update a specific pet by ID
router.put("/update/:id", update);

// Route to delete a specific pet by ID
router.delete("/delete/:id", deletePet);

export default router;
