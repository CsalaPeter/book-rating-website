import { Request, Response } from "express";
import { getCategories } from "../services/category.service.js";

export async function getAllCategories(_request: Request, response: Response) {
  try {
    const categories = await getCategories();
    response.status(200).json(categories);
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
}
