const API_URL = "https://backend.training-react.development.zerf.tech/recipes";

export async function getAllRecipies() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getRecipieById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
