import React, { Component } from "react"
import Header from "../../components/header";
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
        </div>)
    }
}

export default Home;