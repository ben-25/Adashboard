import { Router } from "express";
import { createThemes, deleteThemes, getAllThemes, getThemesById, updateThemes } from "../controllers/themes.controller.js";

const router = Router();

router.get("/", getAllThemes);
router.get("/:id", getThemesById);
router.post("/", createThemes);
router.patch("/:id", updateThemes);
router.delete("/:id", deleteThemes);

export default router;