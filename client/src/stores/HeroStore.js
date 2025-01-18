import axios from "axios";
import { create } from "zustand";

const HeroStore = create((set) => ({
    heroDetails: null,
    heroDetailsRequest: async () => {
        try {
            const res = await axios.get(`/api/v1/ReadContent/678072bc2830b9662190bc62`, {
                withCredentials: true, // Add this to include cookies
            });
            console.log('Response:', res.data);
        } catch (error) {
            console.error('Error fetching hero details:', error.response?.data || error.message);
        }
    },
}));



export default HeroStore;
