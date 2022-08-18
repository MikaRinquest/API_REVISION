const express = require("express"); //Express converts the language in js to communicate with the mysql database
const cors = require("cors"); //Allows us to communicate with the API
const app = express(); //Converts whatever uses the constant app to whatever language is required to communicate with mysql

app.set("port", process.env.PORT || 3000); //States how to access the api
app.use(express.json()); //States that express should convert the language to json
app.use(cors()); //Makes sure cors is being used

// User route
// const userRoute  = require("./")
// app.use("/", userRoute);

app.get("/", (req, res) => {
  res.json({ Welcome: "TO CCG" });
});

app.listen(app.get("port"), (req, res) => {
  console.log("Server is working.");
});
