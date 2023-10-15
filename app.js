const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


app.use(bodyParser.json());


mongoose.connect("<YOUR_MONGODB_URI>", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const authRoutes = require("./routes/authRoutes");
const worksRoutes = require("./routes/worksRoutes");
const passwordResetRoutes = require("./routes/passwordResetRoutes"); // Optional


app.use("/auth", authRoutes);
app.use("/works", worksRoutes);
app.use("/password-reset", passwordResetRoutes); // Optional

const secretKey = process.env.JWT_SECRET_KEY;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
