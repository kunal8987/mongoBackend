const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { employeeRoutes } = require("./routes/employee.routes");
const { authenticate } = require("./middleware/auth.middleware");
const cors = require("cors");
let app = express();
app.use(express.json());
require("dotenv").config();
app.use(cors());
app.use("/users", userRouter);

app.use(authenticate);
app.use("/employees", employeeRoutes);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log(`server listening on port ${process.env.PORT} `);
});
