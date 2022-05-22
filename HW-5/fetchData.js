export const fetchData = async (path) => {
    const response = await fetch(path);
    return response.json();
}
