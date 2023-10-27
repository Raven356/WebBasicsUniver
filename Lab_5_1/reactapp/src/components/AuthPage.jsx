import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import blueAbstractio from "../assets/blue_abstractio.png";

export default function AuthPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigateTo = useNavigate();

    

    async function handleAuthentication(login, password) {
        try {
            console.log(login);
            console.log(password);

            const response = await axios.post('/Auth/check', { login, password });
            console.log(response);

            const info = response.data;
            if (response.status === 200) {
                console.log('success');
                navigateTo('/info', { state: { info, login }});
            }
            else if (response.status === 204) {
                navigateTo('/admin');
            }
            else {
                alert('Authentication failed');
            }
        }
        catch (error) {
            console.error('Server request error:', error);
            alert('Something went wrong');
        }
    }

    const register = () => {
        navigateTo('/register');
    }

    const change = () => {
        navigateTo('/change');
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={{
            backgroundImage: `url(${blueAbstractio})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'
        }}>
            <div className="AuthContainer text-center">
                <form className="container p-4 rounded bg-blur" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        className="form-control mb-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control mb-2"
                    />
                    <button type="button" onClick={() => handleAuthentication(login, password)} className="btn btn-primary mb-2">Authenticate</button>
                    <div className="mb-2">
                        <a href="#" onClick={register} style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} className="mr-2">Register</a>
                    </div>
                    <div className="mb-2">
                        <a href="#" onClick={change} style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>Change password</a>
                    </div>
                </form>
            </div>
        </div>
    ); 
}