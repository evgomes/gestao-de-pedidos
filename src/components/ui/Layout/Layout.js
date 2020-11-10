import React from 'react';

import Loader from "../Loader/Loader";
import Footer from './Footer/Footer';
import Header from "./Header/Header";

const Layout = (props) => {
    return (
        <>
            <Header />
            <Loader />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;