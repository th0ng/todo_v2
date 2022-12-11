const baseUrl = "http://localhost:5000/api/v1/tasks";

const getAll = async () => {
  const response = await fetch(baseUrl);
  return await response.json();
}

const getItemById = async ({id}) => {
  const response = await fetch(`${baseUrl}+ "/" + ${id}`);
  return await response.json();
}

export default { getAll, getItemById };