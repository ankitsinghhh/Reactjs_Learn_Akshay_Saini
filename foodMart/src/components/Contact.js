import React from 'react'
import Header from './Header'

const Contact = () => {
  return (
    <div className="contact">
        {/* <Header/> */}
          <div className='container'>
          
            <h1>Contact FoodMart</h1>
            <h1>This is  us contact us page</h1>
            <h2> 
                Email: 
                    <a href="mailto:contact@foodmart.com">
                        contact@foodmart.com
                    </a>
                <br />
                Phone: +91 1234567890
                <br />
                Address: 
                FoodMart, 123 Main St, Anytown, USA 12345

            </h2>
          </div>
            
    </div>
  )
}

export default Contact