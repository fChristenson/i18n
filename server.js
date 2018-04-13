const { app, admin } = require("./src");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

app.listen(3000);

admin.listen(3001);
