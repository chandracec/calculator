const express = require('express');
const mongoose = require('mongoose')

const route = require('./routes/route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', route);

mongoose.connect("mongodb+srv://chandrakant91550:85A3tszzv0FScC1w@cluster0.lcv0ktb.mongodb.net/intern?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err.message));

app.listen(process.env.PORT || 3000, function () {
  console.log("running on the port:", 3000);
});
