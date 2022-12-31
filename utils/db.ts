export async function logOut() {

    const supabase = useSupabaseClient();

    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    } catch (error) {
        throw error;
    }
}