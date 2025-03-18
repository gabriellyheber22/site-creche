import React from 'react'
import Header from '../componentes/header/Header'
import Footer from '../componentes/footer/Footer'

function Layout({children}){
    return(
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    );
}
export default Layout;