import Pet from "../model/petsModel.js";

export const create = async (req, res) => {
  try {
    const petData = new Pet(req.body);
    const { name } = petData;

    const petExist = await Pet.findOne({ name });
    if (petExist) {
      return res
        .status(400)
        .json({ message: "Pet with that name already exists!" });
    }
    const savedPet = await petData.save();
    res.status(200).json(savedPet);
  } catch (error) {
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
    res.status(500).json({ error: "Internal Server error." });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const petExist = await Pet.findOne({ _id: id });
    if (!petExist) {
      res.status(404).json({ message: "This pet was not found" });
    }
    const updatePet = await Pet.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(updatePet);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error." });
  }
};

export const deletePet = async (req, res) => {
  try {
    const id = req.params.id;
    const petExist = await Pet.findOne({ _id: id });
    if (!petExist) {
      res.status(404).json({ message: "This pet was not found" });
    }

    await Pet.findByIdAndDelete(id);
    res.status(201).json({ message: "Pet Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server error." });
  }
};
