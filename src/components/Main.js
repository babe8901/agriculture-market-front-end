import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';

const Main = () => {
    return (
        <Routes> {/* The Routes decides which component to show based on the current URL.*/}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    );
}

export default Main;