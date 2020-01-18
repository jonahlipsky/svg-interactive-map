import React from 'react';
import mapSvg from '../res_a_bsmnt.svg';
import * as d3 from "d3";

class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidLoad(){
    // d3.selectAll("polygon").on("mouseover", function(d){
      // d3.select(this).style("background", "red");
    // });
    d3.selectAll("polygon").style("background", "red");
  }

  render(){
    return(
      <img id="main-map-image" src={mapSvg} alt="map-svg"/>
    )
  }
}

export default Map;