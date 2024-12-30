import {getSession} from "@/lib/data";
import supabase from "@/lib/supabaseClient";

export const fetchLatestInvoices = async () => {
    try {
        const userDetails = getSession();
        if (!userDetails) return [];

        const { data, error } = await supabase
            .from("invoices")
            .select()
            .eq("user_id", userDetails.session.user.id)
            .order("created_at", { ascending: false })
            .range(0, 4);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error fetching invoices:", error);
        return [];
    }
};