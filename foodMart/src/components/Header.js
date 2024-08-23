import { FaMoon, FaSun } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import logo from '../../images/logo.png';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [login, setLogin] = useState(true);

    function authClickHandler() {
        const isLogin = !login;
        setLogin(isLogin);
        localStorage.setItem('login', isLogin);
    }

    useEffect(() => {
        // Fetch the dark mode state from localStorage when the component mounts
        const savedDarkMode = localStorage.getItem('darkMode');
        const savedLogin = localStorage.getItem('login');
        
        if (savedDarkMode === 'true') {
            setDarkMode(true);
            applyDarkMode(true);
        } else {
            setDarkMode(false);
            applyDarkMode(false);
        }

        // Convert savedLogin to a boolean and set login state
        if (savedLogin !== null) {
            setLogin(savedLogin === 'true');
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode); // Save the dark mode state to localStorage
        applyDarkMode(newDarkMode);
    };

    const applyDarkMode = (isDarkMode) => {
        const root = document.documentElement;

        if (isDarkMode) {
            root.style.setProperty('--background-color', '#181E24'); // Dark mode background color
            root.style.setProperty('--text-color', '#ffffff');       // Dark mode text color
            root.style.setProperty('--card-color', '#2A323C');       // Dark mode card color
            root.style.setProperty('--nav-color', '#1D232A');  // Dark mode nav color
            root.style.setProperty('--shadow-color', 'rgba(255, 255, 255, 0.5)'); // Dark mode shadow color
            root.classList.add('dark-mode');
        } else {
            root.style.setProperty('--background-color', '#ffffff'); // Light mode background color
            root.style.setProperty('--text-color', '#000000');       // Light mode text color
            root.style.setProperty('--card-color', 'rgba(242, 244, 245, 0.432)'); // Light mode card color
            root.style.setProperty('--nav-color', '#ffffff');  // Light mode nav color
            root.style.setProperty('--shadow-color', ' rgba(0, 0, 0, 0.267)'); // Light mode shadow color
            root.classList.remove('dark-mode');
        }
    };

    return (
        <header className="header">
            <div className='header-container'>
                <div className='logo-container'>
                    <img className='logo' src={logo} alt="Logo" width={70} />
                </div>
                <div className='nav-items'>
                    <ul>
                        <li>Home</li>
                        <li className='about'>About</li>
                        <li className='contact'>Contact</li>
                        <li>Cart</li>
                        {
                            login ? 
                            (
                                <li>
                                    <button onClick={authClickHandler} className="logout-btn">Logout</button>
                                </li>
                            )
                            :
                            (
                                <li>
                                    <button onClick={authClickHandler} className="login-btn">Login</button>
                                </li>
                            )
                        }
                        <li>
                            {darkMode ? (
                                <FaSun color='white' onClick={toggleDarkMode} />
                            ) : (
                                <FaMoon onClick={toggleDarkMode} />
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
