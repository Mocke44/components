import React from 'react';
import ReactDOM from 'react-dom';

import {HelloPlanet} from './libraryComponents/HelloPlanet';

let myObj1 = {
    myPlanet : "Earth",
    planetNumber : 3
};

let myObj2 = {
    myPlanet : "Neptune",
    planetNumber : 5
};

let myObj3 = {
    myPlanet : "Jupiter",
    planetNumber : 6
};


ReactDOM.render(
    <div>
        <HelloPlanet myObj = {myObj1}></HelloPlanet>
        <HelloPlanet myObj = {myObj2}></HelloPlanet>
        <HelloPlanet myObj = {myObj3}></HelloPlanet>
        <HelloPlanet></HelloPlanet>
        
    </div>,
    document.getElementById('displayDiv')
);