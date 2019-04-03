import React, { Component } from 'react';
import './App.css';
import ViewCollector from './ViewCollector';

class Collector extends Component {
    render() {
        const collectorArray = this.props.people.map((person) =>{
           return (
               <ViewCollector key={person.id} person={person}/>
               //we iterate the Data file via the module by creating an array , then for each element in the array, we
               //create another component named 'ViewCollector' that will contain all the information in the array (so we return a component
               // that show us what we want to see in the screen...)
           )
        });
        return (
            <div className="App">
                {collectorArray}
            </div>
        );
    }
}

export default Collector;
