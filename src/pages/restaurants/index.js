import React, { Component } from "react";
import Header from "../../components/header";
class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    render() {
        return (<div className="restaurants">
            <Header/>
            <h2>Restaurants</h2>
        </div>)
    }
}

export default Restaurants;