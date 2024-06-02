import express from "express";
import {
  fetch,
  fetchPet, // Import the controller function for fetching a single pet by ID
  create,
  update,
  deletePet,
} from "../controller/petsController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllPets", fetch);
route.get("/:id", fetchPet); // Add this route to fetch a specific pet by ID
route.put("/update/:id", update);
route.delete("/delete/:id", deletePet);

export default route;
