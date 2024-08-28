//class-based component - {for learning purpose}
import React from 'react'

//fucntional component - a fucntion which returns a piece of jsx
//class-based component - a class which returns a piece of jsx { it has render method which returns a piece of jsx and this class extends React.component }

class UserClass extends React.Component {

    //constructor is called when a new instance of the class is created
    constructor(props) {
        super(props); // call parent constructor on this instance
        console.log(props)
        // console.log(this.props.name+"child-constructor called")

        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "default",
                login:"dummyname"
                
            }

        }
    }

    async componentDidMount() {
        // console.log(this.props.name+"componentDidMount-child")
        const data = await fetch("https://api.github.com/users/ankitsinghhh")
        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo: json,
        })

    }

    render() {
        // console.log(this.props.name+"chil-render called")
        // const {age} = this.state;

        const { name, location, login, avatar_url } = this.state.userInfo
        return (
            <div className="user-card">
                <div className='user-img-container'>
                    <img 
                    src={avatar_url} 
                    
                
                    className='user-img'
                    />
                </div>
                <div className='user-details'>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Github Username: {login}</h4>

                </div>


                {/* <h2> count: {count}</h2> */}
            </div>
        )
    }
}

export default UserClass; //make this component available for other files to import and use


// understanding how class is loaded/mounted

// ? when class component is encountered , then instance of class component is created
// ? when class component is instantiated , at first contructor is called and then render is called after contructor 