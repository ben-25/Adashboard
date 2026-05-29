import { useStore } from "../store/store.js";
import { useEffect, useState } from "react";

export function Test() {
  const themes = useStore((state) => state.themes);
  const fetchThemes = useStore((state) => state.fetchThemes);

  const skills = useStore((state) => state.skills);
  const fetchSkills = useStore((state) => state.fetchSkills)

  useEffect(() => {
    fetchThemes();
    fetchSkills();
  }, []);

  const [value, setValue] = useState("");


  const addThemes = useStore((state) => state.addThemes);
  const changeThemes = useStore((state) => state.patchThemes);

  return (
    <>
      <input type="text" placeholder="Nouveau theme" value={value} onChange={(e) => {setValue(e.target.value)}}/>
      <button onClick={() => addThemes(value)}>Enregistrer</button>
      <ul>
        {themes.map((t) => (
          <li key={t.id}>{t.name}<button onClick={() => changeThemes(t.id, value)}>Change</button></li>
        ))}
      </ul>
    </>
  );
}
