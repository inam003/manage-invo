import toast from "react-hot-toast";
import supabase from "./supabaseClient";

export const deleteInvoice = async (id) => {
  try {
    const response = await supabase.from("invoices").delete().eq("id", id);

    toast.success("Invoice deleted successfully");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
