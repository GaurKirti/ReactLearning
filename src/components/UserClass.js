import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userinfo:{
                name:"dummy",
                location:"dummy",
            },
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/kirtigaur");
        const dataJson = data.json();
        console.log(dataJson);
        this.setState({
            userinfo:dataJson,
        });
    }
    render() {
        const {name,location,email_id,html_url} = this.state.userinfo;
        const {count} = this.state;
        return(
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count:this.state.count+1,
                    });
                }}>
                    Count Increase</button>
                <h2> Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>email Id: {email_id}</h3>
                <h3>html_url: {html_url}</h3>
            </div>
        );
    }
}

export default UserClass;