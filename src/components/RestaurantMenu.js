import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
const {resInfo, setResInfo} = useState(null);
const {resId} = useParams();

useEffect(() => {
    fetchMenu()
},[]);

const fetchMenu = async () => {
    const data = fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4690523&lng=78.3690677&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
    const json = (await data).json();
    setResInfo(json);
}

if(resInfo == null) <Shimmer />

const {name, cuisine, costForTwo} = resInfo.cards[0].card.card.info;
const {itemCard} = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2];

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisine}</h2>
            <h3>Menu</h3>
                <ul>
                    {itemCard.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {"Rs."}
                            {item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </li>
                    ))}
                </ul>
        </div>
    );
}

export default RestaurantMenu;