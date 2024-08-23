

const RestroCard = (props) => { // destrucuring on the fly 
    // console.log(props)
    const { resName, cuisine, imgLink, rating, time, opened } = props;
    return (
        <div className='res-card'>
            {/* //Restaurant Card Details */}
            {/* <img className='res-img' src={imgLink} alt="Restaurant" width={230} /> */}
            <img className='res-img' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgLink}`} alt="Restaurant" width={230} />
            {/* <h3>{props.resName}</h3> */}
            <h3>{resName}</h3>
            <h4 style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                // width: '100px'
            }}>
                {cuisine}
            </h4>
            {/* <h4>{props.cuisine}</h4> */}
            <h4 className='grey'>{rating} {rating ? "stars" : " "} </h4>
            <h4 className='grey'>{time}</h4>
            {opened? <h4 style={{color:"green"}} >Open Now</h4> : <h4 style={{color:"red"}} >Closed Now</h4>}
        </div>
    )
}

export default RestroCard; // exporting the component for reusability