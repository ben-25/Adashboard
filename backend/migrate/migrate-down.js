import { pool } from "../db/client.js";
import fs from "fs";

async function migrateDown() {
    try {
        const sql = fs.readFileSync("./migrations/down.sql").toString();
        await pool.query(sql);
        console.log("Migration DOWN exécutée");
    } catch (err) {
        console.error("Erreur migration DOWN :", err);
    } finally {
        pool.end();
    }
}

migrateDown();
