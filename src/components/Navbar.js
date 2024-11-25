import React from 'react';
import { useAuth } from '../context/AuthContext';
import { checkPermission } from '../utils/roles';

const Navbar = () => {
    const { userRole } = useAuth();

    return (
        <nav>
            <a href="/">Home</a>
            {checkPermission(userRole, 'editItems') && <a href="/admin">Admin</a>}
        </nav>
    );
};

export default Navbar;
