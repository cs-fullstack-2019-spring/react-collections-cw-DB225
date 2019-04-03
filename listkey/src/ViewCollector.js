import React, { Component } from 'react';

class ViewCollector extends Component{
    render(){
        return(
            <div>
                <p>{this.props.person.id}</p>
                <p>{this.props.person.name}</p>
                <p>{this.props.person.username}</p>
                <p>{this.props.person.email}</p>
                <p>{this.props.person.address.street}</p>
                <p>{this.props.person.address.suite}</p>
                <p>{this.props.person.address.city}</p>
                <p>{this.props.person.address.zipcode}</p>
                <p>{this.props.person.address.geo.lat}</p>
                <p>{this.props.person.address.geo.lng}</p>
                <p>{this.props.person.phone}</p>
                <p>{this.props.person.website}</p>
                <p>{this.props.person.company.name}</p>
                <p>{this.props.person.company.catchPhrase}</p>
                <p>{this.props.person.company.bs}</p>
                <hr/>
            </div>
        ); // Here we return which informations from the array we want to see
    }
}

export default ViewCollector;


