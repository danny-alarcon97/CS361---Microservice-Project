import express from "express";
import {
  fetch,
  create,
  update,
  deletePet,
} from "../controller/petsController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllPets", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id", deletePet);

export default route;
