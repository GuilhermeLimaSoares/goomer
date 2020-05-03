import React from "react";
import { Link } from 'react-router-dom'
import "./../header/header.scss";

function Header() {
        return (<div className="header">
                <nav className="navegation">
                        <ul className="list">
                                <li className="list__item"> <Link className="content" to="/home">Home</Link></li>
                                <li className="list__item"> <Link className="content" to="/restaurantes">Restaurantes</Link></li>
                                <li className="list__item"> <Link className="content" to="/sobre">Quem somos</Link></li>
                        </ul>
                </nav>
        </div>)

}

export default Header;