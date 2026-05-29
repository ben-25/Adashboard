import './buttonAdd.css'
import { useState } from "react";
import { useStore } from "../../store/store";

export function ButtonAdd({ theme_id }) {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const createSkill = useStore((state) => state.createSkill);

  const handleAdd = async () => {
    if (!description.trim()) return;
    await createSkill(description, theme_id);
    setDescription("");
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>✚</button>

      {open && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Ajouter une compétence</h3>

            <input
              className='input-text'
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="modal-buttons">
              <button onClick={handleAdd}>Ajouter</button>
              <button onClick={() => setOpen(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}