import { useEffect, useState } from 'react'
import { IoIosStar } from "react-icons/io";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from 'react-router-dom';


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)
    const [itemCards, setItemCards] = useState(null)

    const { resId } = useParams();
    console.log(resId)

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        try {
            // const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=32129&catalog_qa=undefined&submitAction=ENTER")
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
            const jsonData = await response.json();
            console.log("menu data:", jsonData);
            setResInfo(jsonData?.data?.cards[2]?.card?.card?.info)
            console.log(resInfo)

            //finding items cards below
            console.log("finding foodlist", jsonData?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)

            setItemCards(jsonData?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)



        } catch (error) {
            console.error("Error fetching menu data: ", error);
        }
    }

    if(resInfo==null){
        return (
            <ShimmerMenu/>
        )
    }


    return (
        <div>

            <div className="container">
                <h1 className='restaurant-title'>{resInfo?.name}</h1>
                <h2 className='res-cuisine'>Cuisines: {resInfo?.cuisines.join(", ")} - {resInfo?.costForTwoMessage}</h2>
                
                <ul>
                    {/* <li>
                            {itemCards[0].card.info.name}
                        </li> */}
                    {
                        itemCards?.map((itemCard) => {
                            return (
                                <li className='item-card' key={itemCard.card.info.id}>
                                    <div className='left-part-itemcard' >

                                        <h4 className='food-title'>{itemCard.card.info.name}  <span className='food-type'>
                                            {itemCard.card.info.isVeg ?
                                                (<span style={{ color: "lightgreen" }}> Veg</span>) :
                                                (<span style={{ color: "red" }}> Non-Veg</span>)}


                                        </span>  </h4>
                                        <p className='food-rating'>
                                            <IoIosStar color="coral" /> {itemCard.card.info.ratings.aggregatedRating.rating},
                                            <span> {itemCard.card.info.ratings.aggregatedRating.ratingCount}</span>
                                        </p>

                                        <p className='food-desc'>
                                            {itemCard.card.info.description}
                                        </p>
                                        <p className='food-price'>₹ {itemCard.card.info.price / 100} </p>

                                    </div>
                                    <div className='right-part-itemcard' >
                                        <img className='food-img' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${itemCard.card.info.imageId}`} />
                                    </div>
                                </li>
                            )
                        })
                    }



                </ul>
            </div>

        </div>
    )
}

export default RestaurantMenu;

