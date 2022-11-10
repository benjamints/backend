const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

const userRouter = require("./api/v1/routers/user.router");

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(userRouter);

app.get("/", (req, res, next) => {
  res.json({
    status: "OK",
    message: "This is index of api",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
