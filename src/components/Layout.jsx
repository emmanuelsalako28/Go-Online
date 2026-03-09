import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            {/* Preloader logic can be added here if needed */}
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
