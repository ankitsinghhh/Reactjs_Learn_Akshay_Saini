import React from 'react'
import  ReactDOM from 'react-dom/client'

//React Element - they are equivalent to DOM elements
const heading = React.createElement("h1",
    {id:"heading"},
    "Namaste React 🚀"
) 
    // react.createElement ==> is an object --> when reendered to dom becomes html element
console.log(heading)

//above way of writing html code in javascript file is bit clumsy and headache to write like a full fucntional website in this order , hence JSX file was cread by facebook developers

//JSX -> it is not html in javascript but it is html-like or xml-like syntax 
const jsxHeading = <h1 id='heading' className='heading'>Namaste React using jsx 🚀</h1> // creating react element ussing jsx 



//jsx is not valid javascript( not understandable by js egine ) - then how it runs -- cause of parcel's babel
//jsx code is transpiled (converted to code browser/react can understand) by parcel ( by babel )
// behind the scenes - babel converts the jsx code to react.createElement which is converted to html element

//in jsx - we cannot use  class but instead we use className
// in jsx- to write it in multiple lines , we need to use parantheses - ()
/* const jsxHeading = ( <h1 id='heading' className='heading'>
    Namaste React using jsx 🚀
    </h1>
     )// creating react element ussing jsx ( writing in multiple lines )
 */

console.log(jsxHeading)


//REACT-COMPONENTS
/**
 * * TWO TYPES: 
 *  1.Class-based components ( old way )
 *  2.Function Components ( new way ) - a function that returns a jsx code
 */

// React Function Components
const HeadingComponent = () =>{
    return <h1>Namaste React using Functional Component 🚀</h1>
}

//  const HeadingComponent2 = ()=> ( 
//     <h1 class="heading">heading</h1>
// ) ; // ? short to write above functional component

// const HeadingComponent = () =><h1>Namaste React using Functional Component 🚀</h1> // ? also shortcut to write above functional component

const text = <span>This is a text </span>

const Title = () =>{
    return (<h1>
        {text}
         This is Main-Title component 👩‍💻</h1>)
}

const number = 100;

//Component Composition -> Component inside component
const Container = () =>{
    return (
        <div id="container">
            <Title/>
            <Title></Title> 
            {Title()}
            {/* // * above three ways are same only */}
            <HeadingComponent/>
            <p>This is paragraph inside container </p>
       
        
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))




// root.render(jsxHeading) // render the heading element to the root element with id "root" in the DOM ->replaces the content of root with heading

// root.render(<HeadingComponent/>) // render the heading component , a heading component is written like this in render function , this is converted by babel to HeadingComponent()

root.render(<Container/>) // render the container component , a container component is written like this in render function , this is converted by babel to Container()