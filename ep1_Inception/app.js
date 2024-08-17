
const heading = React.createElement(
    "h1",
    {id:"heading",xyz:"abc"}, //use to give attributes
    "Hello wolrd from React!"
) 

console.log(heading) // it is an object

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)  


/*
How to create nested elements in React

<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>


ReactEelement(object) => html(browser understands)


*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        // React.createElement("h1", {id:"heading"}, "I am a h1 tag") // in case we only want to create a single child 
        //OR
        [
            React.createElement("h1",{},"I'm a h1 tag"),
            React.createElement("h2",{},"I'm a h2 tag")
        ] // in case we want to create many childrens , then we need to give array of children
    )
)
// above way is complicated and not tidy , hence makes more complex , hence the solution is jsx 

console.log(parent) // it is an object

root.render(parent)