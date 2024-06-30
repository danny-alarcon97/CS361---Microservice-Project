import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  affinity: { type: String, required: true },
  appearance: { type: String, required: true },
  strength: { type: Number, required: true },
  agility: { type: Number, required: true },
  intelligence: { type: Number, required: true },
  stamina: { type: Number, required: true },
  health: { type: Number, required: true },
  charisma: { type: Number, required: true },
  luck: { type: Number, required: true },
  imageUrl: { type: String }, // line includes the imageUrl field
});

export default mongoose.model("pets", petSchema);
