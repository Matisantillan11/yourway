import { useState, useEffect, useContext, useMemo } from "react";
import { Link } from 'react-router-dom';
//components
import Hamburguer from '../components/Hamburguer';
import AppContext from '../context/AppContext.js';

//firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import Methods from "../firebase/Authentication/methods.js";
//styles
import '../assets/Header.scss'

const Header = () => {
    const [state, setState] = useState('close')
    const { Google, LogOut } = Methods();
    
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user =>{
            const logBtn = document.getElementById('logButton');
            if(user){
                logBtn.innerText = "Salir";
                logBtn.onclick = LogOut;
            } else {
                logBtn.innerText = "Ingresar";
                logBtn.onclick = Google;
            }
        })
    }, [])

   

    const handleMenu = (ev) =>{
        ev.preventDefault();
        const menu = document.querySelector('.menu_item');
        const links = document.querySelectorAll('.menu_item_link');
        state === 'open' ? setState('close') : setState('open')        
        menu.classList.toggle('expanded')
        links.forEach(link => link.classList.toggle('fade'))
        
    }

    return (
        <>
        <header>
            <Hamburguer status={state} handleState= {handleMenu}/>
            <div className="header__logo">
                <p>Your Way</p>
            </div>
            <ul className="menu_item" status={state} id="menu">
                <li className="menu_item_link" id="logButton">Ingresar</li>
                <li className="menu_item_link"><Link className="link-menu" to="/">Inicio</Link></li>
                <li className="menu_item_link"><Link className="link-menu"to="/products">Productos</Link></li>
                <li className="menu_item_link"><a className="link-menu" href=""></a>Nosotros</li>
                <li className="menu_item_link"><a className="link-menu" href=""></a>Contactanos</li>
            </ul>
            <i className="fas fa-shopping-cart"></i>
            
        </header>
        </>
    )
}

export default Header;