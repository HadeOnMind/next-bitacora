export const API_URL = "http://localhost:5000/api";

export async function getSketchbooks() {
  const res = await fetch(`${API_URL}/sketchbooks`);
  return res.json();
}

export async function createSketchbook(title: string, description: string) {
  const res = await fetch(`${API_URL}/sketchbooks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });
  return res.json();
}