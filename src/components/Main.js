import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import DeactivateModal from './DeactivateModal'
import LoginSuccessModal from './LoginSuccessModal'
import ApplyLoan from './ApplyLoan'
import Header from './Header'

const Main = () => {
    return (
        <Routes> {/* The Routes decides which component to show based on the current URL.*/}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/deactivate-modal' element={<DeactivateModal />} />
            <Route path='/login-success' element={<LoginSuccessModal />} />
            <Route path='/apply-loan' element={<ApplyLoan />} />
            <Route path='/header' element={<Header />} />
        </Routes>
    );
}

export default Main;