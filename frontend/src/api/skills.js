import { API_URL } from "./api.js";

export async function getSkills() {
  const response = await fetch(`${API_URL}/skills`);
  return response.json();
}

export async function getSkillsByThemeId(id) {
  const response = await fetch(`${API_URL}/skills/theme/${id}`);
  return response.json();
}

export async function deleteSkills(id) {
    const response = await fetch(`${API_URL}/skills/${id}`, {
        method: "DELETE"
    });
    return response.json();
}

export async function createSkills(description, theme_id) {
    const response = await fetch(`${API_URL}/skills`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ description, theme_id })
    });

    return response.json();
}

export async function updateSkills(id, { validated }) {
  const response = await fetch(`${API_URL}/skills/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ validated })
  });

  return response.json();
}