const mongoose = require("mongoose");

require("dotenv").config();

exports.dbconnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("db Connection Succesfull"))
    .catch((error) => {
      console.log("DB connection issue");
      console.error(error);
      process.exit(1);
    });
};
