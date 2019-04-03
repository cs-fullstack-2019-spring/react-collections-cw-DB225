import React, { Component } from 'react';
import './App.css';
import Collector from "./Collector";

class DataReader extends Component {
    render() {
        const collectorData = require('./rawData'); //we create the module , here we linked the module to our data file 'rawData'

        return (
            <div className="App">
                <h1>List</h1>
                <Collector people={collectorData}/>
            </div>//then we link the module to a component named "Collector" that allow us to iterate the rawData file by module
        );
    }
}

export default DataReader;
