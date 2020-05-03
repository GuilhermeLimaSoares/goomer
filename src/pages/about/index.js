import React, { Component } from "react"
import Header from "../../components/header";
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    render() {
        return (<div className="about">
            <Header/>
            <h2>About</h2>
        </div>)
    }
}

export default Home;