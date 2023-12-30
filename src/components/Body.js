import RestroCard from "./RestroCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    return(
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
                    (<RestroCard key={restaurant.info.id} resData={restaurant}/>))
            }
        </div>
    </div>
    );
};

export default Body;
