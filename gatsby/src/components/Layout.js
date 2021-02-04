import React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles.js';
import Typography from '../styles/Typography.js';


export default function Layout({ children, data }) {

    return (
        <>
            <GlobalStyles />
            <Typography />
            <Nav logo={data.logo} />
            { children }
            <Footer />
        </>
    )
}