import axios from "axios";
import { create } from "zustand";

const ContactStore = create((set) => ({
    contactList: null,
    contactListFormRequest: async (postBody) => {
        try {
            const res = await axios.post(`https://www.waagv.com/api/v1/SendMessage`, postBody);
            if (res.data.status === "success") {
                set({ contactList: res.data.data });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            throw error;
        }
    },
}));

export default ContactStore;
