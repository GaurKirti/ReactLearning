import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
    const {resData} = props;

    const {
        name,
        cloudinaryImageId,
        cuisines,
        deliveryTime,
        avgRating,
        costForTwo
    } = resData?.info
    return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img src={CDN_URL + cloudinaryImageId} className="res-logo"></img>
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating}</h3>
        <h3>{deliveryTime}</h3>
        <h3>{costForTwo}</h3>
    </div>
    );
};

export default RestroCard;