import supabase from "./supabaseClient";

export const getSession = () => {
  const session = sessionStorage.getItem("token");
  if (session) {
    return JSON.parse(session);
  }
  return null;
};

export const fetchInvoices = async () => {
  try {
    const userDetails = getSession();
    if (!userDetails) return [];

    const { data, error } = await supabase
      .from("invoices")
      .select(
        `
          id,
          user_id,
          customerName,
          customerEmail,
          invoicePurpose,
          invoiceAmount,
          invoiceStatus,
          slug,
          created_at
        `
      )
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

