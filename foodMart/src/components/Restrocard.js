

const RestroCard = (props) => { // destrucuring on the fly 
    // console.log(props)
    const { resName, cuisine, imgLink, rating, time } = props;
    return (
        <div className='res-card'>
            {/* //Restaurant Card Details */}
            <img className='res-img' src={imgLink} alt="Restaurant" width={230} />
            {/* <h3>{props.resName}</h3> */}
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            {/* <h4>{props.cuisine}</h4> */}
            <h4 className='grey'>{rating}</h4>
            <h4 className='grey'>{time}</h4>
        </div>
    )
}

export default RestroCard; // exporting the component for reusability