const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectToMongoDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();
connectToMongoDB();
app.use(express.json());

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`App is running on ${PORT} port..`));
