import ProtectedRoute from './routes/ProtectedRoute';
import { Route } from 'react-router-dom';
import AdminPage from './components/Adminpage';
import App from './App';
<Route
    path="/admin"
    element={
        <ProtectedRoute permission="editItems">
            <AdminPage />
        </ProtectedRoute>
    }
/>
export default App;