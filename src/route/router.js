import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../components/layout';
import Home from '../components/home';
import Login from '../components/login';

export default function Router(props) {
    const authToken = localStorage.getItem('authToken');

    const [authorized, setAuthorized] = useState( authToken ? true : false)

    return (
        <React.Fragment>
            <Layout>
                <Routes>
                    <Route path="/" exact element={authorized ? <Home /> : <Login />} />
                    <Route path="/login" exact element={<Login />} />
                </Routes>
            </Layout>
        </React.Fragment>
    )
}