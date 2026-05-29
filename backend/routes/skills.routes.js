import { Router } from "express";
import { createSkills, deleteSkills, getAllSkills, getSkillsById, getSkillsByThemeId, updateSkills } from "../controllers/skills.controller.js";

const router = Router();

router.get("/", getAllSkills);
router.get("/:id", getSkillsById);
router.get("/theme/:id", getSkillsByThemeId);
router.post("/", createSkills);
router.patch("/:id", updateSkills);
router.delete("/:id", deleteSkills);

export default router;