import express from "express";
import { createClasse, getAllClasse } from "../controllers/controller.classe.js";

const router = express.Router();

router.post("/", createClasse);
router.get("/", getAllClasse);

export default router