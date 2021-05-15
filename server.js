const express = require('express');
// const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// routes for apis
require('./develop/routes/apiRoutes.js')(app);
require('./develop/routes/htmlRoutes.js')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});