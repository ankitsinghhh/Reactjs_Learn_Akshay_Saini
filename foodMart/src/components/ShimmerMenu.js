import { useEffect, useState } from 'react'
import { IoIosStar } from "react-icons/io";

import "./ShimmerMenu.css"

const RestaurantMenu = () => {

    return (
        <div>
            <div className="container">
                <h1 className='restaurant-title loading-effect'></h1>
                <h2 className='res-cuisine loading-effect'></h2>
                
                <ul>
                    {
                        Array(6).fill(
                            <li className='item-card loading-effect'>
                                <div className='left-part-itemcard loading-effect'>
                                    <h4 className='food-title loading-effect'></h4>
                                    <p className='food-rating loading-effect'></p>
                                    <p className='food-desc loading-effect'></p>
                                    <p className='food-price loading-effect'></p>
                                </div>
                                <div className='right-part-itemcard loading-effect'></div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;
