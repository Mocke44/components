import React from 'react';
import PropTypes from 'prop-types';

export class HelloPlanet extends React.Component{
    render(){
        console.log(this.props);
        var component1 =(
            <div>
            <h2>Hey, you are on {this.props.myObj.myPlanet}</h2>
            <h3>this is planet number : {this.props.myObj.planetNumber}</h3>
            <br></br>
            </div>
        );
        return component1
    }
}


HelloPlanet.defaultProps = {
    myObj :{
        myPlanet :'earth',
        planetNumber: 3
    }
};

HelloPlanet.propTypes ={
    myObj :{
        myPlanet : PropTypes.string,
        planetNumber : PropTypes.number
    }
};