import './skillsList.css'
import { useStore } from "../../store/store.js";
import { ButtonDelete } from "../ButtonDelete/buttonDelete.jsx";
import { ButtonAdd } from "../ButtonAdd/buttonAdd.jsx";

export function SkillsList({ theme_id }) {
    const updateSkill = useStore((state) => state.updateSkill);

    const allSkills = useStore((s) => s.skills);
    const skills = allSkills.filter((sk) => sk.theme_id === theme_id);

    return (
        <div>
            {skills.map(skill => 
                <div key={skill.id} className='skillsList'>
                    <p>{skill.description}</p>
                    <input className="check" type="checkbox" name="valide" checked={skill.validated} onChange={(e) => updateSkill(skill.id, { validated: e.target.checked })}/>
                    <ButtonDelete skill_id={skill.id} />
                </div>
            )}
            <ButtonAdd theme_id={theme_id}/>
        </div>
    );
}
