import {useEffect,useState} from 'react'

const RestaurantMenu = () =>{

    const [resInfo,setResInfo] = useState(null)
    const [itemCards, setItemCards] = useState(null)

    useEffect( ()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=32129&catalog_qa=undefined&submitAction=ENTER")
            const jsonData = await response.json();
            console.log("menu data:",jsonData);
            setResInfo(jsonData?.data?.cards[2]?.card?.card?.info)
            console.log(resInfo)

            //finding items cards below
            console.log("finding foodlist",jsonData?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)

            setItemCards(jsonData?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)

           

        } catch (error) {
            console.error("Error fetching menu data: ", error);
        }
    }
    

    return (
        <div>

            <div className="container">
                <h1>{resInfo?.name}</h1>
                <h2>Cuisines: {resInfo?.cuisines.join( ", ")} - {resInfo?.costForTwoMessage}</h2>
                <h2>Menu</h2>
                    <ul>
                        {/* <li>
                            {itemCards[0].card.info.name}
                        </li> */}
                              {
                            itemCards?.map( (itemCard,index)=>{
                                return (
                                    <li className='item-card' key={index}>
                                        <div className='left-part-itemcard' >
                                        <h4 className='food-title'>{itemCard.card.info.name}</h4>
                                        <p className='food-type'>
                                            {itemCard.card.info.isVeg ?
                                            (<p style={{color:"lightgreen"}}>Veg</p>) :
                                            (<p style={{color:"red"}}>Non-Veg</p>) }
                                          
                                            
                                        </p>
                                        <p className='food-desc'>
                                                {itemCard.card.info.description}
                                        </p>
                                        <p className='food-price'>Rs. {itemCard.card.info.price/100} </p>
                                        <p className='food-rating'>
                                            Rating: {itemCard.card.info.ratings.aggregatedRating.rating},  
                                            <span> {itemCard.card.info.ratings.aggregatedRating.ratingCount}</span>
                                        </p>
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

