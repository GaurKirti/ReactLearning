const User = (props) => {
    const {name,location,email_id} = props;
    return(
        <div>
            <h2> Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>email Id: {email_id}</h3>
        </div>
    );
}

export default User;