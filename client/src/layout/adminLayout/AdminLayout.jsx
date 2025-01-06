import React from 'react';
import AdminNavBar from "./AdminNavBar.jsx";
import AdminSidebar from "./AdminSidebar.jsx";

const AdminLayout = (props) => {
    return (
        <>
            <AdminNavBar/>
            {props.children}
        </>
    );
};

export default AdminLayout;