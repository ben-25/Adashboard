import { useStore } from "../../store/store.js";

export function ButtonDeleteTheme({ theme_id }){
    const deleteTheme = useStore((state) => state.deleteThemes);

    const handleClick = () => {
        deleteTheme(theme_id);
    };

    return (
        <button onClick={handleClick}>Delete Theme</button>
    )
}