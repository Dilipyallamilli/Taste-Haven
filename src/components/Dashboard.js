import React from 'react';
import { useAuth } from '../context/AuthContext';
import { checkPermission } from '../utils/roles';

const Dashboard = () => {
    const { userRole } = useAuth();

    if (!checkPermission(userRole, 'viewDashboard')) {
        return <h1>Access Denied</h1>;
    }

    return <h1>Welcome to the Dashboard!</h1>;
};

export default Dashboard;
