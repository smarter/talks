import React from 'react';
import { createRef, useEffect } from 'react';
import rr from "railroad-diagrams";

export function Red(elem) {
  let node = rr.Terminal(elem);
  node.attrs['class'] += " red"
  return node;
}

export function Railroad(props) {
  let mainDiv = createRef();
  
  useEffect(() => {
    let d = mainDiv.current;
    props.diagram.addTo(d);
    let svgStyle = d.getElementsByTagName("svg")[0].style;
    svgStyle.width = props.width || "100%";
    svgStyle.height = props.height || "100%";
  }, [mainDiv, props.diagram, props.height, props.width]);

  return (
    <div ref={mainDiv}  />
  );
}
