import { create } from "zustand";
import { createThemes, deleteThemes, getThemes } from "../api/themes.js";
import { getSkills, getSkillsByThemeId, deleteSkills, createSkills, updateSkills } from "../api/skills.js";

export const useStore = create((set, get) => ({
    themes: [],
    skills: [],

    fetchThemes: async () => {
        const data = await getThemes();
        set({ themes: data });
    },

    createTheme: async (name) => {
        const newTheme = await createThemes(name);
        set((state) => ({
            themes: [...state.themes, newTheme]
        }));
    },

    deleteThemes: async (id) => {
        await deleteThemes(id);
        set((state) => ({
            themes: state.themes.filter((s) => s.id !== id)
        }));
    },

    fetchSkills: async () => {
        const data = await getSkills();
        set({ skills: data });
    },

    fetchSkillsById: async (id) => {
        const data = await getSkillsByThemeId(id);
        return data;
    },

    deleteSkill: async (id) => {
        await deleteSkills(id);
        set((state) => ({
            skills: state.skills.filter((s) => s.id !== id)
        }));
        const test = get().skills;
        console.log(test);
    },

    createSkill: async (description, theme_id) => {
        const newSkill = await createSkills(description, theme_id);
        set((state) => ({
            skills: [...state.skills, newSkill]
        }));
    },

    updateSkill: async (id, data) => {
        const updated = await updateSkills(id, data);

        set((state) => ({
            skills: state.skills.map((s) =>
                s.id === id ? { ...s, ...updated } : s
            )
        }));
    }

}));