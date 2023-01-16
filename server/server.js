const express = require('express');
// const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const stockRoutes = require("./routes/stockRoutes");
var cors = require("cors");
const app = express();
const port = 5000;

const PORT = process.env.PORT || 5000;

require("dotenv").config();
// connectDB();

// app.use(express.json());

app.use(express.static("./public"));
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: "https://stock-flipr.vercel.app/",
    credentials: true,
  })
);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('api running!');
});

app.use('/api/user',userRoutes)


app.use("/api/v1/stocks", stockRoutes);
// app.use("/api/v1/stocks/add", stockRoutes);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();


// app.listen(5000, () => {console.log("server started on port 5000");});

// const express = require("express");
// const bodyParser = require("body-parser");


// const userRoutes = require("./routes/userRoutes");

// // const authenticateUser = require("./middleware/authentication");
// const port = 5000;
// const connectDB = require('./config/db');
// require("dotenv").config();



// app.use((req, res, next) => {
//   // setting up headers
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
//   );
//   next();
// });
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // var jsonParser = bodyParser.json();


