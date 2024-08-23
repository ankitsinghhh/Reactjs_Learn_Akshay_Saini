
import { useState,useEffect } from 'react'
import Data from '../utils/mockData.js' // default export
import restaurantList from '../utils/mockDataswiggy.js'
import RestroCard from './Restrocard.js'
import Shimmer from './Shimmer.js'

const Body = () => { 


    // * local state variable - superpowerful variable -- > whenever a state variable changes , react re-renders the component -- as soon as variable (data ) changes , Ui changes 

    // const [restaurantData, setRestaurantData] = useState([])  
    //useState returns an array , hence array destructuring is done to get the values
    // const arr = useState(data.resData)
    // const [restaurantData, setRestaurantData] = arr; // this also works

    // * Normal js variable
    // let restaurantData = []
    // restaurantData = [{abc: 'abc'}, {abc: 'abc'}] //? to modify

    const [totalData, setTotalData] = useState(Data.resData.length)
    const [restaurantData,setRestaurantData] = useState([])
    const [originalResData, setoriginalResData] = useState([])
    // const [restaurantData,setRestaurantData] = useState(restaurantList)  // i will uncomment it if swiggy api fails
    // const [originalResData, setoriginalResData] = useState(restaurantList) // i will uncomment it if swiggy api fails
   

    // ? figuring out logic to filter the data 
    // const newd = Data.resData.filter(res =>res.rating.split(' ')[0]>=4)

    // console.log(newd)

    // console.log(Data.resData)

    const filterHandler = (type) =>{
        
        console.log(restaurantData,"filter me h")

        if(type === "TopRestaurants"){
            setRestaurantData(originalResData)

            // const topfilteredData = Data.resData.filter(res =>res.rating.split(' ')[0]>=4) for mockData.json
            const topfilteredData = originalResData?.filter( res => res.info.avgRating > 4.3)
            console.log(topfilteredData)
            setRestaurantData(topfilteredData)
            setTotalData(topfilteredData.length)
            // console.log("inside top")
        }else if (type === "LowRestaurants"){
            setRestaurantData(originalResData)

            // const lowfilteredData = Data.resData.filter(res =>res.rating.split(' ')[0]<4) // for mockData.json
            const lowfilteredData = originalResData?.filter( res => res.info.avgRating <= 4.3) // for mockData.json
            console.log("inside low")

            console.log(lowfilteredData)
            setRestaurantData(lowfilteredData)
            setTotalData(lowfilteredData.length)
            console.log("inside low")
            }
    }

    const clearFilterHandler = () =>{
        setRestaurantData(originalResData)
        setTotalData(originalResData.length)
        console.log("Filter cleared")
    }


    // ? UseEffect Hook - // * accepts two arguments
//   useEffect( callback function , array) // the callback function will be called after the render the body component is rendered
    //   useEffect(() => {
    //     // cleanup function
    //     return () => {
    //       // cleanup code
    //     }
    //   }, [dependency]) // dependency array - if any of the dependency changes, useEffect hook will run again


    useEffect( () => {
        console.log("useEffect called")
        fetchData()
        setTotalData(restaurantData.length)
    },[])

    const fetchData = async () => {
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
                console.log(restaurantDatalist[1].info);
                console.log(restaurantDatalist[1].info.name);
                console.log(restaurantDatalist[1].info.avgRating);
                console.log(restaurantDatalist[1].info.cuisines.join(","));
                console.log(restaurantDatalist[1].info.sla.slaString);
                console.log(restaurantDatalist[1].info.cloudinaryImageId);
    
                setRestaurantData(restaurantDatalist);
                setoriginalResData(restaurantDatalist)
                setTotalData(restaurantDatalist.length);
                console.log("fetchData ends here");
    
                // restaurantDatalist.forEach((res) => {
                //     console.log(res.info);
                // });

                const newData = restaurantDatalist.filter( (res) => res.info.avgRating > 4.3)
                console.log(newData,restaurantDatalist.length)

            } else {
                console.log("Data structure not found in the response");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    
// ? conditional rendering
// if(restaurantData.length === 0) { 
//     return (
//         <div>
//             <Shimmer/>
//         </div>
//     )
// }
   

    


    return restaurantData.length === 0 ? 
    (
        <div>
            <Shimmer/>
        </div>
    ) 
    : (
        <div className="body">
            <div className='container'>
                <div className='filter'>
                    <button className='filter-btn top-btn' onClick={()=>filterHandler("TopRestaurants")}>
                        Top Rated Restaurants
                    </button>
                    <button className='filter-btn low-btn' onClick={()=>filterHandler("LowRestaurants")}>
                        Low Rated Restaurants
                    </button>
                    <button className='filter-btn clear-btn' onClick={()=>clearFilterHandler()}>
                        ClearFilter
                    </button>
                    <p>Total Data: {totalData} </p>
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
                          restaurantData?.map(res => {
                            return (
                                <RestroCard 
                                key={res?.info?.id} 
                                resName={res?.info?.name} 
                                cuisine={res?.info?.cuisines.join(',')}  
                                imgLink={res?.info?.cloudinaryImageId}
                                rating={res?.info?.avgRating}
                                time={res?.info?.sla.slaString} 
                                opened={res?.info?.availability?.opened}
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

export default Body;