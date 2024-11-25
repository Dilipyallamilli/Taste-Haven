export const roles = {
    admin: ['viewDashboard', 'editItems', 'deleteItems'],
    editor: ['viewDashboard', 'editItems'],
    user: ['viewDashboard'],
};

export const checkPermission = (role, permission) => {
    return roles[role]?.includes(permission);
};
