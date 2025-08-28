import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });

export const Team = mongoose.model("Team", teamSchema);
