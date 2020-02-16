import React from 'react';
import * as d3 from "d3";
import Pointer from './pointer';
import MapSvg from './map_svg';

class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hover: false,
      hoverItem: ""
    };
  }

  componentDidMount(){
    let context = this

    d3.selectAll(".cls-1").on("mouseenter", function(d, i){
      context.toggleHover(this)
    })
    d3.selectAll(".cls-1").on("mouseleave", function(){
      context.toggleHover(this)
    })
    d3.selectAll(".cls-1").on("click", function(){
      context.toggleSelection(this)
    })
  }

  toggleHover(context){
    if(context.classList.contains("hover")){
      context.classList.remove("hover")
      this.setState({hover: false})
    } else {
      context.classList.add("hover")
      this.setState({hover: true, hoverItem: context.id})
    }
  }

  toggleSelection(context){
    if (context.classList.contains("selected")){
      context.classList.remove("selected")
    } else {
      context.classList.add("selected")
    }
  }

  render(){
    return(
      <>
        <MapSvg/>
        <Pointer hover={this.state.hover} hoverItem={this.state.hoverItem}/>
      </>
    )
  }
}

export default Map;