import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import blueAbstractio from "../assets/blue_abstractio_0.png";

export default function RegisterComponent() {
    const [userInfo, setUserInfo] = useState({
        login: '',
        password: '',
        name: '',
        surname: '',
        patronymic: '',
        group: '',
        phone: '',
        idcard: '',
        faculity: ''
    });

    const navigateTo = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/Auth/create', userInfo);

            setUserInfo({
                login: '',
                password: '',
                name: '',
                surname: '',
                patronymic: '',
                group: '',
                phone: '',
                idcard: '',
                faculity: ''
            });

            navigateTo('/');
        } catch (error) {
            console.error('Error creating user:', error);
            alert('User creation failed!');
        }
    }

    return (
        <div className="RegisterComponent d-flex justify-content-center align-items-center vh-100 mt-3" style={{
            backgroundImage: `url(${blueAbstractio})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', color: "black"
        }}>
            <form onSubmit={handleSubmit} className="w-25 p-4 rounded bg-blur" style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)"
            }} >
                <h2 className="card-title text-center mb-4">Welcome!</h2>
                <div className="mb-3 d-flex">
                    <div className="mr-3" style={{ width: "100px" }}>
                        <label className="form-label">Login:</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="login"
                            value={userInfo.login}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="mr-3" style={{ width: "100px" }}>
                        <label className="form-label">Password:</label>
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={userInfo.password}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="mr-3" style={{ width: "100px" }}>
                        <label className="form-label">Name:</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={userInfo.name}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="mr-3" style={{ width: "100px" }}>
                        <label className="form-label">Surname:</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="surname"
                            value={userInfo.surname}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="mr-3" style={{ width: "100px" }}>
                        <label className="form-label">Patronymic:</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="patronymic"
                            value={userInfo.patronymic}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="mr-3" style={{ width: "100px" }}>
                        <label className="form-label">Group:</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="group"
                            value={userInfo.group}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="mr-3" style={{ width: "100px" }}>
                        <label className="form-label">Phone:</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="phone"
                            value={userInfo.phone}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="mr-3" style={{ width: "100px" }}>
                        <label className="form-label">ID Card:</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="idCard"
                            value={userInfo.idCard}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="mr-3" style={{ width: "100px" }}>
                        <label className="form-label">Faculity:</label>
                    </div>
                    <div>
                    <input
                        type="text"
                        name="faculity"
                        value={userInfo.faculity}
                        onChange={handleChange}
                        className="form-control"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary d-block mx-auto mt-3">Create User</button>
            </form>
        </div>
    );

}
