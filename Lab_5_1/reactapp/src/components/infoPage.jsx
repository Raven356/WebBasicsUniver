import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import blueAbstractio from "../assets/blue_abstractio_1.png";

export default function InfoPage() {
    const location = useLocation();
    const [info, setInfo] = useState(location.state.info);
    const [oldLogin, setOldLogin] = useState(location.state.login);
    const [login, setLogin] = useState(location.state.login);
    const navigateTo = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    }

    useEffect(() => {
        setInfo(info => ({
            ...info,
            login: login,
            oldLogin: oldLogin
        }));
    }, [oldLogin]);

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
        setLogin(value);
    }

    const handleSaveChanges = async () => {
        try
        {
            await axios.put('/Auth/update-info', info);
            alert('Successfully changed!');
            setOldLogin(login);
        }
        catch(error){
            console.error('Something went wrong!', error);
        }
    }

    const handleLogOut = () => {
        navigateTo('/');
    }

    return (
        <div className="InfoPageContainer d-flex justify-content-center align-items-center vh-100" style={{
            backgroundImage: `url(${blueAbstractio})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'
        }}>
            <div className="Info p-4 rounded bg-blur" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div className="row mb-3">
                    <label className="col-md-4">Login:</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            name="login"
                            value={login}
                            onChange={handleLoginChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-md-4">Name:</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            name="name"
                            value={info.name}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-md-4">Surname:</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            name="surname"
                            value={info.surname}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-md-4">Patronymic:</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            name="patronymic"
                            value={info.patronymic}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-md-4">Group:</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            name="group"
                            value={info.group}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-md-4">Phone:</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            name="phone"
                            value={info.phone}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-md-4">ID Card:</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            name="idCard"
                            value={info.idCard}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-md-4">Faculity:</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            name="faculity"
                            value={info.faculity}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
            <div className="InfoButtons">
                <button onClick={handleSaveChanges} className="btn btn-primary mx-2">Save Changes</button>
                <button onClick={handleLogOut} className="btn btn-danger mx-2">Log out</button>
            </div>
        </div>
    );



}
