import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import blueAbstractio from "../assets/blue_abstractio_0.png";

const ROLES = {
    SUPERADMIN: 0,
    USER: 1,
    ADMIN: 2
}

export default function AdminPage() {
    const [formData, setFormData] = useState({
        login: '',
        newRole: ROLES.USER, // Default role is set to 'user'
        info: '',
    });

    const [logins, setLogins] = useState([]);

    const [userInfo, setUserInfo] = useState();

    const navigateTo = useNavigate();

    const handleLogOut = () => {
        navigateTo('/');
    }

    const getUserLogins = async () => {
        const response = await axios.get('/Auth/get-logins');
        setLogins(response.data);
    }
    useEffect(() => {
        getUserLogins();
    }, []);

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            info: userInfo
        }));
    }, [userInfo]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'newRole' ? parseInt(value, 10) : value
        }));
    }

    const handleLoginChange = async (e) => {
        const { name, value } = e.target;
        if (value === '') {
            setFormData({
                login: '',
                newRole: ROLES.USER,
                info: '',
            });
            return;
        }
        const response = await axios.get('/Auth/get-user-infos/' + value);
        setUserInfo(response.data);
        console.log(response.data);
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setFormData(prevState => ({
            ...prevState,
            newRole: response.data.newRole
        }));
    }

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        setUserInfo(userInfo => ({ ...userInfo, [name]: value }));
        
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.put('/Auth/change-role', formData);
            console.log(formData);
            setFormData({
                login: '',
                newRole: ROLES.USER,
                info: '',
            });
        }
        catch (ex) {
            console.error('Server request error:', ex);
            alert('Something went wrong!');
        }
    }

    const handleDelete = async () => {
        try {
            let data = { login: formData.login };
            await axios.delete('/Auth/delete-user', { data });
            console.log(formData);
            setFormData({
                login: '',
                newRole: ROLES.USER,
                info: '',
            });
            getUserLogins();
        }
        catch (ex) {
            console.error('Server request error:', ex);
        }
    }

    return (
        <div className="AdminPage d-flex justify-content-center align-items-center vh-100" style={{
            backgroundImage: `url(${blueAbstractio})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', color: "black"
        }}>
            <div className="text-center p-4 rounded bg-blur" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: "350px" }} >
                <h2>Admin Page</h2>
                <div style={{ overflowY: 'auto', maxHeight: '70vh' }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Login:</label>
                        <select
                            name="login"
                            onChange={handleLoginChange}
                            value={formData.login}
                            className="form-control mb-3"
                        >
                            <option value=""></option>
                            {logins.map(login => (
                                <option key={login.login} value={login.login}>{login.login}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Role:</label>
                        <select
                            name="newRole"
                            value={formData.newRole}
                            onChange={handleChange}
                            className="form-control mb-3"
                        >
                            {Object.values(ROLES).map(role => (
                                <option key={role} value={role}>{role}</option>
                            ))}
                        </select>
                    </div>
                    {formData.login !== '' && (
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={userInfo.name}
                                onChange={handleInputChange}
                                className="form-control mb-3"
                            />
                        </div>
                    )}
                    {formData.login !== '' && (
                        <div>
                            <label>Surname:</label>
                            <input
                                type="text"
                                name="surname"
                                value={userInfo.surname}
                                onChange={handleInputChange}
                                className="form-control mb-3"
                            />
                        </div>
                    )}
                    {formData.login !== '' && (
                        <div>
                            <label>Patronymic:</label>
                            <input
                                type="text"
                                name="patronymic"
                                value={userInfo.patronymic}
                                onChange={handleInputChange}
                                className="form-control mb-3"
                            />
                        </div>
                    )}
                    {formData.login !== '' && (
                        <div>
                            <label>Group:</label>
                            <input
                                type="text"
                                name="group"
                                value={userInfo.group}
                                onChange={handleInputChange}
                                className="form-control mb-3"
                            />
                        </div>
                    )}
                    {formData.login !== '' && (
                        <div>
                            <label>Phone:</label>
                            <input
                                type="text"
                                name="phone"
                                value={userInfo.phone}
                                onChange={handleInputChange}
                                className="form-control mb-3"
                            />
                        </div>
                    )}
                    {formData.login !== '' && (
                        <div>
                            <label>ID Card:</label>
                            <input
                                type="text"
                                name="idCard"
                                value={userInfo.idCard}
                                onChange={handleInputChange}
                                className="form-control mb-3"
                            />
                        </div>
                    )}
                    {formData.login !== '' && (
                        <div>
                            <label>Faculity:</label>
                            <input
                                type="text"
                                name="faculity"
                                value={userInfo.faculity}
                                onChange={handleInputChange}
                                className="form-control mb-3"
                            />
                        </div>
                    )}
                    <button type="submit" className="btn btn-primary mb-4 w-100">Update User</button>
                    </form>
                </div>
                <div className="mb-3">
                    <button onClick={handleDelete} className="btn btn-danger mb-2 w-100">Delete User</button>
                </div>
                <div className="mb-3">
                    <button onClick={handleLogOut} className="btn btn-secondary mb-2 w-100">Log out</button>
                </div>
            </div>
        </div>
    );

}
