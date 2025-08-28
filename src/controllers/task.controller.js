import {Task} from "../models/task.model.js";

export const createTask = async (req, res) => {
  const { title, description, dueDate, assignee, team } = req.body;
  try {
    const task = await Task.create({
      title,
      description,
      dueDate,
      assignee,
      team,
      createdBy: req.user.id,
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: "Task creation failed" });
  }
};

export const getMyTasks = async (req, res) => {
  const tasks = await Task.find({ assignee: req.user.id });
  res.json(tasks);
};

export const updateTaskStatus = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task && task.assignee.toString() === req.user.id) {
    task.status = req.body.status;
    await task.save();
    res.json(task);
  } else {
    res.status(403).json({ message: "Not authorized to update task" });
  }
};

export const addComment = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  task.comments.push({ user: req.user.id, text: req.body.text });
  await task.save();
  res.json(task.comments);
};

export const uploadAttachment = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  if (req.file) {
    task.attachments.push(req.file.filename);
    await task.save();
    res.json({ filename: req.file.filename });
  } else {
    res.status(400).json({ message: "No file uploaded" });
  }
};
