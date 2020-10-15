import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../global.css'
import { Layout } from 'antd';

const { Header } = Layout;

const NavBar = () => {
    return (
        <Header>
            <div className="logo">

            </div>

            <span> <h1 className="textindark">JARVIS</h1> </span>

        </Header>
    )
}

export default NavBar