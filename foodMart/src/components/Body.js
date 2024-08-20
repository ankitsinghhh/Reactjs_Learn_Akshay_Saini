
import { useState } from 'react'
import Data from '../utils/mockData.js' // default export
import RestroCard from './Restrocard.js'

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
    const [restaurantData,setRestaurantData] = useState(Data.resData)
   

    // ? figuring out logic to filter the data 
    // const newd = Data.resData.filter(res =>res.rating.split(' ')[0]>=4)

    // console.log(newd)

    // console.log(Data.resData)

    const filterHandler = (type) =>{
        
        setRestaurantData(Data.resData)
        console.log(type)

        if(type === "TopRestaurants"){
            const topfilteredData = Data.resData.filter(res =>res.rating.split(' ')[0]>=4)
            console.log(topfilteredData)
            setRestaurantData(topfilteredData)
            setTotalData(topfilteredData.length)
        }else if (type === "LowRestaurants"){
            const lowfilteredData = Data.resData.filter(res =>res.rating.split(' ')[0]<4)
            console.log(lowfilteredData)
            setRestaurantData(lowfilteredData)
            setTotalData(lowfilteredData.length)
        }
    }

    const clearFilterHandler = () =>{
        setRestaurantData(Data.resData)
        setTotalData(Data.resData.length)
        console.log("Filter cleared")
    }


    return (
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
                                key={res.id} 
                                resName={res.resName} 
                                cuisine={res.cuisine} 
                                imgLink={res.imgLink}
                                rating={res.rating}
                                time={res.time} 
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