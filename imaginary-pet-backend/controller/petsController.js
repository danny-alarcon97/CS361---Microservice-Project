// import Pet from "../model/petsModel.js";

// export const create = async (req, res) => {
//   try {
//     const petData = new Pet(req.body);
//     const { name } = petData;

//     const petExist = await Pet.findOne({ name });
//     if (petExist) {
//       return res
//         .status(400)
//         .json({ message: "Pet with that name already exists!" });
//     }
//     const savedPet = await petData.save();
//     res.status(200).json(savedPet);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server error." });
//   }
// };

// export const fetch = async (req, res) => {
//   try {
//     const pets = await Pet.find();
//     if (pets.length === 0) {
//       return res.status(404).json({ message: "Pet Not Found" });
//     }
//     res.status(200).json(pets);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server error." });
//   }
// };

// export const fetchPet = async (req, res) => {
//   try {
//     const pet = await Pet.findById(req.params.id);
//     if (!pet) {
//       return res.status(404).json({ message: "Pet not found" });
//     }
//     res.status(200).json(pet);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server error." });
//   }
// };

// export const update = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const petExist = await Pet.findOne({ _id: id });
//     if (!petExist) {
//       res.status(404).json({ message: "This pet was not found" });
//     }
//     const updatePet = await Pet.findByIdAndUpdate(id, req.body, { new: true });
//     res.status(201).json(updatePet);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server error." });
//   }
// };

// export const deletePet = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const petExist = await Pet.findOne({ _id: id });
//     if (!petExist) {
//       res.status(404).json({ message: "This pet was not found" });
//     }

//     await Pet.findByIdAndDelete(id);
//     res.status(201).json({ message: "Pet Deleted Successfully" });
//   } catch (error) {
//     res.status500().json({ error: "Internal Server error." });
//   }
// };

import Pet from "../model/petsModel.js";
import { fetchImageFromDalle } from "../dalleService.js";

export const create = async (req, res) => {
  try {
    const petData = new Pet(req.body);
    const { name, affinity, appearance } = petData;

    // Check if a pet with the same name already exists
    const petExist = await Pet.findOne({ name });
    if (petExist) {
      return res
        .status(400)
        .json({ message: "Pet with that name already exists!" });
    }

    // Fetch image from DALL-E
    const description = `Pet created of ${affinity} element, ${appearance}`;
    const imageUrl = await fetchImageFromDalle(description);

    // Save the pet to the database with the image URL
    petData.imageUrl = imageUrl;
    const savedPet = await petData.save();

    res.status(200).json(savedPet);
  } catch (error) {
    console.error("Error creating pet:", error);
    res.status(500).json({ error: "Internal Server error." });
  }
};

export const fetch = async (req, res) => {
  try {
    const pets = await Pet.find();
    if (pets.length === 0) {
      return res.status(404).json({ message: "Pet Not Found" });
    }
    res.status(200).json(pets);
  } catch (error) {
    console.error("Error fetching pets:", error);
    res.status(500).json({ error: "Internal Server error." });
  }
};

export const fetchPet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.status(200).json(pet);
  } catch (error) {
    console.error("Error fetching pet:", error);
    res.status(500).json({ error: "Internal Server error." });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const petExist = await Pet.findOne({ _id: id });
    if (!petExist) {
      return res.status(404).json({ message: "This pet was not found" });
    }
    const updatePet = await Pet.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(updatePet);
  } catch (error) {
    console.error("Error updating pet:", error);
    res.status(500).json({ error: "Internal Server error." });
  }
};

export const deletePet = async (req, res) => {
  try {
    const id = req.params.id;
    const petExist = await Pet.findOne({ _id: id });
    if (!petExist) {
      return res.status(404).json({ message: "This pet was not found" });
    }

    await Pet.findByIdAndDelete(id);
    res.status(201).json({ message: "Pet Deleted Successfully" });
  } catch (error) {
    console.error("Error deleting pet:", error);
    res.status(500).json({ error: "Internal Server error." });
  }
};
