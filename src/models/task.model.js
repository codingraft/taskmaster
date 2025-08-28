import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: String,
  },
  { timestamps: true }
);

const taskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    dueDate: Date, 
    status: {
      type: String,
      enum: ["open", "in progress", "completed"],
      default: "open",
    },
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
    comments: [commentSchema],
    attachments: [String],
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", taskSchema);
