const express = require("express");
const db = require("./config/db");
const cors = require('cors')

const app = express();

const PORT = 3005;

app.use(cors());
app.use(express.json())

app.use("/api",require("./routes/employeeRoutes"))
app.use("/api",require("./routes/transactionRoute"))


app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
