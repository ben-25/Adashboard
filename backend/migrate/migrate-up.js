import { pool } from "../db/client.js";
import fs from "fs";

async function migrateUp() {
    try {
        const sql = fs.readFileSync("./migrations/up.sql").toString();
        await pool.query(sql);
        console.log("Migration UP exécutée");
    } catch (err) {
        console.error("Erreur migration UP :", err);
    } finally {
        pool.end();
    }
}

migrateUp();