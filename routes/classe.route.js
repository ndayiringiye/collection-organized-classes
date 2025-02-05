import express from "express";
import { createClasse } from "../controllers/controller.classe.js";

const router = express.Router();

router.post("/", createClasse)

export default router