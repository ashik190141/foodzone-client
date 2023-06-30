import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import LoadingSpinner from '../Shared/LoadSpinner/LoadingSpinner';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {
                    navigation.state === 'loading' && <LoadingSpinner></LoadingSpinner>
                }
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;