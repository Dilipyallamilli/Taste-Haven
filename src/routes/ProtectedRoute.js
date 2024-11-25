import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { checkPermission } from '../utils/roles';

const ProtectedRoute = ({ children, permission }) => {
    const { userRole } = useAuth();

    if (!checkPermission(userRole, permission)) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default ProtectedRoute;
