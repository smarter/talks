import { useEffect, useState } from 'react';
import rr from "railroad-diagrams";

export function Railroad(props) {
  useEffect(() => {
    let d = document.getElementById("railroad");
    props.diagram.addTo(d);
    let svgStyle = d.getElementsByTagName("svg")[0].style;
    svgStyle.width = "100%";
    svgStyle.height = "100%";
  }, []);

  return (
    <div id="railroad" />
  );
}
