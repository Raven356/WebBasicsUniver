import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import blueAbstractio from "../assets/blue_abstractio_0.png";

export default function ChangePasswordPage() {
    const navigateTo = useNavigate();
    const [formData, setFormData] = useState({
        login: '',
        password: '',
        newPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            console.log(formData);
            await axios.put('/Auth/update-password', formData);
            setFormData({
                login: '',
                password: '',
                newPassword: '',
            });
            navigateTo('/');
        }
        catch (ex) {
            alert('Something went wrong!');
        }
    }

    return (
        <div className="ChangePasswordPage d-flex justify-content-center align-items-center vh-100" style={{
            backgroundImage: `url(${blueAbstractio})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'
        }}>
            <div className="p-4 rounded bg-blur" style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)"
            }}>
                <h2 className="text-center mb-4">Change Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label>Login:</label>
                        <input
                            type="text"
                            name="login"
                            value={formData.login}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Current Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>New Password:</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary d-block mx-auto mb-3">Change Password</button>
                </form>
            </div>
        </div>
    );

}
