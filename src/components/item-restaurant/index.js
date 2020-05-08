import React, {Component}  from 'react';
import './item-restaurant.css';

class ItemRestaurant extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            title : 'Costela do Gaúcho',
            subtitle : 'Av. Interlagos, 4001',
            image : './../../assets/vegan-restaurant-logo-design_1438-10.png',
        };
    }
    
    render(){
        return(
            <div className="item-restaurant">
                <div className="item-restaurant__image"><img src={this.state.image}/></div>
                <div className="item-restaurant__title"><h1>{this.state.title}</h1></div>
                <div className="item-restaurant__subtitle"><h2>{this.state.subtitle}</h2></div>
            </div>
        );
    }

}

export default ItemRestaurant;