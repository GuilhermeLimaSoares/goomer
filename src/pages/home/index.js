import React, { Component } from "react"
import Header from "../../components/header";
import ItemRestaurant from './../../components/item-restaurant/';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    render() {
        return (<div className="home">
            <Header/>
            <h2>Home</h2>
            <ItemRestaurant/>
        </div>)
    }
}

export default Home;