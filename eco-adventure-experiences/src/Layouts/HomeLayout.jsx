import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import AOS from 'aos';


const HomeLayout = () => {

    

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease',
          once: false,
          offset: 0,
        });
    }, []);

    return (
        <div className=''>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[500px]">
                <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default HomeLayout;