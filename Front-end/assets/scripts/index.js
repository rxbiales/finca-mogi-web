export default async function useGetAllEvents() {
  try {
    const response = await fetch('http://localhost:3000/api/events');
    if (!response.ok) throw new Error('Error al obtener eventos');
    const eventos = await response.json();
    return eventos;
  } catch (e) {
    console.error(e);
  }
}
