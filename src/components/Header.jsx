import { useState, useEffect } from "react"

//components
import Hamburguer from '../components/Hamburguer'

//firebase
import firebase from 'firebase/app'
import 'firebase/auth'
//styles
import '../assets/Header.scss'
import Methods from "../firebase/Authentication/methods.js";

const Header = () => {
    const [state, setState] = useState('close')
    const { Google, LogOut } = Methods();
    
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user =>{
            const logBtn = document.getElementById('logButton');
            if(user){
                console.log(user.displayName);
                logBtn.innerText = "Salir";
                logBtn.onclick = LogOut;
            } else {
                logBtn.innerText = "Ingresar";
                logBtn.onclick = Google;
            }
        })
    })

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
                <li className="menu_item_link"><a href=""></a>Home</li>
                <li className="menu_item_link"><a href=""></a>Products</li>
                <li className="menu_item_link"><a href=""></a>About Us</li>
                <li className="menu_item_link"><a href=""></a>Contact Us</li>
                <li className="menu_item_link" id="logButton"onClick={() => Google()}>Ingresar</li>
            </ul>
            <i className="fas fa-shopping-cart"></i>
        </header>
        </>
    )
}

export default Header;