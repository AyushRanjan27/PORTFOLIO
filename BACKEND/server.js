const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// In-memory buffer to store inquiries if MongoDB is offline
const inquiryBuffer = [];
let isDbConnected = false;

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";
console.log(`Attempting to connect to MongoDB at: ${MONGODB_URI.replace(/:([^:@]+)@/, ':****@')}`);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connection established successfully.");
    isDbConnected = true;
  })
  .catch((err) => {
    console.error("MongoDB connection failed. Falling back to local in-memory logging.");
    console.error(err.message);
    isDbConnected = false;
  });

// Define Mongoose Schema & Model for Contact Inquiries
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);

// Home route
app.get("/", (req, res) => {
  res.send({
    status: "running",
    database: isDbConnected ? "connected" : "offline_fallback",
    message: "Ayush Ranjan Portfolio API is online"
  });
});

// GET route to inspect buffer or database (for debugging / verification)
app.get("/api/contact/messages", async (req, res) => {
  try {
    if (isDbConnected) {
      const messages = await Contact.find().sort({ createdAt: -1 });
      return res.send({ source: "database", count: messages.length, messages });
    } else {
      return res.send({ source: "memory_buffer", count: inquiryBuffer.length, messages: inquiryBuffer });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// POST route to handle form submission
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send({ error: "All fields are required: name, email, subject, message" });
  }

  const newInquiry = { name, email, subject, message, createdAt: new Date() };

  if (isDbConnected) {
    try {
      const contactRecord = new Contact(newInquiry);
      await contactRecord.save();
      console.log(`Inquiry saved to MongoDB from: ${email}`);
      return res.status(201).send({ success: true, source: "database", message: "Inquiry saved to database successfully!" });
    } catch (err) {
      console.error("Failed to save to MongoDB, buffering in memory:", err.message);
    }
  }

  // Fallback to local memory array and console logging
  inquiryBuffer.push(newInquiry);
  console.log("---- Recruiter Message Received (Memory Fallback Mode) ----");
  console.log(`From: ${name} (${email})`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log("---------------------------------------------------------");

  return res.status(201).send({
    success: true,
    source: "memory_buffer",
    message: "Inquiry buffered in memory successfully (database fallback active)!"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});