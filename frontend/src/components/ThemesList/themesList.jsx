import './themesList.css'
import { useState, useEffect } from "react";
import { SkillsList } from "../SkillsList/skillsList.jsx";
import { useStore } from '../../store/store.js';
import { ButtonDeleteTheme } from '../ButtonDeleteTheme/ButtonDeleteTheme.jsx';

export function ThemesList({ id, name }) {
    const [open, setOpen] = useState(false);

    const allSkills = useStore((s) => s.skills);
    const skills = allSkills.filter((sk) => sk.theme_id === id);

    const [valueProgress, setValueProgress] = useState(0);
    const [maxProgress, setMaxProgress] = useState(0);
    const [pourcentage, setPourcentage] = useState(0);

    useEffect(() => {
        const max = skills.length;
        const validated = skills.filter((sk) => sk.validated).length;
        const percent = max > 0 ? Math.round((validated / max) * 100) : 0;

        setMaxProgress(max);
        setValueProgress(validated);
        setPourcentage(percent);
    }, [skills]);

    return (
        <div className="themes">
            <div>
                <h2>{name}</h2>
                <div className='button-container'>
                    <ButtonDeleteTheme theme_id={id} />
                    <button onClick={() => setOpen(!open)}>
                        {open ? "↑" : "↓"}
                    </button>
                </div>
            </div>

            <div className='ProgressBar'>
                <span>{pourcentage}%</span>
                <progress value={valueProgress} max={maxProgress}></progress>
            </div>

            {open && <SkillsList theme_id={id} />}
        </div>
    );
}
