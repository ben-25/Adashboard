import { API_URL } from "./api.js";

export async function getThemes() {
  const response = await fetch(`${API_URL}/themes`);
  return response.json();
}

export async function createThemes(name) {
    const response = await fetch(`${API_URL}/themes`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ name })
    });

    return response.json();
}

export async function patchThemes(id, name) {
    const response = await fetch(`${API_URL}/themes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ name })
    });

    return response.json();
}

export async function deleteThemes(id) {
    const response = await fetch(`${API_URL}/themes/${id}`, {
        method: "DELETE"
    });
    return response.json();
}