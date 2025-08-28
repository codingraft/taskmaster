import { Team } from "../models/team.model.js";

export const createTeam = async (req, res) => {
  const { name, members } = req.body;
  const team = await Team.create({ name, members, createdBy: req.user.id });
  res.status(201).json(team);
};

export const joinTeam = async (req, res) => {
  const team = await Team.findById(req.params.id);
  if (!team) return res.status(404).json({ message: "Team not found" });
  if (!team.members.includes(req.user.id)) {
    team.members.push(req.user.id);
    await team.save();
  }
  res.json(team);
};
