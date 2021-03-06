import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home'
import Login from './Login'
import DeactivateModal from './DeactivateModal'
import LoginSuccessModal from './LoginSuccessModal'
import ApplyLoan from './ApplyLoan'
import Header from './Header'
import Register from './Register'
import RegisterSuccessModal from './RegisterSuccessModal'
import MarketPlace from './MarketPlace'
import Company from './Company'
import Features from './Features'
import Product from './Product'
import CropPreview from './CropPreview'
import CropModal from './CropModal'
import PersonalInfoSavedModal from './PersonalInfoSavedModal'
import DetailsSavedModal from './DetailsSavedModal'
import DocumentsUploadedModal from './DocumentsUploadedModal'
import NotificationPreferencesSavedModal from './NotificationPreferencesSavedModal'

const Main = () => {
    return (
        <Routes> {/* The Routes decides which component to show based on the current URL.*/}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/deactivate-modal' element={<DeactivateModal />} />
            <Route path='/login-success' element={<LoginSuccessModal />} />
            <Route path='/apply-loan' element={<ApplyLoan />} />
            <Route path='/header' element={<Header />} />
            <Route path='/register' element={<Register />} />
            <Route path='/register-success' element={<RegisterSuccessModal />} />
            <Route path='/company' element={<Company />} />
            <Route path='/market-place' element={<MarketPlace />} />
            <Route path='/features' element={<Features />} />
            <Route path='/product' element={<Product />} />
            <Route path='/market-place/crop-preview' element={<CropPreview />} />
            <Route path='/market-place/crop-modal' element={<CropModal />} />
            <Route path='/product/personal-info-saved' element={<PersonalInfoSavedModal />} />
            <Route path='/product/documents-uploaded' element={<DocumentsUploadedModal />} />
            <Route path='/product/notification-preferences-saved' element={<NotificationPreferencesSavedModal />} />
            <Route path='/market-place/details-saved' element={<DetailsSavedModal />} />
        </Routes>
    );
}

export default Main;