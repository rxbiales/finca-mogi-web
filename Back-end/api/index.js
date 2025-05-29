import { supabase } from "../supabase.js";

export async function getAllEvents() {
  const { data, error } = await supabase
    .from('events')
    .select('*');

  if (error) {
    console.log('Error al obtener eventos:', error.message);
    return [];
  } else {
    return data;
  }
}