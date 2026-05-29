import { pool } from "../db/client.js";

export async function getAllSkills(req, res){
    try {
        const result = await pool.query("SELECT * FROM skills ORDER BY id");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}

export async function getSkillsById(req, res) {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM skills WHERE id = $1", [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Skills introuvable" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur serveur" })
    }
}

export async function getSkillsByThemeId(req, res) {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM skills WHERE theme_id = $1", [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Skills introuvable" });
        }

        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur serveur" })
    }
}

export async function createSkills(req, res) {
    try {
        const { description, theme_id } = req.body;

        if (!description || typeof description !== "string") {
            return res.status(400).json({ error: "Le champ description est requis (string)" });
        }

        if (!theme_id || isNaN(theme_id)) {
            return res.status(400).json({ error: "theme_id est requis (integer)" });
        }

        const result = await pool.query(
            `INSERT INTO skills (description, theme_id)
             VALUES ($1, $2)
             RETURNING *`,
            [description, theme_id]
        );

        res.status(201).json(result.rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}

export async function updateSkills(req, res) {
    try {
        const { id } = req.params;
        const { description, validated, learning, not_started } = req.body;

        if (description !== undefined && typeof description !== "string") {
            return res.status(400).json({ error: "Le champ description doit etre (string)" });
        }
        if (validated !== undefined && typeof validated !== "boolean") {
            return res.status(400).json({ error: "validated doit être un boolean" });
        }

        const result = await pool.query(
            `UPDATE skills 
                SET description = COALESCE($1, description),
                    validated = COALESCE($2, validated),
                WHERE id = $3
                RETURNING *`,
            [description, validated, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Skill introuvable" });
        }

        res.json(result.rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}


export async function deleteSkills(req, res) {
    try {
        const { id } = req.params;
        const result = await pool.query("DELETE FROM skills WHERE id = $1", [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Skill introuvable" });
        }

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}