const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));
require("dotenv").config();
const port = 3000;

app.use(express.static("public"));
const postData = require("./public/js/sendToExcel.js");
const validateExcelData = require("./public/js/validations.js");
const statusCodes = require("./public/js/statuscodes.js");
const Swal = require("sweetalert2");
const displayAlert = require("./public/js/alerts.js");

app.get("/", (req, res) => {
  // const validationFailed = req.query.validationFailed === 'true';
  res.render('index');
});


app.get("/about-us", (req, res) => {
  res.render("about-us");
});

app.get("/contact", (req, res) => {
  res.render('contact');
});

app.get("/team", (req, res) => {
  res.render("team");

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/storeData", (req, res) => {
  console.log(req.body);
  const validationStatus = validateExcelData(req.body);
  console.log(validationStatus.code);
  if (validationStatus.code === statusCodes.STATUS_SUCCESS.code) {
    postData(req.body, req.body.submit);
    console.log("Mahesh Babu")
    const backing = req.get("referer")
    res.redirect(`${backing}?validation=${validationStatus.code}&title=${validationStatus.title}&message=${validationStatus.message}&formId=${req.body.formId}`);
  } else {
    console.log("Hello hunny bunny")  
    const backing = req.get("referer")
    res.redirect(`${backing}?validation=${validationStatus.code}&title=${validationStatus.title}&message=${validationStatus.message}&formId=${req.body.formId}`);
  }
});
