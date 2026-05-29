import { useStore } from "../../store/store.js";

export function ButtonDelete({ skill_id }) {
  const deleteSkill = useStore((state) => state.deleteSkill);

  const handleClick = () => {
    deleteSkill(skill_id);
  };

  return <button onClick={handleClick}>✕</button>;
}
