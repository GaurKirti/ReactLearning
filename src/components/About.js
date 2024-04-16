import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About us</h1>
            <h2>This is about us page</h2>
            <UserClass name={"Kirti Gaur"} location={"Hyderabad"} email_id={"kirtigaur11@gmail.com"}/>
        </div>
    );
}

export default About;