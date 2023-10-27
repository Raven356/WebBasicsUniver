import { Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage.jsx'
import InfoPage from './components/infoPage.jsx'
import RegisterPage from './components/registerComponent.jsx'
import AdminPage from './components/adminPage.jsx';
import ChangePasswordPage from './components/changePasswordPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
    return (
        <div className="Container" >
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/change" element={<ChangePasswordPage /> } />
            </Routes>
        </div>
    );
}
