import { useState, useEffect } from 'react'
import Data from '../utils/mockData.js' // default export
import restaurantList from '../utils/mockDataswiggy.js'
import RestroCard from './Restrocard.js'
import Shimmer from './Shimmer.js'
import { Link } from 'react-router-dom'

const Body = () => {

    // * Local state variable - superpowerful variable --> whenever a state variable changes, React re-renders the component -- as soon as variable (data) changes, UI changes

    // const [restaurantData, setRestaurantData] = useState([])  
    // useState returns an array, hence array destructuring is done to get the values
    // const arr = useState(data.resData)
    // const [restaurantData, setRestaurantData] = arr; // this also works

    // * Normal JS variable
    // let restaurantData = []
    // restaurantData = [{abc: 'abc'}, {abc: 'abc'}] //? to modify

    const [totalData, setTotalData] = useState(Data.resData.length)
    const [restaurantData, setRestaurantData] = useState([])
    const [originalResData, setOriginalResData] = useState([])
    const [loading, setLoading] = useState(true)
    // const [restaurantData,setRestaurantData] = useState(restaurantList)  // I will uncomment it if Swiggy API fails
    // const [originalResData, setOriginalResData] = useState(restaurantList) // I will uncomment it if Swiggy API fails

    const [searchText, setSearchText] = useState("")

    // ? Figuring out logic to filter the data 
    // const newd = Data.resData.filter(res => res.rating.split(' ')[0] >= 4)

    // console.log(newd)

    // console.log(Data.resData)

    const filterHandler = (type) => {

        console.log(restaurantData, "filter me h")

        if (type === "TopRestaurants") {
            setRestaurantData(originalResData)

            // const topfilteredData = Data.resData.filter(res => res.rating.split(' ')[0] >= 4) // for mockData.json
            const topFilteredData = originalResData?.filter(res => res.info.avgRating > 4.3)
            console.log(topFilteredData)
            setRestaurantData(topFilteredData)
            setTotalData(topFilteredData.length)
        } else if (type === "LowRestaurants") {
            setRestaurantData(originalResData)

            // const lowfilteredData = Data.resData.filter(res => res.rating.split(' ')[0] < 4) // for mockData.json
            const lowFilteredData = originalResData?.filter(res => res.info.avgRating <= 4.3) // for mockData.json
            console.log("inside low")

            console.log(lowFilteredData)
            setRestaurantData(lowFilteredData)
            setTotalData(lowFilteredData.length)
        }
    }

    const clearFilterHandler = () => {
        setRestaurantData(originalResData)
        setTotalData(originalResData.length)
        console.log("Filter cleared")
    }

    // ? useEffect Hook - // * accepts two arguments
    //   useEffect(callback function, array) // the callback function will be called after the Body component is rendered
    //   useEffect(() => {
    //     // cleanup function
    //     return () => {
    //       // cleanup code
    //     }
    //   }, [dependency]) // dependency array - if any of the dependencies change, useEffect hook will run again

    useEffect(() => {
        console.log("useEffect called")
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        try {
            // Fetch data from the API
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const response = await data.json();

            // Log the full response to understand the structure
            console.log(response);

            // Check if the data structure exists before accessing it
            const restaurantDatalist = response?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(restaurantDatalist);

            if (restaurantDatalist) {
                setRestaurantData(restaurantDatalist);
                setOriginalResData(restaurantDatalist)
                setTotalData(restaurantDatalist.length);
                console.log("fetchData ends here");
                setLoading(false)
            } else {
                console.log("Data structure not found in the response");
                setLoading(false)
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false)
        }
    }

    // ? Conditional rendering
    // if (restaurantData.length === 0) { 
    //     return (
    //         <div>
    //             <Shimmer />
    //         </div>
    //     )
    // }

   

    return loading ?
        (
            <div>
                <Shimmer />
            </div>
        )
        : (
            <div className="body">
                <div className='container'>
                    <div className='filter-and-search'>
                        <div className='filter'>
                            <button className='filter-btn top-btn' onClick={() => filterHandler("TopRestaurants")}>
                                Top Rated Restaurants
                            </button>
                            <button className='filter-btn low-btn' onClick={() => filterHandler("LowRestaurants")}>
                                Low Rated Restaurants
                            </button>
                            <button className='filter-btn clear-btn' onClick={() => clearFilterHandler()}>
                                Clear Filter
                            </button>
                            <p>Total Data: {totalData}</p>
                        </div>

                        <div className='search'>
                            <input type='text' 
                                placeholder='Search for restaurants...'
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)} 
                            />
                            <button 
                                className='search-btn' 
                                onClick={() => {
                                    // Filter the restaurant cards 
                                    const filteredRestaurant = originalResData.filter(
                                        (res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase())
                                    );

                                    console.log("inside search", filteredRestaurant)
                                   if(filteredRestaurant.length){
                                     console.log("inside if part")
                                     setRestaurantData(filteredRestaurant);
                                     setTotalData(filteredRestaurant.length);
                                   }
                                   else{
                                    console.log("inside else part")
                                     setRestaurantData([]);
                                     setTotalData(0);
                                   }
                                }}
                            >
                                Search
                            </button> 
                        </div>
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
                            resName="Pizza Hut" 
                            cuisine="Pizzas"
                            imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/0ea1daf5-b64e-43d2-80db-b460ed92e05c_11091.jpg"
                        /> */}

                        {/* // Use map() to iterate over restaurantData array */}
                        {restaurantData.length > 0 ? (
                            restaurantData.map((res) => (
                                <Link  
                                to={"/restaurants/"+res?.info?.id}
                                key={res?.info?.id}
                                >
                                    <RestroCard
                                
                                    resName={res?.info?.name}
                                    cuisine={res?.info?.cuisines.join(",")}
                                    imgLink={res?.info?.cloudinaryImageId}
                                    rating={res?.info?.avgRating}
                                    time={res?.info?.sla.slaString}
                                    opened={res?.info?.availability?.opened}
                                />
                                </Link>
                            ))
                        ) : (
                            <p>No Restaurants Found</p>
                        )}
                    </div>
                </div>
            </div>
        )
}

export default Body
