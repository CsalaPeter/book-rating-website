import express from "express";
import categoryRouter from "./routes/category.routes.js";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/categories", categoryRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
