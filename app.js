const express = require ('express');
const mongoose = require('mongoose');
const dotnev = require('dotenv').config()

const pageRoute = require('./routes/pageRoute');
const courseRoute = require ('./routes/courseRoute');

const app = express();

//Connect DB
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('DB çalıştı');
    })
    .catch((err) => {
      console.error('DB Connection Error:', err);
    });



//template engine
app.set("view engine","ejs");
//middlewares
app.use(express.static("public"));
app.use(express.json()); // JSON verilerini işlemek için
app.use(express.urlencoded({ extended: true })); // URL-encoded verileri işlemek için


//routes
app.use('/',pageRoute);
app.use('/courses', courseRoute);

const port =3000;
app.listen(port, ()=>{
  console.log(`App started on port ${port}`)
});