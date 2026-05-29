import { useState } from "react";
import { useStore } from "../../store/store.js";
import "./buttonAddTheme.css";

export function ButtonAddTheme() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");

    const createTheme = useStore((state) => state.createTheme);

    const handleAdd = async () => {
        if (!name.trim()) return;

        await createTheme(name);
        setName("");
        setOpen(false);
    };

    return (
        <>
            <button className="ButtonAdd" onClick={() => setOpen(true)}>Add Theme</button>

            {open && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Ajouter un thème</h3>

                        <input
                            type="text"
                            placeholder="Nom du thème"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <div className="modal-buttons">
                            <button onClick={handleAdd} type="button">Ajouter</button>
                            <button onClick={() => setOpen(false)}>Annuler</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
