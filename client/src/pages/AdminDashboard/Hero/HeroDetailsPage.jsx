import React, {useEffect} from 'react';
import AdminLayout from "../../../layout/adminLayout/AdminLayout.jsx";
import HeroDetails from "../../../components/AdminDashboard/HeroDetails.jsx";
import HeroStore from "../../../stores/HeroStore.js";

const HeroDetailsPage = () => {

    const { heroDetails, heroDetailsRequest } = HeroStore();

    useEffect(() => {
        (async () => {
            await heroDetailsRequest;
        })()
    }, []);

    console.log(heroDetails);

    return (
        <AdminLayout>
            <HeroDetails/>
        </AdminLayout>
    );
};

export default HeroDetailsPage;