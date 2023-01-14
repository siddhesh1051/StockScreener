const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
// const seats = require("./routes/seats");
// const book = require("./routes/booking");
// const trains = require("./routes/trains");
// const users = require("./routes/authRoutes");
const stockRoutes = require("./routes/stockRoutes");
const userRoutes = require("./routes/userRoutes");

// const authenticateUser = require("./middleware/authentication");
const port = 5000;
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.static("./public"));
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   // setting up headers
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
//   );
//   next();
// });
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// var jsonParser = bodyParser.json();

app.use("/api/v1/stocks", stockRoutes);
app.use("/api/v1/stocks/add", stockRoutes);
app.use("/api/v1/", userRoutes);
app.use("/api/v1/login", userRoutes);

// app.use("api/v1/trains/specific/:id", authenticateUser, trains);
///
// app.use("/api/v1/bookings/specific", authenticateUser, book);

// app.use(authenticateUser);
// app.use("/api/v1/trains/specific", trains);
// app.use("/api/v1/trains/specific", authenticateUser, trains);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
