import supabase from "./supabaseClient";

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data;
};

export const fetchInvoices = async () => {
  try {
    const userDetails = await getSession();
    if (!userDetails) return [];

    const { data, error } = await supabase
      .from("invoices")
      .select()
      .eq("user_id", userDetails.session.user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return [];
  }
};
