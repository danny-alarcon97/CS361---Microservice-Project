// PetInformation.js
import React from "react";
import { Paper, Typography } from "@mui/material";

const PetInformation = ({ pet }) => {
  return (
    <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
      <Typography variant="h5">Pet Information</Typography>
      <Typography>Name: {pet.name}</Typography>
      <Typography>Species: {pet.species}</Typography>
      <Typography>Strength: {pet.strength}</Typography>
      <Typography>Speed: {pet.speed}</Typography>
      <Typography>Intelligence: {pet.intelligence}</Typography>
      <Typography>Dexterity: {pet.dexterity}</Typography>
    </Paper>
  );
};

export default PetInformation;
