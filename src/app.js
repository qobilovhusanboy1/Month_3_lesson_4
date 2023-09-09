const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use("/", routes);

app.listen(4000, () => {
    console.log(4000);
});