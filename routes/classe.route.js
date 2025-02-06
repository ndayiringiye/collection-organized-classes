import express from "express";
import { createClasse, getAllClasse, getSingle } from "../controllers/controller.classe.js";

const router = express.Router();

router.post("/", createClasse);
router.get("/", getAllClasse);
router.get("/:id", getSingle);

export default router;