const app = require("./app");
require("dotenv").config()

const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
