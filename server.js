const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
const cors = require("cors");
const app = express();

app.use(express.json());

mongoose.connect(
    "mongodb+srv://ue215014ankitpandeyece:Ankit123@cluster0.sgb7pvw.mongodb.net/pendler",
// `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const corsOptions = {
  origin: "http://127.0.0.1:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use("/api/v1",Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});