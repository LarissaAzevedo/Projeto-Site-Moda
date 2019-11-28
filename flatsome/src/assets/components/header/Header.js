import React from 'react';
import Logo from '../../img/imgLogo.png'

function Header() {
    return (
        <div className="header">
            <img src={Logo} className="logo" alt="logo" />
            <div className="menu">
                <nav>
                    <p>Demos</p>
                    <p>Features</p>
                    <p>Shop</p>
                    <p>Pages</p>
                    <p>Blog</p>
                    <p>Elements</p>
                </nav>
            </div>
            <div className="login">
                <p>Login</p>
                <p>Cart/$0,00</p>
            </div>
        </div>
    )
}
export default Header;