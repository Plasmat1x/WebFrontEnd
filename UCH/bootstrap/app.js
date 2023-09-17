const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter.js");
const homeRouter = require("./routers/homeRouter.js");

app.set("View engine", "hbs");
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/", homeRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not found");
});

app.listen(3000, () => console.log("Server started and waiting connection..."));