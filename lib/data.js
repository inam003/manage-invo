import supabase from "./supabaseClient";

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  console.log(data);
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
      .order("created_at", { ascending: false })
      .range(0, 5);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return [];
  }
};

export const fetchLatestInvoices = async () => {
  try {
    const uesrSession = await getSession();
    if (!uesrSession) return [];

    const { data, error } = await supabase
      .from("invoices")
      .select()
      .eq("user_id", uesrSession.session.user.id);
    // .order("created_at", { ascending: false })
    // .range(0, 4);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return [];
  }
};
