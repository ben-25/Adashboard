import './App.css'
import { useEffect } from "react";
import { useStore } from "./store/store.js";
import { ThemesList } from "./components/ThemesList/themesList.jsx";
import { ButtonAddTheme } from './components/buttonAddTheme/ButtonAddTheme.jsx';

function App() {
  const themes = useStore((state) => state.themes);
  const fetchThemes = useStore((state) => state.fetchThemes);

  const fetchSkills = useStore((state) => state.fetchSkills)
  useEffect(() => {
      fetchSkills();
  }, []);

  useEffect(() => {
    fetchThemes();
  }, []);

  return (
    <main>
      <h1>Adashboard</h1>
      <ButtonAddTheme />
      {themes.map((t) => (
        <ThemesList key={t.id} id={t.id} name={t.name} />
      ))}
    </main>
  );
}

export default App;
