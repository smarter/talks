import { createRef, useEffect, useState } from 'react';
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
  }, []);

  return (
    <div ref={mainDiv}  />
  );
}
