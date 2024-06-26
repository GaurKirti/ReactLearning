import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

//import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []

    );

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4690523&lng=78.3690677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json;
        setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return listOfRestaurant.length == 0 ? (
    <Shimmer />
    ) : (
    <div className="body">
        <div className="filter">
            <button 
                className="filter-btn" 
                onClick={() => {
                const filteredList = listOfRestaurant.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestaurant(filteredList);
            }}
            >
                Top Rated Restaurants
            </button>
        </div>
        <div className="restaurantContainer">
            {
                listOfRestaurant.map(restaurant => 
                    (<Link key={restaurant.info.id} to={"/restaurants/"+restaurant.data.id}><RestroCard resData={restaurant}/></Link>))
            }
        </div>
    </div>
    );
};

export default Body;
