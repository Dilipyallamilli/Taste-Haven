import React from 'react';
import { useAuth } from '../context/AuthContext';
import { checkPermission } from '../utils/roles';

const AdminPage = () => {
    const { userRole } = useAuth();

    // Check if the user has the required permission
    if (!checkPermission(userRole, 'editItems')) {
        return <h1>Access Denied: You do not have permission to view this page.</h1>;
    }

    return (
        <div>
            <h1>Admin Page</h1>
            <p>Welcome, Admin! Here you can manage your application.</p>
            <ul>
                <li><a href="/manage-users">Manage Users</a></li>
                <li><a href="/view-reports">View Reports</a></li>
                <li><a href="/edit-content">Edit Content</a></li>
            </ul>
        </div>
    );
};

export default AdminPage;
