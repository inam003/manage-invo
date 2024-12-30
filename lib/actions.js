import toast from "react-hot-toast";
import supabase from "./supabaseClient";

// export const getUserSession = async () => {
//   try {
//     const {
//       data: { session },
//       error,
//     } = await supabase.auth.getSession();
//     if (error) throw error;
//     return session?.user?.id;
//   } catch (error) {
//     console.error("Session error:", error);
//     return null;
//   }
// };

// export const createInvoice = async (invoiceData) => {
//   try {
//     const { error } = await supabase.from("invoices").insert({
//       user_id: invoiceData.userId,
//       slug: invoiceData.slug,
//       created_at: new Date(),
//       customerName: invoiceData.customerName,
//       invoicePurpose: invoiceData.invoicePurpose,
//       customerEmail: invoiceData.customerEmail,
//       invoiceAmount: invoiceData.invoiceAmount,
//       invoiceStatus: invoiceData.invoiceStatus,
//     });

//     if (error) throw error;
//     return { success: true };
//   } catch (error) {
//     console.error("Create invoice error:", error);
//     return { success: false, error: error.message };
//   }
// };

export const deleteInvoice = async (id) => {
  try {
    const response = await supabase.from("invoices").delete().eq("id", id);

    toast.success("Invoice deleted successfully");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
