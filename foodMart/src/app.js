import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../images/logo.png';
import Data from './dataset.json'
import { FaMoon, FaSun } from "react-icons/fa6";
import { useState } from 'react';


// console.log(Data.resData[0].resName);

/**
 * ! For Reference
 * ? Header
 *  - Logo
 *  - Nav-items
 * ? Body
 * - Search
 * - Restaurant Container
 *    - Restaurant Card
 *      * Name of Res , Star , Rating , Cuisines , Delivery Time, etc 
 * ? Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


const RestroCard = (props) => { // destrucuring on the fly 
    // console.log(props)
    const {resName,cuisine,imgLink,rating,time} = props;
    return (
        <div className='res-card'>
            {/* //Restaurant Card Details */}
            <img className='res-img' src={imgLink} alt="Restaurant" width={230} />
            {/* <h3>{props.resName}</h3> */}
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            {/* <h4>{props.cuisine}</h4> */}
            <h4 className='grey'>{rating}</h4>
            <h4 className='grey'>{time}</h4>
        </div>
    )
}


const Body = () => { 
    return (
        <div className="body">
            <div className='container'>
            <div className='search'>
                <p>Search</p>
            </div>
            <div className='res-cards-container'>
                {/* //Restaurant Card */}
                {/* <RestroCard 
                resName="Meghana Foods" 
                cuisine="Biryani , North Indian, Asian" 
                imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750389.JPG"
                 />
                <RestroCard 
                resName="kentucky fried chicken" 
                cuisine="Burger, Fast Food"
                imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_655339.JPG"
                />
                <RestroCard 
                resName="Pizza Hut" 
                cuisine="Pizzas"
                 imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/0ea1daf5-b64e-43d2-80db-b460ed92e05c_11091.jpg"
                 />
                <RestroCard 
                resName="Burger King"
                 cuisine="Burgers, American"
                 imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_362596.JPG"
                  />
                <RestroCard 
                resName="Mayur Paan House" 
                cuisine="Paan"
                 imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1b5e469a1040822ff0d6be479f622396"
                 />
                   <RestroCard 
                resName="kentucky fried chicken" 
                cuisine="Burger, Fast Food"
                imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_655339.JPG"
                />
                   <RestroCard 
                resName="kentucky fried chicken" 
                cuisine="Burger, Fast Food"
                imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_655339.JPG"
                />
                   <RestroCard 
                resName="kentucky fried chicken" 
                cuisine="Burger, Fast Food"
                imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_655339.JPG"
                />
                   <RestroCard 
                resName="kentucky fried chicken" 
                cuisine="Burger, Fast Food"
                imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_655339.JPG"
                />
                   <RestroCard 
                resName="kentucky fried chicken" 
                cuisine="Burger, Fast Food"
                imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_655339.JPG"
                /> */}

                {/* // ? not using keys (not acceptable) <<<< index as key <<<<<< unique id (best practice)   */}

                {
                    Data.resData.map( (restaurant) =>{
                        return (
                            <RestroCard 
                                key={restaurant.id} 
                                resName={restaurant.resName} 
                                cuisine={restaurant.cuisine} 
                                imgLink={restaurant.imgLink}
                                rating={restaurant.rating}
                                time={restaurant.time}
                            />
                        )
                    })
                }
              
                {/* what are Props - > ye normal arguments hote h function k liye basically {passing a prop to a component is like a passing an argument to a function  } */}
            </div>
            </div>
        </div>
    )
}



const Header = () => {


    const [darkMode, setDarkMode] = useState(false)
    function toggleDarkMode(){
        setDarkMode(!darkMode)
        // document.body.classList.toggle('dark-mode');
        // console.log(darkMode)

        const root = document.documentElement;

        if (root.classList.contains('dark-mode')) {
            setDarkMode(false);
            root.style.setProperty('--background-color', '#ffffff'); // Light mode background color
            root.style.setProperty('--text-color', '#000000');       // Light mode text color
            root.style.setProperty('--card-color', 'rgba(242, 244, 245, 0.432)'); // Light mode card color
            root.style.setProperty('--nav-color', '#ffffff');  // Light mode nav color
            root.style.setProperty('--shadow-color', ' rgba(0, 0, 0, 0.267)'); // Light mode shadow color
            root.classList.remove('dark-mode');
        } else {
            setDarkMode(true);
            root.style.setProperty('--background-color', '#1d1e1f'); // Dark mode background color
            root.style.setProperty('--text-color', '#ffffff');       // Dark mode text color
            root.style.setProperty('--card-color', '#2A323C');       // Dark mode card color
            root.style.setProperty('--nav-color', '#1D232A');  // Dark mode nav color
            root.style.setProperty('--shadow-color', 'rgba(255, 255, 255, 0.5)'); // Dark mode shadow color
            root.classList.add('dark-mode');
        }

          

    }

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
                    <li className='contact' >Contact</li>
                    <li>Cart</li>
                    <li>
                        {
                            darkMode? 
                            <FaSun color='white' onClick={()=>toggleDarkMode()} /> 
                            : 
                            
                            <FaMoon onClick={()=>toggleDarkMode()} />
                        }
                    </li>
                </ul>

            </div>
         </div>
        </header>
    )
}





const AppLayout = () => {
    return (
        <div className="app">

            <Header />
            <Body/>


        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)