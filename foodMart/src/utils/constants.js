  
// ! Two types of Exports

// ? 1. Default Export 
// export default <variable name>



// ? 2. Named Export 
// export const CDN_URL = "http://abc.example.com"

// export const LOGO_URL = "http://abc.example.com"


// ! Two types of Imports

// ? 1. Named Import
// import { CDN_URL, LOGO_URL } from "./data"
// import {CDN_URL } from "./data"

// ? 2. Default Import
// import <variable name> from "./data" // no curly braces are used in this case


// ! REact hooks 
// they are normal javascript utility functions
// ? Two Important hooks 
// 1. UseState( ) and 2. useEffect()


// ! why is React Fast
// because of efficient dom manipulation using virtual dom plus react fiber(react reconciliation algorithm) and diff algoritm , finds diff and update the UI 
// finds difference between virtual dom and update the UI