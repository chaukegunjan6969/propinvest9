const express = require("express");
const cors = require("cors");



const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

const fileupload = require("express-fileupload");

app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

const dbconnect = require("./config/database");
dbconnect.dbconnect();

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

const upload = require("./route/route");

app.use('/api/v1/upload', upload);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>gunjanis</h1>`);
});
