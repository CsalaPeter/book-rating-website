import { Router } from "express";
import { getAllCategories } from "../handlers/category.handler.js";

const categoryRouter = Router();

categoryRouter.get("/categories", getAllCategories);

export default categoryRouter;
