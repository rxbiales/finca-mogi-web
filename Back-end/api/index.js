async function getAllEvents() {
    const { data, error } = await supabase
        .from('events')
        .select('*');

    if (error) {
        console.error('Error al obtener eventos:', error.message);
        return;
    }

    return data
}
