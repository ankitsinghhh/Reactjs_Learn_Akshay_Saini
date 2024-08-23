const Shimmer = () => {
    const shimmerCards = [];

    for (let i = 0; i < 8; i++) {
        shimmerCards.push(
            <div key={i} className='res-card shimmer-card'>
                <div className='res-img'></div>
                <div className='res-text shimmer-title'></div>
                <div className='res-text shimmer-cuisine'></div>
                <div className='res-text shimmer-rating'></div>
                <div className='res-text shimmer-time'></div>
                <div className='res-text shimmer-status'></div>
            </div>
        );
    }

    return (
        <div className="body">
            <div className='container'>
                <div className='filter'>
                    <button className='filter-btn top-btn' onClick={() => filterHandler("TopRestaurants")}>
                        Top Rated Restaurants
                    </button>
                    <button className='filter-btn low-btn' onClick={() => filterHandler("LowRestaurants")}>
                        Low Rated Restaurants
                    </button>
                    <button className='filter-btn clear-btn' onClick={() => clearFilterHandler()}>
                        ClearFilter
                    </button>
                    <p>Total Data: 0 </p>
                </div>
                <div className='res-cards-container'>
                    {shimmerCards}
                </div>
            </div>
        </div>
    )
}

export default Shimmer;
