import React from 'react'
import Header from './Header'
import User from './User'
import UserClass from './UserClass'

// ? functional component
// const About = () => {
//   return (
//     <div className="about">
//         {/* <Header/> */}
//           <div className='container'>
          
//             <h1>About FoodMart</h1>
//             <h1>This is about us page</h1>
//             <h2> 
//                 We are a leading food delivery company in the city. We provide fresh, hygienic, and locally sourced food to our customers. We strive to create a welcoming and enjoyable dining experience for our customers.
//             </h2>

//             <h1>Creator :</h1>
//             <User
//             name = {"Ankit Signh"}
//             location = {"Hyderabad"}
//             contact = {"ankitsingh79834@gmail.com"}

//             />
//             <UserClass
//             name = {"John Doe"}
//             location = {"Manhattan"}
//             contact = {"johndoe@gmail.com"}
//             />

//           </div>
            
//     </div>
//   )
// }

// export default About



// ? Class component
// * when component is called , then first constructor is called , then render and then component did mount is callled

class About extends React.Component {

  // Constructor should be placed outside of the render method
  constructor(props) {
    super(props);
    // console.log("parent-constructor");
  }

  componentDidMount() {
    // console.log("parent-componentDidMount");

  } 

  render() {
    // console.log("parent - render");

    return (
      <div className="about">
        {/* <Header/> */}
        <div className='container'>
          
          <h1>About FoodMart - Class Component</h1>
          <h1>This is about us page</h1>
          <h2> 
            We are a leading food delivery company in the city. We provide fresh, hygienic, and locally sourced food to our customers. We strive to create a welcoming and enjoyable dining experience for our customers.
          </h2>

          <h1>Creator :</h1>
          <UserClass
            name={"Name-1"}
            location={"Hyderabad"}
            contact={"ankitsingh79834@gmail.com"}
          />
        
        </div>
      </div>
    );
  }
}

export default About;



// ? Expected output in case of child components
// parent- constructor 
// parent -render
//    Name - 1 child constructor callled
//    Name - 1 render called
//    Name-  1 componentDidMount Called
//    Name - 2 child constructor callled
//    Name - 2 render called
//    Name-  2 componentDidMount Called
// parent - componentDidMount Called



// ! Actual output in case of two child components: --> optimisation is done by react
// parent-constructor
// parent - render

//      Name-1 child-constructor called
//      Name-1 chil-render called

//      Name-2 child-constructor called
//      Name-2 child-render called

//      Name-1 componentDidMount-child
//      Name-2 componentDidMount-child

// parent-componentDidMount